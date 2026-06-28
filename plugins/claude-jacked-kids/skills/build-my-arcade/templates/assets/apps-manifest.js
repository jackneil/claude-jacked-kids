// ===========================================================================
//  apps-manifest.js  —  the list of APPS & TOOLS the hub shows.
//  The peer of games-manifest.js. An "app" is any non-game creation: a
//  tracker, a countdown, a quiz, a chore chart, a drawing toy, a picker…
//
//  Adding an app = add one entry here AND create apps/<id>/ (see conventions).
//  Loaded as a plain <script> so it works offline straight from a file.
//
//  Shape of an entry:
//    { id, name, emoji, description, madeByKid, path }
//  Keep id/name/emoji identical to the app's own metadata.js (window.APP_META).
//  A new (empty) arcade can start with:  window.APPS = [];
// ===========================================================================
window.APPS = [
  {
    id: "sample-list",
    name: "My List",
    emoji: "📝",
    description: "Type things in and check them off — it remembers them!",
    madeByKid: false,                       // true for apps the kid dreamed up
    path: "apps/sample-list/index.html"
  }
];
