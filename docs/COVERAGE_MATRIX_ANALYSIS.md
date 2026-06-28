# claude-jacked-kids — Coverage Matrix Analysis (v2, re-anchored)

> Roles × Domains gap analysis, judged against the **right bar**: *the best possible experience for a kid building **with Claude Code**.* Working reference; the shareable version is `COVERAGE_MATRIX_ANALYSIS.html`.
> Date: 2026-06-28 · Scope: `main` + PR #11 + the audio onboarding shipped this session · Market: families using Claude Code (classroom assessed as an out-of-current-market expansion).

---

## 0. Frame correction (why v2 exists)

v1 scored this like a standalone kids' platform and penalized it for "needs a terminal + a ~$20/mo plan vs Scratch's web-instant-on." **That's the wrong denominator.** claude-jacked-kids is a **Claude Code plugin** — skills + prompts + a kid-safe persona + README guidance — whose purpose is to help a kid *learn to build using Claude Code itself* (and maybe Codex/Gemini CLI later). Claude Code (a terminal AI coding agent on a Claude plan) is the **given substrate** — like "Windows" is for a Windows app. You don't dock a Windows app for "needing Windows."

The right question: *given a family is in Claude Code, is this the best build-for-a-kid layer on top?* Under that bar the **real competitor is raw Claude Code with no plugin**, and the magic-words one-paste install is near best-in-class for a CC plugin. Re-anchoring lifts the overall score **4.56 → 5.17**, in-market **4.96 → 5.64**, sweet-spot (Mid Kid) **5.9 → 6.4** — and, more importantly, points the roadmap at the *right* gaps (motivation/sharing, pre-reader access, teen ceiling, classroom) instead of a phantom one (setup-vs-web).

---

## 1. Target Outcomes (unchanged; the root every lever ladders to)

Deliberately **zero-telemetry** (local-first, no data collection) → current values are unmeasured. *That measurement gap is itself a finding.*

| # | Outcome | Current | Target |
|---|---|---|---|
| O1 | **Time-to-first-creation** (paste → playable thing on screen) | `?` | **< 10 min** (Band-B kid) |
| O2 | **First-creation-unassisted rate** (no adult mid-build) | `?` | **≥ 80%** |
| O3 | **Repeat creations / active kid / week** | `?` | **≥ 3** |

Guardrail (non-negotiable): **safe-publish = 100%** (no PII ever reaches a published site).

---

## 2. Scoring Methodology

0–10 rubric (0 broken · 5 works-but-fights-it · 7–8 good · 9 excellent · 10 best-in-class). Each cell scores the **intersection**; capability is held separate from **experience** (feature-existence caps a cell at 7; 8+ needs walkthrough evidence). **The 10/10 ceiling is "best kid experience on the Claude Code substrate," NOT "web-instant-on standalone app."** The substrate (terminal + plan) is assumed, not penalized.

---

## 3. The Matrix (re-anchored)

| Role \ Domain | Setup & Onboard | Make-a-Game | Make-an-App | Change/Remix/Fix | Play & Show | Learn-as-build | Identity & Progress | Publish & Share | Manage & Recover | **Avg** |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **Young Kid (5–7, A)** | 4 | 4 | 3 | 3 | 4 | 4 | 4 | 3 | 4 | **3.7** |
| **Mid Kid (8–10, B)** | 6 | 8 | 7 | 7 | 6 | 8 | 6 | 4 | 6 | **6.4** |
| **Tween (11–12, C)** | 7 | 7 | 7 | 7 | 5 | 7 | 5 | 5 | 6 | **6.2** |
| **Teen (13–14, D)** | 7 | 6 | 6 | 6 | 5 | 5 | 4 | 6 | 6 | **5.7** |
| **Parent / Grown-up** | 7 | 6 | 6 | 6 | 6 | 7 | 6 | 7 | 5 | **6.2** |
| **Educator / Classroom** | 2 | 3 | 3 | 3 | 3 | 4 | 2 | 2 | 3 | **2.8** |
| **Avg** | **5.5** | **5.7** | **5.3** | **5.3** | **4.8** | **5.8** | **4.5** | **4.5** | **5.0** | |

**Overall 5.17 / 10.** In-market (excl. Educator): **5.64**. Sweet spot (Mid Kid): **6.4**.

