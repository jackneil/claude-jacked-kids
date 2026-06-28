---
name: build-my-arcade
description: Build a kid their whole creations hub from scratch in an empty folder — a home page that lists their games AND their apps/tools, opens any of them with one click, and shows their Brain Wall, working offline by default. Use when a kid is starting out, is in an empty/new folder, or says "make me an arcade", "set up my games", "I want to make games", "I want to make an app", "build my own website", or asks for their first game OR app with nowhere to put it. Sets up the structure every other building skill (make-a-game, make-an-app, change-it, play-it, put-it-online) builds on, and writes the project's CLAUDE.md. Can later deploy to the web and grow into a full logins+leaderboards platform.
---

# Build My Arcade — the kid's creations platform, from scratch

When a kid is in an empty folder and wants to start making things, this is the recipe to build their whole **arcade** (their creations home): a friendly home page (the "hub") that shows their **games AND their apps & tools**, opens any of them with one click, and shows off their Brain Wall — and it works **offline**, right away, with no internet and nothing to install.

"Arcade" is just the affectionate name for the hub — it holds whatever the kid makes, a jumping-truck game or a movie countdown alike. You (the buddy) build all of it. The kid just talks to you.

## Three tiers — start tiny, grow only if they want to

| Tier | What it is | When |
|---|---|---|
| **1. My Arcade (default)** | An **offline-first static** arcade: plain web files that open in a browser with no internet, no install, no build step. Local high scores + the Brain Wall. | **Always start here.** Every kid gets this. |
| **2. On the Web** | The same arcade **deployed to Railway** so friends can play online. Still no accounts. | Only when a grown-up opts in (publishing is a grown-up step). |
| **3. The Big Arcade** | A full platform with **logins, cloud leaderboards, and cloud-save** across devices — by cloning & adapting the Hank's Hits framework. | Only when a grown-up wants it. Most kids never need this. |

**Default to Tier 1.** Don't build a backend, a database, or logins for a kid who just wants to make a jumping-truck game. Grow tiers only on a grown-up's say-so.

---

## Tier 1 — build the offline-first arcade

### The golden rule: it must work offline, opened from a file

A kid might be in a car, on a plane, or just offline. So:
- **No CDN, no internet, no `npm install`, no build step.** Everything the arcade needs is a local file.
- The hub and games **open straight from the file** (double-click `index.html`) — so use file-safe patterns: load data with classic `<script src="...">` (a JS file that sets a global), **never** `fetch()` of a local JSON (browsers block that on `file://`). Navigate with plain `<a href>` links. Use `localStorage` for scores (works offline).
- If a game ever genuinely needs `fetch`, modules, or loaded assets that the browser blocks on `file://`, tell the kid's grown-up the one-line way to run it locally: `python3 -m http.server` in the arcade folder, then open the printed address. Still 100% offline (just localhost) — no internet.
- For richer games (sprites, physics), you may **vendor** a 2D game engine (e.g. Kaboom/KAPLAY) by downloading its single JS file into `vendor/` **once** while online, then loading it with `<script src="../../vendor/kaboom.js">`. After that one download it works offline forever. The *default* sample game uses **no engine at all** (pure canvas), so the arcade is playable the instant it's built, even with zero internet.

### How powerful can the games be? (static is not a ceiling)

Plain web files are a real game platform, not a toy. Pick the tool to fit the game:
- **Simple 2D** (most kids' games): pure HTML `<canvas>`, no engine — instant, offline.
- **Richer 2D** (sprites, physics, lots of objects): vendor **Kaboom/KAPLAY** into `vendor/`.
- **3D worlds:** vendor **Three.js** into `vendor/` — real WebGL 3D, still no build step, still offline after the one-time download.

The only things you *can't* do in this static tier — the npm/React/TypeScript ecosystem, true multiplayer, and accounts — are exactly what **Tier 3** (the Hank's Hits clone) is for. So build big here; only graduate when a kid truly outgrows it.

### Saving progress (local, offline, no server)

