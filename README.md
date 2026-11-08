# Bento Gallery MCP & CLI 🍱

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](https://opensource.org/licenses/MIT)
[![MCP Protocol](https://img.shields.io/badge/MCP-1.31.0-blue.svg)](https://modelcontextprotocol.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-indigo.svg)](https://www.typescriptlang.org/)

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
17. **Ibelick UI (Julien Thibeaut)** (`ibelick`)
18. **Syntax UI** (`syntax-ui`)
19. **BentoUI.dev** (`bentoui`)
20. **Bentogrids.com** (`bentogrids`)

---

## 🌟 Curated Component Libraries Matrix

| Component Library | Website | Category | Key Bento Component Characteristics |
| :--- | :--- | :--- | :--- |
| **Aceternity UI** | [ui.aceternity.com](https://ui.aceternity.com/components/bento-grid) | `spotlight-shaders` | Official 3-Column Bento Grid with hover translate & skeleton cards. |
| **Magic UI** | [magicui.design](https://magicui.design/docs/components/bento-grid) | `animated-motion` | Bento Grid & Bento Card with infinite marquee & background beams. |
| **Kokonut UI** | [kokonutui.com](https://kokonutui.com) | `animated-motion` | 6-Column Draggable Widget Grid (v3.0.0) with spring physics by @dorianbaffier. |
| **Cult UI** | [cult-ui.com](https://www.cult-ui.com/docs/components/shift-card) | `spotlight-shaders` | Official Shift Card drawer component & animated conic laser halo borders. |
| **Ibelick UI** | [motion-primitives.com](https://motion-primitives.com/docs/tilt) | `spotlight-shaders` | Julien Thibeaut's official 3D Perspective Tilt & Radial Spotlight. |
| **Spell.sh** | [spell.sh](https://spell.sh) | `3d-spatial` | 3D multi-axis perspective tilt (`perspective: 1000px`, `rotateX/Y`), photorealistic specular glare. |
| **Coss UI** | [coss.so](https://coss.so) | `particles-canvas` | Embedded HTML5 canvas constellation particle mesh & proximity attraction. |
| **Transitions.dev** | [transitions.dev](https://transitions.dev) | `animated-motion` | Fluid layout morphing bento & spring-loaded state expansion cards. |
| **Details.design** | [details.design](https://details.design) | `animated-motion` | Tactile mechanical spring toggle switches with physical hardware bounce. |
| **Rare UI** | [rareblocks.xyz](https://rareblocks.xyz) | `minimal-blocks` | Clean SaaS telemetry feature bento matrix with high-contrast metrics. |
| **Spectrum UI** | [spectrum-ui.dev](https://spectrum-ui.dev) | `spotlight-shaders` | Cybernetic edge glow cards, sub-millisecond RTT dials & telemetry HUD. |
| **UseLayout** | [uselayout.com](https://uselayout.com) | `minimal-blocks` | 12-Column asymmetric CSS Grid bento layout architectures. |
| **BeUI** | [beui.dev](https://beui.dev) | `minimal-blocks` | Restrained minimalist frosted glass cards with `border-white/10`. |
| **Affect UI** | [affect-ui.com](https://affect-ui.com) | `spotlight-shaders` | Ambient reactive lighting & dynamic drop shadow depth fields. |
| **21st.dev** | [21st.dev](https://21st.dev) | `interactive-widgets` | Design engineer registry with live CLI terminal bento & GitHub heatmaps. |
| **Origin UI** | [originui.com](https://originui.com) | `minimal-blocks` | Accessible Radix UI micro-primitives & keyboard-focusable bento cards. |
| **Hover.dev** | [hover.dev](https://hover.dev) | `animated-motion` | Spring hover bounce physics cards & magnetic cursor attraction pills. |
| **Syntax UI** | [syntaxui.com](https://syntaxui.com) | `spotlight-shaders` | Shimmering light sweep gradient border animations & live metric counters. |
| **BentoUI.dev** | [bentoui.dev](https://bentoui.dev) | `minimal-blocks` | Dedicated Tailwind SaaS bento grid with embedded vector sparklines. |
| **Bentogrids.com** | [bentogrids.com](https://bentogrids.com) | `minimal-blocks` | Curated Swiss typographic bento layouts with 12-column baseline rhythms. |

---

## 🚀 Quick Start

### 1. Installation & Build

```bash
git clone https://github.com/k39139215-gif/bento-gallery-mcp.git
cd bento-gallery-mcp
npm install
npm run build
npm test
```

### 2. Standalone Terminal CLI Usage

```bash
# List all 6 categories
node dist/cli.js categories

# List all 20 component libraries
node dist/cli.js sources

# List all bento components
node dist/cli.js list

# Filter by category
node dist/cli.js list spotlight-shaders

# Search by keyword
node dist/cli.js search terminal

# View component details
node dist/cli.js view aceternity-spotlight-bento

# Print exact production React + Tailwind CSS code
node dist/cli.js code magicui-animated-bento
node dist/cli.js code kokonutui-glowing-bento
```

---

## 🔌 MCP Server Setup (Claude Desktop / Cursor / Antigravity)

Add this to your `claude_desktop_config.json` or `mcp_config.json`:

```json
{
  "mcpServers": {
    "bento-gallery": {
      "command": "node",
      "args": [
        "/path/to/bento-gallery-mcp/dist/mcp.js"
      ]
    }
  }
}
```

### Registered MCP Tools:
- **`list_categories`**: List all 6 bento component categories with counts.
- **`list_sources`**: List all 20 component engineering libraries with direct documentation links.
- **`list_grids`**: Query bento grids with optional category and source filters.
- **`search_grids`**: Full-text search across titles, descriptions, features, tags, and libraries.
- **`get_grid`**: Fetch detailed tile specifications, layout summary, and features of a specific bento grid.
- **`get_bento_code`**: Fetch complete, copy-pasteable React + Tailwind CSS code for any bento grid.

---

## 📄 License

MIT License • Copyright (c) 2026 Kartik.
Component designs and primitives remain copyright of their respective authors and open-source creators (Aceternity UI, Magic UI, Kokonut UI, Cult UI, Julien Thibeaut, etc.).
