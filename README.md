# 🎮 claude-jacked-kids

**Turn Claude Code into a warm, kid-safe game-building buddy.** A kid describes a game in plain words — *"a monster truck that jumps over school buses"* — and Claude builds the whole thing, shows it on their screen, and (with a grown-up) can put it on the internet. The kid never touches code.

This is the **kids** companion to [`claude-jacked`](https://github.com/jackneil/claude-jacked). claude-jacked is for grown-up developers (blunt tone, security gatekeeper, PR tools). **This is separate, and for kids** — warm, simple, safe.

It's a **Claude Code plugin**: pure skills + a kid-friendly persona + guidance. It ships **no application code** — the skills hold the know-how, and Claude builds the kid's game arcade from scratch in their own folder (runs locally, can deploy, has a hub/dashboard/leaderboards if they want).

---

## Install (one line — paste once)

```bash
claude plugin marketplace add jackneil/claude-jacked-kids && claude plugin install claude-jacked-kids@claude-jacked-kids
```

Then **restart Claude Code** (or run `/reload-plugins` in a session) so the buddy persona + skills load. That's it — no Python, no extra downloads. Installs globally (works in every folder).

> Inside a Claude Code session you can instead type the two commands as slash commands: `/plugin marketplace add jackneil/claude-jacked-kids` then `/plugin install claude-jacked-kids@claude-jacked-kids`, then `/reload-plugins`.

## Staying up to date (basically automatic)

- This plugin **omits the `version` field on purpose** — so every push to this repo *is* a new version. No version-bump ritual.
- Turn on auto-update **once**: `/plugin` → Marketplaces → `claude-jacked-kids` → **Enable auto-update**. (Third-party plugins default to off, so this one toggle is what makes updates automatic at startup.)
- Manual refresh anytime: `claude plugin update claude-jacked-kids@claude-jacked-kids`.

Because the plugin is *only* prompts/skills, an update **can never break a kid's built game** — it only ever refreshes the buddy's know-how.

---

## What's inside

```
claude-jacked-kids/
├── .claude-plugin/marketplace.json         # makes this repo an installable marketplace
├── docs/teach-and-check-design.html        # design spec for the learn-as-you-build gate
└── plugins/claude-jacked-kids/
    ├── .claude-plugin/plugin.json          # the plugin (no version → SHA = version → push = update)
    ├── settings.json                       # { "agent": "kid-buddy" } — always-on kid persona
    ├── agents/kid-buddy.md                 # the warm, kid-safe main-thread persona (tone + safety)
    └── skills/
        ├── build-my-arcade/                # the from-scratch recipe: builds the kid's whole offline-first arcade
        ├── about-me/                       # the local "Player Card": name, age, interests + "Things I Learned" wall
        └── teach-and-check/                # learn-as-you-build gate: teach an idea, check they got it, earn Brain Points
```

**The persona** (`kid-buddy`) is set as the main-thread agent, so every turn is gentle, jargon-free, fun-first, and safe — and it explicitly overrides any global "be blunt / roast the user" developer tone, because that's for grown-ups, not kids.

## 🧠 Learns while they build

The buddy doesn't just build — it teaches, and makes sure the idea landed. When a new concept shows up in a kid's game (a way to remember scores, a loop, putting it online), the buddy explains it in one kid-sized sentence, then asks a quick **either/or** question before unlocking the *next* thing the kid wants:

> *"YES, a laser cannon! 😎 Quick — to earn it: does the memory box **remember** your scores, or **forget** them?"*

- **It's an unlock, never a wall.** The game they already have is built and playable first; a check never blocks, removes, or stalls a game. Get it wrong and the buddy re-explains a different way, hints, and finally says the answer *together* — so a kid is **never stuck**.
- **Right answers earn 🧠 Brain Points** and stickers on a private "Things I Learned" wall (kept separate from in-game points), with a rank that grows as they learn.
- **It adapts to the kid** — gentler, more concrete questions for little ones; "say it in your own words" and "why" questions for older kids. Answers are judged by *meaning*, so talking to the buddy (voice-to-text) works fine.
- **Grown-ups hold a dial** — `off / light / normal / strict` — set by just telling the buddy. Everything stays on the family's computer; nothing about the child is stored beyond a first name, age, interests, and which ideas they've learned. (See the design spec in `docs/` for the full pedagogy + safety model.)

## Roadmap (skills, ported + generalized from the Hank's Hits framework)

The behavioral core ships now, and so does the learning system. The game-building skills are being added next:

**Shipped:**

- [x] **`build-my-arcade`** — the from-scratch recipe: in an empty folder, build the kid's whole game platform — an **offline-first** static arcade (hub, game registry, the Brain Wall, local high scores) that opens with no internet and no install. Grows only on a grown-up's say-so: deploy to Railway (Tier 2), or clone & adapt the full Hank's Hits logins+leaderboards platform (Tier 3). Ships working starter templates + a zero-dependency live-reload dev server.
- [x] **`about-me`** — the local "Player Card" (first name, age, interests) plus the "Things I Learned" wall, Brain Points, rank, and the grown-up learning dial.
- [x] **`teach-and-check`** — the learn-as-you-build gate: teach a new idea, check the kid got it before unlocking the next thing, earn Brain Points. Age-adaptive, voice-to-text friendly, never blocks a game. (Full design: `docs/teach-and-check-design.html`.)

**Next:**

- [ ] **`make-a-game`**, **`change-a-game`**, **`remix-a-game`**, **`play-my-game`**, **`put-it-online`** (with the under-13 grown-up gate + identity scrub), **`my-creations`**, **`oops-go-back`** (undo) — each invokes `teach-and-check` at the seam where a new concept appears.
- [ ] **`getting-started`**, **`game-ideas`**
- [ ] A SessionStart hook that surfaces a friendly "new powers are ready!" update notice

These are generalized from [Hank's Hits](https://github.com/jackneil/hanks-hits), where they were built and battle-tested against a real codebase — retargeted at the conventions `build-my-arcade` establishes, so they work for any kid's arcade, not just Hank's.

---

*Made so any kid can dream up a game and watch it get built. 🎈*
