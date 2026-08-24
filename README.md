# RakshaSetu (रक्षासेतु)

<h3 align="center">🚨 India's Most Advanced Offline Emergency First-Aid Companion</h3>

[![PWA](https://img.shields.io/badge/Offline-PWA%20Ready-22c55e?style=for-the-badge)](https://github.com/Rana-Kushagr/Raksha-Setu)
[![Bilingual](https://img.shields.io/badge/Languages-Hindi%20%2B%20English-ff6600?style=for-the-badge)](https://github.com/Rana-Kushagr/Raksha-Setu)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](https://github.com/Rana-Kushagr/Raksha-Setu)

> **Panic-proof • Bilingual Hindi+English • Works 100% Offline • Life-saving AI**

---

## 🆚 Why RakshaSetu Beats Every Existing App

| Feature | Red Cross First Aid | iFirstAid | **RakshaSetu** |
|---|:---:|:---:|:---:|
| Works fully offline | ✅ | ❌ | ✅ |
| Hindi voice coaching | ❌ | ❌ | ✅ |
| AI symptom checker (offline) | ❌ | ❌ | ✅ |
| Photo wound identifier | ❌ | ❌ | ✅ |
| Auto-call after 10 min inactivity | ❌ | ❌ | ✅ |
| Animated anatomical demos | ❌ | ❌ | ✅ |
| GPS live location share | ❌ | ❌ | ✅ |
| Emergency contacts + WhatsApp SOS | ❌ | ❌ | ✅ |
| Recently viewed protocols | ❌ | ❌ | ✅ |
| India helplines (112, 108, Poison Control) | ❌ | ✅ | ✅ |
| **Free, no login, no account, no internet** | ❌ | ❌ | ✅ |

---

## ✨ Core Features

### 🤖 Offline AI Symptom Checker
Type or speak symptoms — AI instantly matches to emergency protocols using a 17-condition offline scoring engine. No internet, no server calls.

### 🎙️ Voice-Activated Search with Fuzzy Matching
Speak in **Hindi or English** — mic captures it live, fills the search bar in real-time, and fuzzy-matches even misspelled results with "Did you mean?" correction.

### 📸 Photo Wound Identifier
Upload a wound photo + answer 3 guided questions → AI identifies wound type and opens the matching first-aid protocol automatically.

### 🚨 Severity Auto-Escalation + 10-Minute Auto-Call
If a user stays on triage for 10+ minutes without resolution:
1. Full-screen red alert activates
2. Urgent Hindi/English voice warning plays
3. Auto-dials 112 — with **"Cancel"** and **"Snooze 5 min"** options

### 📍 Live GPS Location Sharing
One-tap SOS sends real-time GPS coordinates via **WhatsApp, SMS, or native share**.

### 🎬 Split-Screen Animated Tutorials
4 life-saving techniques with **real anatomical SVG animations** at physiologically correct speeds:
- ❤️ CPR — 110 BPM chest compressions with 5–6cm depth gauge
- 🩸 Tourniquet — Windlass torsion with arterial pulse indicator
- 🫁 Heimlich — Dual-person silhouette with J-thrust vector
- 💤 Recovery Position — Lateral placement with airway flow line

### 👥 Emergency Contacts + WhatsApp SOS
Save 2 trusted contacts locally. If 112 doesn't respond, instantly call or send a WhatsApp SOS with one tap.

### 🇮🇳 India Emergency Helplines Reference Card
Quick-tap: **112** · **108** · **1800-116-117 (Poison)** · **1097** · **181 (Women)** · **iCall (Mental Health)**

### 🌐 Bilingual Voice Coach
All protocols, tutorials and alerts speak in **Hindi (हिंदी)** and English using smart voice quality selection.

---

## 📱 Technical Highlights

`
Architecture:    Single-file PWA (index.html + sw.js + manifest.json)
Offline Engine:  Service Worker with cache-first strategy
AI Engine:       Offline keyword-scoring + Levenshtein fuzzy matching
Voice:           Web Speech API + SpeechRecognition + Smart voice picker
GPS:             Geolocation API → WhatsApp / SMS / Navigator Share
Storage:         localStorage (contacts, recently viewed, font preference)
Animations:      Pure CSS keyframes at physiologically accurate speeds
Size:            ~280KB total (no frameworks, no external dependencies)
`

---

## 🚀 Quick Start

`ash
# Option 1: Open directly in Chrome
# Just open index.html — no server needed!

# Option 2: Local server (for full PWA / offline features)
node server.js
# or
npx serve .
`

---

## 🗂️ Project Structure

`
Raksha-Setu/
├── index.html        ← Complete app (all features, ~280KB)
├── sw.js             ← Service Worker for offline caching
├── manifest.json     ← PWA manifest (installable on mobile)
├── server.js         ← Optional local Node.js dev server
└── README.md         ← This file
`

---

## 🏆 Built For

Built for a **life-safety hackathon** targeting rural and semi-urban India where:
- Internet is unreliable or unavailable
- Hindi is the primary language
- Access to trained medical personnel is limited
- In-panic usability is critical

**RakshaSetu bridges the gap** between the moment of emergency and professional medical care.

---

## ⚠️ Medical Disclaimer

RakshaSetu provides **first-aid guidance only** — not a substitute for professional medical care. Always contact a certified doctor or hospital as soon as possible. The AI symptom checker and wound identifier may be incorrect — they are decision-support tools, not diagnoses.

---

## 👨‍💻 Developer

**Rana Kushagr** · [@Rana-Kushagr](https://github.com/Rana-Kushagr)

<p align="center"><em>Made with ❤️ for India's 1.4 billion people</em></p>
