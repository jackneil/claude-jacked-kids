<div align="center">

<img src="docs/img/hero.jpg" alt="A happy kid and a friendly robot buddy surrounded by games and gadgets" width="840">

# 🎮 Make Your Own Games & Apps! 🛠️

### Just say what you want. Your buddy builds it. ✨

🎮 *"Make a monster truck that jumps over school buses!"* &nbsp;·&nbsp; ⏰ *"An app that counts down to the new dinosaur movie!"*

🐱 *"A cat that catches falling fish!"* &nbsp;·&nbsp; 🚀 *"A rocket that dodges asteroids!"*

🧹 *"A chore chart for me and my brother!"* &nbsp;·&nbsp; ⚾ *"A page to keep score of my baseball season!"*

<br>

**You talk. It builds. You play it, use it, and show it off.**

No code. No hard stuff. 🎉

<br>

<a href="https://jackneil.github.io/claude-jacked-kids/audio/listen.html"><img src="docs/img/listen-button.png" alt="Press play — listen to what to do (about a minute)" width="460"></a>

<sub>🔊 grown-ups: press play for your kid — great if they can't read yet &nbsp;·&nbsp; AI voice</sub>

</div>

---

## 🎈 What is this?

A **friendly buddy** that lives inside an app called **Claude Code**. You tell it what you want — in your own words — and it builds the whole thing and shows it on your screen. It's not just games:

- 🎮 **Games** — monster trucks, cats catching fish, rockets, dragons… whatever you dream up.
- 🛠️ **Apps & tools that do real stuff** — a countdown to movie night, a tracker where you keep your touchdowns, a chore chart, a flashcard quiz for your spelling words, a "rate my sandwich" picker, a money-saver… real things that help *you*. (You type your own stuff in — your buddy makes it look awesome and remembers it for you.)

Then you can play it, use it, change it, and (with a grown-up) put it on the internet to share.

It also **teaches you cool stuff while it builds**, and gives you 🧠 **Brain Points** when you figure things out. (More on that down below.)

