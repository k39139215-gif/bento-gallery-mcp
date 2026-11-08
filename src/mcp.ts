#!/usr/bin/env node
import process from "node:process";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  getBentoCode,
  getGrid,
  listCategories,
  listGrids,
  listSources,
  searchGrids,
} from "./core.js";
import { BentoCategory, BentoSource } from "./types.js";

const server = new McpServer({
  name: "bento-gallery",
  version: "1.0.0",
});

const categoryEnum = z.enum([
  "animated-motion",
  "spotlight-shaders",
  "3d-spatial",
  "particles-canvas",
  "minimal-blocks",
  "interactive-widgets",
]);

const sourceEnum = z.enum([
  "spell",
  "rare-ui",
  "transitions-dev",
  "cult-ui",
  "coss-ui",
  "spectrum-ui",
  "uselayout",
  "details-design",
  "beui",
  "affect-ui",
  "magicui",
  "aceternity",
  "21st-dev",
  "kokonutui",
  "originui",
  "hover-dev",
  "ibelick",
  "syntax-ui",
  "bentoui",
  "bentogrids",
]);

const json = (data: unknown) => ({
  content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
});

const fail = (e: unknown) => ({
  isError: true,
  content: [{ type: "text" as const, text: String(e instanceof Error ? e.message : e) }],
});

server.registerTool(
  "list_categories",
  {
    description: "List all curated Bento Grid categories (animated-motion, spotlight-shaders, 3d-spatial, particles-canvas, minimal-blocks, interactive-widgets) with component counts.",
    inputSchema: {},
  },
  async () => json(listCategories())
);

server.registerTool(
  "list_sources",
  {
    description: "List all 20 premier component design engineering websites and libraries (Spell.sh, Rare UI, Transitions.dev, Cult UI, Coss UI, Spectrum UI, UseLayout, Details.design, BeUI, Affect UI, Magic UI, Aceternity UI, 21st.dev, Kokonut UI, Origin UI, Hover.dev, Ibelick UI, Syntax UI, BentoUI.dev, Bentogrids.com).",
    inputSchema: {},
  },
  async () => json(listSources())
);

server.registerTool(
  "list_grids",
  {
    description: "List Bento Grids with optional category and component library source filters plus pagination.",
    inputSchema: {
      category: categoryEnum.optional(),
      source: sourceEnum.optional(),
      page: z.number().int().min(1).default(1),
      limit: z.number().int().min(1).max(50).default(50),
    },
  },
  async ({ category, source, page, limit }) => {
    try {
      return json(
        listGrids({
          category: category as BentoCategory | undefined,
          source: source as BentoSource | undefined,
          page,
          limit,
        })
      );
    } catch (e) {
      return fail(e);
    }
  }
);

server.registerTool(
  "search_grids",
  {
    description: "Search Bento Grids across titles, descriptions, features, tags, and 20 component libraries.",
    inputSchema: {
      query: z.string().describe("Search keyword, e.g. 'particles', 'shader', '3d tilt', 'terminal', 'kokonut', 'radix', 'spotlight'"),
      category: categoryEnum.optional(),
    },
  },
  async ({ query, category }) => {
    try {
      return json(searchGrids(query, category as BentoCategory | undefined));
    } catch (e) {
      return fail(e);
    }
  }
);

server.registerTool(
  "get_grid",
  {
    description: "Get detailed information, tile composition summary, and features of a specific Bento Grid by slug.",
    inputSchema: {
      slug: z.string().describe("Slug of the bento grid (e.g. 'spell-spatial-tilt-bento', '21st-dev-terminal-bento', 'kokonutui-glowing-bento')"),
    },
  },
  async ({ slug }) => {
    try {
      const grid = getGrid(slug);
      if (!grid) {
        return fail(new Error(`Bento grid not found: ${slug}`));
      }
      return json(grid);
    } catch (e) {
      return fail(e);
    }
  }
);

server.registerTool(
  "get_bento_code",
  {
    description: "Retrieve full, production-ready, copy-pasteable React + Tailwind CSS code for a specified Bento Grid.",
    inputSchema: {
      slug: z.string().describe("Slug of the bento grid (e.g. 'spell-spatial-tilt-bento', '21st-dev-terminal-bento', 'kokonutui-glowing-bento')"),
    },
  },
  async ({ slug }) => {
    try {
      const result = getBentoCode(slug);
      if (!result) {
        return fail(new Error(`Bento code not found for slug: ${slug}`));
      }
      return {
        content: [
          {
            type: "text" as const,
            text: `// Bento Grid: ${result.title} (${result.slug})\n// Component Library Source: ${result.source}\n\n${result.code}`,
          },
        ],
      };
    } catch (e) {
      return fail(e);
    }
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Bento Gallery MCP Server running on stdio");
}

main().catch((err) => {
  console.error("Fatal server error:", err);
  process.exit(1);
});
