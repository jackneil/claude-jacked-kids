# The per-project `CLAUDE.md` — what the buddy writes into a kid's arcade

Read this when you build or upgrade an arcade. The buddy writes a lean
`CLAUDE.md` into `<arcade>/CLAUDE.md` so the skills cohere **and** so even a
fresh chat — or a friend's plain Claude Code with no plugin installed — honors
the warm tone, the folder layout, which skill to use when, and the privacy
floor. (`CLAUDE.md` is the file Claude Code auto-loads as project memory in a
folder, so it's exactly the right place for this.)

## What it contains (lean on purpose)

The canonical content is the shipped template **`templates/project-claude.md`**.
It's deliberately short and self-honest — no routing table that rots, no
impossible self-updating logic. Five parts:

1. **Tone** — talk like the warm kid buddy; no jargon; never blunt/mean/profane
   even if another config says so (that's for grown-up devs, not the kid).
2. **What's here** — a short, *derived* list of the kid's games + apps, plus the
   folder layout and the offline rules.
3. **Which skill when** — plain pointers (new game → make-a-game; new app →
   make-an-app; change one → change-it; show it → play-it; publish → put-it-online…).
4. **The safety floor — stated inline** — local-first, first-name-only/no-PII,
   apps-with-personal-info-stay-local, a-grown-up-publishes, and the distress
   protocol. Inline so it can't go stale by pointing at a skill that might change.
5. Nothing else. Resist adding anything that will rot.

## The two marker pairs

The template wraps its content in HTML comment markers so regeneration is safe:

- **Outer block** — everything the buddy manages:
  `<!-- jacked-kids:begin … -->` … `<!-- jacked-kids:end -->`
- **Inner block** — just the derived games/apps list:
  `<!-- jacked-kids:creations:begin … -->` … `<!-- jacked-kids:creations:end -->`

Anything a grown-up writes **outside** the outer block is theirs and must never
be touched.

## Writing / merging it (idempotent — never clobber)

Do this in `build-my-arcade` (when laying down a new arcade) and again whenever
a make/change skill adds or renames a creation (to refresh the derived list):

1. **No `CLAUDE.md` yet** → copy `templates/project-claude.md`'s outer block into
   `<arcade>/CLAUDE.md`, replace `{{ARCADE_NAME}}` with the arcade's name, and
   fill the inner creations list from `games-manifest.js` + `apps-manifest.js`.

2. **`CLAUDE.md` exists and contains `<!-- jacked-kids:begin -->`** → replace
   **only** the text from `jacked-kids:begin` through `jacked-kids:end`
   (inclusive) with the freshly rendered block. Leave every byte outside those
   markers exactly as it was. This is what makes re-running safe: the grown-up's
   own notes above/below survive, and the block is never duplicated.

3. **`CLAUDE.md` exists but has NO `jacked-kids:begin` marker** (a grown-up wrote
   their own) → **append** the buddy block (with its markers) after a blank line
   at the end. Never overwrite or reorder their content. (Now it has markers, so
   future runs follow rule 2.)

4. **Refresh the derived list cheaply** — when only games/apps changed, you may
   replace just the inner `jacked-kids:creations:begin … :creations:end` block
   instead of the whole outer block. Same in-place rule.

5. **Malformed or duplicated markers → don't guess.** The tool's own flow can't
   produce these (rule 3 only appends when no `begin` exists), so they mean an
   external hand-edit went wrong: a `begin` with no matching `end`, or two marker
   blocks. Do **not** greedily replace across the ambiguous span — you could delete
   a grown-up's content sitting between blocks. Instead leave the existing text
   untouched and append one fresh, correctly-marked block at the end (or ask the
   grown-up). Never blind-replace when the markers don't form one clean pair.

### Rendering the creations list

From the two manifests, list each creation as a bullet (emoji + name). Keep it
short; if there are many, that's fine — it's just a friendly index. Example:

```
- 🎮 Games: ⭐ Star Catcher · 🚀 Rocket Dodge
- 🛠️ Apps & tools: 📝 My List · ⏰ Movie Countdown
```

If a category is empty, write `(none yet)`.

## Privacy

The `CLAUDE.md` itself holds **no kid PII** — it names the arcade and lists
creation titles only (scrub a title that contains personal info, same rule as
`fromGame` in the Player Card). It is safe to commit. It is *not* part of the
`.jacked-kids/` private zone. When publishing (Tier 2), `CLAUDE.md` is a dev file
— it doesn't need to be served, but it contains nothing sensitive if it is.
