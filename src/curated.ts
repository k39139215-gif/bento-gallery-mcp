import { BentoItem } from './types.js';

export const CURATED_BENTO_GRIDS: BentoItem[] = [
  {
    slug: 'apple-m3-pro-bento',
    title: 'Apple Pro Hardware Feature Matrix Bento',
    description: 'Iconic Apple keynote hardware launch bento grid showcasing chip performance, display specs, battery life, and spatial audio in high-contrast obsidian finish.',
    category: 'hardware-launch',
    source: 'apple',
    sourceName: 'Apple Keynote Design',
    sourceUrl: 'https://apple.com',
    tags: ['apple', 'hardware', 'dark', 'keynote', 'stats', 'titanium', 'obsidian'],
    features: [
      'High contrast deep obsidian background (bg-black / bg-neutral-900)',
      'Large stat typography with subtle metallic gradient fills',
      'Asymmetric 4-column layout with 2x2 hero chip tile',
      'Fine 1px border treatment with inner shadow glow',
      'Fluid responsiveness from mobile stack to 4-column widescreen'
    ],
    tilesSummary: [
      { title: 'M3 Pro Architecture', subtitle: '12-core CPU, 18-core GPU with Hardware Ray Tracing', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'md:row-span-2', highlight: 'Hero 3nm Die Showcase' },
      { title: '22 Hours Battery', subtitle: 'Longest battery life ever in a MacBook Pro', colSpan: 'col-span-1', highlight: 'Large Stat + Progress Ring' },
      { title: 'Liquid Retina XDR', subtitle: '1600 nits peak brightness, 120Hz ProMotion', colSpan: 'col-span-1', highlight: 'Color Gamut Spectrum Bar' },
      { title: 'Spatial Audio System', subtitle: 'Six-speaker sound system with force-cancelling woofers', colSpan: 'col-span-1 md:col-span-2', highlight: 'Acoustic Wave Visualizer' }
    ],
    code: `import React from 'react';

export default function AppleHardwareBento() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 bg-black text-white font-sans antialiased">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Engineering Breakthrough</span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2 bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Power and efficiency beyond belief.
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
        
        {/* Tile 1: Hero Chip Die (2x2) */}
        <div className="col-span-1 md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-neutral-700 transition duration-500">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700 mb-4">
              3-Nanometer Architecture
            </span>
            <h3 className="text-3xl font-bold text-white tracking-tight">M3 Pro Chip</h3>
            <p className="text-neutral-400 text-sm mt-2 max-w-sm">
              Up to 12-core CPU and 18-core GPU deliver unprecedented performance for demanding pro workflows.
            </p>
          </div>

          {/* Micro Visualizer */}
          <div className="relative mt-8 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
            <div>
              <div className="text-2xl font-black text-white">37 Billion</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Transistors on a single die</div>
            </div>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-bold text-black text-sm shadow-lg shadow-orange-500/30">
              3nm
            </div>
          </div>
        </div>

        {/* Tile 2: Battery Life */}
        <div className="col-span-1 rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition duration-300">
          <div>
            <div className="text-neutral-400 text-xs font-medium uppercase tracking-wider">All-Day Endurance</div>
            <div className="text-4xl font-extrabold text-white mt-2">22 hrs</div>
            <div className="text-neutral-400 text-xs mt-1">Longest battery life ever in a Mac</div>
          </div>
          <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden mt-4">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full w-[92%] rounded-full" />
          </div>
        </div>

        {/* Tile 3: Display */}
        <div className="col-span-1 rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition duration-300">
          <div>
            <div className="text-neutral-400 text-xs font-medium uppercase tracking-wider">Liquid Retina XDR</div>
            <div className="text-3xl font-bold text-white mt-2">1,600 nits</div>
            <div className="text-neutral-400 text-xs mt-1">Peak brightness with extreme HDR contrast</div>
          </div>
          <div className="flex gap-1.5 items-end h-8">
            <div className="w-1.5 h-3 bg-neutral-700 rounded-full" />
            <div className="w-1.5 h-5 bg-neutral-700 rounded-full" />
            <div className="w-1.5 h-8 bg-amber-400 rounded-full animate-pulse" />
            <div className="w-1.5 h-6 bg-amber-400 rounded-full" />
            <div className="w-1.5 h-4 bg-neutral-700 rounded-full" />
          </div>
        </div>

        {/* Tile 4: Acoustics & Studio Mics (2-col wide) */}
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 flex items-center justify-between hover:border-neutral-700 transition duration-300">
          <div>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Studio Audio</span>
            <h4 className="text-xl font-bold text-white mt-1">Six-Speaker Sound System</h4>
            <p className="text-neutral-400 text-xs mt-1 max-w-xs">
              Force-cancelling woofers create room-filling sound with Spatial Audio and Dolby Atmos.
            </p>
          </div>
          <div className="flex items-center gap-1 px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            Dolby Atmos
          </div>
        </div>

      </div>
    </section>
  );
}`
  },
  {
    slug: 'linear-sleek-bento',
    title: 'Linear Asymmetric Cycles & Issues Bento',
    description: 'Ultra-modern dark aesthetic bento grid inspired by Linear.app, featuring interactive cycle burn-up charts, keyboard shortcut triggers, and git branch sync badges.',
    category: 'saas-feature',
    source: 'linear',
    sourceName: 'Linear Product Design',
    sourceUrl: 'https://linear.app',
    tags: ['linear', 'saas', 'dark', 'interactive', 'cycles', 'minimalist', 'indigo'],
    features: [
      'Subtle indigo/violet radial background ambiance',
      'Refined 1px neutral-800 borders with hover lightening',
      'Cycle velocity sparkline chart simulation',
      'Micro hotkey chips with monospace typography',
      'Git merge & issue status triage row cards'
    ],
    tilesSummary: [
      { title: 'Cycle Insights', subtitle: 'Automated burnup and scope tracking', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'md:row-span-2', highlight: 'Interactive Sparkline & Velocity Bar' },
      { title: 'Keyboard-First', subtitle: 'Navigate issues at the speed of thought', colSpan: 'col-span-1', highlight: 'Hotkey Keycap Grid (C, X, ⌘K)' },
      { title: 'Git Sync & CI', subtitle: 'Bi-directional GitHub/GitLab automation', colSpan: 'col-span-1', highlight: 'Branch Auto-Triage Tag' },
      { title: 'Project Milestones', subtitle: 'Target dates with real-time forecasting', colSpan: 'col-span-1 md:col-span-2', highlight: 'Progress Slider with Status Dot' }
    ],
    code: `import React, { useState } from 'react';

export default function LinearStyleBento() {
  const [activeTab, setActiveTab] = useState<'velocity' | 'burndown'>('velocity');

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 bg-[#08090a] text-neutral-200 font-sans antialiased">
      {/* Linear Ambient Glow */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-indigo-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            Cycles & Roadmap
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-2">
            Engineered for high-momentum teams.
          </h2>
        </div>
        <p className="text-sm text-neutral-400 max-w-md">
          Linear helps streamline software projects, sprints, tasks, and bug tracking. Built for speed and focus.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Tile 1: Cycles Velocity (Hero 2-cols wide) */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-[#0f1012] border border-neutral-800/80 p-6 flex flex-col justify-between hover:border-neutral-700/80 transition duration-300 relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-neutral-800/60 pb-4">
            <div>
              <span className="text-xs text-neutral-400">Current Sprint</span>
              <h3 className="text-lg font-medium text-white">Cycle 48 Velocity</h3>
            </div>
            <div className="flex gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800 text-xs">
              <button 
                onClick={() => setActiveTab('velocity')}
                className={\`px-2.5 py-1 rounded-md transition \${activeTab === 'velocity' ? 'bg-indigo-600 text-white font-medium' : 'text-neutral-400 hover:text-white'}\`}
              >
                Velocity
              </button>
              <button 
                onClick={() => setActiveTab('burndown')}
                className={\`px-2.5 py-1 rounded-md transition \${activeTab === 'burndown' ? 'bg-indigo-600 text-white font-medium' : 'text-neutral-400 hover:text-white'}\`}
              >
                Burndown
              </button>
            </div>
          </div>

          {/* Chart Simulation */}
          <div className="py-8 flex items-end gap-3 h-44">
            {[38, 52, 45, 68, 74, 82, 95].map((val, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                <div 
                  style={{ height: \`\${val}%\` }} 
                  className="w-full bg-gradient-to-t from-indigo-950 via-indigo-600/50 to-indigo-500 rounded-t-md group-hover:brightness-125 transition"
                />
                <span className="text-[11px] text-neutral-500 font-mono">D{idx + 1}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 border-t border-neutral-800/60">
            <span>Completed 84 story points</span>
            <span className="text-emerald-400 font-mono font-medium">+18% vs last cycle</span>
          </div>
        </div>

        {/* Tile 2: Keyboard First */}
        <div className="col-span-1 rounded-2xl bg-[#0f1012] border border-neutral-800/80 p-6 flex flex-col justify-between hover:border-neutral-700/80 transition duration-300">
          <div>
            <span className="text-xs text-neutral-400">Pure Speed</span>
            <h3 className="text-lg font-medium text-white mt-1">Keyboard-First</h3>
            <p className="text-xs text-neutral-400 mt-2">
              Every single action in Linear can be performed through keyboard hotkeys without touching the mouse.
            </p>
          </div>

          {/* Keycaps */}
          <div className="grid grid-cols-3 gap-2 my-4">
            {['C', 'X', '⌘ K', 'G I', 'V', 'ESC'].map((key) => (
              <div key={key} className="h-10 rounded-lg bg-neutral-900 border border-neutral-700/60 flex items-center justify-center font-mono text-xs text-neutral-200 shadow-sm shadow-black">
                {key}
              </div>
            ))}
          </div>

          <span className="text-[11px] text-neutral-500 font-mono">Press '?' for global command palette</span>
        </div>

        {/* Tile 3: Git Auto-Sync */}
        <div className="col-span-1 rounded-2xl bg-[#0f1012] border border-neutral-800/80 p-6 flex flex-col justify-between hover:border-neutral-700/80 transition duration-300">
          <div>
            <span className="text-xs text-neutral-400">VCS Automation</span>
            <h3 className="text-lg font-medium text-white mt-1">Bi-Directional Git Sync</h3>
            <p className="text-xs text-neutral-400 mt-2">
              Branches and PRs are automatically linked and transition issue statuses on merge.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 flex items-center justify-between">
            <span className="text-indigo-400">feat/auth-v2</span>
            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">MERGED</span>
          </div>
        </div>

        {/* Tile 4: Automated Triage (2-cols wide) */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-[#0f1012] border border-neutral-800/80 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-neutral-700/80 transition duration-300">
          <div>
            <span className="text-xs text-neutral-400">Zero Clutter</span>
            <h3 className="text-lg font-medium text-white mt-1">Intelligent Inbox Triage</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              Duplicate detection and SLA reminder bots keep your backlogs crisp and organized automatically.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-neutral-300">0 unread notifications</span>
          </div>
        </div>

      </div>
    </section>
  );
}`
  },
  {
    slug: 'raycast-spotlight-bento',
    title: 'Raycast Command Palette & Extensions Bento',
    description: 'Spotlight and hotkey-driven bento grid inspired by Raycast, featuring quick launcher cards, dynamic extension cards, and script command widgets.',
    category: 'saas-feature',
    source: 'raycast',
    sourceName: 'Raycast Extensions',
    sourceUrl: 'https://raycast.com',
    tags: ['raycast', 'launcher', 'keyboard', 'extensions', 'red-accent', 'macos'],
    features: [
      'Raycast signature crimson red accents (`text-red-500`, `bg-red-500`)',
      'Command search input bar micro-component',
      'Store extension showcase cards with author avatars',
      'Snippets and clipboard history preview tile'
    ],
    tilesSummary: [
      { title: 'Global Launcher', subtitle: 'Launch any command in milliseconds', colSpan: 'col-span-1 md:col-span-2', highlight: 'Search Input Bar + Quick Filter Chips' },
      { title: '1,500+ Extensions', subtitle: 'Community built plugins for Slack, Jira, GitHub', colSpan: 'col-span-1', highlight: 'Extension Icon Grid' },
      { title: 'AI Assistant', subtitle: 'Inline ChatGPT, Claude, and Llama reasoning', colSpan: 'col-span-1', highlight: 'Model Selector Tag' },
      { title: 'Floating Notes & Clipboard', subtitle: 'Instant recall with encrypted local cache', colSpan: 'col-span-1 md:col-span-2', highlight: 'History Stack Widget' }
    ],
    code: `import React, { useState } from 'react';

export default function RaycastBento() {
  const [query, setQuery] = useState('');

  const commands = [
    { title: 'Search GitHub Repositories', category: 'Developer', hotkey: '⌘ 1' },
    { title: 'Create Jira Issue', category: 'Productivity', hotkey: '⌘ 2' },
    { title: 'Summarize Selected Text with AI', category: 'AI', hotkey: '⌘ 3' },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 bg-[#111114] text-white font-sans antialiased">
      {/* Header */}
      <div className="mb-10 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-950/80 text-red-400 border border-red-800/60 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          macOS Native Velocity
        </span>
        <h2 className="text-4xl font-extrabold tracking-tight">Supercharged Productivity</h2>
        <p className="text-neutral-400 text-sm mt-2 max-w-lg mx-auto">
          An extensible launcher that lets you control your tools, automate workflows, and interact with AI without breaking flow.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Tile 1: Command Palette (Hero 2-cols) */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-[#19191d] border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">Spotlight Replacement</span>
              <kbd className="px-2 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-300">⌥ Space</kbd>
            </div>
            
            {/* Search Input Bar */}
            <div className="relative mb-4">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-[#111114] border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500/60 transition"
              />
            </div>

            {/* Simulated Commands List */}
            <div className="space-y-2">
              {commands.map((cmd, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-[#141417] hover:bg-neutral-800/50 border border-neutral-800/40 cursor-pointer transition">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-sm font-medium text-neutral-200">{cmd.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-500">{cmd.category}</span>
                    <kbd className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400">{cmd.hotkey}</kbd>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tile 2: AI Companion */}
        <div className="col-span-1 rounded-2xl bg-[#19191d] border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs uppercase tracking-wider text-red-400 font-mono">Built-In AI</span>
            <h3 className="text-xl font-bold text-white mt-1">Raycast AI</h3>
            <p className="text-xs text-neutral-400 mt-2">
              Write, code, and brainstorm anywhere on your Mac with top models at your fingertips.
            </p>
          </div>
          <div className="mt-6 p-4 rounded-xl bg-[#111114] border border-neutral-800 text-xs space-y-2">
            <div className="text-neutral-400">Prompt: "Explain this regex..."</div>
            <div className="text-emerald-400 font-mono">Matches IPv4 addresses with 4 octets.</div>
          </div>
        </div>

        {/* Tile 3: Extension Store */}
        <div className="col-span-1 rounded-2xl bg-[#19191d] border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">Ecosystem</span>
            <h3 className="text-xl font-bold text-white mt-1">1,500+ Extensions</h3>
            <p className="text-xs text-neutral-400 mt-2">
              Discover plugins made by the community to connect your favourite tools.
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            {['GitHub', 'Notion', 'Spotify', 'Figma'].map((name) => (
              <span key={name} className="px-2.5 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-xs text-neutral-300 font-medium">
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Tile 4: Custom Script Commands (2-cols) */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-[#19191d] border border-neutral-800 p-6 flex items-center justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">Automation</span>
            <h3 className="text-xl font-bold text-white mt-1">Custom Scripts & Bash Shortcuts</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              Write scripts in Node.js, Python, Swift, or Bash and trigger them directly with keyboard commands.
            </p>
          </div>
          <div className="h-10 px-4 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center font-mono text-xs text-red-400">
            #!/bin/bash
          </div>
        </div>

      </div>
    </section>
  );
}`
  },
  {
    slug: 'vercel-edge-infra-bento',
    title: 'Vercel Global Edge & Cloud Deployment Bento',
    description: 'High-performance cloud infrastructure bento grid inspired by Vercel / Next.js, highlighting global edge network, zero-config serverless, and branch previews.',
    category: 'developer-cloud',
    source: 'vercel',
    sourceName: 'Vercel Frontend Cloud',
    sourceUrl: 'https://vercel.com',
    tags: ['vercel', 'nextjs', 'cloud', 'edge', 'developer', 'deployment', 'monochrome'],
    features: [
      'Iconic black and white stark contrast with subtle gray gradients',
      'Global edge latency visualization card with low ping badges',
      'Preview deployment pipeline status widget with commit SHA',
      'Edge middleware response time metrics counter'
    ],
    tilesSummary: [
      { title: 'Global Edge Network', subtitle: 'Over 100 edge points of presence across 6 continents', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'md:row-span-2', highlight: 'Worldwide Latency & POP Matrix' },
      { title: 'Zero Config CI/CD', subtitle: 'Push to Git and your preview URL is live in seconds', colSpan: 'col-span-1', highlight: 'Live Deployment SHA Card' },
      { title: 'Next.js App Router', subtitle: 'Server Components with streaming SSR and Suspense', colSpan: 'col-span-1', highlight: 'Streaming Bar Animation' },
      { title: 'Edge Middleware', subtitle: 'Execute logic before requests hit origin caches', colSpan: 'col-span-1 md:col-span-2', highlight: '<10ms Execution Meter' }
    ],
    code: `import React from 'react';

export default function VercelInfraBento() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 bg-black text-white font-sans antialiased">
      {/* Vercel Geometric Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-neutral-900 text-neutral-300 border border-neutral-800 mb-4">
          <svg className="w-3 h-3 fill-white" viewBox="0 0 1155 1000">
            <path d="m577.3 0 577.4 1000H0z"/>
          </svg>
          Edge Runtime 2.0
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          The Frontend Cloud for the Web.
        </h2>
        <p className="text-neutral-400 text-sm mt-2 max-w-xl">
          Instantly deploy websites, serverless functions, and AI applications to an ultra-fast global edge network.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Tile 1: Global Edge Network (Hero 2-cols wide) */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-neutral-950 border border-neutral-800 p-8 flex flex-col justify-between hover:border-neutral-700 transition relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Global Infrastructure</span>
            <h3 className="text-2xl font-bold text-white mt-1">100+ Edge Regions Worldwide</h3>
            <p className="text-neutral-400 text-xs mt-2 max-w-md">
              Your users connect to the closest data center within milliseconds. Fast cold starts, automatic failover, and DDoS mitigation included.
            </p>
          </div>

          {/* Latency Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { region: 'SFO1 (San Francisco)', ping: '12ms' },
              { region: 'IAD1 (Washington DC)', ping: '8ms' },
              { region: 'LHR1 (London)', ping: '14ms' },
              { region: 'HND1 (Tokyo)', ping: '21ms' },
            ].map((loc, i) => (
              <div key={i} className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
                <span className="text-[11px] text-neutral-400 font-mono truncate">{loc.region}</span>
                <span className="text-sm font-bold text-emerald-400 font-mono mt-1">{loc.ping}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-800/80 pt-3">
            <span>Anycast DNS routing</span>
            <span className="text-neutral-300 font-mono">99.99% Uptime SLA</span>
          </div>
        </div>

        {/* Tile 2: Automatic Git Deployments */}
        <div className="col-span-1 rounded-2xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Automated Pipeline</span>
            <h3 className="text-xl font-bold text-white mt-1">Git Previews</h3>
            <p className="text-xs text-neutral-400 mt-2">
              Every pull request gets a dedicated staging deployment with shareable URL and comments.
            </p>
          </div>

          {/* Deployment Card */}
          <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 font-mono text-xs space-y-2 mt-4">
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Commit:</span>
              <span className="text-neutral-200">#9f21a8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Status:</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Ready (4.2s)
              </span>
            </div>
          </div>
        </div>

        {/* Tile 3: Next.js Streaming */}
        <div className="col-span-1 rounded-2xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Architecture</span>
            <h3 className="text-xl font-bold text-white mt-1">React Server Streaming</h3>
            <p className="text-xs text-neutral-400 mt-2">
              Stream HTML chunks instantly as data resolves, eliminating loading spinners.
            </p>
          </div>
          <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden mt-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full w-[85%] rounded-full animate-pulse" />
          </div>
        </div>

        {/* Tile 4: Edge Middleware (2-cols) */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-neutral-950 border border-neutral-800 p-6 flex items-center justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Performance</span>
            <h3 className="text-xl font-bold text-white mt-1">Sub-10ms Edge Middleware</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              Run A/B tests, authenticate tokens, and localize content right at the CDN boundary.
            </p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-white">
            middleware.ts
          </div>
        </div>

      </div>
    </section>
  );
}`
  },
  {
    slug: 'aceternity-spotlight-bento',
    title: 'Aceternity Radial Cursor Spotlight Bento',
    description: 'Dynamic cursor-tracking glow bento grid inspired by Aceternity UI, featuring interactive radial light borders, 3D card pin effects, and modern glassmorphism.',
    category: 'interactive-animated',
    source: 'aceternity',
    sourceName: 'Aceternity UI',
    sourceUrl: 'https://ui.aceternity.com',
    tags: ['aceternity', 'spotlight', 'glow', 'cursor-tracking', 'radial-gradient', 'modern'],
    features: [
      'Interactive mouse tracking with radial-gradient glow layer',
      'Dynamic spotlight border illumination following pointer',
      'Glassmorphic card panels with backdrop blur',
      'Vibrant violet, cyan, and amber accent glows'
    ],
    tilesSummary: [
      { title: 'Cursor Spotlight Canvas', subtitle: 'Cards illuminate dynamically under mouse cursor', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'md:row-span-2', highlight: 'Real-time Radial Follower' },
      { title: '3D Pin Card', subtitle: 'Floating perspective pin effect with animated ripple', colSpan: 'col-span-1', highlight: 'Animated Concentric Rings' },
      { title: 'Shader Glow Gradient', subtitle: 'Deep color transitions across dark borders', colSpan: 'col-span-1', highlight: 'Cyan & Violet Shader' },
      { title: 'Magnetic CTA Tile', subtitle: 'Smooth button physics and interactive feedback', colSpan: 'col-span-1 md:col-span-2', highlight: 'Interactive Button Ring' }
    ],
    code: `import React, { useRef, useState, MouseEvent } from 'react';

// Spotlight Card component with cursor tracking
function SpotlightCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={\`relative rounded-3xl bg-neutral-950 border border-neutral-800/80 p-6 overflow-hidden transition-all duration-300 \${className}\`}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition duration-300"
          style={{
            background: \`radial-gradient(600px circle at \${mousePos.x}px \${mousePos.y}px, rgba(120, 119, 198, 0.15), transparent 40%)\`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function AceternitySpotlightBento() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 bg-black text-white font-sans antialiased">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">Interactive Canvas</span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2 bg-gradient-to-r from-violet-200 via-indigo-200 to-purple-400 bg-clip-text text-transparent">
          Bento Grid with Radial Spotlight
        </h2>
        <p className="text-neutral-400 text-sm mt-3 max-w-lg mx-auto">
          Hover your mouse over the cards to experience dynamic pointer-illuminated borders and reactive light cones.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Tile 1: Hero Card (2-cols wide) */}
        <SpotlightCard className="col-span-1 md:col-span-2">
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-violet-950/80 text-violet-300 border border-violet-800/60 mb-4">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                Spotlight Border Follower
              </div>
              <h3 className="text-2xl font-bold text-white">Interactive Light Shading</h3>
              <p className="text-neutral-400 text-sm mt-2 max-w-md">
                Every tile detects cursor coordinates in real-time, casting a soft radial gradient highlight across the card boundaries.
              </p>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-neutral-400">Zero Extra Dependencies</div>
                <div className="text-sm font-semibold text-white mt-0.5">Pure React + CSS Radial Math</div>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-violet-600 text-white text-xs font-medium shadow-lg shadow-violet-500/20">
                Move Mouse Here
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Tile 2: 3D Pin Style */}
        <SpotlightCard className="col-span-1">
          <div className="h-full flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400">Spatial Depth</span>
              <h3 className="text-xl font-bold text-white mt-1">3D Pin Radar</h3>
              <p className="text-xs text-neutral-400 mt-2">
                Simulated radar pulses anchor attention to key product highlights.
              </p>
            </div>
            
            <div className="relative my-8 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-violet-500/40 animate-ping absolute" />
              <div className="w-10 h-10 rounded-full border border-violet-500/80 animate-pulse absolute" />
              <div className="w-4 h-4 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
            </div>

            <span className="text-xs text-center text-neutral-500 font-mono">Real-time telemetry</span>
          </div>
        </SpotlightCard>

        {/* Tile 3: Glowing Shader */}
        <SpotlightCard className="col-span-1">
          <div className="h-full flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-cyan-400">Optics</span>
              <h3 className="text-xl font-bold text-white mt-1">Glassmorphic Sheen</h3>
              <p className="text-xs text-neutral-400 mt-2">
                Subtle blur filters combined with semi-opaque surfaces replicate polished optical crystal.
              </p>
            </div>
            <div className="mt-6 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center text-xs text-cyan-200 font-mono">
              backdrop-filter: blur(12px)
            </div>
          </div>
        </SpotlightCard>

        {/* Tile 4: Wide Feature Bar (2-cols wide) */}
        <SpotlightCard className="col-span-1 md:col-span-2">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">Tailwind Native</span>
              <h3 className="text-xl font-bold text-white mt-1">Ready for Modern Next.js & Vite Stacks</h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-md">
                Copy and paste directly into your project. Fully customizable colors, borders, and animations.
              </p>
            </div>
            <button className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition shadow-lg">
              Explore Components
            </button>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}`
  },
  {
    slug: 'magicui-animated-bento',
    title: 'Magic UI Interactive Bento Grid',
    description: 'Dynamic and animated bento grid inspired by Magic UI, featuring animated marquis, simulated interactive file tree, instant command search, and notification cards.',
    category: 'interactive-animated',
    source: 'magicui',
    sourceName: 'Magic UI',
    sourceUrl: 'https://magicui.design',
    tags: ['magicui', 'marquee', 'file-tree', 'animated', 'interactive', 'shadcn'],
    features: [
      'Simulated animated infinite marquee row of tech badges',
      'Interactive file directory tree widget with expanding folders',
      'Real-time simulated notification activity card',
      'Seamless shadcn/ui and Tailwind CSS compatibility'
    ],
    tilesSummary: [
      { title: 'Interactive File Tree', subtitle: 'Browse code and asset directories in-place', colSpan: 'col-span-1 md:col-span-2', highlight: 'Collapsible Folder Micro-Widget' },
      { title: 'Infinite Tech Marquee', subtitle: 'Smooth scrolling ticker of frameworks and APIs', colSpan: 'col-span-1', highlight: 'Marquee Strip Animation' },
      { title: 'Live Notification Feed', subtitle: 'Toast notifications sliding in real-time', colSpan: 'col-span-1', highlight: 'Animated Activity Pill' },
      { title: 'Command Search Matrix', subtitle: 'Fuzzy search with keyboard shortcuts', colSpan: 'col-span-1 md:col-span-2', highlight: 'Fast Filter Chip Bar' }
    ],
    code: `import React, { useState } from 'react';

export default function MagicUiBento() {
  const [selectedFile, setSelectedFile] = useState('App.tsx');

  const files = [
    { name: 'App.tsx', size: '2.4 KB' },
    { name: 'BentoGrid.tsx', size: '4.1 KB' },
    { name: 'theme.config.ts', size: '890 B' },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 bg-neutral-950 text-neutral-100 font-sans antialiased">
      {/* Header */}
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">Micro-Interactions</span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-1 text-white">
          Bento Grid with Living Components
        </h2>
        <p className="text-neutral-400 text-sm mt-2 max-w-lg">
          Transform static feature sections into engaging, interactive playgrounds with live widgets.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Tile 1: File Tree (2-cols wide) */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-neutral-400">WORKSPACE EXPLORER</span>
              <span className="text-xs font-mono text-neutral-500">src/components</span>
            </div>
            
            <div className="space-y-1.5 font-mono text-xs">
              {files.map((file) => (
                <div
                  key={file.name}
                  onClick={() => setSelectedFile(file.name)}
                  className={\`flex items-center justify-between p-2.5 rounded-lg cursor-pointer transition \${selectedFile === file.name ? 'bg-sky-950/60 border border-sky-800/80 text-sky-300' : 'bg-neutral-950/40 hover:bg-neutral-800/50 text-neutral-400'}\`}
                >
                  <div className="flex items-center gap-2">
                    <span>📄</span>
                    <span>{file.name}</span>
                  </div>
                  <span className="text-[10px] text-neutral-500">{file.size}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span>Selected: <strong className="text-white font-mono">{selectedFile}</strong></span>
            <span className="text-sky-400 font-mono">Ready to edit</span>
          </div>
        </div>

        {/* Tile 2: Marquee Strip */}
        <div className="col-span-1 rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition overflow-hidden">
          <div>
            <span className="text-xs font-mono text-neutral-400">FRAMEWORK AGNOSTIC</span>
            <h3 className="text-lg font-bold text-white mt-1">Endless Integrations</h3>
          </div>

          {/* Marquee Ticker */}
          <div className="my-6 relative overflow-hidden">
            <div className="flex gap-2 animate-pulse">
              {['React', 'Next.js', 'Vite', 'Tailwind', 'Motion'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-xs font-medium text-neutral-200 whitespace-nowrap">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <span className="text-xs text-neutral-500">Works seamlessly with any modern stack</span>
        </div>

        {/* Tile 3: Live Notification Feed */}
        <div className="col-span-1 rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400">REAL-TIME EVENTS</span>
            <h3 className="text-lg font-bold text-white mt-1">Event Streams</h3>
          </div>

          <div className="my-4 space-y-2">
            <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center gap-2.5 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-neutral-300">Deployment succeeded</span>
            </div>
            <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center gap-2.5 text-xs">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-neutral-300">New user registered</span>
            </div>
          </div>

          <span className="text-[11px] text-neutral-500 font-mono">Websocket connected</span>
        </div>

        {/* Tile 4: Command Palette (2-cols wide) */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex items-center justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400">INSTANT DISCOVERY</span>
            <h3 className="text-xl font-bold text-white mt-1">Fuzzy Command Palette</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              Filter through documentation, settings, and team members with ultra-fast search indexing.
            </p>
          </div>
          <kbd className="px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-700 font-mono text-xs text-neutral-300 shadow">
            ⌘ + K
          </kbd>
        </div>

      </div>
    </section>
  );
}`
  },
  {
    slug: 'spell-spatial-tilt-bento',
    title: 'Spell.sh 3D Perspective Tilt Bento',
    description: 'Cutting-edge 3D cursor perspective tilt cards inspired by Spell.sh, featuring dynamic multi-axis tilt transforms, reflective glare sheen, and spatial depth layers.',
    category: 'interactive-animated',
    source: 'spell',
    sourceName: 'Spell.sh Interactive Studio',
    sourceUrl: 'https://spell.sh',
    tags: ['spell', '3d-tilt', 'perspective', 'glare', 'spatial', 'interactive', 'futuristic'],
    features: [
      'Interactive 3D tilt calculation (`rotateX`, `rotateY`, `perspective`)',
      'Dynamic light reflection glare layer responding to cursor distance',
      'Translational Z-depth parallax separating text from background',
      'Silky smooth CSS transition restoration on mouse leave'
    ],
    tilesSummary: [
      { title: '3D Spatial Canvas', subtitle: 'Tilts in 3D coordinate space with cursor physics', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'md:row-span-2', highlight: 'Real-time Matrix Transform' },
      { title: 'Reflective Sheen', subtitle: 'Photorealistic cursor glare reflection', colSpan: 'col-span-1', highlight: 'Specular Glare Layer' },
      { title: 'Z-Axis Floating Icons', subtitle: 'Multi-layer depth with translateZ extrusion', colSpan: 'col-span-1', highlight: 'Parallax Layering' },
      { title: 'Physics Spring Easing', subtitle: 'Bounces gently back into position when pointer leaves', colSpan: 'col-span-1 md:col-span-2', highlight: 'Spring Damping Physics' }
    ],
    code: `import React, { useRef, useState, MouseEvent } from 'react';

// 3D Perspective Tilt Card
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTransformStyle(\`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale3d(1.02, 1.02, 1.02)\`);
    setGlareStyle({
      opacity: 0.15,
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d',
      }}
      className={\`relative rounded-3xl bg-neutral-900/90 border border-neutral-700/60 p-6 overflow-hidden \${className}\`}
    >
      {/* Dynamic Glare Reflection */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glareStyle.opacity,
          background: \`radial-gradient(circle at \${glareStyle.x}% \${glareStyle.y}%, rgba(255,255,255,0.8), transparent 60%)\`,
        }}
      />
      <div className="relative z-10" style={{ transform: 'translateZ(25px)' }}>
        {children}
      </div>
    </div>
  );
}

export default function SpellTiltBento() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 bg-[#0a0a0c] text-white font-sans antialiased">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">Spell.sh Spatial Engine</span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2 bg-gradient-to-r from-neutral-100 via-neutral-300 to-emerald-400 bg-clip-text text-transparent">
          3D Perspective Tilt Bento
        </h2>
        <p className="text-neutral-400 text-sm mt-3 max-w-md mx-auto">
          Hover over each card to experience hardware-accelerated 3D parallax tilt with cursor-following specular glare.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Tile 1: Hero Card (2-cols wide) */}
        <TiltCard className="col-span-1 md:col-span-2">
          <div className="flex flex-col justify-between h-full min-h-[200px]">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/80 mb-3">
                Spatial Coordinate Tracking
              </span>
              <h3 className="text-2xl font-bold text-white">Dynamic Multi-Axis Parallax</h3>
              <p className="text-neutral-400 text-xs mt-2 max-w-md">
                Each card rotates around X and Y axes according to cursor offset relative to card center, giving realistic physical mass.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>rotateX / rotateY reactive</span>
              <span className="text-emerald-400">translateZ(25px) Depth</span>
            </div>
          </div>
        </TiltCard>

        {/* Tile 2: Specular Glare */}
        <TiltCard className="col-span-1">
          <div className="flex flex-col justify-between h-full min-h-[200px]">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase">Optics</span>
              <h3 className="text-xl font-bold text-white mt-1">Photorealistic Glare</h3>
              <p className="text-xs text-neutral-400 mt-2">
                Simulated surface reflections calculate specular highlights as if under a physical spotlight.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800 text-center text-xs font-mono text-neutral-300">
              Interactive Sheen
            </div>
          </div>
        </TiltCard>

        {/* Tile 3: Spring Physics */}
        <TiltCard className="col-span-1">
          <div className="flex flex-col justify-between h-full min-h-[200px]">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase">Fluidity</span>
              <h3 className="text-xl font-bold text-white mt-1">Spring Dampening</h3>
              <p className="text-xs text-neutral-400 mt-2">
                Restores resting orientation with natural deceleration when the cursor exits the card.
              </p>
            </div>
            <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden mt-4">
              <div className="bg-emerald-400 h-full w-3/4 rounded-full" />
            </div>
          </div>
        </TiltCard>

        {/* Tile 4: Wide Strip (2-cols wide) */}
        <TiltCard className="col-span-1 md:col-span-2">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase">GPU Accelerated</span>
              <h3 className="text-xl font-bold text-white mt-1">Zero Layout Shift or Stutter</h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-md">
                Renders solely via CSS transforms on the compositor thread for silky smooth 120 FPS performance.
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-bold text-xs">
              120 FPS Tested
            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}`
  },
  {
    slug: 'supabase-emerald-bento',
    title: 'Supabase Open Source Database & Auth Bento',
    description: 'Developer-first database architecture bento grid inspired by Supabase, featuring emerald green neon accents, instant SQL editor widgets, and RLS shield security toggles.',
    category: 'developer-cloud',
    source: 'supabase',
    sourceName: 'Supabase Architecture',
    sourceUrl: 'https://supabase.com',
    tags: ['supabase', 'database', 'postgres', 'auth', 'emerald', 'sql', 'developer'],
    features: [
      'Iconic Supabase emerald green styling (`#3ECF8E` / `emerald-400`)',
      'Interactive simulated SQL query editor tile with execution output',
      'Row-Level Security (RLS) shield card with active policy count',
      'Real-time Postgres change broadcast indicator'
    ],
    tilesSummary: [
      { title: 'PostgreSQL Engine', subtitle: 'Dedicated Postgres database with full superuser capabilities', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'md:row-span-2', highlight: 'Interactive SQL Console Tile' },
      { title: 'Row Level Security', subtitle: 'Granular access policies built directly into the database engine', colSpan: 'col-span-1', highlight: 'RLS Shield Toggle Badge' },
      { title: 'Realtime Subscriptions', subtitle: 'Listen to database inserts, updates, and deletes via WebSockets', colSpan: 'col-span-1', highlight: 'Broadcast Pulse Widget' },
      { title: 'Edge Functions & Storage', subtitle: 'Globally distributed Deno functions and media storage', colSpan: 'col-span-1 md:col-span-2', highlight: 'Storage Bucket Status Tile' }
    ],
    code: `import React, { useState } from 'react';

export default function SupabaseBento() {
  const [sqlQuery, setSqlQuery] = useState("SELECT id, email, created_at FROM auth.users LIMIT 2;");
  const [isRunning, setIsRunning] = useState(false);

  const runQuery = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 600);
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 bg-[#171717] text-white font-sans antialiased">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#3ECF8E]" />
          PostgreSQL Architecture
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Build in a weekend. Scale to millions.
        </h2>
        <p className="text-neutral-400 text-sm mt-2 max-w-xl">
          Supabase gives you a dedicated Postgres database, authentication, instant APIs, real-time subscriptions, and storage without lock-in.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Tile 1: SQL Editor (Hero 2-cols wide) */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-[#1c1c1c] border border-neutral-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono text-neutral-400">SQL QUERY RUNNER</span>
              <button 
                onClick={runQuery}
                disabled={isRunning}
                className="px-3 py-1 rounded-md bg-[#3ECF8E] text-black font-semibold text-xs hover:bg-emerald-400 transition"
              >
                {isRunning ? 'Executing...' : '▶ Run Query'}
              </button>
            </div>

            {/* SQL Input Bar */}
            <div className="p-3 rounded-xl bg-black border border-neutral-800 font-mono text-xs text-neutral-200">
              <span className="text-emerald-400 font-bold">{sqlQuery}</span>
            </div>

            {/* Result Table Preview */}
            <div className="mt-4 p-3 rounded-xl bg-neutral-900 border border-neutral-800 font-mono text-xs">
              <div className="text-[11px] text-neutral-400 pb-1 border-b border-neutral-800 flex justify-between">
                <span>id</span>
                <span>email</span>
                <span>status</span>
              </div>
              <div className="pt-2 flex justify-between text-neutral-300">
                <span>usr_8f219</span>
                <span>alex@example.com</span>
                <span className="text-[#3ECF8E]">verified</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-neutral-800 mt-4">
            <span>Query execution time: <strong className="text-emerald-400 font-mono">1.2ms</strong></span>
            <span className="text-neutral-400 font-mono">Postgres 16.2</span>
          </div>
        </div>

        {/* Tile 2: Row Level Security */}
        <div className="col-span-1 rounded-2xl bg-[#1c1c1c] border border-neutral-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">Enterprise Security</span>
            <h3 className="text-xl font-bold text-white mt-1">Row Level Security</h3>
            <p className="text-xs text-neutral-400 mt-2">
              Tie access policies directly to Postgres roles. Protect data without writing custom middleware.
            </p>
          </div>
          
          <div className="my-6 p-3 rounded-xl bg-black border border-neutral-800 flex items-center justify-between">
            <span className="text-xs text-neutral-300 font-mono">RLS Enabled</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#3ECF8E] shadow-sm shadow-emerald-400" />
          </div>

          <span className="text-xs text-neutral-500 font-mono">auth.uid() = user_id</span>
        </div>

        {/* Tile 3: Realtime Engine */}
        <div className="col-span-1 rounded-2xl bg-[#1c1c1c] border border-neutral-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">WebSockets</span>
            <h3 className="text-xl font-bold text-white mt-1">Realtime Broadcast</h3>
            <p className="text-xs text-neutral-400 mt-2">
              Broadcast database changes, user presence, and peer messages over low-latency WebSockets.
            </p>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-black border border-neutral-800 text-xs font-mono text-neutral-300 mt-4">
            <span className="w-2 h-2 rounded-full bg-[#3ECF8E] animate-ping" />
            postgres_changes : INSERT
          </div>
        </div>

        {/* Tile 4: Edge Functions (2-cols wide) */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-[#1c1c1c] border border-neutral-800 p-6 flex items-center justify-between hover:border-emerald-500/40 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">Compute</span>
            <h3 className="text-xl font-bold text-white mt-1">TypeScript Edge Functions</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              Server-side TypeScript functions distributed globally close to your users, powered by Deno runtime.
            </p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-black border border-neutral-800 font-mono text-xs text-[#3ECF8E]">
            deno.deploy()
          </div>
        </div>

      </div>
    </section>
  );
}`
  },
  {
    slug: 'bentogrids-editorial-bento',
    title: 'Bentogrids Minimal Editorial Magazine Bento',
    description: 'Clean typographic magazine bento grid inspired by top showcases on bentogrids.com, featuring high-contrast Swiss typography, restrained dividers, and subtle tactile hover physics.',
    category: 'minimal-editorial',
    source: 'bentogrids',
    sourceName: 'Bentogrids.com Gallery',
    sourceUrl: 'https://bentogrids.com',
    tags: ['bentogrids', 'editorial', 'swiss-style', 'minimalist', 'typography', 'clean', 'monochrome'],
    features: [
      'Editorial typography with bold serif and clean sans-serif pairings',
      'Tactile hover lift effect with smooth elevation shadows',
      'High contrast black and warm cream color palette',
      'Micro-divider lines separating article modules'
    ],
    tilesSummary: [
      { title: 'The Modern Grid', subtitle: 'Curated architectural layout principles for digital interfaces', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'md:row-span-2', highlight: 'Editorial Typography Lead' },
      { title: 'Monochrome Palette', subtitle: 'Restrained color discipline focusing on hierarchy', colSpan: 'col-span-1', highlight: 'Color Swatch Cards' },
      { title: 'Swiss Grid System', subtitle: 'Structured column rhythms and consistent vertical baselines', colSpan: 'col-span-1', highlight: 'Rhythm Metric Bar' },
      { title: 'Tactile Motion', subtitle: 'Graceful micro-elevations that respond to touch and pointer', colSpan: 'col-span-1 md:col-span-2', highlight: 'Subtle Shadow Elevation' }
    ],
    code: `import React from 'react';

export default function BentogridsEditorialBento() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 bg-[#fcfbf9] text-neutral-900 font-sans antialiased">
      {/* Editorial Header */}
      <div className="mb-12 border-b border-neutral-300 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 font-semibold">Volume IV • Issue 08</span>
          <h2 className="text-4xl md:text-6xl font-serif font-normal tracking-tight text-neutral-950 mt-1">
            The Bento Aesthetic.
          </h2>
        </div>
        <p className="text-sm text-neutral-600 max-w-sm font-serif italic">
          "Simplicity is about subtracting the obvious and adding the meaningful."
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tile 1: Hero Editorial (2-cols wide) */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-white border border-neutral-200 p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-500">
          <div>
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono uppercase tracking-wider mb-4">
              <span>Architectural Rhythm</span>
              <span>12-Column Basis</span>
            </div>
            <h3 className="text-3xl font-serif text-neutral-950 leading-tight">
              Modular structure that elevates information hierarchy.
            </h3>
            <p className="text-neutral-600 text-sm mt-4 leading-relaxed font-sans max-w-md">
              Bento grids divide complex products into digestible, modular cards. Each cell tells an autonomous story while harmonizing with the overarching composition.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>Read full essay</span>
            <span>04 MIN READ →</span>
          </div>
        </div>

        {/* Tile 2: Monochrome Contrast */}
        <div className="col-span-1 rounded-2xl bg-neutral-950 text-white p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-500">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400">Palette</span>
            <h3 className="text-2xl font-serif mt-2">Pure Contrast</h3>
            <p className="text-xs text-neutral-300 mt-3 font-sans leading-relaxed">
              Black and warm white create effortless readability without visual fatigue.
            </p>
          </div>
          <div className="flex gap-2 mt-6">
            <div className="w-8 h-8 rounded-full bg-white border border-neutral-300" />
            <div className="w-8 h-8 rounded-full bg-neutral-800" />
            <div className="w-8 h-8 rounded-full bg-neutral-950 border border-neutral-700" />
          </div>
        </div>

        {/* Tile 3: Swiss Grid */}
        <div className="col-span-1 rounded-2xl bg-white border border-neutral-200 p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-500">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-500">Typographic Grid</span>
            <h3 className="text-xl font-serif mt-1">Swiss Precision</h3>
            <p className="text-xs text-neutral-600 mt-2 font-sans">
              Strict baseline grids provide order, legibility, and timeless elegance.
            </p>
          </div>
          <div className="mt-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs font-mono text-neutral-700">
            line-height: 1.618 (Golden Ratio)
          </div>
        </div>

        {/* Tile 4: Tactile Feedback (2-cols wide) */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-white border border-neutral-200 p-6 flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition duration-500">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-500">Physicality</span>
            <h3 className="text-xl font-serif mt-1">Subtle Elevation & Tactile Physics</h3>
            <p className="text-xs text-neutral-600 mt-1 max-w-md font-sans">
              Smooth hover micro-lift gives digital cards the presence and weight of real printed material.
            </p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-neutral-950 text-white text-xs font-medium font-sans">
            Curated on bentogrids.com
          </div>
        </div>

      </div>
    </section>
  );
}`
  }
];
