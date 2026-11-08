# Bento Gallery MCP & CLI 🍱

The ultimate Model Context Protocol (MCP) server and developer CLI curating world-class **Bento Grid UI Components & Layouts** strictly from **20 Premier Design Engineering Websites & Component Libraries**:

1. **Spell.sh** (`spell`)
2. **Rare UI / Rareblocks** (`rare-ui`)
3. **Transitions.dev** (`transitions-dev`)
4. **Cult UI** (`cult-ui`)
5. **Coss UI / Browse Particles** (`coss-ui`)
6. **Spectrum UI** (`spectrum-ui`)
7. **UseLayout** (`uselayout`)
8. **Details.design** (`details-design`)
9. **BeUI** (`beui`)
10. **Affect UI** (`affect-ui`)
11. **Magic UI** (`magicui`)
12. **Aceternity UI** (`aceternity`)
13. **21st.dev** (`21st-dev`)
14. **Kokonut UI** (`kokonutui`)
15. **Origin UI** (`originui`)
16. **Hover.dev** (`hover-dev`)
17. **Ibelick UI** (`ibelick`)
18. **Syntax UI** (`syntax-ui`)
19. **BentoUI.dev** (`bentoui`)
20. **Bentogrids.com** (`bentogrids`)

---

## 🌟 Curated Component Libraries Matrix

| Component Library | Website | Category | Key Bento Component Characteristics |
| :--- | :--- | :--- | :--- |
| **Spell.sh** | [spell.sh](https://spell.sh) | `3d-spatial` | 3D multi-axis perspective tilt (`perspective: 1000px`, `rotateX/Y`), photorealistic specular glare, and Z-axis depth layers. |
| **Cult UI** | [cult-ui.com](https://cult-ui.com) | `spotlight-shaders` | Animated conic-gradient rotating border halo, cyberpunk glass panels, and glow masks. |
| **Rare UI / Rareblocks** | [rareblocks.xyz](https://rareblocks.xyz) | `minimal-blocks` | Structured SaaS feature bento blocks with telemetry counters and high-contrast typographic hierarchy. |
| **Transitions.dev** | [transitions.dev](https://transitions.dev) | `animated-motion` | Fluid layout morphing, spring expansion physics, and seamless state-to-state transitions. |
| **Coss UI (Browse Particles)** | [coss.so](https://coss.so) | `particles-canvas` | Embedded HTML5 canvas interactive constellation particles with cursor proximity and repulsion physics. |
| **Spectrum UI** | [spectrum-ui.dev](https://spectrum-ui.dev) | `spotlight-shaders` | High-contrast cybernetic edge glow cards, mono telemetry dials, and technical HUDs. |
| **UseLayout** | [uselayout.com](https://uselayout.com) | `minimal-blocks` | Mathematically balanced 12-column asymmetric responsive bento layout architectures. |
| **Details.design** | [details.design](https://details.design) | `animated-motion` | Tactile micro-interactions, hardware-inspired mechanical spring switches, and craft polish. |
| **BeUI** | [beui.dev](https://beui.dev) | `minimal-blocks` | Restrained minimalist frosted glass cards, subtle 1px borders, and micro-badge pills. |
| **Affect UI** | [affect-ui.com](https://affect-ui.com) | `spotlight-shaders` | Ambient reactive lighting, dynamic drop shadow depth, and state-responsive glow fields. |
| **Magic UI** | [magicui.design](https://magicui.design) | `animated-motion` | Interactive living components including file tree explorers, marquis, and command palettes. |
| **Aceternity UI** | [ui.aceternity.com](https://ui.aceternity.com) | `spotlight-shaders` | Cursor-following radial spotlight borders, neon shader glows, and glassmorphic card panels. |
| **21st.dev** | [21st.dev](https://21st.dev) | `interactive-widgets` | Live executable CLI terminal console and GitHub-style commit heatmap grid. |
| **Kokonut UI** | [kokonutui.com](https://kokonutui.com) | `animated-motion` | Vibrant animated gradient trails traveling along card perimeter with live toggles. |
| **Origin UI** | [originui.com](https://originui.com) | `minimal-blocks` | Accessible Radix UI primitives, range sliders, and keyboard-focusable switches. |
| **Hover.dev** | [hover.dev](https://hover.dev) | `animated-motion` | Spring hover bounce physics cards and magnetic cursor attraction pills. |
| **Ibelick UI (Julien Thibeaut)** | [ui.ibelick.com](https://ui.ibelick.com) | `spotlight-shaders` | Hairline 1px frosted glass borders, subtle diffused ambient glow, and quiet typography. |
| **Syntax UI** | [syntaxui.com](https://syntaxui.com) | `spotlight-shaders` | Shimmering light sweep gradient border animations and live metric counters. |
| **BentoUI.dev** | [bentoui.dev](https://bentoui.dev) | `minimal-blocks` | Dedicated Tailwind SaaS bento grid with embedded vector sparklines. |
| **Bentogrids.com** | [bentogrids.com](https://bentogrids.com) | `minimal-blocks` | Curated Swiss typographic bento layouts with 12-column baseline rhythms. |

---

## 🚀 Build & Test

```bash
cd bento-gallery-mcp
npm run build
npm test
```

## 💻 Terminal CLI Usage

```bash
# List all 6 categories
node dist/cli.js categories

# List all 20 component libraries
node dist/cli.js sources

# List all bento components
node dist/cli.js list

# Filter by category
node dist/cli.js list interactive-widgets

# Search by keyword
node dist/cli.js search terminal

# View component details
node dist/cli.js view 21st-dev-terminal-bento

# Get copy-pasteable React + Tailwind CSS code
node dist/cli.js code kokonutui-glowing-bento
```
