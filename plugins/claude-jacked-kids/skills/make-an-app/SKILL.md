---
name: make-an-app
description: Build a kid one app, tool, or toy — anything that isn't a game — from their plain-words idea. Use when a kid says "make me an app that…", "build a thing that…", "I want a tracker / countdown / chore chart / quiz / picker / drawing thing / clock / list", or describes any non-game creation. Generic — build WHATEVER they ask for, save its data with a simple local store, and teach a concept at the seam. The app peer of make-a-game; both build self-contained islands on the kid's creations hub.
---

# Make an App — build the kid whatever they dream up (that isn't a game)

A kid says *"make an app that counts down to the new dinosaur movie,"* *"a chore chart for me and my brother,"* *"a quiz for my spelling words,"* *"a thing that picks who goes first,"* *"a drawing toy,"* *"a tracker for my reading minutes."* You build the **whole thing** — a complete, self-contained **app island** on their hub — show it to them, and cheer them on.

This skill is **generic on purpose.** There is no fixed menu of apps. Build whatever the kid asks for. The examples above show the *range*, not a list to pick from.

## make-an-app vs make-a-game

- It's a **game** (score, win/lose, you play it for fun) → use [[make-a-game]].
- It's **anything else** (it tracks, counts, lists, picks, draws, shows, reminds, quizzes) → it's an **app**, use this skill.
- Genuinely unsure? Ask one warm either/or: *"Is this more of a game you play, or a helper that does a job for you?"* Either way you build something great — the only difference is which folder and manifest it lands in.

## Before you build: is there a hub yet?

Apps live on the kid's creations hub (their "arcade"). 
- **No hub yet** (empty folder, first creation) → run [[build-my-arcade]] first; it lays down the structure (including `apps/`, `apps-manifest.js`, `store.js`) and writes the project `CLAUDE.md`, then builds this first app inline.
- **Hub exists but predates apps** (a games-only arcade) → run the **idempotent retrofit** in [[reference/arcade-conventions]] (adds `store.js`, an empty `apps-manifest.js`, `apps/`, ensures the hub renders the apps zone) — then build the app.
- **Hub already has apps** → just add this one.

## The build flow (every time)

1. **Get excited** with them.
2. **Ask 1–3 simple either/or questions** to shape it — never open-ended tech questions. *"Should the countdown show just the days left, or the hours and minutes too?"* / *"Should the chore chart be just for you, or for you and your brother?"* One question at a time.
3. **Build the whole app island** — complete, tested, kid-friendly, and **delightful** (cheerful colors, big friendly buttons, a little celebration when something good happens). No half-finished apps.
4. **Wire its data** with [[reference/arcade-conventions]]'s `window.AppStore` so it remembers things between visits (see "Saving an app's data" below).
5. **Add it to `apps-manifest.js`** (`window.APPS`) so the hub shows it — this is the load-bearing step; the app won't appear on the hub without it.
6. **Test it yourself**, then **show them automatically** — open it on their screen and bring it to the front (use [[play-it]] if available).
7. **Celebrate**, then offer the next step: change it, make another, or (with a grown-up) put it online.

## The app island shape

Copy `templates/apps/sample-list/` from [[build-my-arcade]] and customize. Each app is self-contained in `apps/<id>/`:

```
apps/<id>/
  index.html     # the app page — includes ../../arcade.config.js, ../../assets/store.js, metadata.js, app.js
  app.js         # the app's logic
  metadata.js    # window.APP_META = { id, name, emoji, description, madeByKid:true }
```

- Classic `<script src>` in order: `arcade.config.js` → `store.js` → `metadata.js` → `app.js`. A "⬅️ Home" link back to `../../index.html`.
- Keep `id`/`name`/`emoji` identical between `metadata.js` and the `apps-manifest.js` entry. Set `madeByKid: true` for anything the kid dreamed up.
- Full shapes (manifest entry, AppStore, the two-zone hub) are in [[reference/arcade-conventions]] — read it before building.

