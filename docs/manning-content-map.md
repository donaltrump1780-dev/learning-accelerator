# Manning "Build an LLM from Scratch" → Learning Accelerator Mapping

**Coverage:** First 20 videos of Sebastian Raschka's Manning series  
**Playlist:** https://www.youtube.com/playlist?list=PLQRyiBCWmqp5twpd8Izmaxu5XRkxd5yC-

---

## 📚 Learning Path Overview (Videos 1-20)

This mapping covers the **foundation and intermediate** content from Manning's LLM course:
- **Complete Chapter 2:** Tokenization & Embeddings
- **Complete Chapter 3:** Attention Mechanisms  
- **Partial Chapter 4:** Architecture Basics (LayerNorm, FFN)

### What's Covered

| Tier | Manning Chapters | Focus | Videos | Total Time |
|------|-----------------|-------|--------|------------|
| **Foundation** | Ch 2 (Tokenization & Embeddings) | Text → Numbers, Data Prep | 8 videos | ~1h 50min |
| **Intermediate** | Ch 3 (Attention) | Self-Attention, Multi-Head | 9 videos | ~2h 17min |
| **Advanced** | Ch 4.1-4.3 (Architecture Basics) | LayerNorm, FeedForward | 3 videos | ~52min |

**Total: 20 videos, ~5 hours of content**

### What's NOT Covered (Videos 21-47)

The remaining 27 videos cover:
- Rest of Chapter 4 (Residual connections, full GPT model, text generation)
- Chapter 5 (Training, loss functions, sampling strategies)
- Chapter 6 (Classification fine-tuning)
- Chapter 7 (Instruction fine-tuning)

**We can add these later in a future update.**

---

## 🎯 Challenge-by-Challenge Mapping

### Foundation Tier (Ch 2: Tokenization & Embeddings)

#### Challenge 1: Build Your Own Tokenizer
**Goal:** Implement tokenization from scratch  
**Time:** 3-4 hours | **XP:** 100

