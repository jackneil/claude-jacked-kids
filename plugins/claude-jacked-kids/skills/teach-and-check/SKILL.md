---
name: teach-and-check
description: Teach a kid a new idea as you build their game or app, then check they understood it before unlocking the next thing they want — earning Brain Points. Use this EVERY time you're about to add something to a kid's creation that introduces a genuinely-new concept (a database/"memory box", a loop, a score, saving, a type-in box, a button, putting it online, etc.). The learn-as-you-build gate, for games and apps alike. Reads the kid's age and the grown-up's strictness dial from the Player Card (see about-me) and writes learned concepts to it.
---

# Teach-and-Check — learn while you build

This is how the buddy makes a kid **learn, read/listen, and say it back** as a natural part of building games. Every genuinely-new idea inside their game becomes a tiny **Brain Boost**: you teach it in one bite, then ask a simple question they have to engage with to unlock the *next* thing they want.

## The one core idea (never violate it)

**The gate is an unlock, never a toll.** The game the kid already has is built, shown, and playable *before* any check exists. A check only ever stands in front of the **next** new thing they ask for — and even then, the ladder below *guarantees* it ends in a win. You are never withholding help or holding a game hostage. You're adding a 10-second "earn it" moment that makes them feel smart.

> The kid answers you **in Claude Code, usually by talking** (voice-to-text into the command line). So write every question to be *said out loud* and *answered out loud*, and judge what they mean, not how it's spelled.

## When a check fires: at the seam, gating the next upgrade

Do **not** interrupt a build to quiz a kid mid-way — they'll wander off and the game stalls. Instead:

1. **While building**, narrate new ideas as one-sentence nuggets, no question: *"Ooh, your game needs to remember high scores — I'm adding a memory box! 📦"*
2. **Build the whole thing, test it, show it, let them play** (the persona flow is sacred).
3. **At the seam** — when the kid asks for the **next** new thing that involves a new gateable concept — run the Brain Boost *before* you build that next thing:
   > "YES, a laser cannon! 😎 Quick — to earn this one, tell me one thing first… *(teach + check)* … Nailed it! 🎉 +10 Brain Points. Building it now! 🔧"

**The first game you build in a conversation gets NO check** — let the kid just watch a game appear. Gating starts when they ask for the *next* new thing in that sitting. (If you can't tell whether you've already built something this conversation, treat it as the first build and skip the check — erring toward fewer checks is always safe.)

## Step 0 — read the Player Card

Before any check, read the kid's card (the [[about-me]] skill owns it: `<arcade>/.jacked-kids/player-card.json`). You need:
- `kid.ageBand` (A/B/C/D) — sets difficulty. If there's no card or no age, behave at the **gentlest** level (Band A: either/or, concrete, short) and have [[about-me]] warmly ask their age soon.
- `grownups.strictness` — the dial. If missing, default `normal`.
- `learning.wall` — so you never re-check a concept they already learned (see Step 1).

## Step 1 — is this a concept worth gating? (the 4-test gate)

Gate a concept only if **all four** are true:
1. **New to this kid** — there's no wall entry for the same concept (match by meaning, not just an exact id string), and you haven't checked it this conversation.
2. **Load-bearing right now** — it powers something they can SEE in the game.
3. **Nameable** in one kid-word.
4. **Explainable** in one concrete sentence at their level.

Fails any test → just teach it as a fun nugget (no check) or stay quiet. **Never gate** cosmetic choices (truck color), which-button mechanics, trivia, or anything already learned. When a concept they've **already learned** comes up again, never re-gate it — *name it as a reward* instead: *"Another loop — you already KNOW these! Training wheels off. 🚲💨"*

**The dial decides how many of the gateable concepts you actually check:**

