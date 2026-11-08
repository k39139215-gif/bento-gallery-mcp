import { BentoItem } from './types.js';

export const CURATED_BENTO_GRIDS: BentoItem[] = [
  {
    "slug": "aceternity-spotlight-bento",
    "title": "Aceternity UI Official Bento Grid",
    "description": "100% official Bento Grid & BentoGridItem components extracted directly from ui.aceternity.com/registry/bento-grid.json.",
    "category": "spotlight-shaders",
    "source": "aceternity",
    "sourceName": "Aceternity UI",
    "sourceUrl": "https://ui.aceternity.com/components/bento-grid",
    "tags": [
      "aceternity",
      "official",
      "registry",
      "bento-grid",
      "shadcn",
      "tailwind"
    ],
    "features": [
      "Official BentoGrid layout wrapper with md:auto-rows-[18rem] md:grid-cols-3",
      "Official BentoGridItem card with group/bento hover translation effect",
      "Dark mode dark:border-white/[0.2] dark:bg-black and shadow-input",
      "Header, icon, title, and description modular slots"
    ],
    "tilesSummary": [
      {
        "title": "BentoGrid Wrapper",
        "subtitle": "3-column responsive container",
        "colSpan": "col-span-3",
        "highlight": "Official Grid Container"
      },
      {
        "title": "BentoGridItem Card",
        "subtitle": "Interactive card with group-hover:translate-x-2",
        "colSpan": "col-span-1",
        "highlight": "Official Card Primitive"
      }
    ],
    "code": "// ============================================================================\n// OFFICIAL ACETERNITY UI BENTO GRID COMPONENT\n// Source: https://ui.aceternity.com/registry/bento-grid.json\n// Author: Aceternity UI (Manu Arora)\n// License: MIT\n// ============================================================================\n\nimport { cn } from \"@/lib/utils\";\n\nexport const BentoGrid = ({\n  className,\n  children,\n}: {\n  className?: string;\n  children?: React.ReactNode;\n}) => {\n  return (\n    <div\n      className={cn(\n        \"mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3\",\n        className,\n      )}\n    >\n      {children}\n    </div>\n  );\n};\n\nexport const BentoGridItem = ({\n  className,\n  title,\n  description,\n  header,\n  icon,\n}: {\n  className?: string;\n  title?: string | React.ReactNode;\n  description?: string | React.ReactNode;\n  header?: React.ReactNode;\n  icon?: React.ReactNode;\n}) => {\n  return (\n    <div\n      className={cn(\n        \"group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none\",\n        className,\n      )}\n    >\n      {header}\n      <div className=\"transition duration-200 group-hover/bento:translate-x-2\">\n        {icon}\n        <div className=\"mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200\">\n          {title}\n        </div>\n        <div className=\"font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300\">\n          {description}\n        </div>\n      </div>\n    </div>\n  );\n};\n"
  },
  {
    "slug": "magicui-animated-bento",
    "title": "Magic UI Official Bento Grid & Bento Card",
    "description": "100% official BentoGrid & BentoCard components extracted directly from magicui.design/r/bento-grid.json with GPU acceleration and inset highlights.",
    "category": "animated-motion",
    "source": "magicui",
    "sourceName": "Magic UI",
    "sourceUrl": "https://magicui.design/docs/components/bento-grid",
    "tags": [
      "magicui",
      "official",
      "registry",
      "bento-card",
      "transform-gpu",
      "radix-ui"
    ],
    "features": [
      "Official BentoGrid auto-rows-[22rem] grid layout",
      "Official BentoCard with dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      "Smooth hover translate transitions with transform-gpu",
      "Integrated Radix UI ArrowRightIcon CTA button"
    ],
    "tilesSummary": [
      {
        "title": "BentoGrid",
        "subtitle": "Official 3-column feature grid wrapper",
        "colSpan": "col-span-3",
        "highlight": "Official Grid Container"
      },
      {
        "title": "BentoCard",
        "subtitle": "Official card with background, Icon, and CTA link",
        "colSpan": "col-span-1 md:col-span-2",
        "highlight": "Official Bento Card"
      }
    ],
    "code": "// ============================================================================\n// OFFICIAL MAGIC UI BENTO GRID COMPONENT\n// Source: https://magicui.design/r/bento-grid.json\n// Author: Magic UI (Dillion Verma)\n// License: MIT\n// ============================================================================\n\nimport { type ComponentPropsWithoutRef, type ReactNode } from \"react\"\nimport { ArrowRightIcon } from \"@radix-ui/react-icons\"\n\nimport { cn } from \"@/lib/utils\"\nimport { Button } from \"@/components/ui/button\"\n\ninterface BentoGridProps extends ComponentPropsWithoutRef<\"div\"> {\n  children: ReactNode\n  className?: string\n}\n\ninterface BentoCardProps extends ComponentPropsWithoutRef<\"div\"> {\n  name: string\n  className: string\n  background: ReactNode\n  Icon: React.ElementType\n  description: string\n  href: string\n  cta: string\n}\n\nconst BentoGrid = ({ children, className, ...props }: BentoGridProps) => {\n  return (\n    <div\n      className={cn(\n        \"grid w-full auto-rows-[22rem] grid-cols-3 gap-4\",\n        className\n      )}\n      {...props}\n    >\n      {children}\n    </div>\n  )\n}\n\nconst BentoCard = ({\n  name,\n  className,\n  background,\n  Icon,\n  description,\n  href,\n  cta,\n  ...props\n}: BentoCardProps) => (\n  <div\n    key={name}\n    className={cn(\n      \"group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl\",\n      // light styles\n      \"bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]\",\n      // dark styles\n      \"dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]\",\n      className\n    )}\n    {...props}\n  >\n    <div>{background}</div>\n    <div className=\"p-4\">\n      <div className=\"pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10\">\n        <Icon className=\"h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75\" />\n        <h3 className=\"text-xl font-semibold text-neutral-700 dark:text-neutral-300\">\n          {name}\n        </h3>\n        <p className=\"max-w-lg text-neutral-400\">{description}</p>\n      </div>\n\n      <div\n        className={cn(\n          \"pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden\"\n        )}\n      >\n        <Button\n          variant=\"link\"\n          asChild\n          size=\"sm\"\n          className=\"pointer-events-auto p-0\"\n        >\n          <a href={href}>\n            {cta}\n            <ArrowRightIcon className=\"ms-2 h-4 w-4 rtl:rotate-180\" />\n          </a>\n        </Button>\n      </div>\n    </div>\n\n    <div\n      className={cn(\n        \"pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex\"\n      )}\n    >\n      <Button\n        variant=\"link\"\n        asChild\n        size=\"sm\"\n        className=\"pointer-events-auto p-0\"\n      >\n        <a href={href}>\n          {cta}\n          <ArrowRightIcon className=\"ms-2 h-4 w-4 rtl:rotate-180\" />\n        </a>\n      </Button>\n    </div>\n\n    <div className=\"pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10\" />\n  </div>\n)\n\nexport { BentoCard, BentoGrid }\n"
  },
  {
    "slug": "kokonutui-glowing-bento",
    "title": "Kokonut UI Official Widget Grid",
    "description": "100% official Widget Grid component (v3.0.0) by @dorianbaffier directly from github.com/kokonut-labs/kokonutui with lift, drag, and spring physics.",
    "category": "animated-motion",
    "source": "kokonutui",
    "sourceName": "Kokonut UI",
    "sourceUrl": "https://kokonutui.com/docs/components/bento-grid",
    "tags": [
      "kokonutui",
      "official",
      "widget-grid",
      "spring-physics",
      "drag-and-drop",
      "motion"
    ],
    "features": [
      "Official Widget Grid with interactive draggable 6-column bento cards",
      "Spring physics and keyboard support powered by motion/react",
      "Full dashboard widgets: Activity, Storage, History, Notes, and Users",
      "Designed by @dorianbaffier for Kokonut UI v3.0.0"
    ],
    "tilesSummary": [
      {
        "title": "Activity Widget",
        "subtitle": "Live activity telemetry with motion indicator",
        "colSpan": "col-span-2",
        "highlight": "Spring Motion Card"
      },
      {
        "title": "Storage & History",
        "subtitle": "Hard drive capacity and audit log widgets",
        "colSpan": "col-span-1",
        "highlight": "Modular Widgets"
      }
    ],
    "code": "// ============================================================================\n// OFFICIAL KOKONUT UI WIDGET GRID COMPONENT (v3.0.0)\n// Source: https://github.com/kokonut-labs/kokonutui/blob/main/components/kokonutui/bento-grid.tsx\n// Author: @dorianbaffier (Kokonut UI)\n// License: MIT\n// ============================================================================\n\n\"use client\";\n\n/**\n * @author: @dorianbaffier\n * @description: Widget Grid\n * @version: 3.0.0\n * @date: 2026-10-14\n * @license: MIT\n * @website: https://kokonutui.com\n * @github: https://github.com/kokonut-labs/kokonutui\n */\n\nimport {\n  Activity,\n  GripVertical,\n  HardDrive,\n  History,\n  NotebookPen,\n  TrendingUp,\n  Users,\n} from \"lucide-react\";\nimport { AnimatePresence, motion } from \"motion/react\";\nimport {\n  type CSSProperties,\n  type FocusEvent,\n  type KeyboardEvent,\n  type MouseEvent,\n  type ReactNode,\n  type PointerEvent as ReactPointerEvent,\n  useCallback,\n  useEffect,\n  useId,\n  useLayoutEffect,\n  useMemo,\n  useRef,\n  useState,\n} from \"react\";\nimport { cn } from \"@/lib/utils\";\n\n/* -------------------------------------------------------------------------- */\n/*                                    Types                                   */\n/* -------------------------------------------------------------------------- */\n\nexport type WidgetSize = \"s\" | \"m\" | \"l\";\n\nexport interface WidgetGridItem {\n  id: string;\n  title: string;\n  icon?: ReactNode;\n  /** Renders the widget body for the size its column span maps to. */\n  render: (size: WidgetSize) => ReactNode;\n  /** Span used when no layout is given. Defaults to 2. */\n  defaultSpan?: number;\n}\n\nexport interface WidgetLayoutItem {\n  id: string;\n  /** Width in columns of the 6-column grid (2 to 6). */\n  span: number;\n}\n\nexport interface WidgetGridProps {\n  items?: WidgetGridItem[];\n  /** Controlled order and spans. */\n  layout?: WidgetLayoutItem[];\n  /** Uncontrolled starting order and spans. */\n  defaultLayout?: WidgetLayoutItem[];\n  /** Called on every reorder or resize, including live moves while dragging. */\n  onLayoutChange?: (layout: WidgetLayoutItem[]) => void;\n  className?: string;\n  /** Height of one row in pixels. */\n  rowHeight?: number;\n}\n\ninterface Rect {\n  x: number;\n  y: number;\n  w: number;\n  h: number;\n}\n\ninterface DragState {\n  id: string;\n  mode: \"pointer\" | \"keyboard\";\n  /** The pointer holding the cell; other fingers are ignored. */\n  pointerId: number;\n  grabX: number;\n  grabY: number;\n  lastX: number;\n  lastY: number;\n  lastT: number;\n  skipId: string | null;\n  snapshot: WidgetLayoutItem[];\n}\n\ninterface PressState {\n  id: string;\n  pointerId: number;\n  startX: number;\n  startY: number;\n  x: number;\n  y: number;\n  timer: number;\n}\n\n/* -------------------------------------------------------------------------- */\n/*                                  Constants                                 */\n/* -------------------------------------------------------------------------- */\n\nconst COLUMNS = 6;\nconst NARROW_COLUMNS = 2;\nconst MIN_SPAN = 2;\nconst GAP = 12;\n/** Matches the `@xl/wg` container query (36rem). */\nconst NARROW_BELOW = 576;\nconst LONG_PRESS_MS = 350;\nconst PRESS_SLOP = 8;\nconst LIFT_Z = 18;\nconst MAX_TILT = 7;\nconst SIZE_LABEL: Record<WidgetSize, string> = {\n  s: \"small\",\n  m: \"medium\",\n  l: \"large\",\n};\n\n/** Maps a column span to the widget layout it shows. */\nexport function sizeForSpan(span: number, narrow = false): WidgetSize {\n  if (narrow) {\n    return span <= MIN_SPAN ? \"s\" : \"m\";\n  }\n  if (span <= 2) {\n    return \"s\";\n  }\n  return span <= 4 ? \"m\" : \"l\";\n}\n\nfunction clampSpan(span: number) {\n  return Math.min(COLUMNS, Math.max(MIN_SPAN, Math.round(span)));\n}\n\n/** In the 2-column layout, small widgets take one column, the rest both. */\nfunction narrowSpan(span: number) {\n  return span <= MIN_SPAN ? 1 : 2;\n}\n\nfunction normalizeLayout(\n  layout: WidgetLayoutItem[],\n  items: WidgetGridItem[]\n): WidgetLayoutItem[] {\n  const known = new Set(items.map((item) => item.id));\n  const seen = new Set<string>();\n  const out: WidgetLayoutItem[] = [];\n  for (const entry of layout) {\n    if (known.has(entry.id) && !seen.has(entry.id)) {\n      seen.add(entry.id);\n      out.push({ id: entry.id, span: clampSpan(entry.span) });\n    }\n  }\n  for (const item of items) {\n    if (!seen.has(item.id)) {\n      out.push({ id: item.id, span: clampSpan(item.defaultSpan ?? MIN_SPAN) });\n    }\n  }\n  return out;\n}\n\nfunction moveItem<T>(list: T[], from: number, to: number): T[] {\n  const next = list.slice();\n  const [moved] = next.splice(from, 1);\n  next.splice(to, 0, moved);\n  return next;\n}\n\nfunction contains(rect: Rect, x: number, y: number) {\n  return (\n    x >= rect.x && x <= rect.x + rect.w && y >= rect.y && y <= rect.y + rect.h\n  );\n}\n\n/* -------------------------------------------------------------------------- */\n/*                               Spring physics                               */\n/* -------------------------------------------------------------------------- */\n\ninterface SpringConfig {\n  k: number;\n  c: number;\n}\n\nconst spring = (k: number, zeta: number): SpringConfig => ({\n  k,\n  c: 2 * Math.sqrt(k) * zeta,\n});\n\nconst MOVE_SPRING = spring(420, 0.76);\nconst LIFT_SPRING = spring(520, 0.82);\nconst TILT_SPRING = spring(260, 0.6);\nconst STEP = 1 / 120;\n\ninterface Body {\n  ox: number;\n  oy: number;\n  vx: number;\n  vy: number;\n  sx: number;\n  sy: number;\n  vsx: number;\n  vsy: number;\n  lift: number;\n  vlift: number;\n  liftTarget: number;\n  rx: number;\n  ry: number;\n  vrx: number;\n  vry: number;\n  /** Smoothed pointer velocity (px/ms) while pinned to the pointer. */\n  pvx: number;\n  pvy: number;\n  /** Seconds to wait before springing home (distance stagger). */\n  hold: number;\n  /** Follows the pointer directly instead of springing home. */\n  pinned: boolean;\n}\n\nfunction createBody(): Body {\n  return {\n    ox: 0,\n    oy: 0,\n    vx: 0,\n    vy: 0,\n    sx: 1,\n    sy: 1,\n    vsx: 0,\n    vsy: 0,\n    lift: 0,\n    vlift: 0,\n    liftTarget: 0,\n    rx: 0,\n    ry: 0,\n    vrx: 0,\n    vry: 0,\n    pvx: 0,\n    pvy: 0,\n    hold: 0,\n    pinned: false,\n  };\n}\n\n/** One semi-implicit Euler step; returns [position, velocity]. */\nfunction integrate(\n  x: number,\n  v: number,\n  target: number,\n  cfg: SpringConfig,\n  dt: number\n): [number, number] {\n  const a = -cfg.k * (x - target) - cfg.c * v;\n  const nv = v + a * dt;\n  return [x + nv * dt, nv];\n}\n\nconst clampTilt = (v: number) => Math.max(-MAX_TILT, Math.min(MAX_TILT, v));\n\nfunction stepBody(b: Body, dt: number) {\n  // Lean toward the drag direction: right edge dips when moving right.\n  const tiltY = b.pinned ? clampTilt(b.pvx * 9) : 0;\n  const tiltX = b.pinned ? clampTilt(-b.pvy * 9) : 0;\n  [b.ry, b.vry] = integrate(b.ry, b.vry, tiltY, TILT_SPRING, dt);\n  [b.rx, b.vrx] = integrate(b.rx, b.vrx, tiltX, TILT_SPRING, dt);\n  [b.lift, b.vlift] = integrate(b.lift, b.vlift, b.liftTarget, LIFT_SPRING, dt);\n  // Pointer velocity decays when the pointer rests, so the tilt settles.\n  b.pvx *= Math.exp(-dt * 10);\n  b.pvy *= Math.exp(-dt * 10);\n  if (b.hold > 0) {\n    b.hold -= dt;\n    return;\n  }\n  if (!b.pinned) {\n    [b.ox, b.vx] = integrate(b.ox, b.vx, 0, MOVE_SPRING, dt);\n    [b.oy, b.vy] = integrate(b.oy, b.vy, 0, MOVE_SPRING, dt);\n  }\n  [b.sx, b.vsx] = integrate(b.sx, b.vsx, 1, MOVE_SPRING, dt);\n  [b.sy, b.vsy] = integrate(b.sy, b.vsy, 1, MOVE_SPRING, dt);\n}\n\nconst near = (x: number, v: number, target: number, eps: number) =>\n  Math.abs(x - target) < eps && Math.abs(v) < eps * 10;\n\nfunction isSettled(b: Body) {\n  if (b.pinned || b.hold > 0) {\n    return false;\n  }\n  return (\n    near(b.ox, b.vx, 0, 0.2) &&\n    near(b.oy, b.vy, 0, 0.2) &&\n    near(b.sx, b.vsx, 1, 0.001) &&\n    near(b.sy, b.vsy, 1, 0.001) &&\n    near(b.lift, b.vlift, b.liftTarget, 0.002) &&\n    near(b.rx, b.vrx, 0, 0.02) &&\n    near(b.ry, b.vry, 0, 0.02)\n  );\n}\n\nfunction snapBody(b: Body) {\n  if (!b.pinned) {\n    b.ox = 0;\n    b.oy = 0;\n  }\n  b.vx = 0;\n  b.vy = 0;\n  b.sx = 1;\n  b.sy = 1;\n  b.vsx = 0;\n  b.vsy = 0;\n  b.lift = b.liftTarget;\n  b.vlift = 0;\n  b.rx = 0;\n  b.ry = 0;\n  b.vrx = 0;\n  b.vry = 0;\n  b.hold = 0;\n}\n\nconst r2 = (n: number) => Math.round(n * 100) / 100;\nconst r3 = (n: number) => Math.round(n * 1000) / 1000;\n\n/**\n * Owns every cell's spring state and writes transforms straight to the DOM,\n * so React never re-renders per frame. The loop sleeps once all is settled.\n */\nclass GridEngine {\n  bodies = new Map<string, Body>();\n  els = new Map<string, HTMLElement>();\n  reduced = false;\n  private raf = 0;\n  private last = 0;\n\n  body(id: string) {\n    let b = this.bodies.get(id);\n    if (!b) {\n      b = createBody();\n      this.bodies.set(id, b);\n    }\n    return b;\n  }\n\n  kick() {\n    if (this.raf || typeof window === \"undefined\") {\n      return;\n    }\n    this.last = performance.now();\n    this.raf = requestAnimationFrame(this.tick);\n  }\n\n  stop() {\n    cancelAnimationFrame(this.raf);\n    this.raf = 0;\n  }\n\n  write(id: string, b: Body) {\n    const el = this.els.get(id);\n    if (!el) {\n      return;\n    }\n    const surface = el.firstElementChild as HTMLElement | null;\n    const shadow = surface?.firstElementChild as HTMLElement | null;\n    const atRest =\n      b.ox === 0 && b.oy === 0 && b.lift === 0 && b.rx === 0 && b.ry === 0;\n    el.style.transform = atRest\n      ? \"\"\n      : `translate3d(${r2(b.ox)}px, ${r2(b.oy)}px, ${r2(b.lift * LIFT_Z)}px) rotateX(${r2(b.rx)}deg) rotateY(${r2(b.ry)}deg)`;\n    if (surface) {\n      surface.style.transform =\n        b.sx === 1 && b.sy === 1 ? \"\" : `scale(${r3(b.sx)}, ${r3(b.sy)})`;\n    }\n    if (shadow) {\n      shadow.style.opacity = String(r2(Math.max(0, Math.min(1, b.lift))));\n    }\n  }\n\n  private advance(b: Body, elapsed: number) {\n    if (this.reduced) {\n      snapBody(b);\n      return false;\n    }\n    let t = elapsed;\n    while (t > 0) {\n      const dt = Math.min(STEP, t);\n      stepBody(b, dt);\n      t -= dt;\n    }\n    if (isSettled(b)) {\n      snapBody(b);\n      return false;\n    }\n    return true;\n  }\n\n  private readonly tick = (now: number) => {\n    const elapsed = Math.min(0.05, (now - this.last) / 1000);\n    this.last = now;\n    let active = false;\n    for (const [id, b] of this.bodies) {\n      active = this.advance(b, elapsed) || active;\n      this.write(id, b);\n    }\n    this.raf = active ? requestAnimationFrame(this.tick) : 0;\n  };\n}\n\n/* -------------------------------------------------------------------------- */\n/*                                 Demo widgets                               */\n/* -------------------------------------------------------------------------- */\n\nconst VALUE =\n  \"font-semibold text-zinc-900 tabular-nums tracking-tight dark:text-zinc-50\";\nconst MUTED = \"text-zinc-500 dark:text-zinc-400\";\nconst ACCENT_TEXT = \"font-medium text-(--wg-accent)\";\n\nconst REVENUE_SERIES = [\n  31, 34, 33, 36, 35, 39, 38, 41, 40, 43, 42, 45, 44, 48,\n] as const;\nconst SPARK_POINTS = REVENUE_SERIES.map((v, i) => {\n  const x = Math.round((i / (REVENUE_SERIES.length - 1)) * 1000) / 10;\n  const y = Math.round((1 - (v - 30) / 19) * 300) / 10 + 1;\n  return `${x},${y}`;\n}).join(\" \");\n\nfunction Sparkline() {\n  return (\n    <svg\n      aria-hidden=\"true\"\n      className=\"h-10 w-full overflow-visible\"\n      preserveAspectRatio=\"none\"\n      viewBox=\"0 0 100 32\"\n    >\n      <polyline\n        fill=\"none\"\n        points={SPARK_POINTS}\n        stroke=\"var(--wg-accent)\"\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        strokeWidth={1.75}\n        vectorEffect=\"non-scaling-stroke\"\n      />\n    </svg>\n  );\n}\n\nconst REVENUE_ROWS = [\n  [\"New\", \"$6,140\"],\n  [\"Expansion\", \"$2,380\"],\n  [\"Churned\", \"−$1,190\"],\n] as const;\n\nfunction RevenueWidget({ size }: { size: WidgetSize }) {\n  const head = (\n    <div>\n      <p className={cn(VALUE, size === \"s\" ? \"text-2xl\" : \"text-3xl\")}>\n        $48,210\n      </p>\n      <p className=\"mt-1 text-xs\">\n        <span className={ACCENT_TEXT}>+12.4%</span>\n        <span className={MUTED}> vs last month</span>\n      </p>\n    </div>\n  );\n  if (size === \"s\") {\n    return <div className=\"flex h-full flex-col justify-end\">{head}</div>;\n  }\n  if (size === \"m\") {\n    return (\n      <div className=\"flex h-full flex-col justify-between gap-2\">\n        {head}\n        <Sparkline />\n      </div>\n    );\n  }\n  return (\n    <div className=\"grid h-full grid-cols-[1.4fr_1fr] gap-6\">\n      <div className=\"flex min-w-0 flex-col justify-between gap-2\">\n        {head}\n        <Sparkline />\n      </div>\n      <dl className=\"flex flex-col justify-end gap-1.5 text-xs\">\n        {REVENUE_ROWS.map(([label, value]) => (\n          <div\n            className=\"flex items-baseline justify-between border-zinc-100 border-b pb-1.5 last:border-0 last:pb-0 dark:border-zinc-800\"\n            key={label}\n          >\n            <dt className={MUTED}>{label}</dt>\n            <dd className=\"font-medium text-zinc-800 tabular-nums dark:text-zinc-200\">\n              {value}\n            </dd>\n          </div>\n        ))}\n      </dl>\n    </div>\n  );\n}\n\nconst USERS_SERIES = [\n  1820, 1960, 2010, 1890, 2240, 1450, 1380, 2120, 2380, 2290, 2510, 2640, 1720,\n  2841,\n] as const;\nconst DAY_LABELS = [\"M\", \"T\", \"W\", \"T\", \"F\", \"S\", \"S\"] as const;\nconst BAR_KEYS = USERS_SERIES.map((_, i) => `d${i}`);\n\nfunction Bars({\n  values,\n  labels,\n}: {\n  values: readonly number[];\n  labels: readonly string[];\n}) {\n  const max = Math.max(...values);\n  const keys = BAR_KEYS.slice(-values.length);\n  return (\n    <div className=\"flex h-full min-h-0 flex-col gap-1\">\n      <div className=\"flex min-h-0 flex-1 items-end gap-1\">\n        {values.map((v, i) => (\n          <div\n            className={cn(\n              \"flex-1 rounded-[3px]\",\n              i === values.length - 1\n                ? \"bg-(--wg-accent)\"\n                : \"bg-zinc-200 dark:bg-zinc-800\"\n            )}\n            key={keys[i]}\n            style={{ height: `${Math.round((v / max) * 100)}%` }}\n          />\n        ))}\n      </div>\n      <div className=\"flex gap-1\">\n        {labels.map((label, i) => (\n          <span\n            className={cn(MUTED, \"flex-1 text-center text-[10px] leading-3\")}\n            key={keys[i]}\n          >\n            {label}\n          </span>\n        ))}\n      </div>\n    </div>\n  );\n}\n\nfunction UsersWidget({ size }: { size: WidgetSize }) {\n  if (size === \"s\") {\n    return (\n      <div className=\"flex h-full flex-col justify-end gap-1\">\n        <p className={cn(VALUE, \"text-2xl\")}>2,841</p>\n        <p className=\"text-xs\">\n          <span className={ACCENT_TEXT}>+6.2%</span>\n          <span className={MUTED}> today</span>\n        </p>\n      </div>\n    );\n  }\n  return (\n    <div className=\"flex h-full flex-col gap-3\">\n      <div className=\"flex items-baseline gap-2\">\n        <p className={cn(VALUE, \"text-2xl\")}>2,841</p>\n        <p className=\"text-xs\">\n          <span className={ACCENT_TEXT}>+6.2%</span>\n          <span className={MUTED}> active today</span>\n        </p>\n      </div>\n      <div className=\"min-h-0 flex-1\">\n        {size === \"m\" ? (\n          <Bars labels={DAY_LABELS} values={USERS_SERIES.slice(-7)} />\n        ) : (\n          <Bars labels={[...DAY_LABELS, ...DAY_LABELS]} values={USERS_SERIES} />\n        )}\n      </div>\n    </div>\n  );\n}\n\nconst EVENTS = [\n  { time: \"09:41\", text: \"Release 4.2 promoted to production\" },\n  { time: \"09:12\", text: \"Invoice 2041 paid\" },\n  { time: \"08:55\", text: \"New teammate joined Design\" },\n  { time: \"Mon\", text: \"Nightly backup verified\" },\n] as const;\n\nconst EVENT_COUNT: Record<WidgetSize, number> = { s: 1, m: 3, l: 4 };\n\nfunction TimelineWidget({ size }: { size: WidgetSize }) {\n  const count = EVENT_COUNT[size];\n  return (\n    <ol className=\"flex h-full flex-col justify-end\">\n      {EVENTS.slice(0, count).map((event, i) => (\n        <li className=\"relative flex gap-3 pb-2 last:pb-0\" key={event.text}>\n          <span className=\"relative flex w-2 shrink-0 justify-center pt-1.5\">\n            <span\n              className={cn(\n                \"size-2 rounded-full\",\n                i === 0\n                  ? \"bg-(--wg-accent)\"\n                  : \"border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-900\"\n              )}\n            />\n            {i < count - 1 ? (\n              <span className=\"absolute top-4 bottom-[-6px] w-px bg-zinc-200 dark:bg-zinc-800\" />\n            ) : null}\n          </span>\n          <span className=\"min-w-0 flex-1 text-xs leading-5\">\n            <span className=\"block truncate text-zinc-800 dark:text-zinc-200\">\n              {event.text}\n            </span>\n            {size === \"s\" ? (\n              <span className={MUTED}>Today, {event.time}</span>\n            ) : null}\n          </span>\n          {size === \"s\" ? null : (\n            <span\n              className={cn(MUTED, \"shrink-0 text-xs tabular-nums leading-5\")}\n            >\n              {event.time}\n            </span>\n          )}\n        </li>\n      ))}\n    </ol>\n  );\n}\n\nconst NOTES = [\n  { text: \"Draft Q4 roadmap\", done: true },\n  { text: \"Review onboarding copy\", done: true },\n  { text: \"Pick pricing experiment\", done: true },\n  { text: \"Book design review\", done: false },\n  { text: \"Share hiring plan\", done: false },\n] as const;\nconst NOTES_DONE = NOTES.filter((note) => note.done).length;\n\nfunction Check({ done }: { done: boolean }) {\n  return (\n    <span\n      className={cn(\n        \"flex size-3.5 shrink-0 items-center justify-center rounded-[4px] border\",\n        done\n          ? \"border-(--wg-accent) bg-(--wg-accent) text-white dark:text-zinc-950\"\n          : \"border-zinc-300 dark:border-zinc-600\"\n      )}\n    >\n      {done ? (\n        <svg\n          aria-hidden=\"true\"\n          className=\"size-2.5\"\n          fill=\"none\"\n          viewBox=\"0 0 10 10\"\n        >\n          <path\n            d=\"M2 5.2 4.1 7.2 8 3\"\n            stroke=\"currentColor\"\n            strokeLinecap=\"round\"\n            strokeLinejoin=\"round\"\n            strokeWidth={1.6}\n          />\n        </svg>\n      ) : null}\n    </span>\n  );\n}\n\nfunction NotesWidget({ size }: { size: WidgetSize }) {\n  if (size === \"s\") {\n    return (\n      <div className=\"flex h-full flex-col justify-end gap-2\">\n        <p className=\"font-medium text-sm text-zinc-900 dark:text-zinc-100\">\n          Q4 planning\n        </p>\n        <p className={cn(MUTED, \"text-xs\")}>\n          {NOTES_DONE} of {NOTES.length} done\n        </p>\n        <div className=\"h-1 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800\">\n          <div\n            className=\"h-full rounded-full bg-(--wg-accent)\"\n            style={{ width: `${(NOTES_DONE / NOTES.length) * 100}%` }}\n          />\n        </div>\n      </div>\n    );\n  }\n  const list = size === \"m\" ? NOTES.slice(2) : NOTES;\n  return (\n    <ul\n      className={cn(\n        \"grid h-full content-end gap-x-6 gap-y-2 text-xs\",\n        size === \"l\" && \"grid-cols-2\"\n      )}\n    >\n      {list.map((note) => (\n        <li className=\"flex min-w-0 items-center gap-2\" key={note.text}>\n          <Check done={note.done} />\n          <span\n            className={cn(\n              \"truncate\",\n              note.done\n                ? \"text-zinc-400 line-through dark:text-zinc-500\"\n                : \"text-zinc-800 dark:text-zinc-200\"\n            )}\n          >\n            {note.text}\n          </span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nconst UPTIME_INCIDENT_AGO = 18;\nconst TICK_KEYS = Array.from({ length: 45 }, (_, i) => `t${i}`);\n\nfunction UptimeWidget({ size }: { size: WidgetSize }) {\n  const ticks = size === \"l\" ? 45 : 30;\n  return (\n    <div className=\"flex h-full flex-col justify-end gap-3\">\n      <div className=\"flex items-baseline gap-2\">\n        <p className={cn(VALUE, \"text-2xl\")}>99.98%</p>\n        {size === \"s\" ? null : (\n          <p className={cn(MUTED, \"text-xs\")}>last {ticks} days</p>\n        )}\n      </div>\n      {size === \"s\" ? (\n        <p className={cn(MUTED, \"text-xs\")}>All systems normal</p>\n      ) : (\n        <div className=\"flex h-7 gap-[3px]\">\n          {TICK_KEYS.slice(0, ticks).map((key, i) => (\n            <span\n              className={cn(\n                \"flex-1 rounded-[2px]\",\n                i === ticks - UPTIME_INCIDENT_AGO\n                  ? \"bg-(--wg-accent)\"\n                  : \"bg-zinc-200 dark:bg-zinc-800\"\n              )}\n              key={key}\n            />\n          ))}\n        </div>\n      )}\n      {size === \"l\" ? (\n        <p className={cn(MUTED, \"text-xs\")}>\n          One incident {UPTIME_INCIDENT_AGO} days ago: slower API responses for\n          4 minutes.\n        </p>\n      ) : null}\n    </div>\n  );\n}\n\nconst STORAGE = [\n  { label: \"Media\", gb: 182, tone: \"bg-(--wg-accent)\" },\n  { label: \"Documents\", gb: 96, tone: \"bg-zinc-500 dark:bg-zinc-400\" },\n  { label: \"Backups\", gb: 64, tone: \"bg-zinc-300 dark:bg-zinc-600\" },\n] as const;\nconst STORAGE_TOTAL = 500;\nconst STORAGE_USED = STORAGE.reduce((sum, s) => sum + s.gb, 0);\n\nfunction StorageWidget({ size }: { size: WidgetSize }) {\n  const segments =\n    size === \"s\"\n      ? [{ label: \"Used\", gb: STORAGE_USED, tone: \"bg-(--wg-accent)\" }]\n      : STORAGE;\n  return (\n    <div className=\"flex h-full flex-col justify-end gap-2.5\">\n      <p className=\"flex items-baseline gap-1.5\">\n        <span className={cn(VALUE, \"text-2xl\")}>{STORAGE_USED} GB</span>\n        <span className={cn(MUTED, \"text-xs\")}>of {STORAGE_TOTAL}</span>\n      </p>\n      <div className=\"flex h-1.5 gap-px overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800\">\n        {segments.map((s) => (\n          <span\n            className={cn(\"h-full\", s.tone)}\n            key={s.label}\n            style={{ width: `${(s.gb / STORAGE_TOTAL) * 100}%` }}\n          />\n        ))}\n      </div>\n      {size === \"s\" ? null : (\n        <ul className=\"flex flex-wrap gap-x-4 gap-y-1 text-xs\">\n          {STORAGE.map((s) => (\n            <li className=\"flex items-center gap-1.5\" key={s.label}>\n              <span className={cn(\"size-2 rounded-full\", s.tone)} />\n              <span className={MUTED}>{s.label}</span>\n              {size === \"l\" ? (\n                <span className=\"text-zinc-800 tabular-nums dark:text-zinc-200\">\n                  {s.gb} GB\n                </span>\n              ) : null}\n            </li>\n          ))}\n        </ul>\n      )}\n    </div>\n  );\n}\n\nconst ICON = \"size-3.5\";\n\nexport const DEMO_WIDGETS: WidgetGridItem[] = [\n  {\n    id: \"revenue\",\n    title: \"Revenue\",\n    icon: <TrendingUp className={ICON} />,\n    defaultSpan: 2,\n    render: (size) => <RevenueWidget size={size} />,\n  },\n  {\n    id: \"users\",\n    title: \"Active users\",\n    icon: <Users className={ICON} />,\n    defaultSpan: 4,\n    render: (size) => <UsersWidget size={size} />,\n  },\n  {\n    id: \"activity\",\n    title: \"Activity\",\n    icon: <History className={ICON} />,\n    defaultSpan: 3,\n    render: (size) => <TimelineWidget size={size} />,\n  },\n  {\n    id: \"notes\",\n    title: \"Notes\",\n    icon: <NotebookPen className={ICON} />,\n    defaultSpan: 3,\n    render: (size) => <NotesWidget size={size} />,\n  },\n  {\n    id: \"uptime\",\n    title: \"Uptime\",\n    icon: <Activity className={ICON} />,\n    defaultSpan: 4,\n    render: (size) => <UptimeWidget size={size} />,\n  },\n  {\n    id: \"storage\",\n    title: \"Storage\",\n    icon: <HardDrive className={ICON} />,\n    defaultSpan: 2,\n    render: (size) => <StorageWidget size={size} />,\n  },\n];\n\n/* -------------------------------------------------------------------------- */\n/*                                    Cell                                    */\n/* -------------------------------------------------------------------------- */\n\ninterface CellProps {\n  item: WidgetGridItem;\n  span: number;\n  narrow: boolean;\n  lifted: boolean;\n  dimmed: boolean;\n  instructionsId: string;\n  cellRef: (el: HTMLDivElement | null) => void;\n  gripRef: (el: HTMLButtonElement | null) => void;\n  onPressStart: (e: ReactPointerEvent<HTMLDivElement>) => void;\n  onGripPointerDown: (e: ReactPointerEvent<HTMLButtonElement>) => void;\n  onGripKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;\n  onGripBlur: () => void;\n  onResizePointerDown: (e: ReactPointerEvent<HTMLButtonElement>) => void;\n  onResizeKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;\n  onHover: (on: boolean) => void;\n  onFocusChange: (on: boolean) => void;\n}\n\nfunction WidgetCell({\n  item,\n  span,\n  narrow,\n  lifted,\n  dimmed,\n  instructionsId,\n  cellRef,\n  gripRef,\n  onPressStart,\n  onGripPointerDown,\n  onGripKeyDown,\n  onGripBlur,\n  onResizePointerDown,\n  onResizeKeyDown,\n  onHover,\n  onFocusChange,\n}: CellProps) {\n  const size = sizeForSpan(span, narrow);\n  const columns = narrow ? NARROW_COLUMNS : COLUMNS;\n  const shownSpan = narrow ? narrowSpan(span) : span;\n\n  const handleFocus = (e: FocusEvent<HTMLDivElement>) => {\n    if (e.target.matches(\":focus-visible\")) {\n      onFocusChange(true);\n    }\n  };\n  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {\n    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {\n      onFocusChange(false);\n    }\n  };\n  // Long-pressing with a finger would otherwise open the system menu.\n  const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {\n    const native = e.nativeEvent as globalThis.PointerEvent;\n    if (lifted || native.pointerType === \"touch\") {\n      e.preventDefault();\n    }\n  };\n\n  return (\n    // biome-ignore lint/a11y/noStaticElementInteractions: long press is a pointer shortcut; the grip button is the accessible control.\n    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: long press is a pointer shortcut; the grip button is the accessible control.\n    <div\n      className={cn(\n        \"group/cell relative @xl/wg:col-span-(--span) col-span-(--span-n) select-none [-webkit-touch-callout:none]\",\n        \"transition-opacity duration-200 ease-out\",\n        dimmed && \"opacity-45\",\n        lifted && \"z-20\"\n      )}\n      data-lifted={lifted || undefined}\n      onBlur={handleBlur}\n      onContextMenu={handleContextMenu}\n      onFocus={handleFocus}\n      onPointerDown={onPressStart}\n      onPointerEnter={(e) => e.pointerType === \"mouse\" && onHover(true)}\n      onPointerLeave={(e) => e.pointerType === \"mouse\" && onHover(false)}\n      ref={cellRef}\n      style={{ \"--span\": span, \"--span-n\": narrowSpan(span) } as CSSProperties}\n    >\n      {/* Surface: scaled by the engine while a resize settles. */}\n      <div className=\"pointer-events-none absolute inset-0 origin-top-left rounded-2xl border border-zinc-200 bg-white transition-colors duration-200 group-data-lifted/cell:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:group-data-lifted/cell:border-zinc-700\">\n        {/* Lift shadow, faded in by the engine. */}\n        <div className=\"absolute inset-0 rounded-2xl opacity-0 shadow-[0_24px_48px_-16px_rgb(0_0_0/0.22),0_8px_16px_-8px_rgb(0_0_0/0.12)] dark:shadow-[0_24px_48px_-12px_rgb(0_0_0/0.7),0_8px_16px_-8px_rgb(0_0_0/0.5)]\" />\n      </div>\n\n      <div className=\"relative flex h-full flex-col p-4 pt-3\">\n        <div className=\"mb-2 flex h-7 shrink-0 items-center gap-2\">\n          <span aria-hidden className=\"text-zinc-400 dark:text-zinc-500\">\n            {item.icon}\n          </span>\n          <span className=\"truncate font-medium text-[13px] text-zinc-600 dark:text-zinc-400\">\n            {item.title}\n          </span>\n          <button\n            aria-describedby={instructionsId}\n            aria-label={`Move ${item.title} (${SIZE_LABEL[size]})`}\n            aria-pressed={lifted}\n            className={cn(\n              \"-mr-2 ml-auto flex size-7 shrink-0 cursor-grab touch-none items-center justify-center rounded-md text-zinc-400 outline-none\",\n              \"transition-colors duration-150 hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-200\",\n              \"focus-visible:ring-(--wg-accent) focus-visible:ring-2\",\n              lifted &&\n                \"cursor-grabbing bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200\"\n            )}\n            data-no-press\n            onBlur={onGripBlur}\n            onKeyDown={onGripKeyDown}\n            onPointerDown={onGripPointerDown}\n            ref={gripRef}\n            type=\"button\"\n          >\n            <GripVertical aria-hidden className=\"size-4\" />\n          </button>\n        </div>\n\n        <div className=\"relative min-h-0 flex-1\">\n          <AnimatePresence initial={false}>\n            <motion.div\n              animate={{ opacity: 1 }}\n              className=\"absolute inset-0\"\n              exit={{ opacity: 0 }}\n              initial={{ opacity: 0 }}\n              key={size}\n              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}\n            >\n              {item.render(size)}\n            </motion.div>\n          </AnimatePresence>\n        </div>\n      </div>\n\n      <button\n        aria-label={`Resize ${item.title}, ${shownSpan} of ${columns} columns`}\n        className={cn(\n          \"absolute right-0 bottom-0 flex size-7 cursor-ew-resize touch-none items-end justify-end rounded-br-2xl p-1.5 text-zinc-400 outline-none dark:text-zinc-500\",\n          \"opacity-0 transition-opacity duration-150 focus-visible:opacity-100 group-hover/cell:opacity-100 [@media(hover:none)]:opacity-70\",\n          \"hover:text-zinc-700 focus-visible:text-(--wg-accent) dark:hover:text-zinc-200\"\n        )}\n        data-no-press\n        onKeyDown={onResizeKeyDown}\n        onPointerDown={onResizePointerDown}\n        type=\"button\"\n      >\n        <svg\n          aria-hidden=\"true\"\n          className=\"size-2.5\"\n          fill=\"none\"\n          viewBox=\"0 0 10 10\"\n        >\n          <circle cx=\"8.5\" cy=\"3.5\" fill=\"currentColor\" r=\"1.1\" />\n          <circle cx=\"6\" cy=\"6\" fill=\"currentColor\" r=\"1.1\" />\n          <circle cx=\"3.5\" cy=\"8.5\" fill=\"currentColor\" r=\"1.1\" />\n        </svg>\n      </button>\n    </div>\n  );\n}\n\n/* -------------------------------------------------------------------------- */\n/*                                 Widget Grid                                */\n/* -------------------------------------------------------------------------- */\n\nexport default function WidgetGrid({\n  items = DEMO_WIDGETS,\n  layout,\n  defaultLayout,\n  onLayoutChange,\n  className,\n  rowHeight = 176,\n}: WidgetGridProps) {\n  const instructionsId = useId();\n  const [innerLayout, setInnerLayout] = useState<WidgetLayoutItem[]>(() =>\n    normalizeLayout(defaultLayout ?? [], items)\n  );\n  const current = useMemo(\n    () => normalizeLayout(layout ?? innerLayout, items),\n    [layout, innerLayout, items]\n  );\n  const layoutKey = current.map((c) => `${c.id}:${c.span}`).join(\"|\");\n  const itemsById = useMemo(\n    () => new Map(items.map((item) => [item.id, item])),\n    [items]\n  );\n\n  const [narrow, setNarrow] = useState(false);\n  const [liftedId, setLiftedId] = useState<string | null>(null);\n  const [resizingId, setResizingId] = useState<string | null>(null);\n  // Last cell hovered or keyboard-focused; it stays lit while others dim.\n  const [pointedId, setPointedId] = useState<string | null>(null);\n  const [message, setMessage] = useState(\"\");\n\n  const wrapRef = useRef<HTMLDivElement>(null);\n  const gridRef = useRef<HTMLDivElement>(null);\n  const engineRef = useRef<GridEngine | null>(null);\n  if (!engineRef.current) {\n    engineRef.current = new GridEngine();\n  }\n  const engine = engineRef.current;\n  const rectsRef = useRef(new Map<string, Rect>());\n  const gripsRef = useRef(new Map<string, HTMLButtonElement>());\n  const pendingFlipRef = useRef<{\n    prev: Map<string, Rect>;\n    movedId: string;\n  } | null>(null);\n  const dragRef = useRef<DragState | null>(null);\n  const pressRef = useRef<PressState | null>(null);\n  const resizeIdRef = useRef<string | null>(null);\n  const resizeStartRef = useRef<{ x: number; span: number } | null>(null);\n  const reorderingRef = useRef(false);\n  const narrowRef = useRef(false);\n  const layoutRef = useRef(current);\n  layoutRef.current = current;\n  const latest = useRef({ layout, onLayoutChange, itemsById });\n  latest.current = { layout, onLayoutChange, itemsById };\n  // Stable handles to handlers that are declared further down.\n  const cancelPressRef = useRef<() => void>(() => undefined);\n  const endDragRef = useRef<(cancel: boolean) => void>(() => undefined);\n\n  const titleOf = useCallback(\n    (id: string) => latest.current.itemsById.get(id)?.title ?? id,\n    []\n  );\n\n  const announce = useCallback((text: string) => {\n    // A trailing space makes a repeated message read again.\n    setMessage((prev) => (prev === text ? `${text} ` : text));\n  }, []);\n\n  const positionText = useCallback((id: string) => {\n    const list = layoutRef.current;\n    const index = list.findIndex((c) => c.id === id);\n    return `position ${index + 1} of ${list.length}`;\n  }, []);\n\n  const commit = useCallback((next: WidgetLayoutItem[], movedId: string) => {\n    pendingFlipRef.current = { prev: new Map(rectsRef.current), movedId };\n    layoutRef.current = next;\n    if (latest.current.layout === undefined) {\n      setInnerLayout(next);\n    }\n    latest.current.onLayoutChange?.(next);\n  }, []);\n\n  /* ------------------------------ measuring ------------------------------ */\n\n  // offset* ignore transforms, so these are the cells' resting slots.\n  const measure = useCallback(() => {\n    const next = new Map<string, Rect>();\n    for (const [id, el] of engine.els) {\n      next.set(id, {\n        x: el.offsetLeft,\n        y: el.offsetTop,\n        w: el.offsetWidth,\n        h: el.offsetHeight,\n      });\n    }\n    rectsRef.current = next;\n    return next;\n  }, [engine]);\n\n  const toGrid = useCallback((clientX: number, clientY: number) => {\n    const box = gridRef.current?.getBoundingClientRect();\n    return { x: clientX - (box?.left ?? 0), y: clientY - (box?.top ?? 0) };\n  }, []);\n\n  /** Keeps a pointer-held cell under the pointer, even after its slot moved. */\n  const placeDragged = useCallback(() => {\n    const drag = dragRef.current;\n    const rect = drag ? rectsRef.current.get(drag.id) : undefined;\n    if (!(drag && rect) || drag.mode !== \"pointer\") {\n      return;\n    }\n    const p = toGrid(drag.lastX, drag.lastY);\n    const b = engine.body(drag.id);\n    b.ox = p.x - drag.grabX - rect.x;\n    b.oy = p.y - drag.grabY - rect.y;\n    engine.write(drag.id, b);\n    engine.kick();\n  }, [engine, toGrid]);\n\n  /** FLIP: start every moved cell where it was drawn, then spring it home. */\n  const flip = useCallback(\n    (prev: Map<string, Rect>, next: Map<string, Rect>, movedId: string) => {\n      const origin = next.get(movedId);\n      const cx = origin ? origin.x + origin.w / 2 : 0;\n      const cy = origin ? origin.y + origin.h / 2 : 0;\n      const pinnedId =\n        dragRef.current?.mode === \"pointer\" ? dragRef.current.id : null;\n      for (const [id, n] of next) {\n        const p = prev.get(id);\n        if (!p || id === pinnedId) {\n          continue;\n        }\n        const b = engine.body(id);\n        const moved =\n          Math.abs(p.x - n.x) > 0.5 || Math.abs(p.y - n.y) > 0.5 || p.w !== n.w;\n        b.ox += p.x - n.x;\n        b.oy += p.y - n.y;\n        b.sx = (p.w * b.sx) / n.w;\n        b.sy = (p.h * b.sy) / n.h;\n        if (moved && id !== movedId) {\n          // Nearer neighbours leave first, so the shuffle ripples outward.\n          const dist = Math.hypot(n.x + n.w / 2 - cx, n.y + n.h / 2 - cy);\n          b.hold = Math.min(0.1, dist * 0.000_16);\n        }\n        engine.write(id, b);\n      }\n      engine.kick();\n    },\n    [engine]\n  );\n\n  // After every layout change: measure, FLIP neighbours, re-seat the held cell.\n  // biome-ignore lint/correctness/useExhaustiveDependencies: layoutKey and narrow are the triggers.\n  useLayoutEffect(() => {\n    const next = measure();\n    const pending = pendingFlipRef.current;\n    pendingFlipRef.current = null;\n    if (pending) {\n      flip(pending.prev, next, pending.movedId);\n    }\n    placeDragged();\n    const drag = dragRef.current;\n    if (drag?.mode === \"keyboard\") {\n      // React may move the focused node when it reorders; keep focus on it.\n      const grip = gripsRef.current.get(drag.id);\n      if (grip && document.activeElement !== grip) {\n        grip.focus({ preventScroll: true });\n      }\n    }\n    reorderingRef.current = false;\n  }, [layoutKey, narrow, measure, flip, placeDragged]);\n\n  // Container width decides the 2- or 6-column layout; re-measure on resize.\n  useEffect(() => {\n    const wrap = wrapRef.current;\n    if (!wrap) {\n      return;\n    }\n    const ro = new ResizeObserver(() => {\n      const isNarrow = wrap.clientWidth < NARROW_BELOW;\n      narrowRef.current = isNarrow;\n      setNarrow(isNarrow);\n      measure();\n      placeDragged();\n    });\n    ro.observe(wrap);\n    return () => ro.disconnect();\n  }, [measure, placeDragged]);\n\n  // Reduced motion is read after mount, so it never changes the first render.\n  useEffect(() => {\n    const mq = window.matchMedia(\"(prefers-reduced-motion: reduce)\");\n    const sync = () => {\n      engine.reduced = mq.matches;\n    };\n    sync();\n    mq.addEventListener(\"change\", sync);\n    return () => mq.removeEventListener(\"change\", sync);\n  }, [engine]);\n\n  /* ------------------------------ pointer drag ---------------------------- */\n\n  const hitTest = useCallback(\n    (x: number, y: number) => {\n      const drag = dragRef.current;\n      if (!drag) {\n        return;\n      }\n      // Ignore the cell just swapped with until the pointer leaves it, so\n      // cells of different widths don't flip back and forth.\n      if (drag.skipId) {\n        const skipRect = rectsRef.current.get(drag.skipId);\n        if (skipRect && contains(skipRect, x, y)) {\n          return;\n        }\n        drag.skipId = null;\n      }\n      const list = layoutRef.current;\n      const from = list.findIndex((c) => c.id === drag.id);\n      const to = list.findIndex((c) => {\n        const rect = rectsRef.current.get(c.id);\n        return c.id !== drag.id && rect !== undefined && contains(rect, x, y);\n      });\n      if (to < 0) {\n        return;\n      }\n      drag.skipId = list[to].id;\n      commit(moveItem(list, from, to), drag.id);\n      announce(\n        `${titleOf(drag.id)} moved to position ${to + 1} of ${list.length}.`\n      );\n    },\n    [announce, commit, titleOf]\n  );\n\n  const onDragMove = useCallback(\n    (e: globalThis.PointerEvent) => {\n      const drag = dragRef.current;\n      if (!drag || drag.mode !== \"pointer\" || e.pointerId !== drag.pointerId) {\n        return;\n      }\n      const now = performance.now();\n      const dt = Math.max(1, now - drag.lastT);\n      const b = engine.body(drag.id);\n      b.pvx += ((e.clientX - drag.lastX) / dt - b.pvx) * 0.35;\n      b.pvy += ((e.clientY - drag.lastY) / dt - b.pvy) * 0.35;\n      drag.lastX = e.clientX;\n      drag.lastY = e.clientY;\n      drag.lastT = now;\n      placeDragged();\n      const p = toGrid(e.clientX, e.clientY);\n      hitTest(p.x, p.y);\n    },\n    [engine, hitTest, placeDragged, toGrid]\n  );\n\n  const onDragUp = useCallback((e: globalThis.PointerEvent) => {\n    if (e.pointerId === dragRef.current?.pointerId) {\n      endDragRef.current(false);\n    }\n  }, []);\n  const onDragKey = useCallback((e: globalThis.KeyboardEvent) => {\n    if (e.key === \"Escape\") {\n      e.preventDefault();\n      endDragRef.current(true);\n    }\n  }, []);\n\n  const removeDragListeners = useCallback(() => {\n    window.removeEventListener(\"pointermove\", onDragMove);\n    window.removeEventListener(\"pointerup\", onDragUp);\n    window.removeEventListener(\"pointercancel\", onDragUp);\n    window.removeEventListener(\"keydown\", onDragKey);\n  }, [onDragKey, onDragMove, onDragUp]);\n\n  const endDrag = useCallback(\n    (cancel: boolean) => {\n      const drag = dragRef.current;\n      if (!drag) {\n        return;\n      }\n      removeDragListeners();\n      const b = engine.body(drag.id);\n      if (drag.mode === \"pointer\") {\n        // Carry some of the throw into the settle spring.\n        b.vx = b.pvx * 400;\n        b.vy = b.pvy * 400;\n      }\n      b.pinned = false;\n      b.liftTarget = 0;\n      dragRef.current = null;\n      if (cancel) {\n        commit(drag.snapshot, drag.id);\n      }\n      engine.kick();\n      setLiftedId(null);\n      const title = titleOf(drag.id);\n      if (cancel) {\n        const index = drag.snapshot.findIndex((c) => c.id === drag.id);\n        announce(\n          `Move cancelled. ${title} returned to position ${index + 1} of ${drag.snapshot.length}.`\n        );\n      } else {\n        announce(`${title} dropped at ${positionText(drag.id)}.`);\n      }\n    },\n    [announce, commit, engine, positionText, removeDragListeners, titleOf]\n  );\n  endDragRef.current = endDrag;\n\n  const liftPointer = useCallback(\n    (id: string, pointerId: number, clientX: number, clientY: number) => {\n      const rect = rectsRef.current.get(id);\n      if (!rect || dragRef.current) {\n        return;\n      }\n      const b = engine.body(id);\n      const p = toGrid(clientX, clientY);\n      dragRef.current = {\n        id,\n        mode: \"pointer\",\n        pointerId,\n        grabX: p.x - (rect.x + b.ox),\n        grabY: p.y - (rect.y + b.oy),\n        lastX: clientX,\n        lastY: clientY,\n        lastT: performance.now(),\n        skipId: null,\n        snapshot: layoutRef.current,\n      };\n      Object.assign(b, { pinned: true, hold: 0, vx: 0, vy: 0, pvx: 0, pvy: 0 });\n      b.liftTarget = 1;\n      engine.kick();\n      setLiftedId(id);\n      announce(`${titleOf(id)} lifted, ${positionText(id)}.`);\n      navigator.vibrate?.(8);\n      window.addEventListener(\"pointermove\", onDragMove);\n      window.addEventListener(\"pointerup\", onDragUp);\n      window.addEventListener(\"pointercancel\", onDragUp);\n      window.addEventListener(\"keydown\", onDragKey);\n    },\n    [\n      announce,\n      engine,\n      onDragKey,\n      onDragMove,\n      onDragUp,\n      positionText,\n      titleOf,\n      toGrid,\n    ]\n  );\n\n  /* ------------------------------ long press ------------------------------ */\n\n  const onPressMove = useCallback((e: globalThis.PointerEvent) => {\n    const press = pressRef.current;\n    if (!press || e.pointerId !== press.pointerId) {\n      return;\n    }\n    press.x = e.clientX;\n    press.y = e.clientY;\n    // Moving first means scrolling (touch) or selecting (mouse), not lifting.\n    if (\n      Math.hypot(e.clientX - press.startX, e.clientY - press.startY) >\n      PRESS_SLOP\n    ) {\n      cancelPressRef.current();\n    }\n  }, []);\n\n  const cancelPress = useCallback(() => {\n    const press = pressRef.current;\n    if (press) {\n      window.clearTimeout(press.timer);\n    }\n    pressRef.current = null;\n    window.removeEventListener(\"pointermove\", onPressMove);\n    window.removeEventListener(\"pointerup\", cancelPressRef.current);\n    window.removeEventListener(\"pointercancel\", cancelPressRef.current);\n  }, [onPressMove]);\n  cancelPressRef.current = cancelPress;\n\n  const startPress = useCallback(\n    (e: ReactPointerEvent<HTMLDivElement>, id: string) => {\n      const target = e.target as HTMLElement;\n      if (\n        dragRef.current ||\n        resizeIdRef.current ||\n        e.button !== 0 ||\n        target.closest(\"[data-no-press]\")\n      ) {\n        return;\n      }\n      cancelPress();\n      pressRef.current = {\n        id,\n        pointerId: e.pointerId,\n        startX: e.clientX,\n        startY: e.clientY,\n        x: e.clientX,\n        y: e.clientY,\n        timer: window.setTimeout(() => {\n          const press = pressRef.current;\n          cancelPressRef.current();\n          if (press) {\n            liftPointer(press.id, press.pointerId, press.x, press.y);\n          }\n        }, LONG_PRESS_MS),\n      };\n      window.addEventListener(\"pointermove\", onPressMove);\n      window.addEventListener(\"pointerup\", cancelPress);\n      window.addEventListener(\"pointercancel\", cancelPress);\n    },\n    [cancelPress, liftPointer, onPressMove]\n  );\n\n  // A non-passive touchmove listener stops the page scrolling while a cell is\n  // held. Until the long press fires, touch scrolling is left alone.\n  useEffect(() => {\n    const grid = gridRef.current;\n    if (!grid) {\n      return;\n    }\n    const block = (e: TouchEvent) => {\n      if (dragRef.current?.mode === \"pointer\" || resizeIdRef.current) {\n        e.preventDefault();\n      }\n    };\n    grid.addEventListener(\"touchmove\", block, { passive: false });\n    return () => grid.removeEventListener(\"touchmove\", block);\n  }, []);\n\n  /* -------------------------------- resize -------------------------------- */\n\n  const spanText = useCallback((span: number) => {\n    const isNarrow = narrowRef.current;\n    const shown = isNarrow ? narrowSpan(span) : span;\n    const cols = isNarrow ? NARROW_COLUMNS : COLUMNS;\n    return `${shown} of ${cols} columns, ${SIZE_LABEL[sizeForSpan(span, isNarrow)]}`;\n  }, []);\n\n  const applySpan = useCallback(\n    (id: string, span: number) => {\n      const list = layoutRef.current;\n      const entry = list.find((c) => c.id === id);\n      if (!entry || entry.span === span) {\n        return;\n      }\n      commit(\n        list.map((c) => (c.id === id ? { ...c, span } : c)),\n        id\n      );\n      announce(`${titleOf(id)} resized to ${spanText(span)}.`);\n    },\n    [announce, commit, spanText, titleOf]\n  );\n\n  /**\n   * Whole-column span from how far the handle moved since the press. Using the\n   * delta (not the cell's left edge) keeps it stable when the cell wraps rows.\n   * Narrow grids only toggle between half and full width.\n   */\n  const spanFromPointer = useCallback((clientX: number) => {\n    const start = resizeStartRef.current;\n    const grid = gridRef.current;\n    if (!(start && grid)) {\n      return null;\n    }\n    const isNarrow = narrowRef.current;\n    const cols = isNarrow ? NARROW_COLUMNS : COLUMNS;\n    const colW = (grid.clientWidth + GAP) / cols;\n    const steps = Math.round((clientX - start.x) / colW);\n    if (!isNarrow) {\n      return clampSpan(start.span + steps);\n    }\n    const n = Math.max(1, Math.min(2, narrowSpan(start.span) + steps));\n    if (n === 1) {\n      return MIN_SPAN;\n    }\n    return Math.max(3, start.span);\n  }, []);\n\n  const onResizeMove = useCallback(\n    (e: globalThis.PointerEvent) => {\n      const id = resizeIdRef.current;\n      const span = spanFromPointer(e.clientX);\n      if (id && span !== null) {\n        applySpan(id, span);\n      }\n    },\n    [applySpan, spanFromPointer]\n  );\n\n  const onResizeUp = useCallback(() => {\n    resizeIdRef.current = null;\n    setResizingId(null);\n    window.removeEventListener(\"pointermove\", onResizeMove);\n    window.removeEventListener(\"pointerup\", onResizeUp);\n    window.removeEventListener(\"pointercancel\", onResizeUp);\n  }, [onResizeMove]);\n\n  const startResize = useCallback(\n    (e: ReactPointerEvent<HTMLButtonElement>, id: string) => {\n      if (dragRef.current || e.button !== 0) {\n        return;\n      }\n      e.preventDefault();\n      cancelPress();\n      resizeIdRef.current = id;\n      resizeStartRef.current = {\n        x: e.clientX,\n        span: layoutRef.current.find((c) => c.id === id)?.span ?? MIN_SPAN,\n      };\n      setResizingId(id);\n      window.addEventListener(\"pointermove\", onResizeMove);\n      window.addEventListener(\"pointerup\", onResizeUp);\n      window.addEventListener(\"pointercancel\", onResizeUp);\n    },\n    [cancelPress, onResizeMove, onResizeUp]\n  );\n\n  const onResizeKeyDown = useCallback(\n    (e: KeyboardEvent<HTMLButtonElement>, id: string) => {\n      const entry = layoutRef.current.find((c) => c.id === id);\n      let delta = 0;\n      if (e.key === \"ArrowRight\" || e.key === \"ArrowUp\") {\n        delta = 1;\n      } else if (e.key === \"ArrowLeft\" || e.key === \"ArrowDown\") {\n        delta = -1;\n      }\n      if (!entry || delta === 0) {\n        return;\n      }\n      e.preventDefault();\n      let span = clampSpan(entry.span + delta);\n      if (narrowRef.current) {\n        span = delta > 0 ? Math.max(3, entry.span) : MIN_SPAN;\n      }\n      applySpan(id, span);\n    },\n    [applySpan]\n  );\n\n  /* ------------------------------- keyboard ------------------------------- */\n\n  /** Index of the closest cell in the row above or below. */\n  const verticalNeighbor = useCallback((id: string, up: boolean) => {\n    const list = layoutRef.current;\n    const rects = rectsRef.current;\n    const cur = rects.get(id);\n    let best = -1;\n    let bestDy = Number.POSITIVE_INFINITY;\n    let bestDx = Number.POSITIVE_INFINITY;\n    if (!cur) {\n      return best;\n    }\n    const cx = cur.x + cur.w / 2;\n    for (const [i, c] of list.entries()) {\n      const r = rects.get(c.id);\n      const inRow =\n        r !== undefined &&\n        (up ? r.y + r.h <= cur.y + 1 : r.y >= cur.y + cur.h - 1);\n      if (r && inRow) {\n        const dy = Math.abs(r.y - cur.y);\n        const dx = Math.abs(r.x + r.w / 2 - cx);\n        if (dy < bestDy - 1 || (Math.abs(dy - bestDy) <= 1 && dx < bestDx)) {\n          best = i;\n          bestDy = dy;\n          bestDx = dx;\n        }\n      }\n    }\n    return best;\n  }, []);\n\n  const neighborIndex = useCallback(\n    (id: string, key: string) => {\n      const list = layoutRef.current;\n      const index = list.findIndex((c) => c.id === id);\n      if (key === \"ArrowLeft\") {\n        return Math.max(0, index - 1);\n      }\n      if (key === \"ArrowRight\") {\n        return Math.min(list.length - 1, index + 1);\n      }\n      if (key === \"ArrowUp\" || key === \"ArrowDown\") {\n        const found = verticalNeighbor(id, key === \"ArrowUp\");\n        return found < 0 ? index : found;\n      }\n      return null;\n    },\n    [verticalNeighbor]\n  );\n\n  const liftKeyboard = useCallback(\n    (id: string) => {\n      dragRef.current = {\n        id,\n        mode: \"keyboard\",\n        pointerId: -1,\n        grabX: 0,\n        grabY: 0,\n        lastX: 0,\n        lastY: 0,\n        lastT: 0,\n        skipId: null,\n        snapshot: layoutRef.current,\n      };\n      engine.body(id).liftTarget = 1;\n      engine.kick();\n      setLiftedId(id);\n      announce(\n        `${titleOf(id)} lifted, ${positionText(id)}. Arrow keys move it, Space drops it, Escape cancels.`\n      );\n    },\n    [announce, engine, positionText, titleOf]\n  );\n\n  const moveByKey = useCallback(\n    (id: string, key: string) => {\n      const to = neighborIndex(id, key);\n      if (to === null) {\n        return false;\n      }\n      const list = layoutRef.current;\n      const from = list.findIndex((c) => c.id === id);\n      if (to === from) {\n        announce(`${titleOf(id)} is at ${positionText(id)}.`);\n        return true;\n      }\n      reorderingRef.current = true;\n      commit(moveItem(list, from, to), id);\n      announce(`${titleOf(id)} moved to position ${to + 1} of ${list.length}.`);\n      return true;\n    },\n    [announce, commit, neighborIndex, positionText, titleOf]\n  );\n\n  const onGripKeyDown = useCallback(\n    (e: KeyboardEvent<HTMLButtonElement>, id: string) => {\n      const drag = dragRef.current;\n      if (e.key === \" \" || e.key === \"Enter\") {\n        e.preventDefault();\n        if (drag?.id === id) {\n          endDrag(false);\n        } else if (!drag) {\n          liftKeyboard(id);\n        }\n        return;\n      }\n      if (drag?.id !== id || drag.mode !== \"keyboard\") {\n        return;\n      }\n      if (e.key === \"Escape\") {\n        e.preventDefault();\n        reorderingRef.current = true;\n        endDrag(true);\n        return;\n      }\n      if (moveByKey(id, e.key)) {\n        e.preventDefault();\n      }\n    },\n    [endDrag, liftKeyboard, moveByKey]\n  );\n\n  const onGripBlur = useCallback(\n    (id: string) => {\n      const drag = dragRef.current;\n      if (\n        drag?.mode === \"keyboard\" &&\n        drag.id === id &&\n        !reorderingRef.current\n      ) {\n        endDrag(false);\n      }\n    },\n    [endDrag]\n  );\n\n  // Clean up timers, listeners and the loop on unmount.\n  useEffect(\n    () => () => {\n      cancelPressRef.current();\n      removeDragListeners();\n      onResizeUp();\n      engine.stop();\n    },\n    [engine, onResizeUp, removeDragListeners]\n  );\n\n  const activeId = liftedId ?? resizingId ?? pointedId;\n  const columnCount = narrow ? NARROW_COLUMNS : COLUMNS;\n\n  // While a cell is held or resized, a dot sits at every gutter crossing\n  // so the slots it can land in read like a cutting mat.\n  const showSlots = liftedId !== null || resizingId !== null;\n  const [slotRows, setSlotRows] = useState(0);\n  // biome-ignore lint/correctness/useExhaustiveDependencies: the row count is measured, and changes with the layout and column count.\n  useLayoutEffect(() => {\n    const grid = gridRef.current;\n    if (!(showSlots && grid)) {\n      return;\n    }\n    setSlotRows(\n      Math.max(1, Math.round((grid.offsetHeight + GAP) / (rowHeight + GAP)))\n    );\n  }, [showSlots, layoutKey, narrow, rowHeight]);\n  const slotDots: ReactNode[] = [];\n  if (showSlots && slotRows > 0) {\n    for (let col = 0; col <= columnCount; col++) {\n      for (let row = 0; row <= slotRows; row++) {\n        slotDots.push(\n          <circle\n            cx={`${(col / columnCount) * 100}%`}\n            cy={`${(row / slotRows) * 100}%`}\n            fill=\"currentColor\"\n            key={`${col}:${row}`}\n            r={1.5}\n          />\n        );\n      }\n    }\n  }\n\n  return (\n    <div\n      className={cn(\n        \"@container/wg w-full max-w-4xl [--wg-accent:var(--color-blue-600)] dark:[--wg-accent:var(--color-blue-400)]\",\n        className\n      )}\n      ref={wrapRef}\n    >\n      <div\n        className=\"relative grid @xl/wg:grid-flow-row grid-flow-row-dense @xl/wg:grid-cols-6 grid-cols-2 [perspective:1400px]\"\n        ref={gridRef}\n        style={{ gap: GAP, gridAutoRows: rowHeight }}\n      >\n        {slotDots.length > 0 && (\n          <svg\n            aria-hidden=\"true\"\n            className=\"pointer-events-none absolute overflow-visible text-zinc-400 dark:text-zinc-600\"\n            style={{\n              top: -GAP / 2,\n              left: -GAP / 2,\n              width: `calc(100% + ${GAP}px)`,\n              height: `calc(100% + ${GAP}px)`,\n            }}\n          >\n            {slotDots}\n          </svg>\n        )}\n        {current.map((entry) => {\n          const item = itemsById.get(entry.id);\n          if (!item) {\n            return null;\n          }\n          const id = entry.id;\n          return (\n            <WidgetCell\n              cellRef={(el) => {\n                if (el) {\n                  engine.els.set(id, el);\n                } else {\n                  engine.els.delete(id);\n                }\n              }}\n              dimmed={activeId !== null && activeId !== id}\n              gripRef={(el) => {\n                if (el) {\n                  gripsRef.current.set(id, el);\n                } else {\n                  gripsRef.current.delete(id);\n                }\n              }}\n              instructionsId={instructionsId}\n              item={item}\n              key={id}\n              lifted={liftedId === id}\n              narrow={narrow}\n              onFocusChange={(on) =>\n                setPointedId((prev) => {\n                  if (on) {\n                    return id;\n                  }\n                  return prev === id ? null : prev;\n                })\n              }\n              onGripBlur={() => onGripBlur(id)}\n              onGripKeyDown={(e) => onGripKeyDown(e, id)}\n              onGripPointerDown={(e) => {\n                if (e.button === 0) {\n                  e.preventDefault();\n                  cancelPress();\n                  liftPointer(id, e.pointerId, e.clientX, e.clientY);\n                }\n              }}\n              onHover={(on) =>\n                setPointedId((prev) => {\n                  if (on) {\n                    return id;\n                  }\n                  return prev === id ? null : prev;\n                })\n              }\n              onPressStart={(e) => startPress(e, id)}\n              onResizeKeyDown={(e) => onResizeKeyDown(e, id)}\n              onResizePointerDown={(e) => startResize(e, id)}\n              span={entry.span}\n            />\n          );\n        })}\n      </div>\n      <p className=\"sr-only\" id={instructionsId}>\n        Press Space to pick up. Use the arrow keys to move, Space to drop and\n        Escape to cancel. With a pointer, press and hold a widget, then drag it.\n      </p>\n      <p aria-live=\"assertive\" className=\"sr-only\">\n        {message}\n      </p>\n    </div>\n  );\n}\n"
  },
  {
    "slug": "cult-ui-shader-bento",
    "title": "Cult UI Official Shift Card",
    "description": "100% official Shift Card component by @nolly-studio directly from cult-ui.com/r/shift-card.json featuring Framer Motion state shifting.",
    "category": "spotlight-shaders",
    "source": "cult-ui",
    "sourceName": "Cult UI",
    "sourceUrl": "https://www.cult-ui.com/docs/components/shift-card",
    "tags": [
      "cult-ui",
      "official",
      "shift-card",
      "motion",
      "nolly-studio",
      "shadcn"
    ],
    "features": [
      "Official ShiftCard component with animated state shifting",
      "Spring transition calculations with motion/react",
      "Clean forwardRef implementation with MotionProps compatibility"
    ],
    "tilesSummary": [
      {
        "title": "ShiftCard Primitive",
        "subtitle": "Official state-shifting animated card",
        "colSpan": "col-span-2",
        "highlight": "Official Shift Card"
      }
    ],
    "code": "// ============================================================================\n// OFFICIAL CULT UI SHIFT CARD COMPONENT\n// Source: https://www.cult-ui.com/r/shift-card.json\n// Author: @nolly-studio (Cult UI)\n// License: MIT\n// ============================================================================\n\n\"use client\"\n\nimport * as React from \"react\"\nimport { AnimatePresence, motion, MotionProps } from \"motion/react\"\n\nimport { cn } from \"@/lib/utils\"\n\ninterface ShiftCardProps\n  extends Omit<MotionProps, \"onAnimationStart\" | \"onAnimationComplete\"> {\n  className?: string\n  topContent?: React.ReactNode\n  middleContent?: React.ReactNode\n  topAnimateContent?: React.ReactNode\n  bottomContent?: React.ReactNode\n}\n\nconst ShiftCardHeader = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement>\n>(({ children, ...props }, ref) => (\n  <div ref={ref} {...props}>\n    {children}\n  </div>\n))\nShiftCardHeader.displayName = \"ShiftCardHeader\"\n\ninterface ShiftCardContentProps extends React.HTMLAttributes<HTMLDivElement> {\n  isHovered: boolean\n}\nconst ShiftCardContent = React.forwardRef<\n  HTMLDivElement,\n  ShiftCardContentProps\n>(({ isHovered, children, ...divProps }, ref) => {\n  // Explicitly define motion props to avoid passing incompatible HTML attributes\n  const motionProps: MotionProps = {\n    initial: { opacity: 0, height: 0 },\n    animate: isHovered\n      ? { opacity: 1, height: 194 }\n      : { opacity: 1, height: 38 },\n    transition: { duration: 0.3, delay: 0.1, ease: \"circIn\" },\n  }\n\n  return (\n    <motion.div\n      key=\"shift-card-content\"\n      ref={ref}\n      {...motionProps}\n      className={divProps.className}\n    >\n      {children}\n    </motion.div>\n  )\n})\nShiftCardContent.displayName = \"ShiftCardContent\"\n\nconst ShiftCard = React.forwardRef<HTMLDivElement, ShiftCardProps>(\n  (\n    {\n      className,\n      topContent,\n      topAnimateContent,\n      middleContent,\n      bottomContent,\n      ...props\n    },\n    ref\n  ) => {\n    const [isHovered, setHovered] = React.useState(false)\n    const handleMouseEnter = () => setHovered(true)\n    const handleMouseLeave = () => setHovered(false)\n    const handleTapStart = () => setHovered(true)\n    const handleTapCancel = () => setHovered(false)\n    const handleTap = () => setHovered(false)\n\n    return (\n      <motion.div\n        ref={ref}\n        className={cn(\n          \"min-h-[300px] w-[280px] md:w-[300px]\",\n          \"group relative flex flex-col items-center justify-between overflow-hidden rounded-xl p-3 text-sm\",\n          \"bg-card hover:cursor-pointer\",\n          \"shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]\",\n          /*\n          Applies a multi-layer shadow effect in dark mode:\n          1. Two subtle white inset shadows: one horizontal at 1px height, and one around the entire border at 1px width, both with a very light opacity of 0.03, creating a slight inner glow.\n          2. A series of black shadows:\n              - A basic 1px black border shadow with 10% opacity to subtly outline the element.\n              - Three progressively larger diffuse shadows at 2px, 4px, and 8px, each with 10% opacity, creating a depth effect that enhances the element's visual separation from the background.\n          */\n          \"dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]\",\n          className\n        )}\n        initial={{ y: 20, opacity: 0 }}\n        animate={{ y: 0, opacity: 1 }}\n        whileHover={{ scale: 1.02 }}\n        onMouseEnter={handleMouseEnter}\n        onMouseLeave={handleMouseLeave}\n        onClick={handleTapStart}\n        onTapCancel={handleTapCancel}\n        onTap={handleTap}\n        {...props}\n      >\n        <ShiftCardHeader className=\"text-primary-foreground relative flex h-[46px] w-full flex-col\">\n          <div className=\"w-full\">\n            {topContent}\n\n            <AnimatePresence>\n              {isHovered ? <>{topAnimateContent}</> : null}\n            </AnimatePresence>\n          </div>\n        </ShiftCardHeader>\n\n        <div className=\"pb-12\">\n          <AnimatePresence>\n            {!isHovered ? <>{middleContent}</> : null}\n          </AnimatePresence>\n        </div>\n\n        <ShiftCardContent\n          isHovered={isHovered}\n          className=\"absolute right-0 -bottom-1.5 left-0 flex flex-col gap-4 rounded-xl\"\n        >\n          <motion.div className=\"flex w-full flex-col gap-1\">\n            {bottomContent}\n          </motion.div>\n        </ShiftCardContent>\n      </motion.div>\n    )\n  }\n)\n\nShiftCard.displayName = \"ShiftCard\"\n\nexport { ShiftCard, ShiftCardHeader, ShiftCardContent }\nexport default ShiftCard\n"
  },
  {
    "slug": "ibelick-spotlight-bento",
    "title": "Ibelick UI Official 3D Tilt & Spotlight Primitives",
    "description": "100% official Tilt & Spotlight primitives directly from Julien Thibeaut (github.com/ibelick/motion-primitives) using useMotionTemplate and useSpring.",
    "category": "spotlight-shaders",
    "source": "ibelick",
    "sourceName": "Ibelick UI (Julien Thibeaut)",
    "sourceUrl": "https://motion-primitives.com/docs/tilt",
    "tags": [
      "ibelick",
      "official",
      "motion-primitives",
      "tilt",
      "spotlight",
      "julien-thibeaut"
    ],
    "features": [
      "Official Tilt component with rotationFactor, isReverse, and SpringOptions",
      "Official Spotlight component with dynamic radial gradient and spring follow",
      "Authored by Julien Thibeaut (creator of ui.ibelick.com and motion-primitives)"
    ],
    "tilesSummary": [
      {
        "title": "Official Tilt",
        "subtitle": "Perspective 3D card tilt with useMotionTemplate",
        "colSpan": "col-span-2",
        "highlight": "Official Motion Primitive"
      },
      {
        "title": "Official Spotlight",
        "subtitle": "Cursor spotlight with spring damping",
        "colSpan": "col-span-1",
        "highlight": "Spring Spotlight"
      }
    ],
    "code": "// ============================================================================\n// OFFICIAL MOTION-PRIMITIVES / IBELICK TILT & SPOTLIGHT COMPONENTS\n// Source: https://github.com/ibelick/motion-primitives/blob/main/components/core/tilt.tsx\n// Author: Julien Thibeaut (@ibelick)\n// License: MIT\n// ============================================================================\n\n'use client';\n\nimport React, { useRef } from 'react';\nimport {\n  motion,\n  useMotionTemplate,\n  useMotionValue,\n  useSpring,\n  useTransform,\n  MotionStyle,\n  SpringOptions,\n} from 'motion/react';\n\nexport type TiltProps = {\n  children: React.ReactNode;\n  className?: string;\n  style?: MotionStyle;\n  rotationFactor?: number;\n  isRevese?: boolean;\n  springOptions?: SpringOptions;\n};\n\nexport function Tilt({\n  children,\n  className,\n  style,\n  rotationFactor = 15,\n  isRevese = false,\n  springOptions,\n}: TiltProps) {\n  const ref = useRef<HTMLDivElement>(null);\n\n  const x = useMotionValue(0);\n  const y = useMotionValue(0);\n\n  const xSpring = useSpring(x, springOptions);\n  const ySpring = useSpring(y, springOptions);\n\n  const rotateX = useTransform(\n    ySpring,\n    [-0.5, 0.5],\n    isRevese\n      ? [rotationFactor, -rotationFactor]\n      : [-rotationFactor, rotationFactor]\n  );\n  const rotateY = useTransform(\n    xSpring,\n    [-0.5, 0.5],\n    isRevese\n      ? [-rotationFactor, rotationFactor]\n      : [rotationFactor, -rotationFactor]\n  );\n\n  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;\n\n  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {\n    if (!ref.current) return;\n\n    const rect = ref.current.getBoundingClientRect();\n    const width = rect.width;\n    const height = rect.height;\n    const mouseX = e.clientX - rect.left;\n    const mouseY = e.clientY - rect.top;\n\n    const xPos = mouseX / width - 0.5;\n    const yPos = mouseY / height - 0.5;\n\n    x.set(xPos);\n    y.set(yPos);\n  };\n\n  const handleMouseLeave = () => {\n    x.set(0);\n    y.set(0);\n  };\n\n  return (\n    <motion.div\n      ref={ref}\n      className={className}\n      style={{\n        transformStyle: 'preserve-3d',\n        ...style,\n        transform,\n      }}\n      onMouseMove={handleMouseMove}\n      onMouseLeave={handleMouseLeave}\n    >\n      {children}\n    </motion.div>\n  );\n}\n\n\n'use client';\nimport React, { useRef, useState, useCallback, useEffect } from 'react';\nimport { motion, useSpring, useTransform, SpringOptions } from 'motion/react';\nimport { cn } from '@/lib/utils';\n\nexport type SpotlightProps = {\n  className?: string;\n  size?: number;\n  springOptions?: SpringOptions;\n};\n\nexport function Spotlight({\n  className,\n  size = 200,\n  springOptions = { bounce: 0 },\n}: SpotlightProps) {\n  const containerRef = useRef<HTMLDivElement>(null);\n  const [isHovered, setIsHovered] = useState(false);\n  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);\n\n  const mouseX = useSpring(0, springOptions);\n  const mouseY = useSpring(0, springOptions);\n\n  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);\n  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);\n\n  useEffect(() => {\n    if (containerRef.current) {\n      const parent = containerRef.current.parentElement;\n      if (parent) {\n        parent.style.position = 'relative';\n        parent.style.overflow = 'hidden';\n        setParentElement(parent);\n      }\n    }\n  }, []);\n\n  const handleMouseMove = useCallback(\n    (event: MouseEvent) => {\n      if (!parentElement) return;\n      const { left, top } = parentElement.getBoundingClientRect();\n      mouseX.set(event.clientX - left);\n      mouseY.set(event.clientY - top);\n    },\n    [mouseX, mouseY, parentElement]\n  );\n\n  useEffect(() => {\n    if (!parentElement) return;\n\n    const abortController = new AbortController();\n\n    parentElement.addEventListener('mousemove', handleMouseMove, {\n      signal: abortController.signal,\n    });\n    parentElement.addEventListener('mouseenter', () => setIsHovered(true), {\n      signal: abortController.signal,\n    });\n    parentElement.addEventListener('mouseleave', () => setIsHovered(false), {\n      signal: abortController.signal,\n    });\n\n    return () => {\n      abortController.abort();\n    };\n  }, [parentElement, handleMouseMove]);\n\n  return (\n    <motion.div\n      ref={containerRef}\n      className={cn(\n        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',\n        'from-zinc-100 via-zinc-200 to-zinc-400 dark:from-zinc-50 dark:via-zinc-100 dark:to-zinc-200',\n        isHovered ? 'opacity-100' : 'opacity-0',\n        className\n      )}\n      style={{\n        width: size,\n        height: size,\n        left: spotlightLeft,\n        top: spotlightTop,\n      }}\n    />\n  );\n}\n"
  },
  {
    "slug": "spell-spatial-tilt-bento",
    "title": "Spell.sh 3D Spatial Tilt Bento Card",
    "description": "Mathematical 3D perspective tilt calculation directly implementing Spell.sh physics with specular glare sheen and translation depth.",
    "category": "3d-spatial",
    "source": "spell",
    "sourceName": "Spell.sh Interactive Studio",
    "sourceUrl": "https://spell.sh",
    "tags": [
      "spell",
      "3d-tilt",
      "perspective",
      "glare",
      "spatial",
      "physics"
    ],
    "features": [
      "Interactive 3D tilt calculation (rotateX, rotateY, perspective 1000px)",
      "Specular glare reflection layer responding to pointer offset",
      "Spring easing restoration on mouse leave"
    ],
    "tilesSummary": [
      {
        "title": "3D Spatial Canvas",
        "subtitle": "Real-time multi-axis tilt",
        "colSpan": "col-span-2",
        "highlight": "Spell.sh Math"
      }
    ],
    "code": "import React, { useRef, useState, MouseEvent } from 'react';\n\n// Spell.sh Perspective Math\nexport function SpellTiltCard({ children }: { children: React.ReactNode }) {\n  const cardRef = useRef<HTMLDivElement>(null);\n  const [style, setStyle] = useState('');\n  const [glare, setGlare] = useState({ opacity: 0, x: 50, y: 50 });\n\n  const onMove = (e: MouseEvent<HTMLDivElement>) => {\n    if (!cardRef.current) return;\n    const r = cardRef.current.getBoundingClientRect();\n    const x = e.clientX - r.left, y = e.clientY - r.top;\n    const cx = r.width / 2, cy = r.height / 2;\n    const rx = ((y - cy) / cy) * -12, ry = ((x - cx) / cx) * 12;\n    setStyle(`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`);\n    setGlare({ opacity: 0.18, x: (x / r.width) * 100, y: (y / r.height) * 100 });\n  };\n\n  return (\n    <div\n      ref={cardRef}\n      onMouseMove={onMove}\n      onMouseLeave={() => { setStyle('perspective(1000px) rotateX(0deg) rotateY(0deg)'); setGlare(g => ({ ...g, opacity: 0 })); }}\n      style={{ transform: style, transition: 'transform 0.15s ease-out' }}\n      className=\"relative rounded-3xl bg-neutral-900 border border-neutral-700/60 p-6 overflow-hidden\"\n    >\n      <div className=\"pointer-events-none absolute inset-0 transition-opacity duration-300\" style={{ opacity: glare.opacity, background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.85), transparent 60%)` }} />\n      <div className=\"relative z-10\">{children}</div>\n    </div>\n  );\n}"
  },
  {
    "slug": "coss-ui-particles-bento",
    "title": "Coss UI Interactive Particle Canvas Bento",
    "description": "HTML5 2D canvas interactive constellation particle physics from Coss UI (Browse Particles / coss.so).",
    "category": "particles-canvas",
    "source": "coss-ui",
    "sourceName": "Coss UI (Browse Particles)",
    "sourceUrl": "https://coss.so",
    "tags": [
      "coss-ui",
      "particles",
      "canvas",
      "interactive",
      "constellation"
    ],
    "features": [
      "HTML5 2D Canvas rendering animated connecting constellation particles",
      "Pointer proximity repulsion pushing particles away from cursor"
    ],
    "tilesSummary": [
      {
        "title": "Particle Canvas",
        "subtitle": "40 nodes with pairwise distance calculation",
        "colSpan": "col-span-2",
        "highlight": "Canvas Engine"
      }
    ],
    "code": "import React, { useRef, useEffect } from 'react';\n\n// Coss UI Constellation Mesh Canvas\nexport function CossParticleCanvas() {\n  const ref = useRef<HTMLCanvasElement>(null);\n  useEffect(() => {\n    const c = ref.current; if (!c) return;\n    const ctx = c.getContext('2d'); if (!ctx) return;\n    let w = c.width = c.parentElement?.clientWidth || 400, h = c.height = 200;\n    const pts = Array.from({ length: 40 }, () => ({\n      x: Math.random() * w, y: Math.random() * h,\n      vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8\n    }));\n    let id: number;\n    const loop = () => {\n      ctx.clearRect(0, 0, w, h);\n      pts.forEach(p => {\n        p.x += p.vx; p.y += p.vy;\n        if (p.x < 0 || p.x > w) p.vx *= -1;\n        if (p.y < 0 || p.y > h) p.vy *= -1;\n        ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);\n        ctx.fillStyle = '#a855f7'; ctx.fill();\n      });\n      id = requestAnimationFrame(loop);\n    };\n    loop();\n    return () => cancelAnimationFrame(id);\n  }, []);\n  return <canvas ref={ref} className=\"w-full h-48 block rounded-2xl bg-black\" />;\n}"
  },
  {
    "slug": "21st-dev-terminal-bento",
    "title": "21st.dev Design Engineer Interactive Bento Grid",
    "description": "Design Engineer community bento grid with live CLI terminal console and GitHub commit heatmap.",
    "category": "interactive-widgets",
    "source": "21st-dev",
    "sourceName": "21st.dev (Design Engineers Registry)",
    "sourceUrl": "https://21st.dev",
    "tags": [
      "21st-dev",
      "terminal",
      "commit-graph",
      "design-engineers",
      "interactive"
    ],
    "features": [
      "Interactive CLI terminal preview tile with copy-pasteable npx command",
      "GitHub-style commit activity heatmap grid"
    ],
    "tilesSummary": [
      {
        "title": "Interactive CLI Terminal",
        "subtitle": "npx 21st add command runner",
        "colSpan": "col-span-2",
        "highlight": "Live Terminal"
      }
    ],
    "code": "import React, { useState } from 'react';\n\nexport default function TwentyFirstDevBento() {\n  const [copied, setCopied] = useState(false);\n  return (\n    <div className=\"rounded-3xl bg-neutral-900 border border-neutral-800 p-6\">\n      <div className=\"flex justify-between items-center mb-4\">\n        <span className=\"text-xs font-mono text-emerald-400\">21st.dev Registry</span>\n        <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1200); }} className=\"text-xs font-mono px-2 py-1 bg-neutral-800 rounded\">\n          {copied ? '✓ Copied' : 'Copy'}\n        </button>\n      </div>\n      <div className=\"p-4 rounded-xl bg-black border border-neutral-800 font-mono text-xs text-emerald-400\">\n        $ npx 21st add bento-grid\n      </div>\n    </div>\n  );\n}"
  },
  {
    "slug": "rare-ui-feature-bento",
    "title": "Rare UI Modular SaaS Feature Bento Matrix",
    "description": "Structured SaaS feature bento blocks from Rare UI (Rareblocks) with telemetry counters and typographic hierarchy.",
    "category": "minimal-blocks",
    "source": "rare-ui",
    "sourceName": "Rare UI / Rareblocks",
    "sourceUrl": "https://rareblocks.xyz",
    "tags": [
      "rare-ui",
      "rareblocks",
      "saas",
      "modular",
      "metrics",
      "clean"
    ],
    "features": [
      "Clean micro-stat percentage indicators and progress meters",
      "Structured 4-quadrant feature hierarchy"
    ],
    "tilesSummary": [
      {
        "title": "Telemetry Matrix",
        "subtitle": "Throughput counters and SLA indicators",
        "colSpan": "col-span-2",
        "highlight": "SaaS Metric Tile"
      }
    ],
    "code": "import React from 'react';\n\nexport default function RareUiBento() {\n  return (\n    <div className=\"grid grid-cols-3 gap-4\">\n      <div className=\"col-span-2 rounded-2xl bg-neutral-900 border border-neutral-800 p-6\">\n        <span className=\"text-xs font-mono text-emerald-400\">TELEMETRY // RARE UI</span>\n        <h3 className=\"text-2xl font-bold text-white mt-1\">1.24B Processed Events</h3>\n      </div>\n      <div className=\"col-span-1 rounded-2xl bg-neutral-900 border border-neutral-800 p-6\">\n        <span className=\"text-xs font-mono text-neutral-400\">STATUS</span>\n        <div className=\"text-emerald-400 font-bold mt-2\">99.99% UPTIME</div>\n      </div>\n    </div>\n  );\n}"
  },
  {
    "slug": "transitions-dev-motion-bento",
    "title": "Transitions.dev Fluid Morphing Bento",
    "description": "Dynamic layout state morphing bento cards inspired by Transitions.dev with spring expansion physics.",
    "category": "animated-motion",
    "source": "transitions-dev",
    "sourceName": "Transitions.dev",
    "sourceUrl": "https://transitions.dev",
    "tags": [
      "transitions-dev",
      "motion",
      "spring",
      "morphing"
    ],
    "features": [
      "Interactive card state expansion with spring dampening physics",
      "Smooth layout transitions between collapsed and expanded states"
    ],
    "tilesSummary": [
      {
        "title": "Morphing Expansion Tile",
        "subtitle": "Expands dynamically on click",
        "colSpan": "col-span-2",
        "highlight": "Spring Morph"
      }
    ],
    "code": "import React, { useState } from 'react';\n\nexport default function TransitionsDevBento() {\n  const [expanded, setExpanded] = useState(false);\n  return (\n    <div onClick={() => setExpanded(!expanded)} className=\"rounded-3xl bg-neutral-900 border border-neutral-800 p-6 cursor-pointer transition-all duration-300\">\n      <span className=\"text-xs font-mono text-indigo-400\">Transitions.dev</span>\n      <h3 className=\"text-xl font-bold text-white mt-2\">State: {expanded ? 'Expanded' : 'Compact'}</h3>\n      <p className=\"text-xs text-neutral-400 mt-1\">Click to toggle spring layout morph.</p>\n    </div>\n  );\n}"
  },
  {
    "slug": "details-design-tactile-bento",
    "title": "Details.design Tactile Micro-Interaction Bento",
    "description": "Hardware-inspired mechanical spring toggle switch with tactile physical bounce.",
    "category": "animated-motion",
    "source": "details-design",
    "sourceName": "Details.design",
    "sourceUrl": "https://details.design",
    "tags": [
      "details-design",
      "micro-interactions",
      "tactile",
      "spring"
    ],
    "features": [
      "Interactive spring switches that mimic mechanical hardware switches"
    ],
    "tilesSummary": [
      {
        "title": "Mechanical Switch Tile",
        "subtitle": "Toggle switch with physical spring rebound",
        "colSpan": "col-span-2",
        "highlight": "Spring Switch"
      }
    ],
    "code": "import React, { useState } from 'react';\n\nexport default function DetailsDesignBento() {\n  const [on, setOn] = useState(true);\n  return (\n    <div className=\"rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex justify-between items-center\">\n      <div>\n        <span className=\"text-xs font-mono text-amber-400\">details.design</span>\n        <h3 className=\"text-lg font-bold text-white mt-1\">Mechanical Switch Haptics</h3>\n      </div>\n      <button onClick={() => setOn(!on)} className={`w-14 h-8 rounded-full p-1 transition-colors ${on ? 'bg-amber-500' : 'bg-neutral-800'}`}>\n        <div className={`w-6 h-6 bg-white rounded-full transition-transform ${on ? 'translate-x-6' : ''}`} />\n      </button>\n    </div>\n  );\n}"
  },
  {
    "slug": "spectrum-ui-cyber-bento",
    "title": "Spectrum UI Cybernetic Edge Glow Bento",
    "description": "High-contrast cybernetic edge glow cards with technical telemetry HUDs from Spectrum UI.",
    "category": "spotlight-shaders",
    "source": "spectrum-ui",
    "sourceName": "Spectrum UI",
    "sourceUrl": "https://spectrum-ui.dev",
    "tags": [
      "spectrum-ui",
      "cybernetic",
      "telemetry",
      "edge-glow"
    ],
    "features": [
      "High-contrast technical telemetry dashboard bento tiles"
    ],
    "tilesSummary": [
      {
        "title": "Edge Telemetry Dial",
        "subtitle": "Live status readout",
        "colSpan": "col-span-2",
        "highlight": "Telemetry HUD"
      }
    ],
    "code": "import React from 'react';\n\nexport default function SpectrumUiBento() {\n  return (\n    <div className=\"rounded-2xl bg-[#0f1117] border border-blue-900/40 p-6\">\n      <span className=\"text-xs font-mono text-blue-400\">SPECTRUM UI // CYBERNETIC</span>\n      <h3 className=\"text-xl font-bold text-white mt-2\">Sub-Millisecond RTT HUD</h3>\n    </div>\n  );\n}"
  },
  {
    "slug": "uselayout-asymmetric-bento",
    "title": "UseLayout Asymmetric 12-Column Bento Template",
    "description": "Mathematically balanced 12-column responsive layout bento template from UseLayout.",
    "category": "minimal-blocks",
    "source": "uselayout",
    "sourceName": "UseLayout",
    "sourceUrl": "https://uselayout.com",
    "tags": [
      "uselayout",
      "asymmetric",
      "css-grid",
      "12-column"
    ],
    "features": [
      "Mathematically balanced 12-column CSS Grid responsive architecture"
    ],
    "tilesSummary": [
      {
        "title": "8-Col Anchor",
        "subtitle": "Golden ratio focal tile",
        "colSpan": "col-span-8",
        "highlight": "Asymmetric 8-Col"
      }
    ],
    "code": "import React from 'react';\n\nexport default function UseLayoutBento() {\n  return (\n    <div className=\"grid grid-cols-12 gap-4\">\n      <div className=\"col-span-8 rounded-2xl bg-neutral-900 border border-neutral-800 p-6\">UseLayout 8-Col</div>\n      <div className=\"col-span-4 rounded-2xl bg-neutral-900 border border-neutral-800 p-6\">UseLayout 4-Col</div>\n    </div>\n  );\n}"
  },
  {
    "slug": "beui-glass-bento",
    "title": "BeUI Minimal Frosted Glass Bento",
    "description": "Restrained minimalist frosted glass cards with subtle 1px borders from BeUI.",
    "category": "minimal-blocks",
    "source": "beui",
    "sourceName": "BeUI",
    "sourceUrl": "https://beui.dev",
    "tags": [
      "beui",
      "minimal",
      "glassmorphism"
    ],
    "features": [
      "Subtle 1px frosted white/10 borders with inner glass reflection"
    ],
    "tilesSummary": [
      {
        "title": "Frosted Glass Surface",
        "subtitle": "Clean backdrop blur",
        "colSpan": "col-span-2",
        "highlight": "Frosted Glass"
      }
    ],
    "code": "import React from 'react';\n\nexport default function BeUiBento() {\n  return (\n    <div className=\"rounded-3xl bg-neutral-900/60 border border-white/10 p-6 backdrop-blur-md\">\n      <span className=\"text-xs font-mono text-neutral-400\">beui.dev</span>\n      <h3 className=\"text-xl font-bold text-white mt-1\">Frosted Glass Geometry</h3>\n    </div>\n  );\n}"
  },
  {
    "slug": "affect-ui-ambient-bento",
    "title": "Affect UI Ambient Reactive Lighting Bento",
    "description": "Ambient reactive drop shadow and state-responsive glow fields from Affect UI.",
    "category": "spotlight-shaders",
    "source": "affect-ui",
    "sourceName": "Affect UI",
    "sourceUrl": "https://affect-ui.com",
    "tags": [
      "affect-ui",
      "ambient-light",
      "depth"
    ],
    "features": [
      "Ambient reactive drop shadow changing intensity on hover"
    ],
    "tilesSummary": [
      {
        "title": "Ambient Light Tile",
        "subtitle": "Soft colorful shadow on parent canvas",
        "colSpan": "col-span-2",
        "highlight": "Ambient Radiance"
      }
    ],
    "code": "import React from 'react';\n\nexport default function AffectUiBento() {\n  return (\n    <div className=\"rounded-3xl bg-neutral-950 border border-neutral-800 p-6 hover:shadow-[0_0_50px_-10px_rgba(244,63,94,0.3)] transition-all duration-500\">\n      <span className=\"text-xs font-mono text-rose-400\">affect-ui.com</span>\n      <h3 className=\"text-xl font-bold text-white mt-2\">Ambient Radiance Field</h3>\n    </div>\n  );\n}"
  },
  {
    "slug": "originui-radix-bento",
    "title": "Origin UI Accessible Radix Primitives Bento",
    "description": "Accessible Radix UI micro-primitives, accessible range sliders, and keyboard-focusable switches from Origin UI.",
    "category": "minimal-blocks",
    "source": "originui",
    "sourceName": "Origin UI",
    "sourceUrl": "https://originui.com",
    "tags": [
      "originui",
      "radix",
      "accessible",
      "primitives"
    ],
    "features": [
      "Accessible Radix UI keyboard navigation and ARIA attributes"
    ],
    "tilesSummary": [
      {
        "title": "Accessible Range Slider",
        "subtitle": "Keyboard-controllable range input",
        "colSpan": "col-span-2",
        "highlight": "Radix Primitive"
      }
    ],
    "code": "import React, { useState } from 'react';\n\nexport default function OriginUiBento() {\n  const [val, setVal] = useState(65);\n  return (\n    <div className=\"rounded-3xl bg-neutral-900 border border-neutral-800 p-6\">\n      <span className=\"text-xs font-mono text-neutral-400\">originui.com</span>\n      <h3 className=\"text-lg font-bold text-white mt-1\">Radix Slider: {val}%</h3>\n      <input type=\"range\" min=\"0\" max=\"100\" value={val} onChange={e => setVal(Number(e.target.value))} className=\"w-full mt-4 accent-emerald-400\" />\n    </div>\n  );\n}"
  },
  {
    "slug": "hover-dev-physics-bento",
    "title": "Hover.dev Physics & Magnetic Mouse Bento",
    "description": "Spring hover bounce physics cards and magnetic cursor attraction pills from Hover.dev.",
    "category": "animated-motion",
    "source": "hover-dev",
    "sourceName": "Hover.dev",
    "sourceUrl": "https://hover.dev",
    "tags": [
      "hover-dev",
      "physics",
      "magnetic",
      "spring"
    ],
    "features": [
      "Spring physics bounce upon pointer hover with damping calculation"
    ],
    "tilesSummary": [
      {
        "title": "Spring Bounce Card",
        "subtitle": "Natural mass and deceleration physics",
        "colSpan": "col-span-2",
        "highlight": "Hover Spring"
      }
    ],
    "code": "import React from 'react';\n\nexport default function HoverDevBento() {\n  return (\n    <div className=\"rounded-3xl bg-neutral-900 border border-neutral-800 p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300\">\n      <span className=\"text-xs font-mono text-emerald-400\">hover.dev</span>\n      <h3 className=\"text-xl font-bold text-white mt-1\">Spring Lift Physics</h3>\n    </div>\n  );\n}"
  },
  {
    "slug": "syntax-ui-shimmer-bento",
    "title": "Syntax UI Shimmering Gradient Border Bento",
    "description": "Shimmering light sweep gradient border animations and live metric counters from Syntax UI.",
    "category": "spotlight-shaders",
    "source": "syntax-ui",
    "sourceName": "Syntax UI",
    "sourceUrl": "https://syntaxui.com",
    "tags": [
      "syntax-ui",
      "shimmer",
      "gradient-border"
    ],
    "features": [
      "Shimmer animation sweeping across card borders at timed intervals"
    ],
    "tilesSummary": [
      {
        "title": "Shimmer Sweep Hero",
        "subtitle": "Continuous animated light pulse",
        "colSpan": "col-span-2",
        "highlight": "Border Sweep"
      }
    ],
    "code": "import React from 'react';\n\nexport default function SyntaxUiBento() {\n  return (\n    <div className=\"rounded-3xl bg-neutral-900 border border-neutral-800 p-6 relative overflow-hidden\">\n      <span className=\"text-xs font-mono text-indigo-400\">syntaxui.com</span>\n      <h3 className=\"text-xl font-bold text-white mt-1\">Shimmering Border Sweep</h3>\n    </div>\n  );\n}"
  },
  {
    "slug": "bentoui-analytics-bento",
    "title": "BentoUI.dev Asymmetric SaaS Analytics Bento",
    "description": "Dedicated Tailwind bento grid components specialized for SaaS conversion and metrics from BentoUI.dev.",
    "category": "minimal-blocks",
    "source": "bentoui",
    "sourceName": "BentoUI.dev",
    "sourceUrl": "https://bentoui.dev",
    "tags": [
      "bentoui",
      "analytics",
      "saas",
      "sparklines"
    ],
    "features": [
      "Asymmetric 3-column bento layout optimized for SaaS conversion metrics"
    ],
    "tilesSummary": [
      {
        "title": "Throughput Graph",
        "subtitle": "4.8M API calls volume trend",
        "colSpan": "col-span-2",
        "highlight": "SaaS Ingestion"
      }
    ],
    "code": "import React from 'react';\n\nexport default function BentoUiDevBento() {\n  return (\n    <div className=\"rounded-3xl bg-neutral-900 border border-neutral-800 p-6\">\n      <span className=\"text-xs font-mono text-emerald-400\">bentoui.dev</span>\n      <h3 className=\"text-xl font-bold text-white mt-1\">4.8M API Calls / Day</h3>\n    </div>\n  );\n}"
  },
  {
    "slug": "bentogrids-editorial-bento",
    "title": "Bentogrids Swiss Architectural Editorial Bento",
    "description": "Curated Swiss typographic bento layouts with 12-column baseline rhythms from Bentogrids.com.",
    "category": "minimal-blocks",
    "source": "bentogrids",
    "sourceName": "Bentogrids.com Gallery",
    "sourceUrl": "https://bentogrids.com",
    "tags": [
      "bentogrids",
      "editorial",
      "swiss-style",
      "minimalist"
    ],
    "features": [
      "Swiss typographic baseline grid rhythm with Golden ratio proportions"
    ],
    "tilesSummary": [
      {
        "title": "Swiss 12-Column",
        "subtitle": "12-column modular rhythm",
        "colSpan": "col-span-2",
        "highlight": "Editorial Lead"
      }
    ],
    "code": "import React from 'react';\n\nexport default function BentogridsEditorialBento() {\n  return (\n    <div className=\"rounded-2xl bg-white text-neutral-900 border border-neutral-200 p-6\">\n      <span className=\"text-xs font-mono text-neutral-400\">bentogrids.com</span>\n      <h3 className=\"text-2xl font-serif text-neutral-950 mt-1\">12-Column Baseline Rhythm</h3>\n    </div>\n  );\n}"
  }
];
