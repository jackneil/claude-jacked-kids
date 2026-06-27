# Arcade Conventions — the exact shapes

Read this before building or changing an arcade. These are the conventions every game skill relies on. Starter versions of every file are in this skill's `templates/` — copy and customize rather than writing from memory.

## Offline-safe rules (never break these)

The arcade must open by double-clicking `index.html` with **no server and no internet**. So:

- **Load data with `<script src>`, never `fetch()`.** Browsers block `fetch()` of local files on `file://`. So the games list, branding, and Brain Wall are all **JS files that set a global** (`window.GAMES`, `window.ARCADE`, `window.BRAIN_WALL`), included with `<script>`.
- **Navigate with `<a href>`** to `games/<id>/index.html`. No client-side router.
- **No ES modules for the core** (`<script type="module">` is also `file://`-restricted by CORS). Use classic scripts. (A single self-contained game *may* use modules if it's only ever run via the dev-server, but the hub and the default games must be classic-script + `file://`-safe.)
- **Persistence is `localStorage` / `IndexedDB`**, never a file the game writes.
- **No build step, no `npm install`** for Tier 1. Engines are *vendored* files, not packages.

If a game genuinely needs `fetch`, modules, or loaded media that `file://` blocks, run it through `dev-server.js` (or `python3 -m http.server`) — still fully offline, just localhost. Note in the game that it "needs the play-server."

## `arcade.config.js` — the one branding knob

```js
window.ARCADE = {
  name: "Sam's Game Zone",   // big title on the hub
  owner: "Sam",              // FIRST NAME ONLY — for a friendly greeting; LOCAL only, scrub before deploy
  emoji: "🚀",
  tagline: "Games I made!",
  theme: { bg:"#0e1020", card:"#1b1e3a", accent:"#ff5db1", accent2:"#3df0e0", text:"#f3f3ff" }
};
```

Changing this rebrands the whole hub. `owner` is personalization — see "Deploy scrub" below.

## `assets/games-manifest.js` — the game list

```js
window.GAMES = [
  { id:"my-game", name:"My Game", emoji:"⭐", category:"arcade",
    description:"What my game does!", madeByKid:true, path:"games/my-game/index.html" }
];
```

- `category` must be one of the fixed set below.
- `madeByKid: true` marks games the kid dreamed up (the `my-creations` view greps for this).
- Adding a game = append one entry here **and** create `games/<id>/` (below). Keep `id`, `name`, `emoji`, `category` identical between the manifest entry and the game's own `metadata.js`.
- **The hub lists games from `games-manifest.js` ONLY.** `metadata.js` is for the game page itself (it supplies the high-score `id`); nothing reads it for the hub. A game **won't appear** on the hub if it's missing from the manifest — even if its folder and `metadata.js` are perfect. The manifest append is the load-bearing step; don't skip it.

### Categories (fixed set)

`arcade`, `racing`, `action`, `puzzle`, `board`, `retro`, `maker`. Each renders as its own section on the hub with a friendly label + emoji (defined in the hub template). `maker` is for build-y/creative "apps" (drawing, music) rather than score games. Don't invent new categories without adding them to the hub render.

## A game "island" — `games/<id>/`

Each game is **self-contained** (copy `templates/games/sample-catcher/`):

```
games/<id>/
  index.html     # the game page — includes ../../arcade.config.js, ../../assets/scores.js, game.js
  game.js        # the game logic
  metadata.js    # window.GAME_META = { id, name, emoji, category, description, madeByKid }
```

- `index.html` is a complete page: a `<canvas>` (or DOM), the score/high-score UI, a "back to arcade" link to `../../index.html`, and `<script src>` includes (classic, in order: arcade.config.js → scores.js → game.js, plus `../../vendor/<engine>.js` first if the game uses one).
- `game.js` reads high score via `window.ArcadeScores.getHigh(GAME_META.id)` and saves with `setHigh`.
- Keep each game's code inside its own folder. The only shared files a game touches are `assets/scores.js`, `arcade.config.js`, and (if used) a `vendor/` engine — never another game's code.

## `assets/scores.js` — local high scores

`window.ArcadeScores.getHigh(id)` / `setHigh(id, score)` over `localStorage` (offline-safe). For richer per-game saves (slots, inventories, world state), use **IndexedDB** inside the game (a real local database) — keep its DB name `arcade:<gameId>`.

## `assets/brain-wall.js` — the Brain Wall panel (written by about-me)

The hub shows the kid's Brain Wall + rank + Brain Points by reading `window.BRAIN_WALL`. The [[about-me]] skill writes this file from the Player Card so the hub works offline (it never `fetch`es `.jacked-kids/player-card.json`). Shape:

```js
window.BRAIN_WALL = { firstName:"Sam", points:130, rank:"🛠️ Brain Builder",
  stickers:[ { kidName:"memory box", emoji:"📦", note:"keeps your game's stuff safe!" } ] };
```

It's `null` until the kid has learned something. **It is personalization (has the first name) — gitignored and never deployed.** If `window.BRAIN_WALL` is null/absent, the hub just hides the panel.

## `dev-server.js` — the live building loop

A zero-dependency Node server (copy from `templates/`). Run it in the background while building with the kid: `node dev-server.js` → open the printed `http://localhost:PORT`. It serves the arcade and **auto-reloads the open tab whenever you edit a file** (via Server-Sent Events; it injects a tiny reload snippet into served HTML). It is **build-time only** — never deployed, and not needed to just play (double-click `index.html`). Node is already present (Claude Code runs on it).

For **deploying** the arcade (Tier 2), use the separate **`server.js`** (also in `templates/`) — a plain static server that reads `PORT` from the env, with **no** live-reload. Never deploy `dev-server.js`.

## The `.gitignore` (create with the arcade)

Must include at least:
```
.jacked-kids/
assets/brain-wall.js
.DS_Store
node_modules/
```
`.jacked-kids/` (the Player Card + grown-up page) and `brain-wall.js` (first-name personalization) must **never** be committed or deployed.

## Deploy scrub (Tier 2)

Before any deploy/publish, produce the served copy WITHOUT `.jacked-kids/` and `dev-server.js`; **overwrite `assets/brain-wall.js` with its null stub (`window.BRAIN_WALL = null;`) rather than deleting it** — deleting leaves the hub's `<script src="assets/brain-wall.js">` 404ing; and set `arcade.config.js` `owner` to a generic value (or drop the greeting). Serve with `server.js` (never `dev-server.js`). A first name is the most that may ever appear publicly, and prefer none. Use the [[put-it-online]] skill's scrub if available — **and note `put-it-online` / `deploy-to-railway` may not be built yet, so until then do this scrub by hand and check `git status` before any push.**

---

## Tier 3 — clone & adapt Hank's Hits (grown-up opt-in only)

When a grown-up wants logins + cloud leaderboards + cross-device save, don't rebuild it — adapt `github.com/jackneil/hanks-hits` (Next.js + Postgres + NextAuth). Checklist:

1. **Secrets — do this first, and beware git history.** A normal `git clone` brings the source's **entire history**, and a committed secret stays in history *even if you delete the file* — Hank's Hits has historically leaked a Postgres password in `.claude/settings.local.json`, so a clone-and-repoint-origin would push that secret straight into the family's new repo. **So do NOT clone-and-repoint. Start from a CLEAN tree with no source history:** e.g. `git clone --depth 1 <src> tmp && rm -rf tmp/.git`, then move the files into a fresh `git init`. Then **scan the working tree for ALL secrets** — `.claude/settings.local.json`, any committed `.env` / `.env.local` / `.env.production`, and any hardcoded `DATABASE_URL` / `NEXTAUTH_SECRET` / OAuth client secret — remove them, and treat **every** inherited credential as compromised: the family sets and rotates their own fresh values, never reusing one from the source. (Source-specific paths named in the steps below reflect the layout at the time of writing — verify them against the source's current structure.)
2. **Rename the DB package** `@hank-neil/db` → the family's scope (it's imported across the app; this is the most invasive rename). Root `package.json` `name` too.
3. **Branding:** set `apps/web/src/config/site.json` (`siteName`, `ownerName`, `tagline`, `emoji`) — that one file rebrands the app + PWA manifest.
4. **Empty the starter games:** clear `VALID_APP_IDS` in `packages/db/src/schema/app-progress.ts` (and the matching progress schemas / extractors) so the new arcade starts fresh.
5. **Re-point** the GitHub repo + Railway project to the family's own; genericize the "Hank/age 9/trucks" persona text in README/ARCHITECTURE/CLAUDE.
6. **Deploy** with [[deploy-to-railway]]: a web service (the Docker image) + a Postgres service (`DATABASE_URL`), Google OAuth + email/password, the generic `app_progress` table for per-kid save, the leaderboard-extractor pattern for scores.
7. Keep the kid-safety rules: under-13 publishing stays grown-up-gated, leaderboards use auto-generated handles (never real names), Player Card stays local and out of git.

The reusable core worth keeping from the source: the self-contained game-module pattern, metadata-file discovery, the generic single-table `app_progress` design, and the `useAuthSync` local↔server merge. Everything else (which games exist, branding, repo/Railway identity) is per-family and must be parameterized.