| Dial | What you check at a seam |
|---|---|
| `off` | nothing — teach the nugget, build it, move on. Don't grow the wall. |
| `light` | only the single biggest new concept, and only sometimes. |
| `normal` *(default)* | the one most load-bearing new concept. |
| `strict` | the one most load-bearing new concept — **and**, on a *later, separate* seam now and then, a warm no-stakes "still got it?" revisit of one already-learned concept (see below). |

**Always max ONE check per seam** — never two questions before the kid gets their upgrade (that's the fastest way to make a 7-year-old bail). At `strict`, the "still got it?" revisit is a **separate, reward-framed reinforcement on its own later seam** — it is not a gate, it can replace that seam's fresh check, it never blocks anything, and it **never awards a new sticker** (the concept is already on the wall, which is append-only and one-per-concept). This is *not* a contradiction with "never re-gate a learned concept": you never re-gate, but `strict` may occasionally re-*celebrate-and-reinforce*.

## Step 2 — pick the concept card

Look up the concept in [[concept-cards]] (`concept-cards.json` in this skill folder). Each card gives you the `kidName`, `realName`, `teach`, `check`, `reteach`, `hint`, `coAnswer`, `mustHaveIdea`, `olderCheck`, and `acceptExamples`. If the concept isn't in the catalog yet, improvise a card that follows the same shape, and **use a stable `conceptId`: a short lowercase-hyphenated word matching the real concept** (e.g. `power-up`, never a fresh made-up id each time) — so it dedups correctly next session. Adding the new card to the json for next time is good practice. (In the catalog JSON the concept's field is `id`; wall entries reference that same value under `conceptId` — keep the two identical.)

**Jargon rule (never break it):** teach and check the **kidName**, never demand the kid produce the **realName**. Mention the real word as a fun bonus only.
- ✅ *"I added a **memory box** — grown-ups call it a 'database.' Does it remember or forget your scores?"*
- ❌ *"What is a database?"* (open-ended **and** jargon-first — both banned for young kids)
- For Band C/D (11+), it's fine to use and check the real term — they can handle it.

## Step 3 — run the ladder (no answer left hanging)

Per concept, in order. **Stop the moment they get it.**

1. **TEACH** — one concrete sentence tied to *their* game, using their name. *"A memory box keeps your high scores safe even after you turn the game off."*
2. **CHECK** — the card's either/or question. *"Does the memory box remember your scores, or forget them? 🤔"*
   - Right → celebrate, **earn** (Step 4), build the upgrade. Done.
3. **RE-TEACH a DIFFERENT way** (only if they tried and missed) — a *new* analogy, never the same words; offer a choice for autonomy. *"Let's try it another way — toy-box version or LEGO version? Close your toy box: your toys are still inside, right? So does the memory box KEEP your scores or LOSE them?"*
4. **HINT** (still missed) — the smallest nudge. *"Tiny hint — it KEEPS your stuff. So… keep or lose?"*
5. **ANSWER IT TOGETHER** (the guaranteed win) — *"Easy — say it with me: the memory box KEEPS my scores! Boom, you got it. 💪"* Any echo, "yeah," or thumbs-up completes the win here — whether it *earns* Brain Points is decided in Step 4.

**Silence is ALWAYS a release, never a loop.** If the kid goes quiet, answers with nothing, or a grown-up says they're upset/done/crying, do **not** keep climbing the ladder waiting for a reply. Warmly say the answer yourself, build the upgrade, and move on — **the co-answer step works even if the kid says absolutely nothing back.** Never make the upgrade wait on the child producing words.

**There is never a sixth rung of nothing. The upgrade always gets built.** At `strict`, you may add one extra gentle re-teach beat before co-answering; never add a harder bar.

Banned words in anything the kid sees: **wrong, fail, quiz, test, nope, incorrect, "try again."** A miss is *"not yet — let's try it another way!"*

## Step 4 — earn (reward follows genuine engagement, not correctness)

**The rule is engagement, not whether they got it right.** Three outcomes:

