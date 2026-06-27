// ===========================================================================
//  games-manifest.js  —  the list of games the hub shows.
//  Adding a game = add one entry here AND create games/<id>/ (see conventions).
//  category must be one of: arcade, racing, action, puzzle, board, retro, maker
//  Loaded as a plain <script> so it works offline from a file.
// ===========================================================================
window.GAMES = [
  {
    id: "sample-catcher",
    name: "Star Catcher",
    emoji: "⭐",
    category: "arcade",
    description: "Catch the falling stars in your basket!",
    madeByKid: false,                       // true for games the kid dreamed up
    path: "games/sample-catcher/index.html"
  }
];
