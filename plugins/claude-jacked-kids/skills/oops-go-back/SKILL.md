---
name: oops-go-back
description: Undo the last change to a game or app and put it back the way it was — the safety net for "I don't like it, change it back". Reverts only the creation's code, never the kid's saved progress, scores, or Player Card. Use when a kid says "undo", "go back", "put it back", "I don't like that", "that broke it", or "the old way was better".
---

# Oops, Go Back — undo the last change

A kid says *"undo,"* *"put it back,"* *"I don't like that,"* *"that broke it."* You calmly put their creation back the way it was — no shame, no fuss. Making a change you can take back is what makes a kid brave enough to try wild ideas.

## The one rule: undo CODE, never SAVES

- You only ever revert the creation's **code** — the files you just edited (`game.js` / `app.js` / `index.html` / `metadata.js`, and a manifest entry if you added one).
- **Never** touch the kid's **saved progress**: `localStorage`, `IndexedDB`, the high score, the saved app data, or anything in `.jacked-kids/` (the Player Card + Brain Wall). An undo of the *code* must leave their scores and stuff exactly where they were.
- **Watch the `id` when reverting `metadata.js`.** A creation's saved data is keyed on its `id` (`appdata:<id>` / `arcade:highscore:<id>`). If an earlier change this session set a *new* `id` and the kid saved data under it, reverting `metadata.js` to the old `id` would orphan that data. Keep the `id` the kid's data currently lives under; revert everything else.

## How to actually go back

1. **The change was this session (the common case).** You know what you just edited and what it looked like before — restore those exact files to their previous contents. Re-add or remove the manifest line if your change added/removed a creation, and refresh the `CLAUDE.md` list if needed.
2. **You're not sure of the before-state** (e.g. the kid came back in a new chat). Be honest rather than guess:
   - If the arcade is a **git** repo and the change isn't committed yet, you can restore just the affected file(s) to the last saved version with a **targeted, file-scoped** checkout (e.g. `git checkout -- games/<id>/game.js`) **after the kid/grown-up confirms** — only the specific files you're undoing.
   - **Never** use `git reset --hard` or `git checkout -f` / `git clean` — those can wipe other uncommitted work and the kid's local files. Targeted, file-scoped, confirmed only.
   - If there's no reliable previous version, don't pretend an undo stack exists — offer to make the **reverse change** directly: *"I can change the dragon back into a truck — want that?"* That gets them the same result honestly.
3. **One step back.** "Undo" means the **last** change. If they want to go further back ("the way it was yesterday"), say what you can and can't do, and offer to rebuild the specific thing they miss.

## After you undo

- Show it immediately with [[play-it]] so they see it's back. Reassure warmly: *"All set — it's back the way it was! 😊 Want to try a different change instead?"*
- No learning check here — undo is a safety net, never a seam. Never gate or block an undo.

## Safety & privacy

Same floor as everything: kid-safe, first name only, a grown-up publishes. The distress protocol in [[teach-and-check]] applies on every turn.

## How this fits the other skills

- [[change-it]] — the skill whose changes this one reverses (its safety net).
- [[play-it]] — show the reverted creation right away.
- [[make-a-game]] / [[make-an-app]] — building; [[my-creations]] — find the thing to undo.
- [[build-my-arcade]] / [[reference/arcade-conventions]] — the structure the files live in.