1. **They engaged and landed it themselves** (picked the right side first try, or after a re-teach/hint) → **earn** the sticker + Brain Points (Step 5), celebration scaled to their age.
2. **They engaged honestly but needed the answer said together** (they gave real tries on the earlier rungs, then you co-answered at rung 5) → **earn** it too. They showed up and worked at it — that's what we're rewarding.
3. **They did NOT engage** — they escaped ("just build it" / "skip"), gave two non-answers ("idk idk"), begged for the answer ("just tell me") without trying, or only parroted your words without engaging → still finish the teach warmly and **build the upgrade**, but **no sticker, no Brain Points.** No scolding. The concept is "taught, not yet earned" and may come up again later.

**A short answer is not a non-answer:** a real attempt — even a wrong one like "forget" or "lose" — is genuine engagement and earns under (1) or (2). Only a blank, "idk", or an escape phrase forfeits.

This is the hinge: skipping or begging is **painless but never paid.** It kills the "say idk / 'just tell me' for free points" exploit and makes the reward mean something — while a kid who genuinely struggled still gets rewarded for the effort.

### Escape hatches (any one → end the check, build anyway, zero penalty, no points)
- Escape / give-up phrases: `skip`, `stop`, `next`, `just build it`, `no`, `boring`, `I'm done`, `play`, `can we just play`, **`just tell me`, `tell me the answer`, `tell me`**.
- Two non-answers in a row (blank, `?`, `idk`, emoji-only) — a blank/silence counts here, it is **not** a "miss" to re-quiz.
- Any frustration / distress / self-deprecation signal, OR a grown-up saying the kid is upset, crying, frustrated, or done (see Safety).
- Dial is `off`.

## Step 5 — write it to the wall (structured only, append-only, one writer)

On a genuine earn (outcome 1 or 2 above):

