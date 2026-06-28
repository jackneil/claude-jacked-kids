---
name: change-it
description: Edit, fix, or remix any game OR app the kid already made — "make it harder", "add a high score", "change the truck to a dragon", "it's broken", "make it nighttime", "make it like X but Y". The main learn-as-you-build seam: when a change adds a genuinely-new concept, fire one Brain Boost first. Never loses the kid's saved progress. Use whenever a kid wants to tweak, fix, or remix something they already built.
---

# Change It — tweak, fix, or remix anything the kid made

A kid says *"make my truck jump higher,"* *"add a high score,"* *"change the cat to a dragon,"* *"it's broken,"* *"make it nighttime with stars,"* *"make it like my catching game but with hearts."* You find the creation, make the change, test it, and show it — for **games and apps alike**.

This is the **main learn-as-you-build seam.** Most Brain Boosts happen here, when a kid asks for the *next* new thing.

## Step 1 — find the creation

The kid will name it loosely ("my truck game", "the chore thing"). Find it:
- A **game** → `games/<id>/` (listed in `games-manifest.js`). A **app/tool** → `apps/<id>/` (listed in `apps-manifest.js`).
- If it's ambiguous which one they mean, ask one warm either/or with their own words: *"The jumping-truck game, or the rocket one?"*
- Only ever touch that one creation's own folder + the shared files it already uses (`scores.js`/`store.js`, `arcade.config.js`, a `vendor/` engine). Never reach into another creation's code.

## Step 2 — understand what they want

Three flavors, all handled the same warm way:
- **Tweak / add** — "make it harder", "add coins", "give it a high score", "new color". A bigger add often introduces a **new concept** → that's the Brain Boost seam (Step 3).
- **Fix** — "it's broken", "the truck won't jump". Find the real cause and fix it properly; don't paper over it. Then show them it works.
- **Remix** — "make it like X but Y". Copy the spirit, change what they asked. If they want a near-copy as a *separate* creation, make a new island (don't silently overwrite the original).

## Step 3 — the Brain Boost seam (the important part)

Run [[teach-and-check]] exactly as written:
- A check fires **only at a seam** — when the change introduces a genuinely-new, gateable concept the kid hasn't learned. Teach it in one bite, ask one either/or, celebrate, *then* build the change.
- **Max one check per seam.** Cosmetic tweaks (color, name, which button) are **never** gated — just make them.
- A concept they've already learned → name it as a reward ("another loop — you already KNOW these! 🚲💨"), never re-gate.
- Concepts live in [[concept-cards]] (games *and* apps: `score`, `loop`, `collision`, `save`, `input`, `button`, `update`, `if-then`…). If one's missing, improvise a card in the same shape and add it.
- **Never block.** The creation already works before any check; a check only stands in front of the *next* upgrade, and the ladder always ends in a co-answered win.

## Step 4 — make the change, keep it whole

- Make the **complete** change — tested, still fun, still kid-safe. No half-edits, no "we'll finish later".
- **Never lose the kid's saved progress.** Only edit the creation's *code* (`game.js`/`app.js`/`index.html`/`metadata.js`). Never clear `localStorage`/`IndexedDB`, the high score, the saved app data, or `.jacked-kids/`. If a change *must* change the save format, migrate the old data, never wipe it.
- **Renaming? Keep the `id`.** A creation's saved data is keyed on its `id` (an app's data is `appdata:<id>`; a game's high score is `arcade:highscore:<id>`). When a kid renames a creation, change the `name`/`emoji`/`description` but **leave the `id` unchanged** — re-slugging the `id` (e.g. `chore-chart` → `my-jobs`) silently orphans every bit of their saved data. If the `id` truly must change, copy the saved data across first (`appdata:<old>` → `appdata:<new>`), then update `metadata.js` + the manifest. This is the most common way a rename quietly eats a kid's weeks of work — don't let it.
- If you rename or add a creation, update the matching manifest and refresh the project `CLAUDE.md` list ([[reference/project-claude-md]]).

## Step 5 — show them

Open it on their screen and bring it to the front (use [[play-it]]) so they see the change live. Celebrate, then offer the next step. If they don't like it → [[oops-go-back]].

## Safety & privacy

Same floor as building: kid-safe content, first name only / no PII, a grown-up publishes (under-13). The distress protocol in [[teach-and-check]] applies on every turn, including ordinary "change it" chatter.

## How this fits the other skills

- [[make-a-game]] / [[make-an-app]] — build the thing this skill later changes.
- [[oops-go-back]] — undo the last change (the safety net for this skill).
- [[play-it]] — show the change; [[my-creations]] — find something to change.
- [[teach-and-check]] / [[about-me]] — the learn-as-you-build gate + Player Card.
- [[build-my-arcade]] / [[reference/arcade-conventions]] — the structure everything lives in.
