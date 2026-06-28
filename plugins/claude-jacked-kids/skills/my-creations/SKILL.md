---
name: my-creations
description: Show the kid everything they've made — all their games AND apps in one friendly gallery, plus their Brain Wall and rank. Read-only and celebratory; fires no learning checks and never gates anything. Use when a kid says "what did I make", "show my games", "my stuff", "my creations", "everything I built", or wants to pick something to play or change.
---

# My Creations — the kid's gallery of everything they made

A kid says *"what did I make?"*, *"show my stuff,"* *"my creations."* You show them **everything** — games and apps together — in a warm, proud, celebratory way, and offer to play or change any of it. This skill is **read-only**: it never runs a learning check, never gates, never changes anything.

## What to show

Read both manifests and the Brain Wall (all offline-safe globals):
- **Games** — from `games-manifest.js` (`window.GAMES`).
- **Apps & tools** — from `apps-manifest.js` (`window.APPS`).
- **Brain Wall + rank + Brain Points** — from `assets/brain-wall.js` (`window.BRAIN_WALL`), if present. (The [[about-me]] skill owns/writes it; show it read-only here.)
- Highlight the ones the kid dreamed up (`madeByKid: true`) with a little "✨ you made this!".

The kid's own **hub** already renders all of this (both zones + the Brain panel). So the simplest, truest "my creations" is often just **open the hub** with [[play-it]] and narrate it warmly. Use the manifests directly when you want to count or summarize ("You've made 4 games and 2 apps! 🎉").

## How to show it (for their age)

Warm and proud, never raw data:
- **Young (A/B):** big and celebratory with emoji — *"Look at everything you made, Sam! 🌟 4 games and 2 apps! Your Star Catcher, your Rocket game, your chore chart…"*
- **Older (C/D):** a tidy list framed as a portfolio — *"Your creations: ⭐ Star Catcher · 🚀 Rocket Dodge · 📝 My List · ⏰ Movie Countdown. Plus 130 Brain Points (Brain Builder)."*

Always end with a next step: *"Want to play one? Make a new one? Change one? Show a friend?"*

## Never gate, never change

- Fire **no** Brain Boost here — this is a brag sheet, not a seam. (The wall is a brag sheet, never a key.)
- Don't edit anything. To change a creation → [[change-it]]. To play one → [[play-it]]. To publish → [[put-it-online]].

## Privacy

- The Brain Wall and any greeting use the kid's **first name only** — local, never deployed.
- Never read or display anything from `.jacked-kids/` beyond what `about-me` already surfaced into `brain-wall.js`. No last name, address, etc., ever.
- **If the kid says something worrying** while browsing their creations (being hurt, scared, "nobody loves me"), the distress protocol comes first — stop, stay calm, believe them, don't interrogate, point them to a grown-up they trust, store nothing. It applies on every turn (see [[teach-and-check]] and the persona).

## How this fits the other skills

- [[play-it]] — opens the hub/gallery on screen (the usual way to "show my creations").
- [[change-it]] — change one the kid picks; [[make-a-game]] / [[make-an-app]] — make a new one.
- [[about-me]] — owns the Player Card + Brain Wall this skill displays read-only.
- [[put-it-online]] — publish one (grown-up-gated).
