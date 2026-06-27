// ===========================================================================
//  Star Catcher — a complete little game in plain JavaScript (no engine).
//  Runs offline straight from a file. A good "island" to copy from:
//  it shows controls (mouse/touch/keyboard), a game loop, lives, and saving a
//  high score with window.ArcadeScores.
// ===========================================================================
(function () {
  var META = window.GAME_META || { id: "sample-catcher" };
  var theme = (window.ARCADE && window.ARCADE.theme) || {};
  var ACCENT = theme.accent || "#ff5db1";
  var ACCENT2 = theme.accent2 || "#3df0e0";
  var TEXT = theme.text || "#f3f3ff";

  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var W = canvas.width, H = canvas.height;

  var scoreEl = document.getElementById("score");
  var bestEl = document.getElementById("best");
  var livesEl = document.getElementById("lives");

  var best = window.ArcadeScores ? window.ArcadeScores.getHigh(META.id) : 0;
  bestEl.textContent = best;

  // --- game state ---
  var basket, stars, score, lives, spawnTimer, spawnEvery, fallSpeed, running, over;

  function reset() {
    basket = { x: W / 2, y: H - 60, w: 90, h: 26 };
    stars = [];
    score = 0;
    lives = 3;
    spawnTimer = 0;
    spawnEvery = 60;      // frames between stars (gets smaller = harder)
    fallSpeed = 2.4;      // pixels/frame (grows with score)
    running = true;
    over = false;
    updateHud();
  }

  function updateHud() {
    scoreEl.textContent = score;
    livesEl.textContent = lives > 0 ? "❤️".repeat(lives) : "💔";
  }

  // --- controls ---
  function setBasketFromClientX(clientX) {
    var rect = canvas.getBoundingClientRect();
    var x = (clientX - rect.left) * (W / rect.width);
    basket.x = Math.max(basket.w / 2, Math.min(W - basket.w / 2, x));
  }
  canvas.addEventListener("mousemove", function (e) { if (running) setBasketFromClientX(e.clientX); });
  canvas.addEventListener("touchmove", function (e) {
    if (running && e.touches[0]) { setBasketFromClientX(e.touches[0].clientX); e.preventDefault(); }
  }, { passive: false });
  var leftHeld = false, rightHeld = false;
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") leftHeld = true;
    if (e.key === "ArrowRight") rightHeld = true;
    if ((e.key === " " || e.key === "Enter") && over) { reset(); loop(); }
  });
  document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowLeft") leftHeld = false;
    if (e.key === "ArrowRight") rightHeld = false;
  });
  // tap/click to restart after game over
  canvas.addEventListener("click", function () { if (over) { reset(); loop(); } });

  // --- drawing helpers ---
  function drawStar(x, y, r) {
    ctx.save();
    ctx.font = (r * 2.2) + "px serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("⭐", x, y);
    ctx.restore();
  }
  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  // --- the game loop ---
  function loop() {
    if (!running) return;

    // keyboard movement
    if (leftHeld) basket.x = Math.max(basket.w / 2, basket.x - 7);
    if (rightHeld) basket.x = Math.min(W - basket.w / 2, basket.x + 7);

    // spawn stars
    spawnTimer++;
    if (spawnTimer >= spawnEvery) {
      spawnTimer = 0;
      stars.push({ x: 30 + Math.random() * (W - 60), y: -20, r: 16, vy: fallSpeed + Math.random() * 1.5 });
    }

    // move + check stars
    for (var i = stars.length - 1; i >= 0; i--) {
      var s = stars[i];
      s.y += s.vy;
      var caught = (s.y + s.r >= basket.y - basket.h / 2) &&
                   (s.y <= basket.y + basket.h / 2) &&
                   (Math.abs(s.x - basket.x) <= basket.w / 2 + s.r * 0.4);
      if (caught) {
        stars.splice(i, 1);
        score++;
        // gentle difficulty ramp
        fallSpeed = 2.4 + score * 0.08;
        if (score % 5 === 0 && spawnEvery > 24) spawnEvery -= 3;
        updateHud();
      } else if (s.y - s.r > H) {
        stars.splice(i, 1);
        lives--;
        updateHud();
        if (lives <= 0) { return gameOver(); }
      }
    }

    render();
    requestAnimationFrame(loop);
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    // stars
    for (var i = 0; i < stars.length; i++) drawStar(stars[i].x, stars[i].y, stars[i].r);
    // basket
    ctx.fillStyle = ACCENT;
    roundRect(basket.x - basket.w / 2, basket.y - basket.h / 2, basket.w, basket.h, 12);
    ctx.fill();
    ctx.fillStyle = ACCENT2;
    roundRect(basket.x - basket.w / 2, basket.y - basket.h / 2, basket.w, 8, 8);
    ctx.fill();
  }

  function gameOver() {
    running = false;
    over = true;
    var isNewBest = window.ArcadeScores ? window.ArcadeScores.setHigh(META.id, score) : false;
    if (isNewBest) { best = score; bestEl.textContent = best; }

    // overlay
    ctx.fillStyle = "rgba(0,0,0,0.55)";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = TEXT;
    ctx.textAlign = "center";
    ctx.font = "bold 44px sans-serif";
    ctx.fillText("Game Over", W / 2, H / 2 - 50);
    ctx.font = "bold 28px sans-serif";
    ctx.fillText("You caught " + score + " ⭐", W / 2, H / 2);
    if (isNewBest) {
      ctx.fillStyle = ACCENT2;
      ctx.font = "bold 24px sans-serif";
      ctx.fillText("🏆 New best score!", W / 2, H / 2 + 40);
    }
    ctx.fillStyle = TEXT;
    ctx.font = "20px sans-serif";
    ctx.fillText("Tap or press Space to play again", W / 2, H / 2 + 90);
  }

  // go!
  reset();
  loop();
})();
