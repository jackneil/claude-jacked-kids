// ===========================================================================
//  arcade.config.js  —  the ONE place to brand this arcade.
//  Edit these values; the hub reads them. (Loaded as a plain <script>, so it
//  works offline straight from a file — no internet, no build step.)
// ===========================================================================
window.ARCADE = {
  name: "My Game Zone",        // the big title on the hub
  owner: "friend",             // FIRST NAME ONLY — used for a friendly hi; stays on this computer
  emoji: "🎮",                 // your arcade's emoji
  tagline: "Games I made!",    // little line under the title

  // Colors — any CSS color works. Change these to recolor the whole arcade.
  theme: {
    bg:      "#0e1020",        // page background
    card:    "#1b1e3a",        // game card background
    accent:  "#ff5db1",        // main highlight color
    accent2: "#3df0e0",        // second highlight color
    text:    "#f3f3ff"         // text color
  }
};
