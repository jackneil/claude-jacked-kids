<div align="center">

# 🎮 Make Your Own Video Games! 🎮

### Just say what you want. Your buddy builds it. ✨

*"Make a monster truck that jumps over school buses!"* 🚚💥
*"A cat that catches falling fish!"* 🐱🐟
*"A rocket that dodges asteroids!"* 🚀☄️

**You talk. It builds. You play.** No code. No hard stuff. 🎉

</div>

---

## 🎈 What is this?

This is a **friendly buddy** that lives inside an app called **Claude Code**. You tell it what game you want — in your own words — and it builds the whole game and shows it to you on your screen. Then you can play it, change it, and (with a grown-up) even put it on the internet for friends.

It also **teaches you cool stuff while it builds**, and gives you 🧠 **Brain Points** when you figure things out. (More on that down below.)

> 🧑 **Grown-ups:** this is a plugin for **Claude Code** (Anthropic's AI coding tool). It's warm, jargon-free, and safe for kids — it ignores any "be blunt" developer settings. Setup + cost details are in the **🧑 For grown-ups** section further down. Short version: you'll need Claude Code installed and a Claude plan (about **$20/month**).

---

## 🚀 Already have Claude Code open? Do THIS (the magic words)

If a grown-up already set up Claude Code and it's open and waiting for you, just **paste these magic words** to your buddy and press Enter:

```text
Hi Claude! I'm a kid and I want to make my own video games. Please set up my
game-building buddy for me. Run these two things for me:

claude plugin marketplace add jackneil/claude-jacked-kids
claude plugin install claude-jacked-kids@claude-jacked-kids

Then tell me to close Claude Code and open it again. After that, help me make
my very first game — and explain everything in fun, simple words! 🎮
```

Your buddy will set itself up, ask you to **close and re-open Claude Code**, and then help you make your first game. **That's it!** 🎉

*(A grown-up might need to tap "yes/allow" a couple of times — that's normal.)*

---

## 🐣 Starting from nothing? Let's set it up together!

No Claude Code yet? That's okay — we'll go nice and slow. **Grab a grown-up** for this part, then pick your computer:

> 🧑 **Grown-ups, the honest bit first:** Claude Code needs a paid **Claude plan** (a **Pro** plan is about **$20/month**). There is **no free version** for this. One plan covers Claude everywhere. Prices can change — check [claude.com/pricing](https://claude.com/pricing).

> 🖥️ **We use Claude Code in a *terminal*** (a typing window you'll open in a minute) — **not** the Claude **Desktop** app. If you have the Claude Desktop app, leave it closed for this; it's a different thing.

> 📖 **Apps change over time — if a step below ever looks different, the official pages are the boss:** [Install Claude Code](https://code.claude.com/docs/en/setup) · [Never used a terminal? Claude's beginner guide](https://code.claude.com/docs/en/terminal-guide) · [Claude pricing/plans](https://claude.com/pricing).

<details>
<summary><h3>🍎 I have a Mac — tap here</h3></summary>

**Do these in order. The 🧑 steps are for a grown-up.**

#### ⭐ First time only — install Claude Code

1. 🧑 **Get a Claude plan** (about $20/month) at [claude.com/pricing](https://claude.com/pricing). You'll sign in with it soon.

2. **Open a terminal** (a typing window): hold **Command (⌘)** and tap **Spacebar**, type **`Terminal`**, press **Enter**. A plain window with a blinking cursor opens — don't be scared, it's just a place to type. 😊
   - 🧑 *Nicer terminal (optional):* lots of people prefer **iTerm2** — it's a free, friendlier terminal from [iterm2.com](https://iterm2.com). Use it instead of Terminal if you like; either works.

3. **Install Claude Code.** Copy this, paste it in (**⌘ + V**), press **Enter**, wait a minute — then **close the terminal**:
   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```
   - 📖 *If that command ever fails or looks out of date, use Claude's current install page:* [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup)

#### 🎮 Every time you want to make games

4. **Make a folder for your games.** In **Finder**, go to your Desktop, right-click → **New Folder**, and name it **`my-games`**. 📁

5. **Open a terminal _inside_ that folder.** Open Terminal (or iTerm2), type **`cd `** (with a space), then **drag your `my-games` folder onto the window** so it fills in the path, and press **Enter**.
   - *(Slick shortcut: turn on Finder's right-click → **New Terminal at Folder** in System Settings → Keyboard → Keyboard Shortcuts → Services, then just right-click the folder.)*

6. **Start your buddy.** Type **`claude`** and press **Enter**.
   - 🧑 *First time only:* your **web browser opens to sign in** — a grown-up signs in with the Claude plan. ✅

7. **First time only:** paste the **🚀 magic words** from the top of this page (**⌘ + V**), press Enter, and when it says to **close and re-open**, do so — then open a terminal in `my-games` again (step 5) and run **`claude`**.

8. **Make a game!** 🎉 Say: *"Let's make a game where a cat catches fish!"* 🐱🐟

</details>

<details>
<summary><h3>🪟 I have a Windows computer — tap here</h3></summary>

**Do these in order. The 🧑 steps are for a grown-up.**

#### ⭐ First time only — install Claude Code

1. 🧑 **Get a Claude plan** (about $20/month) at [claude.com/pricing](https://claude.com/pricing). You'll sign in with it soon.

2. **Open PowerShell** (a typing window): hold the **Windows key** and tap **X**, then click **Windows PowerShell** (or **Terminal**). You're in the right one if you see **`PS C:\Users\...`**. *(The plain black "Command Prompt" / CMD won't work for THIS install step — use PowerShell.)*

3. **Install Claude Code.** Copy this, paste it (**Ctrl + V** or right-click), press **Enter**, wait a minute — then **close the window**:
   ```powershell
   irm https://claude.ai/install.ps1 | iex
   ```
   - 📖 *If that command ever fails or looks out of date, use Claude's current install page:* [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup)
   - 🧑 *Nicer terminal (optional):* [**Windows Terminal**](https://learn.microsoft.com/en-us/windows/terminal/install) is a friendlier app than the old black CMD box (built in on Windows 11; free in the Microsoft Store on Windows 10). Totally optional.

#### 🎮 Every time you want to make games

4. **Make a folder for your games.** Open **File Explorer**, go to your Desktop, right-click → **New → Folder**, name it **`my-games`**, and **double-click to open it**. 📁

5. **Open a command window _inside_ that folder** — the slick trick: click the **address bar** at the top of File Explorer (where the folder name shows), type **`cmd`**, and press **Enter**. A command window opens, already in your `my-games` folder. 🎯
   - *(On Windows 11 you can instead right-click the folder → **Open in Terminal**.)*

6. **Start your buddy.** Type **`claude`** and press **Enter**.
   - 🧑 *First time only:* your **web browser opens to sign in** — a grown-up signs in with the Claude plan. ✅

7. **First time only:** paste the **🚀 magic words** from the top of this page (**Ctrl + V** or right-click), press Enter, and when it says to **close and re-open**, do so — then open `my-games` again, type `cmd` in the address bar (step 5), and run **`claude`**.

8. **Make a game!** 🎉 Say: *"Let's make a game where a rocket dodges asteroids!"* 🚀☄️

> 🧑 *Optional:* installing [Git for Windows](https://git-scm.com/downloads/win) (click Next on every screen) gives Claude Code a smoother experience — not required.

</details>

---

## 🕹️ Now what? Just talk to your buddy!

Type stuff like:

- 🎨 *"Make a game where a dragon flies through caves!"*
- 🔧 *"Make my truck jump higher!"*
- 🏆 *"Add a high score!"*
- ▶️ *"Let me play it now!"*
- 🌈 *"Make it nighttime with stars!"*

Your buddy builds it, opens it on your screen, and cheers you on. The more you make, the bigger your **Brain Wall** grows. 🧠

---

## 🧠 It teaches you while you build

Your buddy isn't just a builder — it's a little teacher, and it makes learning a **game**:

> *"YES, a laser cannon! 😎 Quick — to earn it: does the memory box **remember** your scores, or **forget** them?"*

- ✅ **It's an unlock, never a wall.** You always keep the game you made. A question only stands in front of the *next* cool thing — and if you're not sure, your buddy explains it a different way, gives a hint, and finally says the answer *with* you. **You never get stuck.**
- 🧠 **Right answers earn Brain Points** and stickers on your own "Things I Learned" wall, with a rank that grows as you learn (Curious Cub → Spark Scout → … → Mastermind!).
- 🎚️ **It fits you.** Little kids get easy either/or questions; bigger kids get "say it in your own words" and "why" questions. You can answer by **talking** (voice-to-text) — spelling doesn't matter.

---

## 🧑 For grown-ups (please read)

- 💵 **Cost:** Claude Code needs a paid **Claude plan** — a **Pro** plan (~**$20/month**) includes it; **Max** starts at ~$100/month for heavy use. The free Claude.ai chat tier does **not** include Claude Code. Check current prices at [claude.com/pricing](https://claude.com/pricing).
- 🔒 **Privacy:** everything stays **on your computer**. The buddy keeps only a first name, age, a few interests, and which ideas the child has learned — **never** a last name, address, school, phone, or photos. Delete it all by removing the `.jacked-kids` folder in the child's game folder.
- 🌍 **Going online is a grown-up step.** Games run locally by default. Publishing to the internet needs a grown-up (under-13), and personal info is scrubbed first.
- 🎚️ **You hold a learning dial.** Tell the buddy: *"I'm the grown-up — set learning checks to off / light / normal / strict."*
- 🔁 **Staying updated (automatic):** turn it on once — `/plugin` → Marketplaces → `claude-jacked-kids` → **Enable auto-update**. Because the plugin is only prompts/skills, an update **can never break a game your kid already made** — it just refreshes the buddy's know-how.
- 🛠️ **Prefer the terminal?** The whole install is two lines:
  ```bash
  claude plugin marketplace add jackneil/claude-jacked-kids
  claude plugin install claude-jacked-kids@claude-jacked-kids
  ```
  then restart Claude Code (or `/reload-plugins`). In a session you can also use `/plugin`.

---

<details>
<summary><h2>🧰 For developers (what's inside)</h2></summary>

A **Claude Code plugin**: pure skills + a kid-safe persona. It ships **no application code** — the skills hold the know-how, and Claude builds each kid's game arcade from scratch in their own folder (offline-first; can deploy; can grow into a logins+leaderboards platform). Companion to the grown-up [`claude-jacked`](https://github.com/jackneil/claude-jacked).

```
claude-jacked-kids/
├── .claude-plugin/marketplace.json         # makes this repo an installable marketplace
├── docs/teach-and-check-design.html        # design spec for the learn-as-you-build gate
└── plugins/claude-jacked-kids/
    ├── .claude-plugin/plugin.json          # the plugin (no version → SHA = version → push = update)
    ├── settings.json                       # { "agent": "kid-buddy" } — always-on kid persona
    ├── agents/kid-buddy.md                 # the warm, kid-safe main-thread persona (tone + safety)
    └── skills/
        ├── build-my-arcade/                # from-scratch recipe: the kid's whole offline-first arcade
        ├── about-me/                       # local "Player Card": name, age, interests + "Things I Learned" wall
        └── teach-and-check/                # learn-as-you-build gate: teach, check, earn Brain Points
```

The persona (`kid-buddy`) is the main-thread agent, so every turn is gentle, jargon-free, and safe — and it explicitly overrides any global "be blunt / roast the user" developer tone. The plugin **omits the `version` field on purpose**, so every push to this repo *is* a new version.

### Roadmap

**Shipped:** `build-my-arcade` (offline-first arcade; optional Railway deploy; optional clone-of-Hank's-Hits for logins+leaderboards), `about-me` (Player Card + Brain Wall + parent dial), `teach-and-check` (the learn-as-you-build gate — full design in `docs/`).

**Next:** `make-a-game`, `change-a-game`, `remix-a-game`, `play-my-game`, `put-it-online` (under-13 grown-up gate + identity scrub), `my-creations`, `oops-go-back`, `getting-started`, `game-ideas`, and a SessionStart "new powers are ready!" notice. Each builds on `build-my-arcade`'s conventions and fires `teach-and-check` at the seams.

Generalized from [Hank's Hits](https://github.com/jackneil/hanks-hits), retargeted at the conventions `build-my-arcade` establishes so they work for any kid's arcade.

</details>

---

<div align="center">

*Made so any kid can dream up a game and watch it get built.* 🎈

</div>