## Offline-first (same rules as games)

The app must open by double-clicking `index.html` with **no server and no internet**:
- Load data with `<script src>` that sets a global, **never** `fetch()` of a local file. Classic scripts, no ES modules for the core. Navigate with plain `<a href>`.
- Persistence is `localStorage` (via `AppStore`) or `IndexedDB` — never a file the app writes.
- If the app genuinely needs `fetch`, modules, or loaded media, run it through the `dev-server.js` (or `python3 -m http.server`) — still fully offline, just localhost — and note in the app that it "needs the play-server."

How powerful can an app be? As powerful as the web: real `<canvas>` for a drawing toy, the Web Audio API for sounds, `<input>`/`<form>` for typing, `Date` for countdowns and clocks, `IndexedDB` for a big local database. Build big.

## Saving an app's data

Most apps remember something — a list, a saved date, a tally, a setting. Use the data box:

```js
var data = window.AppStore.load(APP_META.id, fallback);   // fallback if nothing saved yet
window.AppStore.save(APP_META.id, data);                  // returns false if storage is blocked
window.AppStore.clear(APP_META.id);
```

`data` can be a number, string, array, or object (it's JSON-serialized). For a richer app (many records, big saves) use `IndexedDB` (DB name `app:<appId>`).

**Always handle a failed save honestly** — never silently drop the kid's data. If `save()` returns false (e.g. Safari on `file://`), show a gentle visible note ("⚠️ couldn't save here — ask a grown-up to open this with the play-server so it remembers") rather than pretending it worked. The sample app does exactly this; copy that pattern.

## Pulling in outside data (be honest — no magic)

If a kid wants real-world info in their app ("show today's weather," "my team's score"), there is **no special stats machinery and no auto-pull.** Be straight with them:
- The simplest, always-works path is **the kid types their own info in** (their stats, their chores, their countdown date) and the app makes it look awesome and remembers it. Default to this.
- Fetching live data needs an internet connection and the **play-server** (not plain `file://`), and is a **grown-up-helped, case-by-case** thing — only from a source the grown-up is fine with. Figure it out generically in the moment; don't promise a feature you can't reliably deliver offline.

## Teach at the seam (Brain Boost)

Run [[teach-and-check]] exactly as it says — it works for apps the same as games:
- The **first creation in a conversation gets NO check** — let the kid just watch their app appear.
- At the **seam** (when they ask for the *next* new thing that introduces a genuinely-new concept), run one Brain Boost before building it. App concepts live in [[concept-cards]] too: `input` (type-in box), `button` (tappy button), `update` (live update), plus the shared ones (`save`, `list`, `variable`, `timer`, `if-then`…). If a concept isn't in the catalog, improvise a card in the same shape and add it for next time.
- Never gate, never block. The app is built and usable before any check exists.

## Safety & privacy (the floor — never break it)

- **Content stays kid-safe.** Same cartoony, age-right rule as games.
- **First name is the most identifying thing that may ever appear** — never a last name, address, school, phone, email, or photos, in anything stored or shown.
- **Apps that hold personal info stay local.** A tracker, journal, or chore chart keeps its data in `localStorage` on the kid's own machine by construction (`AppStore` never writes a committed file and nothing deploys it). If an app genuinely must persist a *file*, write it under the gitignored `.jacked-kids/` — never a committed path.
- **Publishing is a grown-up step** (under-13). Before anything goes online, [[put-it-online]] scrubs identifying info and excludes private data. Default to running locally.

## How this fits the other skills

- [[build-my-arcade]] — lays down the hub + `apps/` structure this skill fills in.
- [[make-a-game]] — the game peer of this skill.
- [[change-it]] — edit/fix/remix an app later; [[oops-go-back]] — undo the last change.
- [[play-it]] — open the app on their screen; [[my-creations]] — show everything they've made.
- [[teach-and-check]] / [[about-me]] — the learn-as-you-build gate + the Player Card.
- [[put-it-online]] — the grown-up-gated publish with the identity scrub.
