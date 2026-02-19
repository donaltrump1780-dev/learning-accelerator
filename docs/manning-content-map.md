# Manning "Build an LLM from Scratch" → Learning Accelerator Mapping

This document maps Sebastian Raschka's 47-video Manning series to the learning accelerator challenges and flashcards.

**Playlist:** https://www.youtube.com/playlist?list=PLQRyiBCWmqp5twpd8Izmaxu5XRkxd5yC-

---

## 📚 Learning Path Overview

The Manning series is organized into 7 chapters. We've mapped these to 5 challenge tiers + 50 flashcards covering all key concepts.

### Tier Progression

| Tier | Manning Chapters | Focus | Videos | Total Time |
|------|-----------------|-------|--------|------------|
| **Foundation** | Ch 2 (Setup & Tokenization) | Text → Numbers, Embeddings | 9 videos | ~2h 9min |
| **Intermediate** | Ch 3 (Attention) | Self-Attention, Multi-Head | 9 videos | ~2h 29min |
| **Advanced** | Ch 4 (Architecture) | Transformer Blocks, GPT | 7 videos | ~1h 57min |
| **Expert** | Ch 5 (Training) | Loss, Optimization, Sampling | 9 videos | ~2h 50min |
| **Mastery** | Ch 6-7 (Fine-tuning) | Classification, Instructions | 13 videos | ~4h 12min |

**Total: 47 videos, ~13 hours 37 minutes of content**

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

**Key Flashcards:**
- #1: Why tokenization is needed
- #2: What is BPE and why use it
- #3: Special tokens purpose
- #48: Why vocab size ~50k

---

#### Challenge 2: Build Token + Position Embeddings
**Goal:** Implement embedding layers  
**Time:** 2-3 hours | **XP:** 80

