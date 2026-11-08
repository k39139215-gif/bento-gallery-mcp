export type BentoCategory =
  | 'saas-feature'
  | 'developer-cloud'
  | 'hardware-launch'
  | 'interactive-animated'
  | 'minimal-editorial';

export type BentoSource =
  | 'apple'
  | 'linear'
  | 'raycast'
  | 'vercel'
  | 'aceternity'
  | 'magicui'
  | 'spell'
  | 'supabase'
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
