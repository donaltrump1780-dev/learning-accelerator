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

## 📺 Manning "Build an LLM from Scratch" Integration

**This tool is now optimized for Sebastian Raschka's Manning video series!**

✅ **6 Challenges** mapped to the first 20 videos (foundation + intermediate)  
✅ **30 Flashcards** covering core concepts from Ch 2-3  
✅ **Complete content mapping** - know exactly which videos to watch for each challenge

**Coverage:** Videos 1-20 (Ch 2: Tokenization, Ch 3: Attention, Ch 4.1-4.3: Architecture Basics)  
**Remaining 27 videos** (training, generation, fine-tuning) can be added in a future update.

### Why This Integration Exists

Watching 20 videos (5+ hours) is passive. This tool makes it **active learning**:
- Each challenge = build something real from the videos
- Flashcards = retain concepts long-term via spaced repetition
- Progress tracking = stay motivated with XP/streaks
- Gamification = make learning addictive

### How to Use with Manning

1. **Start with the playlist:** https://www.youtube.com/playlist?list=PLQRyiBCWmqp5twpd8Izmaxu5XRkxd5yC-
2. **Pick a challenge** from the dashboard (they're in order)
3. **Watch the mapped videos** (listed in each challenge)
4. **Build the challenge** (code along, then build independently)
5. **Review flashcards** daily (spaced repetition)
6. **Mark complete** when you ship the deliverable

**See [docs/manning-content-map.md](docs/manning-content-map.md) for detailed video-to-challenge mapping.**

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

### 4. Start with Foundation Tier
Your first challenge: **Build Your Own Tokenizer**
- Watch Manning videos 2-5 (44 min)
- Build a working tokenizer with BPE
- Compare with OpenAI's tiktoken

**Scope:** These challenges cover videos 1-20 only (foundation and intermediate concepts).

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

## 🎬 Manning Course Integration

This tool is **directly mapped to Sebastian Raschka's "Build a Large Language Model (from Scratch)"** video series (first 20 videos).

### How It Works

**Instead of passively watching videos → You build alongside Sebastian**

1. **Watch a video** (e.g., "Tokenizing Text")
2. **Complete the challenge** (Build a Text Tokenizer)
3. **Review flashcards** (Reinforce key concepts)
4. **Teach it back** (Prove you understand)
5. **Earn XP & level up** (Track progress)

### The Mapping

📺 **[Watch the Playlist](https://www.youtube.com/playlist?list=PLQRyiBCWmqp5twpd8Izmaxu5XRkxd5yC-)**  
📖 **[Read the Content Map](docs/manning-content-map.md)**

#### Foundation Tier (Videos 1-4)
- ✅ **Challenge 1:** Python Environment Setup (25 XP)
- ✅ **Challenge 2:** Build a Text Tokenizer (50 XP) → Videos 2-3
- ✅ **Challenge 3:** Add Special Tokens (35 XP) → Video 4

#### Intermediate Tier (Videos 5-12)
- ✅ **Challenge 4:** Implement Byte Pair Encoding (75 XP) → Video 5
- ✅ **Challenge 5:** Create Training Data with Sliding Window (50 XP) → Video 6
- ✅ **Challenge 6:** Build Token Embedding Layer (60 XP) → Video 7
- ✅ **Challenge 7:** Add Positional Encodings (60 XP) → Video 8
- ✅ **Challenge 8:** Build Self-Attention Mechanism (100 XP) → Videos 9-10
- ✅ **Challenge 9:** Create Self-Attention Class (70 XP) → Videos 11-12

#### Advanced Tier (Videos 13-20)
- ✅ **Challenge 10:** Implement Causal Attention Masking (75 XP) → Video 13
- ✅ **Challenge 11:** Add Dropout to Attention (40 XP) → Video 14
- ✅ **Challenge 12:** Build Causal Self-Attention Class (80 XP) → Video 15
- ✅ **Challenge 13:** Stack Multiple Attention Layers (70 XP) → Video 16
- ✅ **Challenge 14:** Implement Multi-Head Attention (100 XP) → Video 17
- ✅ **Challenge 15:** Code Complete GPT Architecture (150 XP) → Video 18
- ✅ **Challenge 16:** Add Layer Normalization (60 XP) → Video 19
- ✅ **Challenge 17:** Build Feed-Forward Network with GELU (70 XP) → Video 20

**Total:** 1,270 XP across 17 challenges mapped to 20 videos

### What You Get

✅ **30 Flashcards** covering all key concepts from videos 1-20  
✅ **17 Hands-on Challenges** - code what Sebastian teaches  
✅ **Detailed Content Map** - which videos cover which topics  
✅ **Progress Tracking** - see exactly where you are in the course  
✅ **Spaced Repetition** - retain concepts long-term  

### Your Learning Path

```
Week 1: Foundation (Videos 1-4)
  → Set up environment
  → Build tokenizer
  → Add special tokens
  → Master the basics
  → Earn: 110 XP

Week 2-3: Intermediate Part 1 (Videos 5-8)
  → Implement BPE
  → Create training data loader
  → Build embeddings
  → Add positional encoding
  → Earn: 245 XP

Week 3-4: Intermediate Part 2 (Videos 9-12)
  → Build self-attention from scratch
  → Package into reusable class
  → Understand transformer mechanics
  → Earn: 170 XP

Week 5-6: Advanced Part 1 (Videos 13-16)
  → Add causal masking (GPT-style)
  → Implement dropout
  → Stack deep networks
  → Earn: 265 XP

Week 7-8: Advanced Part 2 (Videos 17-20)
  → Build multi-head attention
  → Code complete GPT architecture
  → Add LayerNorm and FFN
  → Earn: 480 XP
```

**8 weeks = Complete LLM built from scratch + 1,270 XP**

### Why This Beats Just Watching

**Traditional approach:**
- Watch 20 videos (10-15 hours)
- Take notes
- Forget 80% in 2 weeks
- Never build anything

**Learning Accelerator approach:**
- Watch + Build simultaneously (45-60 hours total)
- Code every concept immediately
- Review flashcards daily
- **End with a working GPT model YOU built**

### Getting Started with Manning Content

1. **Start the server:** `npm start`
2. **Open dashboard:** http://localhost:3000
3. **Click "Challenges"** → See all 17 Manning challenges
4. **Start with Challenge 1** → Python Environment Setup
5. **Watch Video 1** → Then complete the challenge
6. **Review flashcards** → Reinforce what you learned
7. **Repeat** for all 20 videos

### Resources

- 📺 **[YouTube Playlist](https://www.youtube.com/playlist?list=PLQRyiBCWmqp5twpd8Izmaxu5XRkxd5yC-)**
- 📖 **[Manning Book](https://www.manning.com/books/build-a-large-language-model-from-scratch)**
- 💻 **[Sebastian's GitHub](https://github.com/rasbt/LLMs-from-scratch)**
- 🗺️ **[Content Map](docs/manning-content-map.md)** - Detailed video → challenge mapping

### Pro Tips

1. **Code along with videos** - Pause and implement as Sebastian explains
2. **Review flashcards daily** - 5-10 cards takes 5 minutes
3. **Complete challenges in order** - Each builds on previous
4. **Test everything** - Don't move on until your code works
5. **Use teach-back** - Explain concepts in your own words
6. **Join communities** - Sebastian is active on Twitter/Discord
7. **Reference the book** - Videos complement written content

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

## 🎓 Manning Learning Path (4 Weeks)

Follow this path to master the foundation and intermediate concepts (videos 1-20):

### Week 1: Foundation (Tokenization & Embeddings)
- Challenge 1: Build Your Own Tokenizer (Videos 2-5, Ch 2.2-2.5)
- Challenge 2: Embeddings + Data Pipeline (Videos 6-8, Ch 2.6-2.8)
- **Flashcards:** Review 9 foundation cards daily
- **Time:** ~7-8 hours total

### Weeks 2-3: Intermediate (Attention Mechanisms)
- Challenge 3: Self-Attention from Scratch (Videos 9-12, Ch 3.3-3.4) ⭐ **CRITICAL**
- Challenge 4: Causal Masking (Videos 13-15, Ch 3.5)
- Challenge 5: Multi-Head Attention (Videos 16-17, Ch 3.6)
- **Flashcards:** Review 13 intermediate cards daily
- **Time:** ~10-12 hours total

### Week 4: Advanced Basics (Architecture Components)
- Challenge 6: LayerNorm + FeedForward (Videos 18-20, Ch 4.1-4.3)
- **Flashcards:** Review all 30 cards
- **Time:** ~4-5 hours total

**Total Time Investment (Videos 1-20):**
- Videos: ~5 hours (at 1x speed, ~3.3 hours at 1.5x)
- Challenges: ~18-22 hours (hands-on building)
- Flashcard reviews: ~15 min/day × 28 days = ~7 hours
- **Grand Total: ~30-35 hours to complete videos 1-20**

---

### 🚧 Future Content (Videos 21-47)

The remaining 27 videos cover:
- **Ch 4.4-4.7:** Residual connections, full GPT model, text generation
- **Ch 5:** Training loops, loss functions, sampling strategies
- **Ch 6:** Classification fine-tuning
- **Ch 7:** Instruction fine-tuning

**These can be added in a future update!**

---

## 📊 Content Coverage (Videos 1-20)

The 6 challenges + 30 flashcards cover:

| Topic | Challenges | Flashcards | Manning Chapters | Videos |
|-------|-----------|-----------|------------------|--------|
| Tokenization | 1 | 5 | Ch 2.2-2.5 | 2-5 |
| Embeddings | 1 | 5 | Ch 2.7-2.8 | 7-8 |
| Data Preparation | 1 | 1 | Ch 2.6 | 6 |
| Attention | 2 | 10 | Ch 3.3-3.5 | 9-15 |
| Multi-Head Attention | 1 | 3 | Ch 3.6 | 16-17 |
| Architecture Basics | 1 | 6 | Ch 4.1-4.3 | 18-20 |

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

## 🎯 Manning-Specific Features

### 1. Content-Aware Challenges
Each challenge includes:
- **Exact video links** - know what to watch
- **Watch time estimates** - plan your sessions
- **Manning chapter references** - sync with the book
- **Key concepts** - what you'll learn
- **Deliverables** - clear success criteria

### 2. Concept-Mapped Flashcards
All 50 cards include:
- **Manning chapter references** - trace back to source
- **Tier classification** - know difficulty level
- **Concept tags** - review by topic
- **Spaced repetition** - SM-2 algorithm for retention

### 3. Progress Tracking
- **XP per challenge** (75-250 XP based on difficulty)
- **Tier completion** (foundation → mastery)
- **Streak tracking** (daily review = streak++)
- **Milestones** (Bronze → Diamond)

---

## 💡 Learning Tips

### For Maximum Retention
1. **Watch at 1.5x** - Sebastian speaks clearly, save 30% time (5h → 3.3h)
2. **Code along in real-time** - pause video, type yourself
3. **Build before looking** - try implementing first, then watch
4. **Review cards DAILY** - 15 min/day beats 2hr cramming
5. **Teach back** - explain each concept in your own words
6. **Ship products** - use challenges for real projects

### For Speed (Videos 1-20)
- Foundation (2 challenges): 1 week
- Intermediate (3 challenges): 2 weeks  
- Advanced (1 challenge): 1 week

**Fast track: 4 weeks to complete videos 1-20**

### For Depth
- Spend 2-3 days per challenge
- Build variants and experiments
- Read referenced papers (Attention is All You Need)
- Compare implementations with Sebastian's code
- Write blog posts explaining concepts

**Deep track: 6-8 weeks with deep understanding**

---

## 📚 Manning Book + This Tool = Perfect Combo

**Book:** [Build a Large Language Model (from Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) by Sebastian Raschka

**Use this tool as:**
- Active learning companion to the book
- Progress tracker for the video series
- Flashcard system for retention
- Challenge framework for building

**Book + Videos + This Tool = Complete LLM Education**

---

## 🔗 Related Resources

- **Video Playlist:** https://www.youtube.com/playlist?list=PLQRyiBCWmqp5twpd8Izmaxu5XRkxd5yC-
- **Sebastian's GitHub:** https://github.com/rasbt/LLMs-from-scratch
- **Manning Book:** https://www.manning.com/books/build-a-large-language-model-from-scratch
- **Content Map:** [docs/manning-content-map.md](docs/manning-content-map.md)
- **Sebastian's Twitter:** [@rasbt](https://twitter.com/rasbt)

---

## Remember

**Your edge isn't what you know. It's what you can BUILD.**

Everyone watches Manning videos. Few people BUILD what Sebastian teaches.

This tool forces you to:
1. **Build immediately** (challenge-based learning)
2. **Retain long-term** (spaced repetition flashcards)
3. **Track progress** (XP + streaks + milestones)
4. **Ship products** (real deliverables, not toy examples)

**Result: You ship LLM products while others are still watching tutorials.**

Learn → Build → Ship → Repeat.

Daily.

---

## 📌 Scope Note

**Current Coverage:** Videos 1-20 of Manning's 47-video series
- ✅ Chapter 2: Tokenization & Embeddings (complete)
- ✅ Chapter 3: Attention Mechanisms (complete)  
- ✅ Chapter 4: Architecture basics - LayerNorm, FFN (partial)

**Future Additions:** Videos 21-47 can be added later covering:
- Rest of GPT architecture (residual connections, full model)
- Training & optimization
- Text generation & sampling
- Fine-tuning (classification, instruction-following)

This phased approach keeps the initial learning manageable while covering the core foundations.

---

*Built by Zint for Ved Singh, Feb 2026*  
*Optimized for Sebastian Raschka's Manning "Build an LLM from Scratch" series (Videos 1-20)*