**Watch These Videos:**
1. ✅ [Creating Token Embeddings](https://www.youtube.com/watch?v=x2tYF_DHpgc) (8:37) - Ch 2.7
2. ✅ [Encoding Word Positions](https://www.youtube.com/watch?v=EOU366BvhuA) (12:23) - Ch 2.8

**Total Watch Time:** 21 minutes

**Build:**
- Token embedding layer (vocab_size → d_model)
- Positional encoding implementation
- Embedding combination logic
- PCA/t-SNE visualization
- Similarity testing

**Key Flashcards:**
- #5: Purpose of token embeddings
- #6: Why positional encodings
- #49: Curse of dimensionality

---

#### Challenge 3: Build Training Data Pipeline
**Goal:** Create sliding window data loader  
**Time:** 2-3 hours | **XP:** 75

**Watch These Videos:**
1. ✅ [Data Sampling with a Sliding Window](https://www.youtube.com/watch?v=KA02GeM0pv4) (23:16) - Ch 2.6

**Total Watch Time:** 23 minutes

**Build:**
- Sliding window sampler
- Batched PyTorch DataLoader
- Context length handling
- Memory profiling

**Key Flashcards:**
- #4: Sliding window technique
- #37: Context length importance

---

### Intermediate Tier (Ch 3: Attention Mechanisms)

#### Challenge 4: Implement Self-Attention from Scratch
**Goal:** Build core attention mechanism  
**Time:** 4-5 hours | **XP:** 150

**Watch These Videos:**
1. ✅ [A Simple Self-Attention Mechanism](https://www.youtube.com/watch?v=2rluVS_ap9M) (41:10) - Ch 3.3.1 ⭐ CORE
2. ✅ [Computing Attention Weights](https://www.youtube.com/watch?v=Dj1fjQNQl2g) (11:43) - Ch 3.4
3. ✅ [Step-by-Step Guide to Computing Attention Weights](https://www.youtube.com/watch?v=2-PYMkJ0OxY) (20:00) - Ch 3.4.1
4. ✅ [Implementing a Compact Self-Attention Class](https://www.youtube.com/watch?v=NcaoYngcF9E) (8:31) - Ch 3.4.2

**Total Watch Time:** 81 minutes (this is the most important concept!)

**Build:**
- Q, K, V projections
- Attention score calculation
- Softmax + weighting
- SelfAttention class
- Interactive attention visualization

**Key Flashcards:**
- #7: Self-attention explained
- #8: Q, K, V intuition
- #9: Scaled dot-product formula
- #38: Why transformers won
- #39: Attention complexity

---

#### Challenge 5: Add Causal Masking to Attention
**Goal:** Implement masked attention  
**Time:** 2-3 hours | **XP:** 100

**Watch These Videos:**
1. ✅ [Applying a Causal Attention Mask](https://www.youtube.com/watch?v=-dk_Ewo1FGo) (11:37) - Ch 3.5.1
2. ✅ [Masking Additional Attention Weights with Dropout](https://www.youtube.com/watch?v=DixrLzbWVtM) (5:38) - Ch 3.5.2
3. ✅ [Implementing a Compact Causal Self-Attention Class](https://www.youtube.com/watch?v=v0rGOGe9N_I) (8:53) - Ch 3.5.3

**Total Watch Time:** 26 minutes

**Build:**
- Causal mask (upper triangular)
- Dropout integration
- CausalSelfAttention class
- Mask visualization

**Key Flashcards:**
- #10: Causal mask purpose
- #11: Dropout on attention

---

#### Challenge 6: Build Multi-Head Attention
**Goal:** Implement parallel attention heads  
**Time:** 3-4 hours | **XP:** 125

**Watch These Videos:**
1. ✅ [Stacking Multiple Single-Head Attention Layers](https://www.youtube.com/watch?v=hzL0qlZq4Us) (12:05) - Ch 3.6.1
2. ✅ [Multi-Head Attention with Weight Splits](https://www.youtube.com/watch?v=zJyrNEpap90) (16:47) - Ch 3.6.2

**Total Watch Time:** 29 minutes

**Build:**
- Parallel attention heads
- Output concatenation
- Head visualization
- Performance profiling

**Key Flashcards:**
- #12: Multi-head attention benefit
- #13: Embedding splits across heads

---

### Advanced Tier (Ch 4: GPT Architecture)

#### Challenge 7: Build Complete Transformer Block
**Goal:** Assemble full transformer layer  
**Time:** 4-5 hours | **XP:** 150

**Watch These Videos:**
1. ✅ [Coding an LLM Architecture](https://www.youtube.com/watch?v=8K1yCsO1CsU) (14:00) - Ch 4.1
2. ✅ [Layer Normalization in Transformers](https://www.youtube.com/watch?v=QKirqpM3bfk) (22:14) - Ch 4.2
3. ✅ [Implementing a feed forward network with GELU](https://www.youtube.com/watch?v=IMWbSrTfrC0) (16:19) - Ch 4.3
4. ✅ [Adding Shortcut Connections](https://www.youtube.com/watch?v=PnIF7GdWps) (10:52) - Ch 4.4
5. ✅ [Connecting Attention & Linear Layers](https://www.youtube.com/watch?v=zCPoalAsudQ) (12:14) - Ch 4.5

**Total Watch Time:** 76 minutes

**Build:**
- LayerNorm implementation
- FeedForward with GELU
- Residual connections
- Complete TransformerBlock

**Key Flashcards:**
- #14: Layer normalization
- #15: GELU activation
- #16: Residual connections
- #17: Transformer block structure
- #18: FFN sizing

---

#### Challenge 8: Build Full GPT Model
**Goal:** Stack transformer blocks  
**Time:** 3-4 hours | **XP:** 175

**Watch These Videos:**
1. ✅ [Coding the GPT Model](https://www.youtube.com/watch?v=EegLikdHKDE) (12:45) - Ch 4.6

**Total Watch Time:** 13 minutes

**Build:**
- Stacked transformer blocks
- Input embeddings
- Language modeling head
- Parameter counting

**Key Flashcards:**
- #19: GPT-2 parameter count
- #20: Language modeling head
- #40: GPT vs BERT

---

#### Challenge 9: Implement Text Generation
**Goal:** Build sampling strategies  
**Time:** 3-4 hours | **XP:** 125

**Watch These Videos:**
1. ✅ [Generating Text with a GPT Model](https://www.youtube.com/watch?v=JUbbwU5lW98) (17:47) - Ch 4.7

**Total Watch Time:** 18 minutes

**Build:**
- Greedy decoding
- Temperature sampling
- Top-k sampling
- Top-p sampling
- Interactive demo

**Key Flashcards:**
- #21: Autoregressive generation

---

### Expert Tier (Ch 5: Training & Generation)

#### Challenge 10: Train GPT from Scratch
**Goal:** Full training pipeline  
**Time:** 5-6 hours | **XP:** 200

**Watch These Videos:**
1. ✅ [Using GPT to Generate Text](https://www.youtube.com/watch?v=qfKfX0CZyw0) (17:32) - Ch 5.1.1
2. ✅ [Calculating Text Generation Loss](https://www.youtube.com/watch?v=8WrV0I7sfpk) (27:14) - Ch 5.1.2
3. ✅ [Training & Validation Loss](https://www.youtube.com/watch?v=A2N6djHKzfI) (24:52) - Ch 5.1.3
4. ✅ [Training a Large Language Model](https://www.youtube.com/watch?v=117SQ2vf6dg) (27:04) - Ch 5.2

**Total Watch Time:** 97 minutes

**Build:**
- Cross-entropy loss
- Training loop with AdamW
- Validation tracking
- Learning rate scheduling
- Checkpoint saving
- Training curves

**Key Flashcards:**
- #25: Cross-entropy loss
- #26: Train/val split
- #27: Learning rate warmup
- #28: AdamW optimizer
- #41: Mixed precision
- #42: Gradient accumulation
- #43: Perplexity

---

#### Challenge 11: Master Sampling Strategies
**Goal:** Advanced generation techniques  
**Time:** 2-3 hours | **XP:** 100

**Watch These Videos:**
1. ✅ [Temperature Scaling in Text Generation](https://www.youtube.com/watch?v=ORUMDP3fEQ) (13:43) - Ch 5.3.1
2. ✅ [Top-k Sampling for Text Generation](https://www.youtube.com/watch?v=aW6bk8oAh9g) (8:20) - Ch 5.3.2
3. ✅ [Modifying the Text Generation Function](https://www.youtube.com/watch?v=GhpKXv6LNXg) (10:51) - Ch 5.3.3

**Total Watch Time:** 33 minutes

**Build:**
- Temperature sweeps
- Configurable top-k
- Configurable top-p
- Comparison dashboard

**Key Flashcards:**
- #22: Temperature effects
- #23: Top-k sampling
- #24: Top-p (nucleus) sampling

---

#### Challenge 12: Load & Save Models
**Goal:** Weight management  
**Time:** 2-3 hours | **XP:** 75

**Watch These Videos:**
1. ✅ [Loading and Saving Model Weights in PyTorch](https://www.youtube.com/watch?v=i7QmQl2FK-g) (4:24) - Ch 5.4
2. ✅ [Loading Pretrained Weights from OpenAI](https://www.youtube.com/watch?v=glpWXw9dHWY) (20:04) - Ch 5.5

**Total Watch Time:** 24 minutes

**Build:**
- Checkpoint save/load
- OpenAI weight loading
- Weight name mapping
- Output verification

**Key Flashcards:**
- #29: PyTorch checkpoints
- #45: GPT-2 pretraining data
- #50: Verifying loaded models

---

### Mastery Tier (Ch 6-7: Fine-tuning)

#### Challenge 13: Fine-tune for Classification
**Goal:** Spam detector from GPT  
**Time:** 5-6 hours | **XP:** 200

**Watch These Videos:**
1. ✅ [Preparing the Dataset](https://www.youtube.com/watch?v=t_0XAf_SZmo) (26:58) - Ch 6.2
2. ✅ [Creating Data Loaders](https://www.youtube.com/watch?v=m4qiVQHp9Do) (16:08) - Ch 6.3
3. ✅ [Initializing a Model with Pretrained Weights](https://www.youtube.com/watch?v=wq9VdwBHl0w) (10:11) - Ch 6.4
4. ✅ [Adding a Classification Head](https://www.youtube.com/watch?v=PTzHj5UmP9Y) (15:38) - Ch 6.5
5. ✅ [Calculating Classification Loss and Accuracy](https://www.youtube.com/watch?v=4Gjrtw2vQgU) (22:32) - Ch 6.6
6. ✅ [Fine-Tuning the Model on Supervised Data](https://www.youtube.com/watch?v=DfCbtGgY3cs) (33:36) - Ch 6.7
7. ✅ [Using the LLM as a Spam Classifier](https://www.youtube.com/watch?v=7Okki_IhSSw) (11:07) - Ch 6.8

**Total Watch Time:** 136 minutes (longest section!)

**Build:**
- Spam dataset preparation
- Classification data loader
- Classification head
- Fine-tuning loop
- Evaluation metrics
- API endpoint

**Key Flashcards:**
- #30: Pretraining vs fine-tuning
- #31: Classification head design
- #32: Freezing layers
- #44: Catastrophic forgetting

---

#### Challenge 14: Instruction Fine-tune GPT
**Goal:** Build instruction-following model  
**Time:** 6-7 hours | **XP:** 250

**Watch These Videos:**
1. ✅ [Preparing a Dataset for Instruction Fine-Tuning](https://www.youtube.com/watch?v=epsaFNREHos) (15:48) - Ch 7.2
2. ✅ [Organizing Data into Training Batches](https://www.youtube.com/watch?v=tDQ7Gbh9_3w) (23:45) - Ch 7.3
3. ✅ [Creating Data Loaders for an Instruction Dataset](https://www.youtube.com/watch?v=nTp9AP2xra4) (7:31) - Ch 7.4
4. ✅ [Loading a Pretrained LLM](https://www.youtube.com/watch?v=xLexMENUMWc) (7:48) - Ch 7.5
5. ✅ [Fine-Tuning the LLM on Instruction Data](https://www.youtube.com/watch?v=9RP6uDGAzuQ) (20:02) - Ch 7.6
6. ✅ [Extracting and Saving Responses](https://www.youtube.com/watch?v=W7yaec7jCPY) (9:40) - Ch 7.7
7. ✅ [Evaluating the Fine-Tuned LLM](https://www.youtube.com/watch?v=yjrk_lsx5Fo) (21:57) - Ch 7.8

**Total Watch Time:** 106 minutes

**Build:**
- Instruction dataset (Alpaca format)
- Instruction data loader
- Fine-tuning pipeline
- Response evaluation
- Model comparison

**Key Flashcards:**
- #33: Instruction fine-tuning
- #34: Alpaca format
- #35: Instruction data preparation
- #36: Evaluation metrics
- #46: What comes after (RLHF)
- #47: Few-shot learning

---

## 📊 Learning Statistics

### By Tier
- **Foundation:** 3 challenges, 8 flashcards, ~2h videos
- **Intermediate:** 3 challenges, 9 flashcards, ~2.5h videos
- **Advanced:** 3 challenges, 10 flashcards, ~2h videos
- **Expert:** 3 challenges, 13 flashcards, ~3h videos
- **Mastery:** 2 challenges, 10 flashcards, ~4h videos

### By Concept Coverage
- Tokenization: 4 flashcards
- Embeddings: 3 flashcards
- Attention: 10 flashcards (most important!)
- Architecture: 8 flashcards
- Training: 8 flashcards
- Generation: 4 flashcards
- Fine-tuning: 8 flashcards

---

## 🎯 Recommended Learning Path

### Week 1-2: Foundation
- **Day 1-3:** Challenge 1 (Tokenizer) + Cards 1-4, 48
- **Day 4-5:** Challenge 2 (Embeddings) + Cards 5-6, 49
- **Day 6-7:** Challenge 3 (DataLoader) + Cards 4, 37

### Week 3-4: Intermediate
- **Day 8-12:** Challenge 4 (Attention) + Cards 7-9, 38-39 ⭐ CRITICAL
- **Day 13-15:** Challenge 5 (Causal Masking) + Cards 10-11
- **Day 16-18:** Challenge 6 (Multi-Head) + Cards 12-13

### Week 5-6: Advanced
- **Day 19-23:** Challenge 7 (Transformer Block) + Cards 14-18
- **Day 24-26:** Challenge 8 (GPT Model) + Cards 19-20, 40
- **Day 27-29:** Challenge 9 (Generation) + Card 21

### Week 7-8: Expert
- **Day 30-35:** Challenge 10 (Training) + Cards 25-28, 41-43, 45
- **Day 36-38:** Challenge 11 (Sampling) + Cards 22-24
- **Day 39-40:** Challenge 12 (Model I/O) + Cards 29, 50

### Week 9-11: Mastery
- **Day 41-46:** Challenge 13 (Classification) + Cards 30-32, 44
- **Day 47-53:** Challenge 14 (Instruction Tuning) + Cards 33-36, 46-47

**Total: ~11 weeks of focused learning**

---

## 💡 Pro Tips

1. **Watch at 1.5x speed** - Sebastian speaks clearly, save time
2. **Code along in real-time** - Pause and implement as he does
3. **Review flashcards daily** - Spaced repetition = long-term retention
4. **Complete challenges before moving on** - Each builds on previous
5. **Join the Discord** - Discuss with other learners
6. **Ship projects** - Use challenges for real products

---

## 🔗 Quick Links

- **Playlist:** https://www.youtube.com/playlist?list=PLQRyiBCWmqp5twpd8Izmaxu5XRkxd5yC-
- **Book:** [Build a Large Language Model (from Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
- **Code Repo:** https://github.com/rasbt/LLMs-from-scratch
- **Sebastian's Twitter:** [@rasbt](https://twitter.com/rasbt)

---

*Last Updated: Feb 2026*
*Based on Manning "Build a Large Language Model (from Scratch)" by Sebastian Raschka*
