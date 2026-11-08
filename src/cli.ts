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
Curated Bento Grid Components from 20 Premier Design Engineering Libraries:
Spell.sh, Rare UI, Transitions.dev, Cult UI, Coss UI, Spectrum UI, UseLayout, Details.design, BeUI, Affect UI, Magic UI, Aceternity UI, 21st.dev, Kokonut UI, Origin UI, Hover.dev, Ibelick UI, Syntax UI, BentoUI.dev, Bentogrids.com.

Commands:
  categories              List all component bento categories
  sources                 List all 20 component libraries & design websites
  list [category]         List bento grids (optional category filter)
  search <query>          Search bento grids by keyword, library, or feature
  view <slug>             View details and tile layout of a bento grid
  code <slug>             Print the complete React + Tailwind CSS code for a bento grid

Examples:
  node dist/cli.js categories
  node dist/cli.js sources
  node dist/cli.js list interactive-widgets
  node dist/cli.js search terminal
  node dist/cli.js view 21st-dev-terminal-bento
  node dist/cli.js code kokonutui-glowing-bento
`);
}

switch (cmd) {
  case 'categories': {
    const cats = listCategories();
    console.log('\n📂 Bento Grid Categories:\n');
    cats.forEach((c) => {
      console.log(`• \x1b[36m${c.id}\x1b[0m (${c.count} components) - ${c.name}`);
      console.log(`  \x1b[90m${c.description}\x1b[0m\n`);
    });
    break;
  }

  case 'sources': {
    const sources = listSources();
    console.log('\n🌟 20 Premier Component Libraries & Design Toolkits:\n');
    sources.forEach((s) => {
      console.log(`• \x1b[33m${s.name}\x1b[0m [\x1b[36m${s.id}\x1b[0m] (${s.count} bento components) - ${s.website}`);
      console.log(`  \x1b[90m${s.description}\x1b[0m\n`);
    });
    break;
  }

  case 'list': {
    const cat = args[0] as BentoCategory | undefined;
    const { grids, total } = listGrids({ category: cat });
    console.log(`\n📋 Bento Grid Components (${total} total):\n`);
    grids.forEach((g) => {
      console.log(`• \x1b[32m${g.slug}\x1b[0m - \x1b[1m${g.title}\x1b[0m`);
      console.log(`  Library: \x1b[33m${g.sourceName}\x1b[0m | Category: \x1b[36m${g.category}\x1b[0m`);
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
      console.log(`  Library: ${g.sourceName} | Tags: ${g.tags.join(', ')}\n`);
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
      console.log(`Component Library: \x1b[33m${grid.sourceName}\x1b[0m (${grid.sourceUrl})`);
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
