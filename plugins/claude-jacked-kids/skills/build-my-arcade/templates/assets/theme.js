// ===========================================================================
//  theme.js  —  paint THIS page with the arcade's chosen colors.
//  An app island has no big canvas to recolor (a game does), so without this
//  the page would ignore the kid's theme and snap back to the defaults in
//  style.css. Include it in an app island AFTER arcade.config.js (so window.ARCADE
//  exists) and before the rest — putting it in <head> applies the colors before
//  the page paints, so there's no flash. The hub applies the same colors itself.
//  Offline-safe: plain script, no fetch, no internet.
// ===========================================================================
(function () {
  var theme = (window.ARCADE && window.ARCADE.theme) || {};
  var root = document.documentElement;
  ["bg", "card", "accent", "accent2", "text"].forEach(function (k) {
    if (theme[k]) root.style.setProperty("--" + k, theme[k]);
  });
})();
