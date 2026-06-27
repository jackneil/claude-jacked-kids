---
name: about-me
description: Create and manage a kid's local "Player Card" (first name, age, interests) and their "Things I Learned" wall, rank, and Brain Points. Use when a kid says "remember me", "make my player card", "who am I", "show my badges / what I learned / my brain points / my rank", when greeting a returning kid, when you need the kid's age to pick the right difficulty, or when a grown-up wants to change the learning-check settings. Owns the player-card.json file that teach-and-check writes to.
---

# About Me — the kid's Player Card

This skill owns the kid's **Player Card**: a small local file that remembers who the kid is (so you can be a better buddy) and what they've learned (so the [[teach-and-check]] learning gate has a memory). You create it, read it, render it, and keep it safe. The kid never sees the file — they see warm, simple summaries.

## Where the card lives

`<<kid's arcade folder>>/.jacked-kids/player-card.json`

- The "arcade folder" is wherever the kid is building their games. If `build-my-arcade` already made one, use that folder. If there's no arcade yet, use the current working folder.
- The whole `.jacked-kids/` folder is **private to this computer**. The moment you create it, make sure it's ignored by git and never published:
  - Add `.jacked-kids/` to the arcade's `.gitignore` (create the file if needed).
  - Never copy `.jacked-kids/` into any folder you publish or put online. (The `put-it-online` skill double-checks this.)
- One card per kid per arcade. If a sibling wants their own, that's a different arcade folder with its own card. Don't comingle two kids in one card.

## The schema (version 1)

```jsonc
{
  "version": 1,
  "kid": {
    "firstName": "Sam",          // FIRST NAME ONLY. Never a last name.
    "age": 9,                     // a number. Drives difficulty.
    "ageBand": "B",              // derived from age: A=5-7, B=8-10, C=11-12, D=13-14
    "interests": ["dinosaurs", "monster trucks"]
  },
  "grownups": {
    "strictness": "normal",      // off | light | normal | strict   (default: normal)
    "lastChanged": "2026-06-27"
  },
  "learning": {
    "streak": { "current": 0, "best": 0, "lastDate": null },
    "wall": [
      // one entry per concept genuinely learned. APPEND-ONLY. Never edit or remove.
      // { "conceptId": "database", "kidName": "memory box", "realName": "database",
      //   "fromGame": "Dino Dash", "dateLearned": "2026-06-20", "firstTry": true }
    ]
  }
}
```

**Derived at render time — NEVER stored as fields:**
- `brainPoints = wall.length * 10`
- `rank` from the ladder below.

**Kid-provided values that get stored** (all PII-scrubbed per the rules below): their first name, age, a few interests, and `fromGame` — the game's title, the only free-form string in the learning wall, scrubbed of personal info first (so "Sam's House on Oak St" is stored as "Sam's House"). **Never written, period:** the kid's raw typed/spoken answers, a last name, address, town, school, phone, email, photos, GPS, or anything a kid types that's upsetting. Everything else is the fixed structured fields above. If you're tempted to store other free text, stop — store the structured fact instead.

## Age → band (compute every session from `age`)

| Band | Ages | Feel |
|---|---|---|
| A | 5–7 | emergent readers; a grown-up is often helping; shortest, most concrete |
| B | 8–10 | reads simple text; concrete analogies |
| C | 11–12 | one abstract idea at a time, anchored to something concrete |
| D | 13–14 | abstract is fine; can compare and reason "why" |

`age` is the source of truth. Always recompute `ageBand` from `age` (never trust a stale stored band — the kid may have had a birthday); if the two ever disagree, the age wins. The stored band is just a convenience for other skills to read.

## Rank ladder (derive from `wall.length`)

| Rank | Stickers |
|---|---|
| 🐻 Curious Cub | 0 |
| ✨ Spark Scout | 3 |
| 🔭 Idea Explorer | 7 |
| 🛠️ Brain Builder | 12 |
| 🧙 Idea Wizard | 20 |
| 🌟 Mastermind | 30+ |

## Writing learning to the wall (append-only, verified)

You are the **single writer** of `player-card.json`. When [[teach-and-check]] reports a genuine earn, append ONE entry to `learning.wall`:

```json
{ "conceptId": "loop", "kidName": "do-it-again", "realName": "loop",
  "fromGame": "Truck Jump", "dateLearned": "2026-06-27", "firstTry": false }
```

