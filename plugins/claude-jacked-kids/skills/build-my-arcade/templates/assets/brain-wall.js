// ===========================================================================
//  brain-wall.js  —  the kid's Brain Wall, shown on the hub.
//  The about-me skill REWRITES this file from the Player Card whenever the kid
//  learns something, so the hub can show it offline (it never reads the private
//  player-card.json directly).
//
//  PRIVATE: this has the kid's first name — it is gitignored and NEVER deployed.
//  While null, the hub simply hides the Brain Power panel.
//
//  Filled-in shape:
//  window.BRAIN_WALL = {
//    firstName: "Sam",
//    points: 130,
//    rank: "🛠️ Brain Builder",
//    stickers: [ { kidName: "memory box", emoji: "📦", note: "keeps your game's stuff safe!" } ]
//  };
// ===========================================================================
window.BRAIN_WALL = null;
