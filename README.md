# ⚡ Nidhi CA Command Center v3

> *"CA + Trading = Rare & Powerful Combination. You are building something extraordinary."*

A single-file, all-in-one personal productivity dashboard built for a **CA Final (Group 2) student who also trades Nifty 50 options** — combining exam revision tracking, intraday trade journaling, psychology monitoring, and daily scheduling into one dark-mode command center.

---

## 🖥️ Live Preview

Open `index.html` directly in any modern browser — no build step, no server, no dependencies to install.

---

## 🚀 Features

### 📚 CA Study System
- **5× Revision Planner** — Auto-generated schedule covering all IDT (GST + Customs) and DT (Income Tax + International Taxation) topics from March 8 to May 1, 2026
- **Revision Calendar** — Visual day-wise grid; mark each revision as done; tracks overall completion percentage
- **Error Recovery System** — Log concept, time-management, emotional, and trade errors with root cause + prevention rule. Inspired by *"Diary mat bana. System bana."*
- **Daily Improvement Log** — End-of-day scoring (1–10) with highlights, struggles, and tomorrow's focus
- **Weekend Plan** — Saturday weekly tests + Sunday Python/AI learning schedule with progress tracking

### 💹 Trading (Nifty 50 Only)
- **Pre-Market Analysis** — Capture Nifty levels, SGX/GIFT Nifty signal, global cues, key support/resistance, news events, and daily bias (Bullish / Bearish / Sideways)
- **Trade Journal** — Log every trade with entry, exit, quantity, setup type, emotion at entry, and CA edge
- **Post-Market Debrief** — Bias accuracy check, best/worst trade of the day, rule violations, day-wise P&L stats, setup win-rate analysis
- **Capital Meter** — Tracks starting capital (₹15,000), real-time P&L, and daily loss limit (2% = ₹300)
- 🚨 **Hard Stop** — Automatic alert when daily loss limit is hit

### 🧠 Mindset & Psychology
- **Morning Check-In** — Mental state score (1–10) with flags (Stressed, Focused, Anxious, etc.) and daily intention
- **Discipline Tracker** — Check/break each of 5 trading rules per day
- **Cognitive Bias Log** — Auto-populated from trade emotions; frequency chart for FOMO, Loss Aversion, Revenge Trade, etc.
- **Evening Reset Ritual** — Gratitude, learning, let-go, mood before study, sleep target
- ⚠ Warning if mindset score < 6: recommends paper trading only

### 🔗 CA ↔ Trading Link
- Track trades where CA knowledge gave a market edge (DT, IDT, International Taxation)
- Weekly concept-market connection prompts

### 🤖 AI Coach
- Real-time coaching messages based on your data — bias patterns, revision imbalances, loss limits, mindset score

### ⏱️ Pomodoro Timer
- 25-min focus / 5-min break cycles, integrated with Focus Mode

### 🎯 Focus Mode
- Full-screen study immersion with today's topic, Pomodoro timer, and zero distractions

### ⏰ Schedule Tracker
- Weekday timeline: 6 AM wake → Pre-market → Live trading → 9 hours of study
- Weekend timeline: Test → Python learning → Weekly review
- Live block highlighting — shows what you *should* be doing right now

---

## 📁 Project Structure

```
index.html    ← Entire application (React + Chart.js, CDN-loaded)
README.md
```

Everything runs in a single HTML file using:
- **React 18** (via CDN)
- **Babel Standalone** (JSX in-browser transpilation)
- **Chart.js 4** (for stats)
- **Google Fonts** — Rajdhani, Oxanium, Share Tech Mono

---

## 🗓️ Study Coverage

| Subject | Period | Topics |
|---|---|---|
| IDT (GST + Customs) | Mar 5 – Mar 24 | 20 topics |
| DT (Income Tax + Int. Tax) | Mar 25 – Apr 11 | 18 topics |
| Full revision cycle | Mar 8 – May 1, 2026 | 5× each topic |

---

## 💾 Data Persistence

All data is saved to **`localStorage`** automatically — no backend, no account needed. Data includes:

- Trade log (all entries across all dates)
- Revision progress (per topic per revision round)
- Error entries
- Daily mindset check-ins
- Pre/post-market forms
- Improvement logs
- Test scores
- Python progress

> ⚠ Clearing browser localStorage will erase all data. Export important entries manually if needed.

---

## 🛠️ Setup

```bash
# Clone or download
git clone https://github.com/nidhikumari0999-lab/Nidhi_ca_command.git

# Open directly
open index.html
# or double-click index.html in your file manager
```

No npm, no build, no config. Just open and go.

---

## 📐 Configuration

Key constants at the top of the `<script>` block in `index.html`:

```js
const STARTING_CAPITAL = 15000        // Starting trading capital (₹)
const DAILY_LOSS_LIMIT_PCT = 2        // Max daily loss as % of capital
```

Modify `IDT_TOPICS` and `DT_TOPICS` arrays to adjust the study schedule to your syllabus or exam date.

---

## 📸 Sections at a Glance

| Section | Purpose |
|---|---|
| 🏠 Dashboard | Live overview — targets, P&L, AI coach, Pomodoro |
| ⏰ Schedule | Real-time timeline with current block highlighted |
| 📊 Pre-Market | Nifty levels, bias, global cues |
| 💹 Trade Journal | Log + review all trades |
| 📋 Post-Market | Debrief, day/setup stats |
| 🧠 Mindset | Check-in, discipline, bias log, evening ritual |
| 🔗 CA ↔ Trading | Track how CA knowledge drives trading edge |
| 📅 Revision Plan | Full 5× calendar for DT + IDT |
| ⚠ Error System | Error log with prevention rules |
| 📈 Improvement | Daily performance scoring |
| 🐍 Weekend Plan | Test + Python learning tracker |
| 🔁 Weekly Review | Automated weekly pattern analysis |

---

## 🧑‍💻 Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 (CDN) |
| Language | JavaScript (JSX via Babel Standalone) |
| Charting | Chart.js 4 |
| Fonts | Google Fonts (Rajdhani, Oxanium, Share Tech Mono) |
| Storage | Browser localStorage |
| Styling | Pure CSS with CSS variables |
| Build | None — single `.html` file |

---

## 📜 License

Personal use project. Feel free to fork and adapt for your own CA + trading journey.

---

*Built for the rare combination of CA discipline and market precision. Consistency compounds.*
