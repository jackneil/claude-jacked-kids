// ===========================================================================
//  dev-server.js  —  zero-dependency live-reload server for building with the kid.
//
//  Run it while you build:   node dev-server.js
//  Then open the printed http://localhost:PORT in a browser. Every time you
//  edit a file, the open tab reloads itself automatically — no refresh button.
//
//  This is BUILD-TIME ONLY. To just play offline, double-click index.html;
//  the dev-server is not needed and is never deployed. Needs only Node (which
//  is already installed — Claude Code runs on it). No npm install.
// ===========================================================================
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = parseInt(process.argv[2], 10) || 8123;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".gif": "image/gif", ".svg": "image/svg+xml", ".webp": "image/webp",
  ".mp3": "audio/mpeg", ".wav": "audio/wav", ".ogg": "audio/ogg",
  ".woff": "font/woff", ".woff2": "font/woff2", ".ico": "image/x-icon"
};

// Snippet injected into every HTML page: reconnect-friendly live reload via SSE.
const RELOAD_SNIPPET =
  "\n<script>(function(){try{var es=new EventSource('/__livereload');" +
  "es.onmessage=function(e){if(e.data==='reload')location.reload();};" +
  "es.onerror=function(){es.close();setTimeout(function(){location.reload();},1000);};}catch(e){}})();</script>\n";

const clients = [];

const server = http.createServer(function (req, res) {
  // Live-reload event stream
  if (req.url === "/__livereload") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive"
    });
    res.write("retry: 1000\n\n");
    clients.push(res);
    req.on("close", function () {
      const i = clients.indexOf(res);
      if (i !== -1) clients.splice(i, 1);
    });
    return;
  }

  // Resolve the requested path safely inside ROOT
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.normalize(path.join(ROOT, urlPath));
  if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) { res.writeHead(403); res.end("Forbidden"); return; }

  fs.stat(filePath, function (err, stat) {
    let target = filePath;
    if (!err && stat.isDirectory()) target = path.join(filePath, "index.html");
    fs.readFile(target, function (err2, data) {
      if (err2) {
        // escape the path before echoing it back (no reflected XSS)
        var safe = String(urlPath).replace(/[&<>"']/g, function (c) {
          return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>404</h1><p>Not found: " + safe + "</p>"); return;
      }
      const ext = path.extname(target).toLowerCase();
      const type = MIME[ext] || "application/octet-stream";
      if (ext === ".html") {
        let html = data.toString("utf8");
        html = html.includes("</body>")
          ? html.replace("</body>", RELOAD_SNIPPET + "</body>")
          : html + RELOAD_SNIPPET;
        res.writeHead(200, { "Content-Type": type }); res.end(html);
      } else {
        res.writeHead(200, { "Content-Type": type }); res.end(data);
      }
    });
  });
});

// Watch the whole arcade; reload on any change (debounced).
let timer = null;
try {
  fs.watch(ROOT, { recursive: true }, function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      clients.forEach(function (res) { try { res.write("data: reload\n\n"); } catch (e) {} });
    }, 120);
  });
} catch (e) {
  console.log("(file watching unavailable on this system — reload the tab manually after edits)");
}

server.listen(PORT, function () {
  console.log("\n  🎮 Arcade play-server running!");
  console.log("  Open this in a browser:  http://localhost:" + PORT + "\n");
  console.log("  Edits auto-refresh the open tab. Press Ctrl+C to stop.\n");
});
