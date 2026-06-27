// ===========================================================================
//  server.js  —  minimal zero-dependency static server for DEPLOYING the arcade
//  (e.g. to Railway). Serves files only: NO live-reload, NO file watching —
//  that's dev-server.js, which is build-time only. Reads PORT from the env.
//
//  Before deploying, run the deploy scrub: never ship .jacked-kids/, and
//  overwrite assets/brain-wall.js with its null stub (it carries the first name).
// ===========================================================================
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = parseInt(process.env.PORT, 10) || 8080;

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

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

const server = http.createServer(function (req, res) {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.normalize(path.join(ROOT, urlPath));
  // keep every request inside ROOT — the path.sep check stops sibling-dir escape
  if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
    res.writeHead(403); res.end("Forbidden"); return;
  }
  fs.stat(filePath, function (err, stat) {
    let target = filePath;
    if (!err && stat.isDirectory()) target = path.join(target, "index.html");
    fs.readFile(target, function (err2, data) {
      if (err2) {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>404</h1><p>Not found: " + escapeHtml(urlPath) + "</p>"); return;
      }
      const type = MIME[path.extname(target).toLowerCase()] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": type }); res.end(data);
    });
  });
});

server.listen(PORT, function () {
  console.log("Arcade serving on port " + PORT);
});