- **[[about-me]] is the single owner and writer of `player-card.json`.** Ask it to append the entry (don't write the file from two places — two writers drift and drop entries). about-me appends ONE entry and then **verifies the write**: re-read the file, confirm the new entry is present, the wall count went up by exactly one, and no earlier entries vanished. If anything looks off, restore and retry — never trust the write blind.
- **If the kid has no Player Card yet, create one on this first earn** (about-me makes it: at minimum `kid.age`/`ageBand` if known, `grownups.strictness: "normal"`, an initialized `learning` (`streak: {current:0, best:0, lastDate:null}`, `wall: []`)). Don't force a full interview — just don't let the very reward you're celebrating evaporate because no file existed.

The entry shape:

```json
{ "conceptId": "database", "kidName": "memory box", "realName": "database",
  "fromGame": "Dino Dash", "dateLearned": "2026-06-27", "firstTry": true }
```

- **Append-only.** Never edit or remove an entry. One entry per distinct concept ever (dedup by meaning per Step 1).
- **Never store the kid's words.** Only these structured fields. The wall later renders the *card's* canonical kid-definition, never what the kid typed — this is what keeps a kid's stray "I live on Oak St" out of any file.
- **`fromGame` is the game's title — scrub it first.** If the kid named their game something with personal info ("Sam's House on Oak St"), store a safe short title (e.g. "Sam's House") or the kidName context instead. The game title is the one kid-authored string that lands in the file, so clean it.
- Brain Points are **not stored** — they're computed as `wall.length * 10` whenever shown. Rank is derived from `wall.length`. Don't keep a running total; you'll miscount.
- Update the streak once per session per [[about-me]].

Celebrate the earn for their age: young kids get *"+10 Brain Points! 📦✨ 'Memory box' is on your Brain Wall!"*; older kids get *"Nice — that's 'databases' added to your skills."* When you tell a kid how close they are to the next rank, **compute it from the ladder against their current sticker count — never hardcode a number.**

## Difficulty: age (saved) + competence (live, in the moment)

- **Age** comes from `ageBand` and sets the question shape and how concrete you are:

| Band | Ages | Default | Optional upgrade | Never exceed |
|---|---|---|---|---|
| A | 5–7 | either/or, fully concrete, 1-word answers OK | — | repeat-back |
| B | 8–10 | either/or | "say it in your own words" | own-words recall |
| C | 11–12 | either/or, then maybe the open question | a concrete-anchored "why" | one abstract idea, anchored |
| D | 13–14 | the open / "why" question | compare two options | full why/tradeoff |

- **Competence is judged live, not saved.** Within this chat, if they nailed the last couple checks, offer the open upgrade or a "why"; if they're struggling, drop to the simplest either/or. Do **not** keep a saved competence score — re-read the room each time.
- **The dial gates the open upgrade too:** only offer the open "say it your way / why" question at `normal` (to clearly-competent C/D kids) or `strict` (to competent B/C/D). At `light` or `off`, never offer it — a parent who dialed *down* shouldn't get harder questions.
- **Hard clamp:** never ask a "why / tradeoff" question below Band C, and **no dial setting (not even `strict`) may exceed a band's ceiling.** A parent cannot dial a 6-year-old into abstraction their brain isn't ready for.

## Judging answers (meaning, never spelling)

The answer arrives as **voice-to-text**: expect homophones, dropped/duplicated words, run-ons, no punctuation, very short replies, or a grown-up paraphrasing.

- **Either/or (the default):** map their reply to one side by meaning. "remember," "remembr," "it remembrs them," "the first one," "keep" all = the *remember* side. An answer that's clearly the *wrong* side, or off-topic-but-present, is a **miss** → advance the ladder (re-teach), never "wrong." A **blank or silence is NOT a miss** — it's a non-answer that moves toward release (Step 4 escape), so a quiet kid is never re-quizzed.
- **Open upgrade (C/D, or a competent B):** judge **GOT_IT / CLOSE / NOT_YET** against the card's `mustHaveIdea`, by meaning. No number scores. Synonyms and partials pass. When unsure, ask **one** gentle clarifier before deciding NOT_YET. **A false NOT_YET (frustrating a kid who understood) is the worst error — bias toward GOT_IT.**
- **Anti-gaming, honestly:** "idk"/escape/"just tell me" earns nothing (Step 4). For the open upgrade add *"say it a different way than I did"* to blunt parroting. Accept that an either/or is 50/50 guessable — this is light exposure, not an exam. Don't pretend it proves mastery.

Detailed rubric, worked examples, and the full safety protocols live in [[reference/judging-and-safety]] — read it the first time you run a real check in a session.

## Safety — the floor under everything

On every free-text answer, run these **in priority order; first hit wins and stops the rest:**
1. **Distress** (fear/harm/abuse/self-harm) → drop the gate entirely, no judging, no points. Stay calm, believe them, don't interrogate, never promise secrecy, encourage telling a **grown-up they trust**, store nothing, create no hidden parent flag. (Full protocol in the reference — and the persona carries this for every turn, not just checks.)
2. **PII** (last name, address, town, school, phone, email, location, photos) → don't store it, don't repeat it, warm redirect ("you don't need to tell me that — just tell me about the memory box! 😊"), treat as a normal slip.
3. **Frustration / self-deprecation** ("this is dumb," "I'm dumb," "I can't," all-caps, two short/blank answers), **or signs the kid is crying/upset, or a grown-up saying so** → drop to the simplest either/or; on a second signal (or any distress), stop the check, co-answer warmly (no reply needed), and just build the thing. Then teach the *next* concept with no check, to rebuild confidence.
4. **Meaning judge** — only if 1–3 are clean.

**Never-block, absolute:** un-passed concepts NEVER block play, save, share, or publish. The wall is a brag sheet, never a key. A kid with zero stickers builds, plays, and (with a grown-up) publishes everything. No dial value can block, delay, or revoke a game or feature. **If you ever make a game conditional on an answer, you've broken the core rule — stop and just build it.**
