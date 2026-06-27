// ===========================================================================
//  scores.js  —  tiny offline high-score helper (uses localStorage).
//  Works straight from a file, no internet. For richer saves (slots,
//  inventories, world state) a game can use IndexedDB instead.
//      window.ArcadeScores.getHigh("my-game")        -> number
//      window.ArcadeScores.setHigh("my-game", 1200)  -> true if it's a new best
// ===========================================================================
window.ArcadeScores = {
  _key: function (id) { return "arcade:highscore:" + id; },

  getHigh: function (id) {
    try { return parseInt(localStorage.getItem(this._key(id)), 10) || 0; }
    catch (e) { return 0; }
  },

  setHigh: function (id, score) {
    try {
      if (score > this.getHigh(id)) {
        localStorage.setItem(this._key(id), String(Math.floor(score)));
        return true;            // new high score!
      }
    } catch (e) { /* storage blocked — game still plays, just won't remember */ }
    return false;
  }
};