> 🧑 **Grown-ups:** this is a plugin for **Claude Code** (Anthropic's AI tool). It's warm, jargon-free, and kid-safe — it ignores any "be blunt" developer settings. Setup, cost, and what-computer info are in the **🧑 For grown-ups** section further down. Short version: you'll need Claude Code + a Claude plan (~**$20/month**), best on a Mac.

---

## 👨‍👩‍👧 Parents: what you need to do first

Your kid will talk to a friendly AI buddy that builds their games and apps. **You just set a few things up once** — no tech knowledge required. Here's the whole list, in order:

[<img src="docs/img/listen-button.png" alt="Press play to listen" width="340">](https://jackneil.github.io/claude-jacked-kids/audio/listen.html)
> <sub>🔊 a 1-minute welcome for your kid **and** a quick setup guide for you — on the same page · AI voice</sub>


1. **💻 A computer — a Mac is best.** Minimum: a **[MacBook Neo](https://www.apple.com/macbook-neo/)** (~$599, Apple's budget MacBook). Better: a **MacBook Air with 16GB of RAM**. Windows works, but isn't quite as good for this.
2. **💵 A Claude plan (~$20/month).** This powers the buddy — get **Pro** at [claude.com/pricing](https://claude.com/pricing). (There's no free version.)
3. **⬇️ Install Claude Code** — a free app from Anthropic that runs the buddy. One command does it (**click-by-click steps for Mac & Windows are in the next section**), then you sign in with your Claude plan.
4. **🎙️ A Wispr Flow account (recommended).** So your kid can **talk instead of type** — sign up at [wisprflow.ai](https://wisprflow.ai); on a Mac they hold the 🌐 globe key and just speak. *Bonus: one account works on all **your** devices too — sign yourself in and you get voice-typing everywhere.*
5. **🧩 Install the buddy** — paste the "magic words" and it installs itself **and** turns on the best model + fewer pop-ups for you (**steps in the next section**).
6. **🙌 Hand it to your kid.** Make a folder, start the buddy in it, and let them go: *"make me a game where…"* or *"build me an app that…"* 🎉

> 🆕 **Never done any of this before?** That's exactly who the next section is for — the **full, click-by-click setup for 🍎 Mac and 🪟 Windows.** Follow it top to bottom and you'll be done.

---

## 🚀 Already have Claude Code open? Do THIS (the magic words)

If a grown-up already set up Claude Code and it's open and waiting for you, just **paste these magic words** to your buddy and press Enter:

> 🔊 **Want to hear what to do? [▶️ Press play](https://jackneil.github.io/claude-jacked-kids/audio/listen.html)** — a grown-up can press it for you. <sub>(AI voice)</sub>


```text
Hi Claude! I'm a kid and I want to make my own games and apps. Please set up my
building buddy for me:

1. Install AND turn on my buddy so it's on in every folder — run all three:
   claude plugin marketplace add jackneil/claude-jacked-kids
   claude plugin install claude-jacked-kids@claude-jacked-kids
   claude plugin enable claude-jacked-kids@claude-jacked-kids

2. Edit my ~/.claude/settings.json so "model" is "opus" (the best model) and
   "permissions" has "defaultMode" set to "auto" (so I'm not asked to approve
   every little thing). Keep any other settings that are already in there.

Then tell me to FULLY QUIT Claude Code and open it again (a restart is what
switches my buddy on). When it comes back, the buddy should say hi to me all
by itself and ask what I want to make — that's how we know it worked. Then
help me make my very first game or app, and explain everything in fun, simple
words! 🎮🛠️
```

Your buddy will set itself up, ask you to **close and re-open Claude Code**, and then help you build your first thing. **That's it!** 🎉

*(A grown-up might need to tap "yes/allow" a couple of times — that's normal.)*

> 🧑 **Grown-ups — about those two settings the buddy just turned on:**
> - **Best model (`"model": "opus"`)** gives your kid Claude's best brain (today Opus 4.8; the `opus` alias auto-tracks the newest one) = best results. *It uses your Pro plan's hours faster, though — if your kid keeps hitting "you've reached your limit," just change that one word to **`opusplan`** (nearly as smart, far more hours).*
> - **Fewer pop-ups (`"permissions": {"defaultMode": "auto"}`)** stops the buddy from asking your kid to approve every action — **while a built-in safety check still blocks the genuinely dangerous stuff** (downloading-and-running scripts, sending data out, mass-deleting files). It's a research-preview helper, not a force-field, so still peek at what's being built now and then. **Don't** switch to a "bypass" mode — that removes the safety check entirely.
> - Rather set these by hand? Put this in `~/.claude/settings.json`: `{ "model": "opus", "permissions": { "defaultMode": "auto" } }` (these live in the home-folder file and stick forever).
> - **Buddy not greeting your kid on its own after a restart?** Then the plugin got installed but not switched on — the usual culprit. Run `claude plugin enable claude-jacked-kids@claude-jacked-kids`, then **fully quit and reopen** Claude Code (the buddy only switches on at a fresh start, never mid-session). To confirm it's active: type `/agents` — you should see `claude-jacked-kids:kid-buddy`, and the header shows an `@kid-buddy` badge. Still nothing? Open `/plugin`, check `claude-jacked-kids` shows **enabled**, then restart.

---

## 🐣 Starting from nothing? Let's set it up together!

No Claude Code yet? That's okay — we'll go nice and slow. (Got the prerequisites from **👨‍👩‍👧 Parents: what you need to do first** above? Good.) **Grab a grown-up**, then pick your computer:

> 🖥️ **We use Claude Code in a *terminal*** (a typing window you'll open in a minute) — **not** the Claude **Desktop** app. If you have the Claude Desktop app, leave it closed for this; it's a different thing.

> 📖 **Apps change over time — if a step below ever looks different, the official pages are the boss:** [Install Claude Code](https://code.claude.com/docs/en/setup) · [Never used a terminal? Claude's beginner guide](https://code.claude.com/docs/en/terminal-guide) · [Claude pricing/plans](https://claude.com/pricing).

<details>
<summary><h3>🍎 I have a Mac — tap here</h3></summary>

**Do these in order. The 🧑 steps are for a grown-up.**

#### ⭐ First time only — install Claude Code

1. 🧑 **Get a Claude plan** (about $20/month) at [claude.com/pricing](https://claude.com/pricing). You'll sign in with it soon.

2. **Open a terminal** (a typing window): hold **Command (⌘)** and tap **Spacebar**, type **`Terminal`**, press **Enter**. A plain window with a blinking cursor opens — don't be scared, it's just a place to type. 😊
   - 🧑 *Nicer terminal (optional):* lots of people prefer **iTerm2** — a free, friendlier terminal from [iterm2.com](https://iterm2.com). Either works.

3. **Install Claude Code.** Copy this, paste it in (**⌘ + V**), press **Enter**, wait a minute — then **close the terminal**:
   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```
   - 📖 *If that command ever fails or looks out of date, use Claude's current install page:* [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup)

#### 🛠️ Every time you want to build something

4. **Make a folder for your creations.** In **Finder**, go to your Desktop, right-click → **New Folder**, and name it **`my-creations`**. 📁

5. **Open a terminal _inside_ that folder.** Open Terminal (or iTerm2), type **`cd `** (with a space), then **drag your `my-creations` folder onto the window** so it fills in the path, and press **Enter**.
   - *(Slick shortcut: turn on Finder's right-click → **New Terminal at Folder** in System Settings → Keyboard → Keyboard Shortcuts → Services, then just right-click the folder.)*

6. **Start your buddy.** Type **`claude`** and press **Enter**.
   - 🧑 *First time only:* your **web browser opens to sign in** — a grown-up signs in with the Claude plan. ✅

7. **First time only:** paste the **🚀 magic words** from the top of this page (**⌘ + V**), press Enter, and when it says to **close and re-open**, do so — then open a terminal in `my-creations` again (step 5) and run **`claude`**. You'll know it worked when your **buddy says hi to you first** and asks what you want to make. 🎉

8. **Build something!** 🎉 Say: *"Let's make a game where a cat catches fish!"* 🐱🐟 — or *"Build me an app that tracks my touchdowns!"* 🏈

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

#### 🛠️ Every time you want to build something

4. **Make a folder for your creations.** Open **File Explorer**, go to your Desktop, right-click → **New → Folder**, name it **`my-creations`**, and **double-click to open it**. 📁

5. **Open a command window _inside_ that folder** — the slick trick: click the **address bar** at the top of File Explorer (where the folder name shows), type **`cmd`**, and press **Enter**. A command window opens, already in your `my-creations` folder. 🎯
   - *(On Windows 11 you can instead right-click the folder → **Open in Terminal**.)*

6. **Start your buddy.** Type **`claude`** and press **Enter**.
   - 🧑 *First time only:* your **web browser opens to sign in** — a grown-up signs in with the Claude plan. ✅

7. **First time only:** paste the **🚀 magic words** from the top of this page (**Ctrl + V** or right-click), press Enter, and when it says to **close and re-open**, do so — then open `my-creations` again, type `cmd` in the address bar (step 5), and run **`claude`**. You'll know it worked when your **buddy says hi to you first** and asks what you want to make. 🎉

8. **Build something!** 🎉 Say: *"Let's make a game where a rocket dodges asteroids!"* 🚀☄️ — or *"Build me an app for my baseball stats!"* ⚾

> 🧑 *Optional:* installing [Git for Windows](https://git-scm.com/downloads/win) (click Next on every screen) gives Claude Code a smoother experience — not required.

</details>

---

## 🕹️ Now what? Just talk to your buddy!

<div align="center">
<img src="docs/img/building-games.jpg" alt="A kid building a game with the buddy" width="560">
</div>

Type (or **talk** — see below) stuff like:

- 🎨 *"Make a game where a dragon flies through caves!"*
- 🏈 *"Build an app where I list my touchdowns and it shows my best game."*
- ⏰ *"Make an app that counts down to summer break!"* &nbsp;·&nbsp; 🧠 *"A quiz for my spelling words!"*
- 🔧 *"Make my truck jump higher!"* &nbsp;·&nbsp; 🏆 *"Add a high score!"*
- ▶️ *"Let me play it now!"* &nbsp;·&nbsp; 🌈 *"Make it nighttime with stars!"*

Your buddy builds it, opens it on your screen, and cheers you on. The more you make, the bigger your **Brain Wall** grows. 🧠

> 🎙️ **Talk instead of typing!** Holding a key and just *talking* is way easier than typing. Install **[Wispr Flow](https://wisprflow.ai)** — then on a Mac, hold the **🌐 globe key** and speak; it types your words for you anywhere, including to your buddy. (Grown-ups: see the note below — you can use it too.)

---

## 🧠 It teaches you while you build

<div align="center">
<img src="docs/img/learning.jpg" alt="A kid having an aha moment with the buddy" width="560">
</div>

Your buddy isn't just a builder — it's a little teacher, and it makes learning a **game**:

> *"YES, a laser cannon! 😎 Quick — to earn it: does the memory box **remember** your scores, or **forget** them?"*

- ✅ **It's an unlock, never a wall.** You always keep the thing you made. A question only stands in front of the *next* cool thing — and if you're not sure, your buddy explains it a different way, gives a hint, and finally says the answer *with* you. **You never get stuck.**
- 🧠 **Right answers earn Brain Points** and stickers on your own "Things I Learned" wall, with a rank that grows as you learn (Curious Cub → Spark Scout → … → Mastermind!).
- 🎚️ **It fits you.** Little kids get easy either/or questions; bigger kids get "say it in your own words" and "why" questions. You can answer by **talking** (voice-to-text) — spelling doesn't matter.

---

## 🧑 For grown-ups (please read)

- 💵 **Cost:** Claude Code needs a paid **Claude plan** — a **Pro** plan (~**$20/month**) includes it; **Max** starts at ~$100/month for heavy use. The free Claude.ai chat tier does **not** include Claude Code. Check current prices at [claude.com/pricing](https://claude.com/pricing).
- 💻 **Computer:** a **Mac** is best. Minimum a **[MacBook Neo](https://www.apple.com/macbook-neo/)** (~$599); a **MacBook Air with 16GB RAM** is better. Windows works but isn't quite as good for this, in our opinion.
- 🎙️ **Voice typing (Wispr Flow):** kids talk way faster than they type. Set up a **[Wispr Flow](https://wisprflow.ai)** account so they can hold the 🌐 globe key on a Mac and just speak. **Bonus: one account works across all your devices** — sign your kid in on theirs, then sign in *yourself* on your phone and laptop, and you get voice-typing everywhere too. (Parents usually end up using it more than the kid.)
- 🔒 **Privacy:** everything your kid **makes** stays **on your computer**, and so does the little the buddy remembers about them — only a first name, age, a few interests, and which ideas they've learned, **never** a last name, address, school, phone, or photos. (Like any AI app, the buddy *does* talk to Claude over the internet to build things — but nothing your kid makes is shared or put online unless you choose to.) Delete it all by removing the `.jacked-kids` folder in the child's creations folder.
- 🌍 **Going online is a grown-up step.** Creations run locally by default. Publishing to the internet needs a grown-up (under-13), and personal info is scrubbed first.
- 🎚️ **You hold a learning dial.** Tell the buddy: *"I'm the grown-up — set learning checks to off / light / normal / strict."*
- 🔁 **Staying updated (automatic):** turn it on once — `/plugin` → Marketplaces → `claude-jacked-kids` → **Enable auto-update**. Because the plugin is only prompts/skills, an update **can never break something your kid already made** — it just refreshes the buddy's know-how.
- 🛠️ **Prefer the terminal?** The whole install is three lines (install **and enable**, or the buddy stays dormant):
  ```bash
  claude plugin marketplace add jackneil/claude-jacked-kids
  claude plugin install claude-jacked-kids@claude-jacked-kids
  claude plugin enable  claude-jacked-kids@claude-jacked-kids
  ```
  then **fully restart** Claude Code (the `agent` persona loads only at session start; `/reload-plugins` picks up skills but a restart is what promotes the main-thread buddy). Confirm with `/agents` (look for `claude-jacked-kids:kid-buddy`). In a session you can also manage it via `/plugin`.

---

<details>
<summary><h2>🧰 For developers (what's inside)</h2></summary>

A **Claude Code plugin**: pure skills + a kid-safe persona. It ships **no application code** — the skills hold the know-how, and Claude builds each kid's **creations hub** (games *and* apps/tools) from scratch in their own folder (offline-first; can deploy; can grow into a logins+leaderboards platform). Companion to the grown-up [`claude-jacked`](https://github.com/jackneil/claude-jacked).

```
claude-jacked-kids/
├── .claude-plugin/marketplace.json         # makes this repo an installable marketplace
├── docs/audio/                             # 🎧 listen-instead onboarding: listen.html player (GitHub Pages) + kid/grown-up mp3s + transcript
├── docs/teach-and-check-design.html        # design spec for the learn-as-you-build gate
└── plugins/claude-jacked-kids/
    ├── .claude-plugin/plugin.json          # the plugin (no version → SHA = version → push = update)
    ├── settings.json                       # { "agent": "kid-buddy" } — always-on kid persona
    ├── agents/kid-buddy.md                 # the warm, kid-safe main-thread persona (tone + safety)
    └── skills/
        ├── build-my-arcade/                # from-scratch recipe: the kid's offline-first creations hub (games + apps) + project CLAUDE.md
        ├── make-a-game/                    # build one self-contained game island
        ├── make-an-app/                    # build one app/tool/toy island (generic "make me a thing that…")
        ├── change-it/                      # edit / fix / remix any game or app — the main teach-and-check seam
        ├── play-it/                        # open the hub or a creation on screen (auto-runs after every build)
        ├── my-creations/                   # gallery of everything made (games + apps) + Brain Wall
        ├── put-it-online/                  # grown-up-gated publish with the identity scrub (deploys via deploy-to-railway)
        ├── oops-go-back/                   # undo the last change (never touches saved progress)
        ├── about-me/                       # local "Player Card": name, age, interests + "Things I Learned" wall
        └── teach-and-check/                # learn-as-you-build gate: teach, check, earn Brain Points
```

The persona (`kid-buddy`) is the main-thread agent, so every turn is gentle, jargon-free, and safe — and it explicitly overrides any global "be blunt / roast the user" developer tone. The plugin **omits the `version` field on purpose**, so every push to this repo *is* a new version.

### Roadmap

**Shipped:** the full building roster — `build-my-arcade` (offline-first hub for games *and* apps; writes a per-project `CLAUDE.md`; optional Railway deploy; optional clone-of-Hank's-Hits for logins+leaderboards), `make-a-game`, `make-an-app` (generic "build me a thing that…"), `change-it`, `play-it`, `my-creations`, `put-it-online` (under-13 grown-up gate + identity scrub), `oops-go-back`, plus `about-me` (Player Card + Brain Wall + parent dial) and `teach-and-check` (the learn-as-you-build gate — full design in `docs/`). Apps mirror games as `apps/<id>/` islands (`window.APPS` + `window.AppStore`).

**Next:** a SessionStart "new powers are ready!" notice; optional `getting-started` / `idea-helper` warm-ups; and continued depth on the roster. Every skill builds on `build-my-arcade`'s conventions and fires `teach-and-check` at the seams.

Generalized from [Hank's Hits](https://github.com/jackneil/hanks-hits), retargeted at the conventions `build-my-arcade` establishes so they work for any kid's creations hub.

</details>

---

<div align="center">

*Made so any kid can dream something up — a game, an app, anything — and watch it get built.* 🎈

</div>
