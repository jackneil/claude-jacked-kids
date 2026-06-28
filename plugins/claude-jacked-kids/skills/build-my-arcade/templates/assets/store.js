// ===========================================================================
//  store.js  —  tiny offline data box for APPS (uses localStorage).
//  The app peer of scores.js: where a kid's app keeps its stuff (a list,
//  a chore chart, a saved countdown date, a high-score-of-life…) so it's
//  still there next time. Works straight from a file, no internet, no server.
//
//      window.AppStore.load("my-app", fallback)   -> saved data, or fallback
//      window.AppStore.save("my-app", data)        -> true if it saved
//      window.AppStore.clear("my-app")             -> forget this app's data
//
//  `data` can be anything JSON-friendly: a number, a string, an array, an
//  object. For a richer app (many records, big saves) a game/app may use
//  IndexedDB instead — but for most kid apps this is all you need.
//
//  PRIVACY: this is the kid's own machine only. App data lives in THIS
//  browser and never leaves the device — it is not committed and not
//  deployed. An app that holds personal info (a journal, a tracker) keeps
//  that info here, local, by construction.
// ===========================================================================
window.AppStore = {
  _key: function (appId) { return "appdata:" + appId; },

  // Load this app's saved data. Returns `fallback` (default null) if there's
  // nothing saved yet or storage is unavailable.
  load: function (appId, fallback) {
    if (fallback === undefined) fallback = null;
    try {
      var raw = localStorage.getItem(this._key(appId));
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      // storage blocked or corrupt value — the app still runs, just empty
      return fallback;
    }
  },

  // Save this app's data (overwrites the previous blob). Returns true on success.
  save: function (appId, data) {
    try {
      localStorage.setItem(this._key(appId), JSON.stringify(data));
      return true;
    } catch (e) {
      // storage full / blocked (e.g. Safari file://) — app keeps working in
      // memory; it just won't remember after a reload. Show a gentle note.
      return false;
    }
  },

  // Forget everything this app saved.
  clear: function (appId) {
    try { localStorage.removeItem(this._key(appId)); return true; }
    catch (e) { return false; }
  }
};
