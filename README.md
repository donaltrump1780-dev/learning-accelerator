# Learning Accelerator

**Learn Manning content by building, not watching.**

Built for Ved Singh - a learning system tailored to how you actually work.

---

## The Problem

- Videos are boring after 10 minutes
- Too lazy for traditional study
- Learn best by doing, not watching
- Need accountability

## The Solution

**Learn by building + gamification + spaced repetition + validation**

Not a course. A learning *system*.

---

## Features

### 1. 📊 Dashboard
Your command center showing:
- Total XP and day streak
- Cards due for review
- Next suggested challenge
- Milestones unlocked

### 2. 🎯 Challenge Generator
Turns theory → hands-on build challenges:
- **Foundation:** Tokenization, Embeddings, Attention
- **Intermediate:** Fine-tuning, Prompting
- **Advanced:** Multimodal, Orchestration

Each challenge:
- Time-boxed (2-5 hours)
- Clear win condition
- Real-world output you can use

### 3. 🧠 Spaced Repetition Quiz
Science-based flashcard system (SM-2 algorithm):
- Review cards just before you forget
- Build long-term retention
- Track mastery levels

### 4. 🎓 Teach Back Validator
You don't truly understand until you can explain it:
- Submit your explanation
- Get validation feedback
- Prove you actually get it

### 5. 📈 Progress Tracker
Gamified skill tree:
- XP system (earn by completing challenges)
- Daily streak tracking
- Milestones: Bronze → Silver → Gold → Diamond
- Tier progress (Foundation → Advanced)

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start the server
```bash
npm start
```

### 3. Open in browser
```
http://localhost:3000
```

---

## Your Learning Loop

### Daily (10-30 min)
1. Check dashboard
2. Review flashcards
3. Work on current challenge

### Weekly
- Complete 1-2 challenges
- Teach back 1 concept
- Update progress

### Monthly
- Ship 1 product using what you learned
- Reflect and adjust

---

## Why This Works

### 1. Learn by Doing
Every challenge = something you BUILD, not watch.

### 2. Gamification
XP, streaks, milestones keep you motivated.

### 3. Spaced Repetition
Review cards = long-term retention (science-backed).

### 4. Validation
Teach back = prove you actually understand.

### 5. Time-Boxed
Challenges are 2-5 hours max. Finish in one session.

### 6. Practical
Build things you'll actually use.

---

## Your Edge

**Everyone watches Karpathy videos. Few people BUILD what he teaches.**

This system forces you to:
1. Build immediately (challenge-based)
2. Retain long-term (spaced repetition)
3. Validate understanding (teach back)
4. Track progress (XP + streak)

**Result:** You ship products faster than people who just watch courses.

---

## Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** Vanilla JS (no framework bloat)
- **Storage:** JSON files (simple, portable)
- **UI:** Custom CSS (clean, modern, fast)

---

## Rules

### 1. No Passive Learning
If you're just watching → STOP. Build instead.

### 2. Time-Box Everything
Challenge says 3 hours → 3 hours max. Ship imperfect.

### 3. Daily Streak > Binge Learning
30 min/day for 30 days > 15 hours once.

### 4. Build Real Things
Use challenges for actual products.

### 5. Teach to Learn
If you can't explain it, you don't get it yet.

---

## Integration with Goals

### "10 Products in 100 Days"
Each challenge = foundation for a product.

**Examples:**
- Embeddings challenge → Fathom semantic search
- Multimodal challenge → ClipYard AI scorer
- Orchestration challenge → Multi-model router
- Fine-tuning challenge → Client voice cloner

**Build challenges → ship products.**

---

## Development

### Run in dev mode (auto-reload)
```bash
npm run dev
```

### Data Files
All progress stored in `/data`:
- `progress.json` - XP, streak, completed skills
- `quiz-state.json` - Flashcard review schedule
- `challenges.json` - Challenge definitions

### API Endpoints

**Dashboard**
- `GET /api/dashboard` - Get overview stats

**Challenges**
- `GET /api/challenges` - List all challenges
- `GET /api/challenges/:id` - Get challenge detail
- `POST /api/challenges/:id/complete` - Mark complete

**Quiz**
- `GET /api/quiz/cards` - All flashcards
- `GET /api/quiz/due` - Cards due for review
- `POST /api/quiz/review` - Submit review
- `POST /api/quiz/add` - Add custom card

**Progress**
- `GET /api/progress` - Get skill tree progress

**Teach Back**
- `POST /api/teachback/submit` - Submit explanation

---

## Remember

**Your edge isn't what you know. It's what you can BUILD.**

Learn → Build → Ship → Repeat.

Daily.

---

*Built by Zint for Ved, Feb 2026*
