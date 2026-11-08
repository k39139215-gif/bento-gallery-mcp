import { BentoCategory, BentoCategoryInfo, BentoItem, BentoSource, BentoSourceInfo } from './types.js';
import { CURATED_BENTO_GRIDS } from './curated.js';

export const CATEGORIES_DATA: Record<BentoCategory, { name: string; description: string }> = {
  'saas-feature': {
    name: 'SaaS Feature Showcase',
    description: 'Modern software product overviews featuring sprint charts, cycle progress, and keyboard-first navigation.',
  },
  'developer-cloud': {
    name: 'Developer & Cloud Infrastructure',
    description: 'High-performance cloud platforms, database architecture, edge regions, and git deployment pipelines.',
  },
  'hardware-launch': {
    name: 'Hardware & Product Launch',
    description: 'High-contrast hardware feature matrices showcasing silicon chips, battery life, displays, and acoustic benchmarks.',
  },
  'interactive-animated': {
    name: 'Interactive & Animated Grids',
    description: 'Living UI components featuring cursor-following spotlights, 3D perspective tilts, living widgets, and marquis.',
  },
  'minimal-editorial': {
    name: 'Minimal & Editorial Magazine',
    description: 'Swiss typographic layouts, warm monochromes, tactile elevations, and restrained architectural dividers.',
  },
};

export const SOURCES_DATA: Record<BentoSource, { name: string; description: string; website: string }> = {
  apple: {
    name: 'Apple Keynote Design',
    description: 'Hardware launch feature matrices with obsidian contrast and large metric typography.',
    website: 'https://apple.com',
  },
  linear: {
    name: 'Linear Product Design',
    description: 'Asymmetric dark modern SaaS grids with sprint velocity graphs and keyboard hotkey caps.',
    website: 'https://linear.app',
  },
  raycast: {
    name: 'Raycast Extensions',
    description: 'Keyboard spotlight launcher grids with search input bars and community extension chips.',
    website: 'https://raycast.com',
  },
  vercel: {
    name: 'Vercel Frontend Cloud',
    description: 'Global edge latency maps, preview deployment status cards, and Next.js streaming indicators.',
    website: 'https://vercel.com',
  },
  aceternity: {
    name: 'Aceternity UI',
    description: 'Cursor-following radial spotlight borders, neon shader glows, and glassmorphic card panels.',
    website: 'https://ui.aceternity.com',
  },
  magicui: {
    name: 'Magic UI',
    description: 'Interactive living components including file tree explorers, marquis, and command palettes.',
    website: 'https://magicui.design',
  },
  spell: {
    name: 'Spell.sh Interactive Studio',
    description: '3D cursor perspective tilt transforms with specular light reflections and spatial depth.',
    website: 'https://spell.sh',
  },
  supabase: {
    name: 'Supabase Architecture',
    description: 'Emerald green PostgreSQL consoles, Row Level Security badges, and realtime WebSocket feeds.',
    website: 'https://supabase.com',
  },
  bentogrids: {
    name: 'Bentogrids.com Gallery',
    description: 'Curated world-class bento grid showcases across web design, graphic design, and dark/light modes.',
    website: 'https://bentogrids.com',
  },
};

export function listCategories(): BentoCategoryInfo[] {
  const categories = Object.keys(CATEGORIES_DATA) as BentoCategory[];
  return categories.map((cat) => {
    const info = CATEGORIES_DATA[cat];
    const count = CURATED_BENTO_GRIDS.filter((g) => g.category === cat).length;
    return {
      id: cat,
      name: info.name,
      description: info.description,
      count,
    };
  });
}

export function listSources(): BentoSourceInfo[] {
  const sources = Object.keys(SOURCES_DATA) as BentoSource[];
  return sources.map((src) => {
    const info = SOURCES_DATA[src];
    const count = CURATED_BENTO_GRIDS.filter((g) => g.source === src).length;
    return {
      id: src,
      name: info.name,
      description: info.description,
      website: info.website,
      count,
    };
  });
}

export function listGrids(options: {
  category?: BentoCategory;
  source?: BentoSource;
  page?: number;
  limit?: number;
} = {}): { total: number; page: number; limit: number; grids: BentoItem[] } {
  const { category, source, page = 1, limit = 20 } = options;

  let results = [...CURATED_BENTO_GRIDS];

  if (category) {
    results = results.filter((g) => g.category === category);
  }

  if (source) {
    results = results.filter((g) => g.source === source);
  }

  const total = results.length;
  const startIndex = (page - 1) * limit;
  const paginated = results.slice(startIndex, startIndex + limit);

  // Return without the raw code in listing to keep payloads lightweight
  const lightweightGrids = paginated.map(({ code, ...rest }) => rest as BentoItem);

  return {
    total,
    page,
    limit,
    grids: lightweightGrids,
  };
}

export function searchGrids(query: string, category?: BentoCategory): BentoItem[] {
  const q = query.toLowerCase().trim();
  let results = CURATED_BENTO_GRIDS;

  if (category) {
    results = results.filter((g) => g.category === category);
  }

  if (!q) {
    return results.map(({ code, ...rest }) => rest as BentoItem);
  }

  return results
    .filter((g) => {
      const matchTitle = g.title.toLowerCase().includes(q);
      const matchDesc = g.description.toLowerCase().includes(q);
      const matchTags = g.tags.some((t) => t.toLowerCase().includes(q));
      const matchFeatures = g.features.some((f) => f.toLowerCase().includes(q));
      const matchSource = g.sourceName.toLowerCase().includes(q);
      return matchTitle || matchDesc || matchTags || matchFeatures || matchSource;
    })
    .map(({ code, ...rest }) => rest as BentoItem);
}

export function getGrid(slug: string): BentoItem | null {
  const item = CURATED_BENTO_GRIDS.find((g) => g.slug === slug);
  return item || null;
}

export function getBentoCode(slug: string): { slug: string; title: string; source: string; code: string } | null {
  const item = CURATED_BENTO_GRIDS.find((g) => g.slug === slug);
  if (!item || !item.code) return null;
  return {
    slug: item.slug,
    title: item.title,
    source: item.sourceName,
    code: item.code,
  };
}
