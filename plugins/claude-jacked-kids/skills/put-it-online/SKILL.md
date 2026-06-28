---
name: put-it-online
description: Put a kid's creation on the real internet so friends can play — a grown-up-gated step (under-13 needs a grown-up; 13+ can do it themselves) with a privacy scrub first. Strips anything that could identify or locate the kid, keeps personal app data local, and deploys via deploy-to-railway. Use when a kid says "put it online", "share it", "send it to my friend", "make a link", or "publish".
---

# Put It Online — share the arcade with friends (a grown-up step)

A kid says *"put it on the internet,"* *"send it to my friend,"* *"make a link."* This puts their hub (games **and** apps) online so friends can play. It is a **big deal** — gated to a grown-up for under-13s — and **nothing goes public until it's scrubbed of anything that could identify or locate the kid.**

## Step 1 — the grown-up gate

- **Under 13:** a grown-up must okay and help with this step. Ask warmly for a grown-up: *"Putting it online is a grown-up step! Can you grab a grown-up to help? 😊"* Don't proceed without one.
- **13+:** the kid can do it themselves.
- **Be honest, never claim a lock:** this is a gentle speed-bump, not a hacker-proof gate. The point is that a young kid doesn't publish alone.

## Step 2 — the privacy scrub (before ANYTHING is pushed)

Produce the served copy **without** any personal data. Check every item:

- **Exclude `.jacked-kids/` entirely** — the Player Card + grown-up page never deploy.
- **Overwrite `assets/brain-wall.js` with its null stub** (`window.BRAIN_WALL = null;`) — don't delete it (the hub's `<script>` would 404); it carries the kid's first name.
- **Genericize `arcade.config.js` `owner`** (set it to a generic value or drop the greeting) — a first name is the most that should *ever* appear publicly, and prefer none.
- **Apps that hold personal info:** their data lives in `localStorage` on the kid's own machine (`AppStore`), so it **does not deploy** — only the app's code does. Confirm that:
  - the app reads its data from `AppStore`/`IndexedDB` at runtime and has **no personal data hardcoded** into `app.js`/`metadata.js`/`index.html`. If a kid seeded real info into the code (a journal entry, real names, an address), scrub it to a neutral placeholder before publishing.
  - any app that persisted to a **file** under `.jacked-kids/` is already excluded by the first rule.
- **Scan for anything else identifying** across games, apps, and titles (a game/app named "Sam's House on Oak St" → publish as "Sam's House"). No last name, address, town, school, phone, email, or photos.
- **`CLAUDE.md`** is a dev file with no kid PII (it lists creation titles only) — it's safe; it doesn't need to be served but won't leak anything if it is.
- **Don't ship `dev-server.js`** — serve with the plain `server.js` (static, reads `PORT`), never the live-reload dev-server.
- **Check `git status` before any push** if the arcade is a git repo — make sure `.jacked-kids/` and `brain-wall.js` are gitignored and not staged.

## Step 3 — deploy

- Use the [[deploy-to-railway]] skill. The arcade is **static**, so serve it with `server.js` from [[build-my-arcade]]'s `templates/` (zero-dependency static server). No framework, no database for a normal share.
- Set up auto-deploy on push only if the grown-up wants it, exactly as [[deploy-to-railway]] describes.
- The creations still run **offline locally** — deploying just adds an online copy.

## Step 4 — teach + celebrate

- This is a natural Brain Boost seam: the `deploy` / "put-it-online" concept in [[concept-cards]] (run [[teach-and-check]], one check max, never blocking — the publish happens regardless).
- Tell the kid in plain words: *"It's online! Here's the link to send your friend. 🎉"* Remind them, lightly, that personal stuff was kept private.

## The honest caveats (say them plainly to the grown-up)

- **Folder-sharing bypasses this scrub.** If someone zips/airdrops the raw arcade folder, `.jacked-kids/` and `brain-wall.js` go with it. This skill only scrubs the *deploy* path; for sharing the folder, remove those by hand first.
- Publishing is **opt-in and reversible** — a grown-up can take the site down anytime via [[deploy-to-railway]].

## How this fits the other skills

- [[build-my-arcade]] — Tier 2 ("on the web") points here; `server.js` ships in its templates.
- [[deploy-to-railway]] — does the actual hosting; this skill prepares + gates it.
- [[make-a-game]] / [[make-an-app]] / [[my-creations]] — make the things you publish.
- [[teach-and-check]] / [[about-me]] — the deploy Brain Boost + the Player Card that stays local.
