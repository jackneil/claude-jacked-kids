---
name: make-a-game
description: Build a kid one complete game from their plain-words idea — a self-contained game island on their creations hub. Use when a kid says "make a game where…", "I want a game about…", or describes a game (jumping, dodging, catching, racing, a maze, foam-dart shooting, a quiz game). The game peer of make-an-app; both build self-contained islands. Wires local high scores, fires a Brain Boost at the seam, shows it on screen.
---

# Make a Game — build the kid the game they dreamed up

A kid says *"make a game where a monster truck jumps over school buses,"* *"a cat that catches falling fish,"* *"a rocket that dodges asteroids."* You build the **whole game** — a complete, self-contained **game island** on their hub — show it to them, and cheer them on.

## make-a-game vs make-an-app

- It's a **game** (you play it for fun; it has a score, win/lose, or a goal) → this skill.
- It's a tool/tracker/toy/helper → use [[make-an-app]].
- Unsure? One warm either/or: *"Is this a game you play, or a helper that does a job?"* Either way you build something great.

## Before you build: is there a hub yet?

- **No hub yet** (empty folder, first creation) → run [[build-my-arcade]] first; it lays down the structure and writes the project `CLAUDE.md`, then builds this first game inline.
- **Hub exists** → just add this game.

## The build flow (every time)

1. **Get excited** with them.
2. **Ask 1–3 simple either/or questions** to shape it — never open-ended tech questions. *"Should the truck jump over ramps, or smash through walls?"* One at a time.
3. **Build the whole game island** — complete, tested, kid-friendly, and **fun** (see "Make it FUN"). No half-games.
4. **Wire its high score** with `window.ArcadeScores.getHigh(GAME_META.id)` / `setHigh(...)` (richer saves → `IndexedDB`, DB name `arcade:<gameId>`).
5. **Add it to `games-manifest.js`** (`window.GAMES`, with a valid `category`) so the hub shows it — the load-bearing step; the game won't appear without it. Then **refresh the project `CLAUDE.md`** creations list per [[reference/project-claude-md]].
6. **Test it yourself**, then **show them automatically** — open it and bring it to the front (use [[play-it]]).
7. **Celebrate**, then offer the next step: change it, make another, or (with a grown-up) put it online.

## The game island shape

Copy `templates/games/sample-catcher/` from [[build-my-arcade]] and customize. Each game is self-contained in `games/<id>/`:

```
games/<id>/
  index.html     # the game page — includes ../../arcade.config.js, ../../assets/scores.js, metadata.js, game.js
  game.js        # the game logic
  metadata.js    # window.GAME_META = { id, name, emoji, category, description, madeByKid:true }
```

- Classic `<script src>` in order: `arcade.config.js` → `scores.js` → `metadata.js` → `game.js` (plus `../../vendor/<engine>.js` first if used). A "⬅️ Arcade" link back to `../../index.html`.
- Keep `id`/`name`/`emoji`/`category` identical between `metadata.js` and the `games-manifest.js` entry. `category` is one of the fixed set (see [[reference/arcade-conventions]]). Set `madeByKid: true`.

## Offline-first (never break these)

Opens by double-clicking `index.html`, no server, no internet: classic `<script src>` (never `fetch` a local file), no ES modules for the core, `<a href>` navigation, `localStorage`/`IndexedDB` for saves. Full rules in [[reference/arcade-conventions]].

## How powerful can a game be? (static is not a ceiling)

- **Simple 2D** (most kids' games): pure HTML `<canvas>`, no engine — instant, offline.
- **Richer 2D** (sprites, physics, lots of objects): vendor **Kaboom/KAPLAY** into `vendor/` (download once while online; offline forever after).
- **3D worlds:** vendor **Three.js** into `vendor/` — real WebGL, still no build step.

If a game truly needs `fetch`, modules, or loaded media, run it through `dev-server.js` (or `python3 -m http.server`) — still offline, just localhost — and note it "needs the play-server."

## Make it FUN first

Kids **love** coins, points, high scores, achievements, badges, levels, streaks, unlockables, and racing friends on a leaderboard. Build that stuff — it's core to what makes games fun. Don't strip fun mechanics out of misplaced caution. Gut check: *would a normal parent actually mind?* If not, build it and make it awesome.

## Teach at the seam (Brain Boost)

Run [[teach-and-check]] exactly as it says:
- The **first creation in a conversation gets NO check** — let the kid just watch their game appear.
- At the **seam** (the *next* new gateable concept they ask for), run one Brain Boost first. Game concepts live in [[concept-cards]] (`score`, `loop`, `collision`, `sprite`, `timer`, `random`, `win-condition`…).
- Never gate, never block. The game is built and playable before any check exists.

## Safety & privacy (the floor)

- **Content stays kid-safe** — cartoony, age-right. "Shooting" = foam darts / hoops / lasers at aliens / snowballs, never realistic guns at people. If a kid pushes for gore/realistic violence, cheerfully swap the premise to something cartoony and build that.
- **First name only** — never a last name, address, school, phone, email, or photos, anywhere.
- **A grown-up publishes** (under-13); default to running locally. [[put-it-online]] handles the scrub.
- **If the kid ever says something worrying** (being hurt, scared, "nobody loves me"), the distress protocol comes first — stop, stay calm, believe them, don't interrogate, point them to a grown-up they trust, store nothing. It applies on every turn (see [[teach-and-check]] and the persona), not just during a learning check.

## How this fits the other skills

- [[build-my-arcade]] — lays down the hub + `games/` structure this skill fills in.
- [[make-an-app]] — the app peer of this skill.
- [[change-it]] — edit/fix/remix a game later; [[oops-go-back]] — undo the last change.
- [[play-it]] — open the game on screen; [[my-creations]] — show everything made.
- [[teach-and-check]] / [[about-me]] — the learn-as-you-build gate + the Player Card.
- [[put-it-online]] — the grown-up-gated publish with the identity scrub.
