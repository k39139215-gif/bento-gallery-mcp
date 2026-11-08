#!/usr/bin/env node
import process from 'node:process';
import {
  getBentoCode,
  getGrid,
  listCategories,
  listGrids,
  listSources,
  searchGrids,
} from './core.js';
import { BentoCategory } from './types.js';

const [,, cmd, ...args] = process.argv;

function printHelp() {
  console.log(`
🍱 Bento Gallery CLI 🍱
Curated Bento Grid UI Components from Iconic Brands & Design Studios

Commands:
  categories              List all bento grid categories
  sources                 List all inspiration sources (Apple, Linear, Raycast, Vercel, etc.)
  list [category]         List bento grids (optional category filter)
  search <query>          Search bento grids by title, tags, or features
  view <slug>             View details and tile layout of a bento grid
  code <slug>             Print the complete React + Tailwind CSS code for a bento grid

Examples:
  node dist/cli.js categories
  node dist/cli.js sources
  node dist/cli.js list interactive-animated
  node dist/cli.js search spotlight
  node dist/cli.js view linear-sleek-bento
  node dist/cli.js code apple-m3-pro-bento
`);
}

switch (cmd) {
  case 'categories': {
    const cats = listCategories();
    console.log('\n📂 Bento Grid Categories:\n');
    cats.forEach((c) => {
      console.log(`• \x1b[36m${c.id}\x1b[0m (${c.count} grids) - ${c.name}`);
      console.log(`  \x1b[90m${c.description}\x1b[0m\n`);
    });
    break;
  }

  case 'sources': {
    const sources = listSources();
    console.log('\n🌟 Multi-Source Design Inspirations:\n');
    sources.forEach((s) => {
      console.log(`• \x1b[33m${s.name}\x1b[0m [\x1b[36m${s.id}\x1b[0m] (${s.count} grids) - ${s.website}`);
      console.log(`  \x1b[90m${s.description}\x1b[0m\n`);
    });
    break;
  }

  case 'list': {
    const cat = args[0] as BentoCategory | undefined;
    const { grids, total } = listGrids({ category: cat });
    console.log(`\n📋 Bento Grids (${total} total):\n`);
    grids.forEach((g) => {
      console.log(`• \x1b[32m${g.slug}\x1b[0m - \x1b[1m${g.title}\x1b[0m`);
      console.log(`  Source: \x1b[33m${g.sourceName}\x1b[0m | Category: \x1b[36m${g.category}\x1b[0m`);
      console.log(`  \x1b[90m${g.description}\x1b[0m\n`);
    });
    break;
  }

  case 'search': {
    const query = args.join(' ');
    if (!query) {
      console.error('Error: Please provide a search query.');
      process.exit(1);
    }
    const results = searchGrids(query);
    console.log(`\n🔍 Search results for "${query}" (${results.length} found):\n`);
    results.forEach((g) => {
      console.log(`• \x1b[32m${g.slug}\x1b[0m - ${g.title}`);
      console.log(`  Source: ${g.sourceName} | Tags: ${g.tags.join(', ')}\n`);
    });
    break;
  }

  case 'view': {
    const slug = args[0];
    if (!slug) {
      console.error('Error: Please specify a bento slug.');
      process.exit(1);
    }
    const grid = getGrid(slug);
    if (!grid) {
      console.error(`Error: Bento grid "${slug}" not found.`);
      process.exit(1);
    } else {
      console.log(`\n🍱 \x1b[1m${grid.title}\x1b[0m`);
      console.log(`Slug: \x1b[32m${grid.slug}\x1b[0m`);
      console.log(`Inspiration: \x1b[33m${grid.sourceName}\x1b[0m (${grid.sourceUrl})`);
      console.log(`Category: \x1b[36m${grid.category}\x1b[0m`);
      console.log(`Description: ${grid.description}`);
      console.log('\nFeatures:');
      grid.features.forEach((f) => console.log(`  - ${f}`));
      console.log('\nTiles Summary:');
      grid.tilesSummary.forEach((t) => console.log(`  - [${t.colSpan}${t.rowSpan ? ` ${t.rowSpan}` : ''}] ${t.title}: ${t.highlight}`));
      console.log(`\nRun \x1b[36mnode dist/cli.js code ${grid.slug}\x1b[0m to view the React component code.\n`);
    }
    break;
  }

  case 'code': {
    const slug = args[0];
    if (!slug) {
      console.error('Error: Please specify a bento slug.');
      process.exit(1);
    }
    const res = getBentoCode(slug);
    if (!res) {
      console.error(`Error: Code not found for bento slug "${slug}".`);
      process.exit(1);
    } else {
      console.log(res.code);
    }
    break;
  }

  default:
    printHelp();
    break;
}
