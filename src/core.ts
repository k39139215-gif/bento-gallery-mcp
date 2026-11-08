import { BentoCategory, BentoCategoryInfo, BentoItem, BentoSource, BentoSourceInfo } from './types.js';
import { CURATED_BENTO_GRIDS } from './curated.js';

export const CATEGORIES_DATA: Record<BentoCategory, { name: string; description: string }> = {
  'animated-motion': {
    name: 'Animated & Fluid Motion',
    description: 'Dynamic layout transitions, living tech marquees, morphing expansion tiles, gradient trails, and spring switches.',
  },
  'spotlight-shaders': {
    name: 'Spotlight & Shader Halos',
    description: 'Cursor-following radial light cones, rotating conic shader borders, shimmering edges, and ambient reactive glow fields.',
  },
  '3d-spatial': {
    name: '3D Spatial Perspective',
    description: 'Hardware-accelerated multi-axis 3D perspective tilt transforms with photorealistic specular glare reflection.',
  },
  'particles-canvas': {
    name: 'Living Canvas Particles',
    description: 'Interactive HTML5 canvas particle meshes with cursor proximity repulsion and animated constellation lines.',
  },
  'minimal-blocks': {
    name: 'Minimal & Modular Blocks',
    description: 'Clean SaaS feature matrices, mathematical 12-column asymmetric grids, accessible Radix primitives, and frosted glass.',
  },
  'interactive-widgets': {
    name: 'Interactive Developer Widgets',
    description: 'Live CLI terminal consoles, GitHub commit activity heatmaps, and interactive parameter sliders.',
  },
};

export const SOURCES_DATA: Record<BentoSource, { name: string; description: string; website: string }> = {
  spell: {
    name: 'Spell.sh Interactive Studio',
    description: '3D cursor perspective tilt transforms with specular light reflections and spatial depth.',
    website: 'https://spell.sh',
  },
  'rare-ui': {
    name: 'Rare UI / Rareblocks',
    description: 'Production-ready SaaS feature bento grids with structured metric hierarchy and telemetry.',
    website: 'https://rareblocks.xyz',
  },
  'transitions-dev': {
    name: 'Transitions.dev',
    description: 'Fluid layout state morphing, spring expansion physics, and smooth animated transitions.',
    website: 'https://transitions.dev',
  },
  'cult-ui': {
    name: 'Cult UI',
    description: 'Animated conic shader halo borders, cyberpunk dark glass cards, and glowing gradient masks.',
    website: 'https://cult-ui.com',
  },
  'coss-ui': {
    name: 'Coss UI (Browse Particles)',
    description: 'Interactive HTML5 canvas particle constellations with cursor physics and proximity connections.',
    website: 'https://coss.so',
  },
  'spectrum-ui': {
    name: 'Spectrum UI',
    description: 'High-contrast cybernetic edge glow cards, mono telemetry dials, and technical HUDs.',
    website: 'https://spectrum-ui.dev',
  },
  uselayout: {
    name: 'UseLayout',
    description: 'Mathematically balanced 12-column asymmetric responsive bento layout architectures.',
    website: 'https://uselayout.com',
  },
  'details-design': {
    name: 'Details.design',
    description: 'Tactile micro-interactions, hardware-inspired mechanical spring switches, and craft polish.',
    website: 'https://details.design',
  },
  beui: {
    name: 'BeUI',
    description: 'Restrained minimalist frosted glass cards, subtle 1px borders, and micro-badge pills.',
    website: 'https://beui.dev',
  },
  'affect-ui': {
    name: 'Affect UI',
    description: 'Ambient reactive lighting, dynamic drop shadow depth, and state-responsive glow fields.',
    website: 'https://affect-ui.com',
  },
  magicui: {
    name: 'Magic UI',
    description: 'Interactive living components including file tree explorers, marquis, and command palettes.',
    website: 'https://magicui.design',
  },
  aceternity: {
    name: 'Aceternity UI',
    description: 'Cursor-following radial spotlight borders, neon shader glows, and glassmorphic card panels.',
    website: 'https://ui.aceternity.com',
  },
  '21st-dev': {
    name: '21st.dev (Design Engineers Registry)',
    description: 'Design engineering community bento grid with live CLI terminal console and GitHub commit heatmap.',
    website: 'https://21st.dev',
  },
  kokonutui: {
    name: 'Kokonut UI',
    description: 'Vibrant animated gradient trail highlights, micro-toggles, and reactive widget cards.',
    website: 'https://kokonutui.com',
  },
  originui: {
    name: 'Origin UI',
    description: 'Accessible Radix UI micro-primitives, accessible range sliders, and keyboard-focusable switches.',
    website: 'https://originui.com',
  },
  'hover-dev': {
    name: 'Hover.dev',
    description: 'Spring physics hover bounce cards and magnetic cursor attraction pills.',
    website: 'https://hover.dev',
  },
  ibelick: {
    name: 'Ibelick UI (Julien Thibeaut)',
    description: 'Minimalist dark aesthetic, hairline 1px borders, quiet typography, and subtle ambient radiance.',
    website: 'https://ui.ibelick.com',
  },
  'syntax-ui': {
    name: 'Syntax UI',
    description: 'Shimmering light sweep gradient border animations and live metric counters.',
    website: 'https://syntaxui.com',
  },
  bentoui: {
    name: 'BentoUI.dev',
    description: 'Dedicated Tailwind bento grid components specialized for SaaS conversion and metrics.',
    website: 'https://bentoui.dev',
  },
  bentogrids: {
    name: 'Bentogrids.com Gallery',
    description: 'Curated Swiss typographic layout bento grids with 12-column baseline rhythms.',
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
  const { category, source, page = 1, limit = 50 } = options;

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
