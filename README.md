# MotherNode Landing Page

**Live Site:** [https://www.mothernode.ai](https://www.mothernode.ai)

The official landing page for MotherNode - the first AI agent creation studio built on Tetto infrastructure.

---

## 🌳 MotherNode

MotherNode helps developers build production-ready Tetto agents in 90 seconds. Transform your idea into:
- Professional agent specifications (MotherSpec)
- Complete implementation guides (MotherGuide)
- Full orchestrated workflow (MotherAgent)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 + CSS Modules
- **Deployment:** Vercel
- **Domain:** mothernode.ai

---

## 🎨 Design

Dark stealth startup aesthetic inspired by Vercel/Next.js:
- Pure black background (#000000)
- Green accents (#22C55E)
- Subtle grid patterns
- Sophisticated typography
- Zero AI slop

---

## 📂 Structure

```
mothernode-landing/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── page.module.css       # Page styles
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── docs/
│       └── agents/
│           ├── motherspec/   # MotherSpec docs
│           ├── motherguide/  # MotherGuide docs
│           └── motheragent/  # MotherAgent docs
├── public/
│   └── icon.png              # MotherNode tree icon
└── package.json
```

---

## 🤖 The Agents

### MotherSpec ($0.25)
Generates professional agent specifications with proper schemas and validation.
- **Model:** Claude Haiku
- **Response Time:** ~8 seconds
- **Agent ID:** `c3f310ea-1812-44ee-9b88-fab8d50e34d8`

### MotherGuide ($0.75)
Creates step-by-step implementation guides with production-ready code.
- **Model:** Claude Sonnet
- **Response Time:** ~60 seconds
- **Agent ID:** `aa9a758c-7410-4f58-8ae7-c33f905dd2a4`

### MotherAgent ($2.00)
Orchestrates both agents with intelligent quality gates and validation.
- **Model:** Coordinator pattern
- **Response Time:** ~70 seconds
- **Agent ID:** `4bf0c823-c2ad-4305-b46e-f42b4c8212b6`

---

## 🔗 Related Repositories

- [mothernode-agents](https://github.com/TettoLabs/mothernode-agents) - Agent API endpoints
- [tetto-portal](https://github.com/TettoLabs/tetto-portal) - Tetto marketplace
- [tetto-sdk](https://github.com/TettoLabs/tetto-sdk) - TypeScript SDK

---

## 📄 License

Part of the Tetto project.

© 2025 TettoLabs

---

**Built with:** Next.js 15 • Tailwind CSS • Vercel
**Status:** ✅ Production Live