- **Verify every write.** After appending, re-read the file and confirm: the new entry is there, `wall.length` went up by exactly one, and no earlier entries disappeared or changed. If anything's off, restore from what you read and retry — never trust a blind write. (This is the one place a sloppy edit can silently lose a kid's hard-won sticker.)
- **Append-only, one per concept.** Never edit or remove an entry; dedup by meaning (don't add a second `loop`/`do-it-again` under a slightly different id).
- **Create the card if it doesn't exist yet.** If a kid earns their first sticker and has no card, make a minimal one right then (`grownups.strictness: "normal"`, an initialized `learning` (`streak: {current:0, best:0, lastDate:null}`, `wall: []`), plus whatever of name/age you already know) so the reward doesn't evaporate — without forcing a full interview.
- **If the kid has an arcade hub** (from [[build-my-arcade]]), after any wall change also (re)write `<arcade>/assets/brain-wall.js` so the hub can show the Brain Wall offline: `window.BRAIN_WALL = { firstName, points, rank, stickers: [{ kidName, emoji, note }] }` (points = `wall.length * 10`, rank from the ladder). This file holds the first name, so it's gitignored and **never deployed**.

## Making a card (warm, never forced)

Only when it helps — a returning kid you don't know yet, or a kid who asks. Ask **one question at a time**, with the buddy's normal warm tone. Never interrogate.

1. "What should I call you?" → store as `firstName` (first name only — if they give more, keep just the first name).
2. "How old are you?" → store as `age`, derive `ageBand`. (This is the most important one — it sets how I talk and how tricky my brain questions get.)
3. "What stuff do you LOVE? Dinosaurs? Soccer? Space?" → store a few `interests`.

If the kid offers a last name, address, school, etc., **don't write it down** — smile and steer back: "I don't need that — just tell me what games you like! 😊"

Seed `grownups.strictness` to `"normal"` and an empty `learning` block. Then generate the grown-up explainer (below).

## The grown-up explainer

When you first create a card, also create `<<arcade>>/.jacked-kids/for-grownups.html` by copying the template that ships with this skill:

- Template: `for-grownups-template.html` (in this skill's folder).
- Copy it into `.jacked-kids/`, replacing the placeholders (`{{KID_FIRST_NAME}}`, `{{STRICTNESS}}`) with the kid's values.
- Tell the kid, lightly: "I made a little page for your grown-up about how I help you learn — they can read it whenever."

Don't depend on any template outside this plugin — the kid's computer won't have your personal files. Always use the one shipped here.

## Showing the kid their stuff (the "Things I Learned" wall)

When the kid asks ("what did I learn?", "my badges", "brain points", "my rank"), render it **for their age**, never as raw JSON.

- **Young (A/B):** big and celebratory, with the kid-names and emoji.
  > 🌟 **Sam's Brain Wall!** 🌟
  > You've got **130 Brain Points** and you're a 🛠️ **Brain Builder**!
  > Stuff you figured out:
  > 📦 memory box — keeps your game's stuff safe!
  > 🔁 do-it-again — makes the computer repeat things!
  > Keep going — 7 more and you're an Idea Wizard! 🧙
- **Older (C/D):** a tidy skills list with the **real names**, framed as a portfolio.
  > **Sam — things you actually know now:**
  > Databases ✓ · Loops ✓ · Collision detection ✓ · Variables ✓
  > Rank: Brain Builder. (13 concepts. Next: Idea Wizard at 20.)

Render the canonical kid-definition from the [[teach-and-check]] concept card for each `conceptId` — never the kid's own words. Always compute Brain Points as `wall.length * 10`, the rank from the ladder, and "how many more to the next rank" by subtracting the current count from the next ladder threshold — **never hardcode these numbers** (e.g. at 13 stickers it's 7 more to Idea Wizard at 20, not a memorized figure).

## Changing the learning dial

The dial (`grownups.strictness`) controls how much the [[teach-and-check]] gate checks. Four levels: `off`, `light`, `normal` (default), `strict`. See [[teach-and-check]] for what each does.

- **A grown-up** can change the persistent setting: when someone says "I'm the grown-up, set learning checks to light" (or off/normal/strict), write it to `grownups.strictness` and update `lastChanged`. Confirm warmly: "Done! Learning checks are set to light. 👍"
- **A kid** can turn checks off **for the current chat only** (their call, in the moment) — but to change the saved default, ask for a grown-up to confirm first. Same gentle speed-bump as publishing.
- **Be honest, never claim a lock:** the setting is a plain text file on this computer. A determined older kid could edit it. That's fine — the point is to make casual re-tuning take a grown-up, not to stop a hacker.

## Streak (dead simple — update once per session)

At the **start** of a session where the kid does any learning, update `learning.streak` once:
- `lastDate` was **yesterday** → `current = current + 1`.
- `lastDate` was **today** → leave it (already counted today).
- `lastDate` was **older** (or null) → `current = 1`, with a warm zero-shame welcome-back: "Hey, you're back! 🎉" Always keep `best = max(best, previous current)`.
- A wrong answer **never** breaks the streak — it counts showing up, not being right.
- If you're unsure what today's date is or whether this counts as a new session, **leave the streak untouched** — never reset it on a guess.

## The one rule that overrides everything

The Player Card is a **brag sheet, never a key.** Nothing in it can block, gate, or take away a kid's game. A kid with an empty card can build, play, and (with a grown-up) publish everything. If you ever find yourself making a game depend on the card, stop — you've broken the rule.
