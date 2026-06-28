---
name: play-it
description: Open the kid's hub, or one game/app, in the browser and bring it to the front — the "show me!" skill. Runs automatically right after anything is built or changed so the kid never wonders where their creation went. Uses the live-reload play-server while building, or just opens the file offline. Use when a kid says "play it", "let me see it", "open it", "show me", or after any build/change.
---

# Play It — put the creation on the kid's screen

The kid wants to **see and play**, not read about it. This skill opens their creation in a browser and brings it to the front. It runs **automatically after every build or change** — the moment something is made or edited, the kid sees it. It works for **games and apps** the same way.

## What to open

- **A specific creation** they just made/changed, or named ("play my truck game", "open the chore chart") → open that island's `index.html` (`games/<id>/` or `apps/<id>/`).
- **The hub** ("show me everything", "go home", or after building the *first* creation) → open the arcade's top-level `index.html`.
- After a build/change, default to opening **the thing that just changed**, then offer "back to your home page?" so they can find everything.

## How to open it — two modes, same files

1. **While building together (preferred): the play-server.** Run the zero-dependency `dev-server.js` in the background (`node dev-server.js`), then open the printed `http://localhost:PORT`. It **auto-reloads the open tab the instant you edit a file** — same tab, brought to the front, no refresh button, no pile of new tabs. This is what makes "make it jump higher" update live in front of the kid.
2. **Just playing, offline:** double-click `index.html` (open the `file://` path). No server needed. Use this when the kid is done building, or offline (car, plane).

**Pick the mode by need:** anything that needs `fetch`, ES modules, or loaded media must use the play-server (`file://` blocks those); a plain offline game/app can use either. If you're already building with the dev-server running, just keep using it.

## Bring it to the front (don't make them hunt)

- If browser-control tools are available, navigate the existing tab to the creation and focus it — **reuse one tab**, don't spawn a new one each time.
- With the dev-server, editing a file auto-reloads the open tab, which also brings it forward.
- Tell the kid in plain words where it is: *"It's on your screen now — go play! 🎮"*

## Keep it warm and simple

- No jargon. Not "I started a localhost server on port 8123" — say *"Okay, it's up on your screen!"*
- Always offer a next step: *"Want to make it harder? Add a high score? Show a friend?"*

## Honest notes

- The dev-server is **build-time only** — never deployed, not needed to just play. To put a creation online for friends, that's [[put-it-online]] (a grown-up step).
- Node is already present (Claude Code runs on it), so the play-server needs no install.

## How this fits the other skills

- [[make-a-game]] / [[make-an-app]] / [[change-it]] — call this skill to show the result automatically.
- [[my-creations]] — the gallery of everything; from there the kid picks what to play.
- [[build-my-arcade]] / [[reference/arcade-conventions]] — where `dev-server.js` and the hub come from.
- [[put-it-online]] — the real-internet version (grown-up-gated), not the play-server.