*What moved from v1:* Setup col **2.3 → 5.5** (the magic-words one-paste is near-native; the terminal is the substrate, not a flaw). Manage col **3.2 → 5.0** (Claude Code's built-in `/rewind` checkpoints + git already provide the recovery engine). Publish col **4.0 → 4.5** (agent-driven deploy is the native bar; "no public gallery" is a standalone-platform feature, not the CC-native bar). Educator stays low — the classroom blockers (per-seat plans, no rostering/dashboard/DPA) are real *regardless* of substrate. *(The Mid-Kid Setup and Publish cells are scored to their experienced value — 6 and 4 — matching the capability/experience table in §6, not the higher capability ceiling.)*

---

## 4. Key Observations

**The asset (and it's first-of-its-kind):** the build + teach loop for the sweet-spot kid (Make-a-Game 8, Learn 8). The competitive research found **no other kid-safe Claude Code plugin exists** — and *no* agent on the substrate (raw CC, Codex, Gemini, Cursor, Aider) teaches CS while it builds. claude-jacked-kids = **raw Claude Code, made warm, safe, teaching, and choreographed for a child.** That's the one-line value prop and it's defensible.

**The real competitor is raw Claude Code.** Out of the box CC is a software-engineering assistant: dev-toned (commits/repos/localhost), no kid-safety guardrails, no teaching, blank-prompt, and on *this* machine a global "be blunt / mildly profane" CLAUDE.md would even leak onto the kid — which the `kid-buddy` persona explicitly neutralizes. Everything this product adds is the missing *kid layer*; the engine is already there.

**Lean on the substrate, don't reinvent it.** Claude Code already ships the heaviest items v1 wanted built: **`/rewind` checkpoints + git** are the "Manage & Recover" engine (v1's "urgently build auto-checkpoint" was largely reinventing a built-in); **SessionStart hooks** are the "new powers" greeting; **PreToolUse hooks** are a deterministic safety gate stronger than prompt-only rules; **Output Styles** are the documented jargon-strip. The work is *kid-skinning* these, not building them.

**The genuine remaining gaps** (now that setup is correctly scored): Play & Show (4.8) and Publish (4.7) — the "show a friend" motivation loop; Identity (4.5) — portfolio/badges; the **Young Kid row (3.7)** — pre-reader access (directly addressed by the audio shipped this session + a future voice-input mode); the **Teen row (5.7)** — a fade-to-real-code path so it doesn't feel babyish or like "cheating"; and **Educator (2.8)** — a separate product.

**Capability vs experience (Mid Kid):** still report both, but the gap closed. Setup is now **6 capability / 6 experience** (the one-paste install is genuinely good for a CC plugin; the kid still needs a grown-up for the first install, which is normal for *any* tool a 9-year-old uses). The remaining cap/exp gaps are Publish (7/4 — works but gated, no audience) and the build "coolness vs Roblox" ceiling.

---

## 5. Competitive Position (re-anchored to the substrate)

| Tier | Who | Role in the analysis |
|---|---|---|
| **THE BAR — raw Claude Code (no plugin)** | Claude Code itself | The actual default a curious family hits. Capable engine; **no kid persona, no safety, no teaching, blank-prompt, permission-prompt friction.** This is what every cell is scored against, and what the product beats. |
| **Same-substrate alternatives** (portability targets, NOT kid products) | OpenAI **Codex CLI**, **Gemini CLI**, **Cursor** (IDE), **Aider** | Same engine class, same *missing kid layer*. None ship warmth+safety+teaching. Relevant as **future ports** (the "someday Codex" goal), not competitors. |
| **Human substitute** | A parent / older sibling who codes, in CC next to the kid | Warmest+safest of all, but doesn't scale and the kid is a passenger. This product's edge vs it: **autonomy** (kid drives; adult needed only at the publish gate). |
| **The road not taken** (standalone kid platforms) | Scratch/ScratchJr, Code.org, Tynker, MakeCode, Roblox, **Rosebud AI** (AI-builds-a-game) | What a family might use *instead of the whole Claude-Code path*. They set **expectations** (web instant-on, remix community, an audience/gallery) but are **not** the per-cell bar for a CC plugin. Their one genuine lesson: kids want an **audience** — a gap this product should partly close (gated share link). |

**First-mover:** searches of the CC plugin/marketplace ecosystem (alirezarezvani/claude-skills ~337 skills, aitmpl.com ~1367 skills, daymade/claude-code-skills) found **no kid-safe building plugin** — the one education pack is *educator* tooling. Within "kid-safe persona + teaching + build-anything plugin for Claude Code," this is **effectively first / alone.**

**Honest privacy caveat:** "nothing leaves the machine" is true of *creations + the Brain Wall + the audio file*; the kid's **conversation still goes to Anthropic's API** to generate code. Market privacy as *local-storage-of-creations* best-in-class, not *zero-network*.

**Portability (the "someday Codex" goal):** *most* of the asset value — skill bodies, the persona prose, the README pedagogy — ports with light find-replace, because Codex and Claude Code share the **open Agent Skills `SKILL.md` standard** (Codex adopted it in late 2025). The rest is per-CLI glue: plugin/marketplace manifests, the persona-as-main-thread wiring, hooks, and the `/rewind` lean. Recommended sequence: **Codex CLI first** (closest plugin+skill+hook+subagent parity), Gemini CLI second, Aider only as a stretch.

---

## 6. Workflow Experience (Mid Kid, 8–10)

Walked: grown-up one-time setup → magic words → restart → "make a game where a cat catches fish" → Player Card → build → on screen → "add a high score!" → Brain Boost → "make the cat a dragon" → "an app that counts down to my birthday" → my-creations / oops-go-back.

| Domain | Capability | Experience | Note |
|---|:--:|:--:|---|
| Setup & Onboarding | 6 | 6 | One-paste install + auto-settings is near-native for a CC plugin; a grown-up doing the first install is normal, not a defect. |
| Make-a-Game | 9 | 8 | Complete/playable/offline fast; ceiling = coolness vs Roblox, latency. |
| Learn-as-you-build | 8 | 8 | The defensible wedge — no other agent teaches. |
| Manage & Recover | 6 | 6 | Leans on CC `/rewind` + git (once `oops-go-back` is wired to it); app-DATA orphan-on-rename is the residual gap (PR #11 added guidance). |
| Publish & Share | 7 | 4 | Agent-driven deploy works; gated, not one-ask, no audience. |

**Ranked friction (worst-first):** ① no audience / not-one-ask share → SHARE lever · ② blank-prompt + no first-run choreography → idea-helper/getting-started/SessionStart · ③ pre-reader access → **audio (shipped)** + voice-input · ④ `oops-go-back` not yet wired to `/rewind` → RWD lever · ⑤ unmeasurable (no telemetry) → opt-in local success signal / user study.

---

## 7. Cross-Cutting Levers (re-ranked; `(cells × gain × confidence) / effort`)

| # | Lever | Cells | Gain | Conf | Effort | Score | Outcome |
|---|---|:--:|:--:|:--:|:--:|:--:|---|
| 1 | **Kid-skin Claude Code `/rewind` + git** (save / undo / version history — *lean on the built-in, don't reinvent*) | 6 | +2.0 | High | S | **10.8** | O3, O2 |
| 2 | **Audio onboarding companion** ✅ *shipped this session* (kid + grown-up "🎧 Listen" guides + README wiring) | 6 | +2.0 | High | S | **10.8** | O2, Young-Kid access |
| 3 | **Idea discovery + first-win + SessionStart hook** (`idea-helper`, `getting-started`, the "new powers" greeting) | 10 | +1.5 | Med | S | **10.5** | O1, O2 |
| 4 | **CSTA tagging + parent/learner progress view** | 8 | +1.0 | Med | S | **5.6** | parent-trust → O3, educator-credibility |
| 5 | **Band-D fade-to-real-code / de-baby mode** (teens) | 9 | +1.5 | Med | M | **4.7** | age-range-up |
| 6 | **Band-A voice-input + picture choices** (complements the shipped audio output) | 8 | +1.5 | Med | M | **4.2** | O2, age-range-down |
| 7 | **First-run polish + a "did it work?" check** | 5 | +1.0 | Med | S | **3.5** | O1 |
| 8 | **Auto-juice + game/app breadth** | 10 | +1.0 | Med | M | **3.5** | O3 (coolness) |
| 9 | **One-tap grown-up-gated safe share link** | 8 | +2.0 | Med | L | **2.8** | O3, the audience gap |
| 10 | **Lean on CC affordances** (PreToolUse safety gate + Output Styles alignment) | 8 | +1.0 | Med | M | **2.8** | safety floor, O2 |
| 11 | **Classroom edition** | 9 | +3.5 | Med | XL | **2.8** | *different outcome* — weekly-active-orgs |
| — | **Codex / Gemini portability** (the "someday Codex" goal) | n/a | — | — | L | *strategic* | *reach* — a new substrate, doesn't lift current cells |

(Lever 2 ties Lever 1 at 10.8 by formula — both 6 cells × +2.0 × High ÷ S — and is listed second only because it's already shipped.)

**Dropped from v1:** the "no-terminal hosted path" moonshot — it contradicts the corrected frame (the terminal *is* the substrate). **Reframed from v1:** the recovery lever went M→S because it's now *skinning a built-in* (`/rewind`+git), not building a recovery system.

---

## 8. Phased Roadmap

### NOW — lean-on-substrate + prompt-native (highest ROI, cheap)
- **Kid-skin `/rewind` + git** (lever 1) — wire `oops-go-back` (and "save my progress" / "go back to yesterday") to Claude Code's **`/rewind` checkpoints + git**, kid-skinned ("I saved a snapshot of your game 📸"). Stop reinventing recovery.
- **Audio onboarding** (lever 2) — ✅ **shipped this session** (kid + grown-up "🎧 Listen" guides, transcript, README links, a persona backstop line).
- **Idea discovery + first-win** (lever 3) — `idea-helper` + `getting-started` skills + a **SessionStart hook** that greets + offers 3 concrete ideas. Kills blank-prompt paralysis; designs a first win.
- **Outcome:** O1, O2, O3. **Deps:** none (skills/hooks/built-ins). **Capacity:** all S — fits a sprint. **Projected overall:** 5.17 → ~5.6.

### NEXT — close the real gaps
- **Lever 4** CSTA tagging + a parent/learner "what they made & learned" view · **Lever 6** Band-A voice-input + picture choices (pairs with the shipped audio) · **Lever 7** first-run polish · **Lever 8** auto-juice + breadth · **Lever 10** a PreToolUse deterministic safety gate + Output-Styles alignment.
- **Outcome:** O2/O3 + parent trust + age-range-down. **Deps:** CSTA builds on `concept-cards`. **Capacity:** mix of S/M — don't co-schedule both M-safety and voice with infra. **Projected:** → ~6.2.

### LATER — expand age range, audience, substrate, market
- **Lever 5** Band-D fade-to-real-code/de-baby · **Lever 9** one-tap gated share link (→ opt-in moderated gallery: the audience lesson from Scratch) · **Codex/Gemini portability** (the "someday Codex" goal — Codex first; most of the asset ports) · **Lever 11** classroom edition (a *different product / outcome*; pursue only as a deliberate market choice).
- **Deps/capacity:** gallery needs moderation infra; portability + classroom are each multi-quarter — sequence, don't parallelize. **Projected (if pursued):** → ~7.0.

---

## 9. Target Matrix (projected column averages)

| Domain | Today (v2) | After Now | After Next | After Later |
|---|:--:|:--:|:--:|:--:|
| Setup & Onboarding | 5.5 | 6.3 | 7.0 | 7.5 |
| Make-a-Game | 5.7 | 5.9 | 6.5 | 7.3 |
| Make-an-App | 5.3 | 5.5 | 6.2 | 7.0 |
| Change/Remix/Fix | 5.3 | 5.6 | 6.0 | 6.8 |
| Play & Show | 4.8 | 5.0 | 5.6 | 6.8 |
| Learn-as-you-build | 5.8 | 6.2 | 6.9 | 7.4 |
| Identity & Progress | 4.5 | 4.8 | 5.6 | 6.5 |
| Publish & Share | 4.5 | 4.7 | 5.4 | 6.6 |
| Manage & Recover | 5.0 | 6.6 | 6.8 | 7.2 |
| **Overall** (mean of columns) | **5.2** | **5.6** | **6.2** | **7.0** |

---

## 10. Strategic Recommendations
- **Press the wedge:** "the only AI that *builds your game/app AND teaches you while it does* — and keeps it all on your computer." It's first-of-its-kind on the Claude Code substrate. Lead with it; lean into **Make-an-App for young kids** (white space even beyond the substrate).
- **Don't reinvent the substrate.** Skin `/rewind`+git, fire a SessionStart greeting, add a PreToolUse safety gate — these are free, native, and stronger than bespoke prompt-only versions.
- **The audience gap is the one real lesson from the standalone platforms.** Kids want someone to play their thing — close it with the gated share link (and, later, a moderated opt-in gallery), within the existing safety model.
- **Two roles are different products:** the Teen (needs fade-to-real-code so it isn't "cheating") and the Educator (needs seat pricing + rostering + DPA). Treat each as a deliberate, separately-scoped bet.
- **Plan for portability** so the pedagogy isn't Claude-Code-locked: keep skill bodies + persona + README tool-agnostic; isolate the CC-specific glue. Codex CLI is the natural first port.

*Sources for all competitor, substrate, developmental, standards, and tooling claims are in the HTML report's "Sources & references."*
