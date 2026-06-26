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
├── .claude-plugin/marketplace.json     # makes this repo an installable marketplace
└── plugins/claude-jacked-kids/
    ├── .claude-plugin/plugin.json      # the plugin (no version → SHA = version → push = update)
    ├── settings.json                   # { "agent": "kid-buddy" } — always-on kid persona
    ├── agents/kid-buddy.md             # the warm, kid-safe main-thread persona (tone + safety)
    ├── skills/                         # the game-building playbooks (see roadmap)
    └── hooks/                          # session-start "new version available" notice (planned)
```

**The persona** (`kid-buddy`) is set as the main-thread agent, so every turn is gentle, jargon-free, fun-first, and safe — and it explicitly overrides any global "be blunt / roast the user" developer tone, because that's for grown-ups, not kids.

## Roadmap (skills, ported + generalized from the Hank's Hits framework)

The behavioral core ships now. The game-building skills are being added next:

- [ ] **`build-my-arcade`** — the from-scratch recipe: in an empty folder, build the whole kid game platform (hub, game registry + discovery, dashboard, opt-in leaderboards/cloud-save, local run, deploy, branding). Claude builds it; this skill is the recipe.
- [ ] **`make-a-game`**, **`change-a-game`**, **`remix-a-game`**, **`play-my-game`**, **`put-it-online`** (with the under-13 grown-up gate + identity scrub), **`my-creations`**, **`oops-go-back`** (undo)
- [ ] **`getting-started`**, **`about-me`** (the local "Player Card"), **`game-ideas`**
- [ ] A SessionStart hook that surfaces a friendly "new powers are ready!" update notice

These are generalized from [Hank's Hits](https://github.com/jackneil/hanks-hits), where they were built and battle-tested against a real codebase — retargeted at the conventions `build-my-arcade` establishes, so they work for any kid's arcade, not just Hank's.

---

*Made so any kid can dream up a game and watch it get built. 🎈*
