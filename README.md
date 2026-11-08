# Bento Gallery MCP & CLI 🍱

A dedicated Model Context Protocol (MCP) server and developer CLI curating world-class **Bento Grid UI Components** strictly from **Premier Component Engineering Libraries & Design Toolkits**:

- **Spell.sh** (`spell`)
- **Rare UI / Rareblocks** (`rare-ui`)
- **Transitions.dev** (`transitions-dev`)
- **Cult UI** (`cult-ui`)
- **Coss UI / Browse Particles** (`coss-ui`)
- **Spectrum UI** (`spectrum-ui`)
- **UseLayout** (`uselayout`)
- **Details.design** (`details-design`)
- **BeUI** (`beui`)
- **Affect UI** (`affect-ui`)
- **Magic UI** (`magicui`)
- **Aceternity UI** (`aceternity`)

---

## 🌟 Curated Component Libraries & Features

| Component Library | Category | Key Bento Component Characteristics |
| :--- | :--- | :--- |
| **Spell.sh** (`spell`) | `3d-spatial` | 3D multi-axis perspective tilt (`perspective: 1000px`, `rotateX/Y`), photorealistic specular glare, and Z-axis depth layers. |
| **Cult UI** (`cult-ui`) | `spotlight-shaders` | Animated conic-gradient rotating border halo, cyberpunk glass panels, and glow masks. |
| **Rare UI / Rareblocks** (`rare-ui`) | `minimal-blocks` | Structured SaaS feature bento blocks with telemetry counters and high-contrast typographic hierarchy. |
| **Transitions.dev** (`transitions-dev`) | `animated-motion` | Fluid layout morphing, spring expansion physics, and seamless state-to-state transitions. |
| **Coss UI (Browse Particles)** (`coss-ui`) | `particles-canvas` | Embedded HTML5 canvas interactive constellation particles with cursor proximity and repulsion physics. |
| **Spectrum UI** (`spectrum-ui`) | `spotlight-shaders` | High-contrast cybernetic edge glow cards, mono telemetry dials, and technical HUDs. |
| **UseLayout** (`uselayout`) | `minimal-blocks` | Mathematically balanced 12-column asymmetric responsive bento layout architectures. |
| **Details.design** (`details-design`) | `animated-motion` | Tactile micro-interactions, hardware-inspired mechanical spring switches, and craft polish. |
| **BeUI** (`beui`) | `minimal-blocks` | Restrained minimalist frosted glass cards, subtle 1px borders, and micro-badge pills. |
| **Affect UI** (`affect-ui`) | `spotlight-shaders` | Ambient reactive lighting, dynamic drop shadow depth, and state-responsive glow fields. |
| **Magic UI** (`magicui`) | `animated-motion` | Interactive living components including file tree explorers, marquis, and command palettes. |
| **Aceternity UI** (`aceternity`) | `spotlight-shaders` | Cursor-following radial spotlight borders, neon shader glows, and glassmorphic card panels. |

---

## 🚀 Build & Test

```bash
cd bento-gallery-mcp
npm run build
npm test
```

## 💻 Terminal CLI Usage

```bash
# List all component categories
node dist/cli.js categories

# List all component libraries
node dist/cli.js sources

# List bento components
node dist/cli.js list

# Filter by category
node dist/cli.js list spotlight-shaders

# Search by keyword
node dist/cli.js search particles

# View component details
node dist/cli.js view cult-ui-shader-bento

# Get copy-pasteable React + Tailwind CSS code
node dist/cli.js code spell-spatial-tilt-bento
```