Games keep their own progress with **no server and no internet**, using the browser's built-in storage:
- **`localStorage`** — simple key→value (high scores, settings). The `assets/scores.js` helper wraps this.
- **`IndexedDB`** — a genuine **local database** in the browser (structured records, big, transactional) for richer saves (save slots, inventories, world state). Reach for it when localStorage isn't enough.

This is the kid's real "memory box" — so a [[teach-and-check]] Brain Boost about a database is literally true here. Two layers, both offline: the **buddy writes files** (the game's code, the Player Card) to disk; the **game writes its own progress** to browser storage. **Honest limit:** browser storage lives in *that* browser on *that* device — switch devices/browsers or clear browsing data and it's gone. Save that *follows the kid everywhere and can't be lost* needs the cloud — the grown-up **Tier 3** upgrade. (Browsers can't write a SQLite *file* to disk; IndexedDB is the equivalent local DB and the right tool.)

### The live building loop (how it feels to make a game together)

While you build *with* the kid, run the zero-dependency **`dev-server.js`** (from `templates/`) in the background. It serves the arcade and **auto-reloads the open tab the instant you edit a file** — the kid says "make it jump higher," you edit `game.js`, and the game updates in front of them: **same tab, brought to the front, no refresh button, no new tabs.** When they're done and offline, they just double-click `index.html` — no server needed. Same files, both modes. (If browser-control tools are available you can also reload/focus the tab directly; the dev-server makes it automatic either way.)

### The structure you build

```
<arcade>/
  index.html              # the hub (opens offline) — shows games AND apps
  CLAUDE.md               # project file the buddy writes: tone + layout + which-skill-when + safety floor
  arcade.config.js        # the ONE branding knob (name, owner, emoji, theme colors)
  dev-server.js           # (build-time only) zero-dep live-reload server; NOT needed to just play
  assets/
    style.css             # the look
    games-manifest.js     # window.GAMES = [...]  — the list of games the hub shows
    apps-manifest.js      # window.APPS = [...]   — the list of apps/tools the hub shows
    scores.js             # window.ArcadeScores — localStorage high scores (use IndexedDB for richer saves)
    store.js              # window.AppStore — localStorage data box for apps (use IndexedDB for richer saves)
    theme.js              # paints an app island in the kid's chosen colors (apps have no canvas to recolor)
    brain-wall.js         # window.BRAIN_WALL = {...} — written by about-me; LOCAL ONLY
  vendor/                 # (optional) a vendored game engine for richer games
  games/
    <game-id>/            # a game island: index.html + game.js + metadata.js (window.GAME_META)
  apps/
    <app-id>/             # an app island: index.html + app.js + metadata.js (window.APP_META)
  .jacked-kids/           # the Player Card + grown-up page (from about-me) — PRIVATE, never deployed
  .gitignore
```

Copy the starter files from this skill's `templates/` folder and customize them — don't hand-write the hub from memory each time. The detailed shapes (both manifests, a game island, an app island, the hub, the score/data helpers, the categories, and the idempotent retrofit of an older games-only hub) are in [[reference/arcade-conventions]] — read it before you build. The lean project `CLAUDE.md` you write into the arcade is specified in [[reference/project-claude-md]].

### Build steps

1. **Get excited and learn who they are.** Use the [[about-me]] skill: warmly get their first name + age + a few interests, which creates the Player Card in `.jacked-kids/`. (Age sets how you talk and how tricky the learning checks are.)
2. **Name the arcade with them.** "What should we call your arcade? 'Sam's Game Zone'? 'Dino Land'?" Put the name, their first name, a favorite emoji, and a color they like into `arcade.config.js`. That one file rebrands the whole hub.
3. **Lay down the structure** from `templates/` — the hub, `arcade.config.js`, `assets/` (including `apps-manifest.js` and `store.js`), an empty `games/`, an empty `apps/`, the `.gitignore` (which **must** ignore `.jacked-kids/`). Then **write the project `CLAUDE.md`** per [[reference/project-claude-md]] (merge, never clobber). *(If the kid already has an older games-only arcade, run the idempotent retrofit in [[reference/arcade-conventions]] instead of laying down a fresh one.)*
4. **Build their first creation** — a game with the [[make-a-game]] flow, or an app/tool with the [[make-an-app]] flow, matching what they asked for (if those skills aren't available yet, build a complete self-contained island following [[reference/arcade-conventions]]). Add it to the matching manifest (`games-manifest.js` or `apps-manifest.js`) so the hub shows it. Teach a concept with a Brain Boost the way [[teach-and-check]] says (remember: the **first** creation in a conversation gets no check — let them just see it appear).
5. **Show them — automatically.** Open the hub in their browser and bring it to the front. Click into the new game/app so they SEE it work. (Use the [[play-it]] skill if available.)
6. **Celebrate**, then offer the next step: another game, make this one better, or (with a grown-up) put it online.

### Privacy (never break this)

- `.jacked-kids/` holds the Player Card and the grown-up page. It is **private to this computer**: add it to `.gitignore` the moment you create the arcade, and **never** include it in anything deployed or shared.
- `assets/brain-wall.js` (which [[about-me]] writes so the hub can show the wall offline) and any greeting that uses the kid's first name are **personalization** — local only. They must be **left out of / scrubbed from** anything that goes on the web (see Tier 2).
- First name is the most identifying thing that may ever appear; no last name, address, school, etc., anywhere.

---

## Tier 2 — put the arcade on the web (grown-up opt-in)

Only when a grown-up wants friends to be able to play online. Publishing is a grown-up step (under-13 needs a grown-up; 13+ can do it themselves).

- Use the [[deploy-to-railway]] skill. The arcade is **static**, so serve it with the tiny zero-dependency **`server.js`** in `templates/` (a plain static server that reads `PORT` from the env — *not* `dev-server.js`, which is build-time live-reload only) — no framework, no database for Tier 2.
- **Before anything is pushed:** scrub all personalization and private data — exclude `.jacked-kids/` entirely, **overwrite `assets/brain-wall.js` with its null stub** (`window.BRAIN_WALL = null;` — don't delete it, or the hub's `<script>` 404s), set `arcade.config.js` `owner` to a generic value, and scan for anything that could identify or locate the kid. A first name is the most that should ever appear, and even that, prefer not to.
- Set up auto-deploy on push if the grown-up wants it, exactly as [[deploy-to-railway]] describes.
- The games still run offline locally — deploying just adds an online copy.

---

## Tier 3 — the big arcade: logins, leaderboards, cloud-save (grown-up opt-in)

Only when a grown-up specifically wants accounts + online leaderboards + save-across-devices. This is a real platform, so don't reinvent it — **offer to clone and adapt the Hank's Hits framework** (`github.com/jackneil/hanks-hits`), which is exactly this: a Next.js + Postgres + logins + leaderboards arcade.

When a grown-up opts in, follow the **clone & adapt checklist** in [[reference/arcade-conventions]] (the "Tier 3" section). The headline points:
- **Never inherit secrets — and beware git history.** A clone carries the source's full history, so a committed secret (Hank's Hits has a real leaked Postgres password) survives even if you delete the file, and pushing to the family's repo would leak it. **Start from a clean tree (no source history)**, scan for ALL secrets (`.claude/settings.local.json`, committed `.env*`, hardcoded creds), and treat every inherited credential as compromised. See the conventions Tier-3 checklist for the exact steps.
- **Parameterize "Hank" out:** rename the DB package (`@hank-neil/db`), set the branding in `src/config/site.json`, empty the starter game list (`VALID_APP_IDS`), and re-point the GitHub repo + Railway project to the family's own.
- Deploy with [[deploy-to-railway]] (a web service + a Postgres service); logins via Google + email/password; per-kid data in the generic `app_progress` table.
- This is grown-up territory and a big step — say so plainly, keep it gated, and remember most kids are perfectly happy on Tier 1.

---

## How this fits the other skills

- [[about-me]] — creates/owns the Player Card in `.jacked-kids/` and writes `assets/brain-wall.js` so the hub shows the Brain Wall offline.
- [[teach-and-check]] — runs Brain Boost learning checks at the seams while you build games and apps here.
- **make-a-game / make-an-app / change-it / play-it / my-creations / put-it-online / oops-go-back** — all operate on the structure this skill establishes (games *and* apps). When they're available, use them; until then, follow [[reference/arcade-conventions]] to do the same work by hand.
