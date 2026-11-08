# Bento Gallery MCP & CLI 🍱

A specialized Model Context Protocol (MCP) server and developer CLI curating world-class **Bento Grid UI layouts & micro-interactions** from premier tech brands and modern design engineering studios.

> **Why Bento Grids?**
> Bento Grids organize complex product features, statistics, architectures, and micro-tools into harmonious, asymmetric grid cards that boost engagement and clarity.

---

## 🌟 Multi-Source Design Inspirations

We intentionally curate and synthesize patterns across the industry's highest-regarded bento implementations:

| Source | Category | Aesthetic & Mechanics |
| :--- | :--- | :--- |
| **Apple Keynote** | `hardware-launch` | Obsidian black, metallic gradients, 3nm chip dies, battery ring dials, and acoustic wave cards. |
| **Linear.app** | `saas-feature` | Asymmetric dark glass, cycle burnup sparklines, keyboard hotkeys (`C`, `X`, `⌘K`), and Git sync status. |
| **Raycast** | `saas-feature` | Quick search command palettes, hotkey badges (`⌥ Space`), AI prompt tiles, and community extensions. |
| **Vercel** | `developer-cloud` | Stark monochrome contrast, global edge latency matrices, git commit SHA preview cards, and streaming SSR. |
| **Aceternity UI** | `interactive-animated` | Cursor-following radial light spotlights, dynamic glowing borders, and 3D floating pin radars. |
| **Magic UI** | `interactive-animated` | Living components: interactive file tree directory, infinite tech marquee ticker, and live notification streams. |
| **Spell.sh** | `interactive-animated` | 3D multi-axis perspective tilt (`perspective: 1000px`, `rotateX/Y`), photorealistic specular glare, and Z-axis depth. |
| **Supabase** | `developer-cloud` | Emerald green (`#3ECF8E`), instant PostgreSQL query runner console, and Row Level Security shield toggles. |
| **Bentogrids.com** | `minimal-editorial` | Curated Swiss typography, 12-column rhythms, warm monochromes, and tactile micro-elevation hover physics. |

---

## 🚀 Quick Start

### 1. Installation & Build

```bash
cd bento-gallery-mcp
npm run build
```

### 2. Standalone Terminal CLI Usage

```bash
# List all categories
node dist/cli.js categories

# List all inspiration sources
node dist/cli.js sources

# List all bento grids
node dist/cli.js list

# Filter by category
node dist/cli.js list interactive-animated

# Search bento grids
node dist/cli.js search spotlight

# View bento details and layout summary
node dist/cli.js view apple-m3-pro-bento

# Output full production React + Tailwind CSS code
node dist/cli.js code linear-sleek-bento
```

---

## 🛠️ MCP Tools Reference

When connected via MCP to Claude, Cursor, Antigravity, or other AI assistants:

- **`list_categories`**: View all 5 curated design categories with grid counts.
- **`list_sources`**: View all 9 multi-source inspiration studios and platforms.
- **`list_grids`**: Query bento grids with optional category/source filters and pagination.
- **`search_grids`**: Full-text keyword search across titles, descriptions, tags, and features.
- **`get_grid`**: Fetch layout specs, tile compositions, and design details for any bento grid.
- **`get_bento_code`**: Retrieve complete, ready-to-use React + Tailwind CSS code.

---

## 🔌 Antigravity / Claude Desktop Setup

Add to your `mcp_config.json`:

```json
{
  "mcpServers": {
    "bento-gallery": {
      "command": "node",
      "args": [
        "C:\\Users\\kartik\\.gemini\\antigravity\\scratch\\bento-gallery-mcp\\dist\\mcp.js"
      ]
    }
  }
}
```

---

## 🧪 Automated Testing

Verify the server with the automated MCP test client:

```bash
node test-mcp-client.js
```