**Watch These Videos:**
1. ✅ [Python Environment Setup](https://www.youtube.com/watch?v=2U3JLwKdbmQ) (21:10) - Ch 0
2. ✅ [Tokenizing Text](https://www.youtube.com/watch?v=Iuwqyddco) (14:10) - Ch 2.2
3. ✅ [Convert Tokens into Token IDs](https://www.youtube.com/watch?v=5uEwiN_9hJk) (9:59) - Ch 2.3
4. ✅ [Adding Special Context Tokens](https://www.youtube.com/watch?v=jA7kx6cTKVE) (6:36) - Ch 2.4
5. ✅ [Byte Pair Encoding (BPE)](https://www.youtube.com/watch?v=ePfY7P0iNik) (13:40) - Ch 2.5

**Total Watch Time:** 65 minutes

**Build:**
- Basic text tokenizer (whitespace + punctuation splitting)
- Token-to-ID vocabulary mapping
- Special token handling (<|endoftext|>, <|unk|>)
- BPE algorithm implementation
- Test suite comparing with tiktoken

**Key Flashcards:** #1-3, #20, #22

**Deliverable:** `tokenizer.py` with BPE showing 30%+ vocab compression

---

#### Challenge 2: Build Embeddings + Data Pipeline
**Goal:** Implement embedding layers and data loader  
**Time:** 3-4 hours | **XP:** 100

**Watch These Videos:**
1. ✅ [Data Sampling with a Sliding Window](https://www.youtube.com/watch?v=KA02GeM0pv4) (23:16) - Ch 2.6
2. ✅ [Creating Token Embeddings](https://www.youtube.com/watch?v=x2tYF_DHpgc) (8:37) - Ch 2.7
3. ✅ [Encoding Word Positions](https://www.youtube.com/watch?v=EOU366BvhuA) (12:23) - Ch 2.8

**Total Watch Time:** 44 minutes

**Build:**
- Sliding window data sampler
- Batched PyTorch DataLoader
- Token embedding layer (vocab_size → d_model)
- Positional encoding implementation
- Embedding combination logic
- t-SNE visualization

**Key Flashcards:** #4, #5, #6, #17, #21, #23, #29

**Deliverable:** `data_loader.py` + `embeddings.py` + visualization notebook

---

### Intermediate Tier (Ch 3: Attention Mechanisms)

#### Challenge 3: Implement Self-Attention from Scratch
**Goal:** Build core attention mechanism  
**Time:** 4-5 hours | **XP:** 150

**Watch These Videos:**
1. ✅ [A Simple Self-Attention Mechanism](https://www.youtube.com/watch?v=2rluVS_ap9M) (41:10) - Ch 3.3.1 ⭐ **CORE**
2. ✅ [Computing Attention Weights](https://www.youtube.com/watch?v=Dj1fjQNQl2g) (11:43) - Ch 3.4
3. ✅ [Step-by-Step Guide to Computing Attention Weights](https://www.youtube.com/watch?v=2-PYMkJ0OxY) (20:00) - Ch 3.4.1
4. ✅ [Implementing a Compact Self-Attention Class](https://www.youtube.com/watch?v=NcaoYngcF9E) (8:31) - Ch 3.4.2

**Total Watch Time:** 81 minutes (most important concept!)

**Build:**
- Q, K, V weight matrices
- Attention score calculation (Q @ K^T / √d_k)
- Softmax application
- Weighted sum of values
- SelfAttention PyTorch class
- Interactive attention visualization

**Key Flashcards:** #7, #8, #9, #18, #19, #24

**Deliverable:** `attention.py` + `attention_viz.html` interactive heatmap

---

#### Challenge 4: Add Causal Masking to Attention
**Goal:** Implement masked attention  
**Time:** 2-3 hours | **XP:** 100

**Watch These Videos:**
1. ✅ [Applying a Causal Attention Mask](https://www.youtube.com/watch?v=-dk_Ewo1FGo) (11:37) - Ch 3.5.1
2. ✅ [Masking Additional Attention Weights with Dropout](https://www.youtube.com/watch?v=DixrLzbWVtM) (5:38) - Ch 3.5.2
3. ✅ [Implementing a Compact Causal Self-Attention Class](https://www.youtube.com/watch?v=v0rGOGe9N_I) (8:53) - Ch 3.5.3

**Total Watch Time:** 26 minutes

**Build:**
- Causal mask (upper triangular matrix)
- Mask application before softmax
- Dropout on attention weights
- CausalSelfAttention class
- Verification tests
- Masked vs unmasked comparison

**Key Flashcards:** #10, #11, #25, #30

**Deliverable:** `causal_attention.py` with mask visualization

---

#### Challenge 5: Build Multi-Head Attention
**Goal:** Implement parallel attention heads  
**Time:** 3-4 hours | **XP:** 125

**Watch These Videos:**
1. ✅ [Stacking Multiple Single-Head Attention Layers](https://www.youtube.com/watch?v=hzL0qlZq4Us) (12:05) - Ch 3.6.1
2. ✅ [Multi-Head Attention with Weight Splits](https://www.youtube.com/watch?v=zJyrNEpap90) (16:47) - Ch 3.6.2

**Total Watch Time:** 29 minutes

**Build:**
- Embedding splits across heads
- Parallel attention computations
- Output concatenation
- Final projection layer
- Tests with 4, 8, 12 heads
- Per-head attention visualization

**Key Flashcards:** #12, #13, #26

**Deliverable:** `multi_head_attention.py` + per-head analysis notebook

---

### Advanced Tier (Ch 4: Architecture Basics)

#### Challenge 6: Build LayerNorm + FeedForward Network
**Goal:** Implement transformer building blocks  
**Time:** 3-4 hours | **XP:** 125

**Watch These Videos:**
1. ✅ [Coding an LLM Architecture](https://www.youtube.com/watch?v=8K1yCsO1CsU) (14:00) - Ch 4.1
2. ✅ [Layer Normalization in Transformers](https://www.youtube.com/watch?v=QKirqpM3bfk) (22:14) - Ch 4.2
3. ✅ [Implementing a feed forward network with GELU](https://www.youtube.com/watch?v=IMWbSrTfrC0) (16:19) - Ch 4.3

**Total Watch Time:** 52 minutes

**Build:**
- LayerNorm implementation
- Learnable scale and bias parameters
- 2-layer FFN: d_model → 4*d_model → d_model
- GELU activation
- Dropout for regularization
- Unit tests for each component

**Key Flashcards:** #14, #15, #16, #27, #28

**Deliverable:** `layer_norm.py` + `feed_forward.py` with tests

---

## 📊 Learning Statistics

### By Tier
- **Foundation:** 2 challenges, 9 flashcards, ~1h 50min videos
- **Intermediate:** 3 challenges, 13 flashcards, ~2h 17min videos
- **Advanced:** 1 challenge, 8 flashcards, ~52min videos

**Total:** 6 challenges, 30 flashcards, ~5 hours of video content

### By Concept Coverage
- **Tokenization:** 5 flashcards (videos 2-5)
- **Embeddings:** 5 flashcards (videos 6-8)
- **Data Preparation:** 1 flashcard (video 6)
- **Attention:** 10 flashcards (videos 9-15)
- **Multi-Head Attention:** 3 flashcards (videos 16-17)
- **Architecture:** 6 flashcards (videos 18-20)

---

## 🎯 Recommended Learning Path

### Week 1: Foundation (Videos 1-8)
- **Day 1-3:** Challenge 1 (Tokenizer) - Videos 1-5
  - Watch time: 65 min
  - Build time: 3-4 hours
  - Review flashcards: #1-3, #20, #22
  
- **Day 4-7:** Challenge 2 (Embeddings + DataLoader) - Videos 6-8
  - Watch time: 44 min
  - Build time: 3-4 hours
  - Review flashcards: #4-6, #17, #21, #23, #29

**Week 1 Total:** ~7-8 hours (watching + building)

---

### Week 2-3: Intermediate (Videos 9-17)
- **Day 8-12:** Challenge 3 (Self-Attention) - Videos 9-12 ⭐ **CRITICAL**
  - Watch time: 81 min
  - Build time: 4-5 hours
  - Review flashcards: #7-9, #18, #19, #24
  
- **Day 13-15:** Challenge 4 (Causal Masking) - Videos 13-15
  - Watch time: 26 min
  - Build time: 2-3 hours
  - Review flashcards: #10, #11, #25, #30
  
- **Day 16-19:** Challenge 5 (Multi-Head Attention) - Videos 16-17
  - Watch time: 29 min
  - Build time: 3-4 hours
  - Review flashcards: #12, #13, #26

**Weeks 2-3 Total:** ~10-12 hours (watching + building)

---

### Week 4: Advanced (Videos 18-20)
- **Day 20-23:** Challenge 6 (LayerNorm + FFN) - Videos 18-20
  - Watch time: 52 min
  - Build time: 3-4 hours
  - Review flashcards: #14-16, #27, #28

**Week 4 Total:** ~4-5 hours (watching + building)

---

## 📈 Total Time Investment

**Videos:** ~5 hours (at 1x speed, recommend 1.5x = 3.3 hours)  
**Challenges:** ~18-22 hours (hands-on building)  
**Flashcard Reviews:** ~15 min/day × 28 days = ~7 hours  

**Grand Total: ~30-35 hours to complete videos 1-20**

---

## 💡 What You'll Have Built

After completing these 6 challenges:

1. ✅ **BPE Tokenizer** - Production-ready text tokenization
2. ✅ **Embedding Layer** - Token + position embeddings with visualization
3. ✅ **Training DataLoader** - Sliding window batch generation
4. ✅ **Self-Attention** - Core attention mechanism with interactive viz
5. ✅ **Causal Attention** - Masked attention for autoregressive models
6. ✅ **Multi-Head Attention** - Parallel attention heads
7. ✅ **LayerNorm** - Normalization layer for stability
8. ✅ **FeedForward Network** - GELU-activated FFN

**These are the building blocks for GPT!** The remaining videos (21-47) will show you how to:
- Stack these into a complete GPT model
- Train the model
- Generate text
- Fine-tune for specific tasks

---

## 🔗 Quick Links

- **Playlist:** https://www.youtube.com/playlist?list=PLQRyiBCWmqp5twpd8Izmaxu5XRkxd5yC-
- **Book:** [Build a Large Language Model (from Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
- **Code Repo:** https://github.com/rasbt/LLMs-from-scratch
- **Sebastian's Twitter:** [@rasbt](https://twitter.com/rasbt)

---

## 🎓 Next Steps

After completing videos 1-20, you'll have mastered:
- ✅ Tokenization (BPE algorithm)
- ✅ Embeddings (token + position)
- ✅ Attention mechanisms (self, causal, multi-head)
- ✅ Basic transformer components (LayerNorm, FFN)

**To complete the full GPT implementation, you need videos 21-47 which cover:**
- Residual connections & transformer blocks
- Full GPT model assembly
- Text generation & sampling
- Training loops & optimization
- Fine-tuning for real tasks

We can add these in a future update!

---

*Coverage: Videos 1-20 of 47*  
*Last Updated: February 19, 2026*  
*Based on Manning "Build a Large Language Model (from Scratch)" by Sebastian Raschka*
