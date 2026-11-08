export type BentoCategory =
  | 'animated-motion'
  | 'spotlight-shaders'
  | '3d-spatial'
  | 'particles-canvas'
  | 'minimal-blocks'
  | 'interactive-widgets';

export type BentoSource =
  | 'spell'
  | 'rare-ui'
  | 'transitions-dev'
  | 'cult-ui'
  | 'coss-ui'
  | 'spectrum-ui'
  | 'uselayout'
  | 'details-design'
  | 'beui'
  | 'affect-ui'
  | 'magicui'
  | 'aceternity'
  | '21st-dev'
  | 'kokonutui'
  | 'originui'
  | 'hover-dev'
  | 'ibelick'
  | 'syntax-ui'
  | 'bentoui'
  | 'bentogrids';

export interface BentoTile {
  title: string;
  subtitle?: string;
  colSpan: string; // e.g. "col-span-1 md:col-span-2"
  rowSpan?: string; // e.g. "md:row-span-2"
  highlight: string;
}

export interface BentoItem {
  slug: string;
  title: string;
  description: string;
  category: BentoCategory;
  source: BentoSource;
  sourceName: string;
  sourceUrl: string;
  tags: string[];
  features: string[];
  tilesSummary: BentoTile[];
  code?: string;
}

export interface BentoCategoryInfo {
  id: BentoCategory;
  name: string;
  description: string;
  count: number;
}

export interface BentoSourceInfo {
  id: BentoSource;
  name: string;
  description: string;
  website: string;
  count: number;
}
