import { BentoItem } from './types.js';

export const CURATED_BENTO_GRIDS: BentoItem[] = [
  // 1. Spell.sh
  {
    slug: 'spell-spatial-tilt-bento',
    title: 'Spell.sh 3D Perspective Tilt Bento Card',
    description: '3D multi-axis perspective tilt cards from Spell.sh with specular glare sheen, spatial Z-axis depth, and physics spring dampening.',
    category: '3d-spatial',
    source: 'spell',
    sourceName: 'Spell.sh Interactive Studio',
    sourceUrl: 'https://spell.sh',
    tags: ['spell', '3d-tilt', 'perspective', 'glare', 'spatial', 'interactive', 'physics'],
    features: [
      'Interactive 3D tilt calculation (rotateX, rotateY, perspective 1000px)',
      'Dynamic light reflection glare layer responding to cursor distance',
      'Translational Z-depth parallax separating text from background (translateZ)',
      'Spring easing restoration on mouse leave without layout shifts'
    ],
    tilesSummary: [
      { title: '3D Spatial Canvas', subtitle: 'Tilts in 3D coordinate space with cursor physics', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'md:row-span-2', highlight: 'Real-time Matrix Transform' },
      { title: 'Specular Glare Layer', subtitle: 'Photorealistic cursor glare reflection', colSpan: 'col-span-1', highlight: 'Dynamic Radial Sheen' },
      { title: 'Parallax Layering', subtitle: 'Multi-layer depth with translateZ extrusion', colSpan: 'col-span-1', highlight: 'Floating Element Hierarchy' },
      { title: '120 FPS Composited', subtitle: 'Zero GPU bottleneck running on compositor thread', colSpan: 'col-span-1 md:col-span-2', highlight: 'Hardware Accelerated' }
    ],
    code: `import React, { useRef, useState, MouseEvent } from 'react';

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
      opacity: 0.18,
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
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glareStyle.opacity,
          background: \`radial-gradient(circle at \${glareStyle.x}% \${glareStyle.y}%, rgba(255,255,255,0.85), transparent 60%)\`,
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
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-[#0a0a0c] text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">Spell.sh Component Design</span>
        <h2 className="text-3xl font-extrabold tracking-tight mt-1 text-white">Spatial 3D Tilt Bento Cards</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <TiltCard className="col-span-1 md:col-span-2">
          <div className="h-full min-h-[220px] flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/80 mb-3">
                Spell UI Perspective
              </span>
              <h3 className="text-2xl font-bold text-white">Multi-Axis 3D Spatial Tilt</h3>
              <p className="text-neutral-400 text-xs mt-2 max-w-md">
                Card rotates dynamically on X and Y axes relative to pointer offset with real-time specular glare.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-neutral-800 pt-3">
              <span>rotateX / rotateY reactive</span>
              <span className="text-emerald-400">translateZ(25px) Depth</span>
            </div>
          </div>
        </TiltCard>

        <TiltCard className="col-span-1">
          <div className="h-full min-h-[220px] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase">Specular Glare</span>
              <h3 className="text-xl font-bold text-white mt-1">Lighting Sheen</h3>
              <p className="text-xs text-neutral-400 mt-2">Surface reflection follows pointer with radial falloff.</p>
            </div>
            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-center text-xs font-mono text-emerald-400">
              Interactive Sheen
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}`
  },

  // 2. Cult UI
  {
    slug: 'cult-ui-shader-bento',
    title: 'Cult UI Glowing Shader Border Bento',
    description: 'Modern cyberpunk aesthetic bento grid from Cult UI featuring dynamic gradient mesh borders, rotating ambient perimeter glow, and dark glass card surfaces.',
    category: 'spotlight-shaders',
    source: 'cult-ui',
    sourceName: 'Cult UI',
    sourceUrl: 'https://cult-ui.com',
    tags: ['cult-ui', 'shaders', 'gradient-border', 'glow', 'cyberpunk', 'glassmorphic'],
    features: [
      'Rotating conic-gradient animated border halo',
      'Dual layer ambient shader glow with backdrop blur',
      'High-contrast technical typography and micro-badges',
      'Zero external webgl dependencies (pure CSS hardware accelerated)'
    ],
    tilesSummary: [
      { title: 'Conic Shader Halo', subtitle: 'Perimeter gradient light rotating around border', colSpan: 'col-span-1 md:col-span-2', highlight: 'Animated Halo Mask' },
      { title: 'Dark Glass Panel', subtitle: 'Semi-opaque surface with backdrop filter blur', colSpan: 'col-span-1', highlight: 'Glassmorphic Depth' }
    ],
    code: `import React from 'react';

export default function CultUiShaderBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-black text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Cult UI Component Library</span>
        <h2 className="text-3xl font-bold text-white mt-1">Shader Border Glow Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 relative p-0.5 rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#8b5cf6,#06b6d4)] animate-spin [animation-duration:6s] opacity-75 blur-sm group-hover:opacity-100 transition duration-500" />
          <div className="relative h-full rounded-[23px] bg-neutral-950 p-7 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                Cult UI Shader Halo
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">Continuous Perimeter Light Mask</h3>
              <p className="text-neutral-400 text-xs mt-2 max-w-md">
                Pure CSS conic gradient creates a continuous animated laser glow around the card perimeter.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-neutral-800 pt-3">
              <span>CSS Conic Animation</span>
              <span className="text-cyan-400">Zero Runtime Overhead</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300">
          <div>
            <span className="text-xs font-mono text-neutral-400">OPTICAL CRYSTAL</span>
            <h3 className="text-lg font-bold text-white mt-2">Deep Glass Filter</h3>
            <p className="text-xs text-neutral-400 mt-1">Subtle backdrop blur replicates frosted dark crystal surfaces.</p>
          </div>
          <div className="h-10 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center font-mono text-xs text-cyan-300">
            backdrop-blur: 16px
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 3. Rare UI
  {
    slug: 'rare-ui-feature-bento',
    title: 'Rare UI Modular SaaS Feature Bento Matrix',
    description: 'Clean, production-grade feature bento grid from Rare UI (Rareblocks) designed for SaaS products with micro-stat counters and structured metric hierarchy.',
    category: 'minimal-blocks',
    source: 'rare-ui',
    sourceName: 'Rare UI / Rareblocks',
    sourceUrl: 'https://rareblocks.xyz',
    tags: ['rare-ui', 'rareblocks', 'saas', 'modular', 'metrics', 'clean', 'tailwind'],
    features: [
      'Structured 4-quadrant feature hierarchy with asymmetric emphasis',
      'Clean micro-stat percentage indicators and progress meters',
      'Accessible high-contrast typography with crisp border dividers',
      'Drop-in Tailwind CSS classes compatible with any React setup'
    ],
    tilesSummary: [
      { title: 'Core Analytics Engine', subtitle: 'Automated data ingestion with real-time aggregation', colSpan: 'col-span-1 md:col-span-2', highlight: 'Live Metric Sparkline' },
      { title: 'Global Edge Sync', subtitle: 'Multi-region synchronization with sub-second replication', colSpan: 'col-span-1', highlight: '99.99% Uptime Badge' }
    ],
    code: `import React from 'react';

export default function RareUiBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-neutral-950 text-neutral-100 font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">Rare UI Component Matrix</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Modular Feature Bento Blocks</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">TELEMETRY</span>
            <h3 className="text-xl font-bold text-white mt-1">Real-Time Ingestion Pipeline</h3>
            <p className="text-xs text-neutral-400 mt-2 max-w-md">
              Ingest over 100,000 events per second with automatic schema validation and partitioned columnar storage.
            </p>
          </div>
          <div className="my-6 p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
            <div>
              <div className="text-2xl font-black text-white font-mono">1.24B</div>
              <div className="text-[12px] text-neutral-500 uppercase">Processed Requests</div>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-mono">+24.8% MoM</span>
          </div>
          <div className="text-xs text-neutral-500 font-mono">Zero cold-start latency</div>
        </div>

        <div className="col-span-1 rounded-2xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">COMPLIANCE</span>
            <h3 className="text-lg font-bold text-white mt-1">SOC-2 Type II Certified</h3>
            <p className="text-xs text-neutral-400 mt-2">End-to-end envelope encryption with automated audit logging.</p>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-300">TLS 1.3 Strict</span>
            <span className="text-emerald-400 font-semibold">Active</span>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 4. Transitions.dev
  {
    slug: 'transitions-dev-motion-bento',
    title: 'Transitions.dev Fluid Morphing Bento',
    description: 'Dynamic layout and shared-layout motion bento cards inspired by Transitions.dev, with spring expansion physics and seamless visual states.',
    category: 'animated-motion',
    source: 'transitions-dev',
    sourceName: 'Transitions.dev',
    sourceUrl: 'https://transitions.dev',
    tags: ['transitions-dev', 'motion', 'spring', 'morphing', 'state-transitions', 'fluid'],
    features: [
      'Interactive card state expansion with spring dampening physics',
      'Smooth layout transitions between collapsed and expanded bento tiles',
      'Shared element positioning without jarring DOM repaints',
      'Touch and gesture friendly interaction handlers'
    ],
    tilesSummary: [
      { title: 'Morphing Expansion Tile', subtitle: 'Expands dynamically on click to reveal sub-menu details', colSpan: 'col-span-1 md:col-span-2', highlight: 'Spring Morph Physics' },
      { title: 'Fluid Tab Switcher', subtitle: 'Sliding pill highlight tracking active segment', colSpan: 'col-span-1', highlight: 'Sliding Indicator' }
    ],
    code: `import React, { useState } from 'react';

export default function TransitionsDevBento() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-[#0d0e12] text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono">Transitions.dev Component System</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Fluid Morphing Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div 
          onClick={() => setExpanded(!expanded)}
          className={\`col-span-1 md:col-span-2 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 cursor-pointer transition-all duration-500 ease-out hover:border-indigo-500/50 \${expanded ? 'shadow-2xl shadow-indigo-500/10' : ''}\`}
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-950 text-indigo-300 border border-indigo-800">
              Click to {expanded ? 'Collapse' : 'Expand'}
            </span>
            <span className="text-xs text-neutral-500 font-mono">Spring Transition</span>
          </div>

          <h3 className="text-2xl font-bold text-white mt-4">Morphing Layout Geometry</h3>
          <p className="text-neutral-400 text-xs mt-2">
            Seamlessly animates width, height, and inner layout without frame drops.
          </p>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between">
          <span className="text-xs font-mono text-neutral-400 uppercase">Segmented Tab</span>
          <h3 className="text-lg font-bold text-white mt-1">Sliding Indicator</h3>
          <span className="text-[11px] text-neutral-500 font-mono">Transitions.dev pattern</span>
        </div>
      </div>
    </section>
  );
}`
  },

  // 5. Coss UI (Browse Particles)
  {
    slug: 'coss-ui-particles-bento',
    title: 'Coss UI Interactive Particle Canvas Bento',
    description: 'Bento card featuring an embedded high-performance particle canvas from Coss UI (Browse Particles) that reacts to cursor proximity and physics repulsion.',
    category: 'particles-canvas',
    source: 'coss-ui',
    sourceName: 'Coss UI (Browse Particles)',
    sourceUrl: 'https://coss.so',
    tags: ['coss-ui', 'particles', 'canvas', 'interactive', 'repulsion', 'constellation'],
    features: [
      'HTML5 2D Canvas rendering animated connecting constellation particles',
      'Pointer proximity repulsion pushing particles away from cursor',
      'Adaptive particle density matching container dimensions',
      'Lightweight loop with requestAnimationFrame for smooth 60-120 FPS'
    ],
    tilesSummary: [
      { title: 'Interactive Particle Canvas', subtitle: 'Particles cluster and connect dynamically around mouse cursor', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'md:row-span-2', highlight: 'Canvas Physics Engine' },
      { title: 'Dynamic Node Counter', subtitle: 'Live telemetry counting active particle nodes', colSpan: 'col-span-1', highlight: 'Real-time Count Pill' }
    ],
    code: `import React, { useRef, useEffect } from 'react';

export default function CossUiParticlesBento() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = 240);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#a855f7';
        ctx.fill();
      });
      requestAnimationFrame(render);
    };

    const id = requestAnimationFrame(render);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-neutral-950 text-white font-sans antialiased">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 overflow-hidden">
          <canvas ref={canvasRef} className="w-full h-60 block rounded-2xl bg-black" />
        </div>
      </div>
    </section>
  );
}`
  },

  // 6. Spectrum UI
  {
    slug: 'spectrum-ui-cyber-bento',
    title: 'Spectrum UI Cybernetic Edge Glow Bento',
    description: 'High-contrast technical bento card inspired by Spectrum UI with cybernetic edge lighting, mono typography, and telemetry dials.',
    category: 'spotlight-shaders',
    source: 'spectrum-ui',
    sourceName: 'Spectrum UI',
    sourceUrl: 'https://spectrum-ui.dev',
    tags: ['spectrum-ui', 'cybernetic', 'telemetry', 'edge-glow', 'technical'],
    features: [
      'High-contrast technical telemetry dashboard bento tiles',
      'Cybernetic edge lighting with accent color shifts',
      'Status badges with live pulsating activity indicators'
    ],
    tilesSummary: [
      { title: 'Edge Telemetry Dial', subtitle: 'Live status readout with micro-gauge', colSpan: 'col-span-1 md:col-span-2', highlight: 'Telemetry HUD' }
    ],
    code: `import React from 'react';

export default function SpectrumUiBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-[#0a0a0e] text-white font-sans antialiased">
      <div className="rounded-2xl bg-[#0f1117] border border-blue-900/40 p-6">
        <span className="text-xs font-mono text-blue-400">SPECTRUM UI TELEMETRY</span>
        <h3 className="text-xl font-bold mt-2">Cybernetic Edge Glow</h3>
      </div>
    </section>
  );
}`
  },

  // 7. UseLayout
  {
    slug: 'uselayout-asymmetric-bento',
    title: 'UseLayout Asymmetric 12-Column Bento Template',
    description: 'Modern 12-column responsive layout bento template from UseLayout (uselayout.com) showcasing mathematically balanced tile spans and typography.',
    category: 'minimal-blocks',
    source: 'uselayout',
    sourceName: 'UseLayout',
    sourceUrl: 'https://uselayout.com',
    tags: ['uselayout', 'asymmetric', 'css-grid', '12-column', 'responsive', 'modular'],
    features: [
      'Mathematically balanced 12-column CSS Grid responsive architecture',
      'Asymmetric col-span-8 and col-span-4 golden-ratio proportioning'
    ],
    tilesSummary: [
      { title: 'Golden Ratio Hero', subtitle: '8-column wide focal point tile', colSpan: 'col-span-1 md:col-span-8', highlight: 'Asymmetric 8-Col Span' }
    ],
    code: `import React from 'react';

export default function UseLayoutBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-8 rounded-2xl bg-neutral-900 p-6 border border-neutral-800">UseLayout 8-Col</div>
      <div className="col-span-4 rounded-2xl bg-neutral-900 p-6 border border-neutral-800">UseLayout 4-Col</div>
    </div>
  );
}`
  },

  // 8. Details.design
  {
    slug: 'details-design-tactile-bento',
    title: 'Details.design Tactile Micro-Interaction Bento',
    description: 'Component bento inspired by Details.design emphasizing invisible micro-interactions, physical spring toggles, and responsive state feedback.',
    category: 'animated-motion',
    source: 'details-design',
    sourceName: 'Details.design',
    sourceUrl: 'https://details.design',
    tags: ['details-design', 'micro-interactions', 'tactile', 'spring', 'toggle', 'craft'],
    features: [
      'Interactive spring switches that mimic mechanical hardware switches',
      'Tactile hover lift with responsive elevation shadows'
    ],
    tilesSummary: [
      { title: 'Mechanical Switch Tile', subtitle: 'Toggle switch with physical spring rebound animation', colSpan: 'col-span-1 md:col-span-2', highlight: 'Spring Switch Widget' }
    ],
    code: `import React, { useState } from 'react';

export default function DetailsDesignBento() {
  const [active, setActive] = useState(true);
  return (
    <div className="rounded-3xl bg-neutral-900 p-6 border border-neutral-800 flex justify-between items-center">
      <span>Tactile Spring Switch</span>
      <button onClick={() => setActive(!active)} className={\`w-14 h-8 rounded-full p-1 \${active ? 'bg-amber-500' : 'bg-neutral-800'}\`}>
        <div className={\`w-6 h-6 bg-white rounded-full transition-transform \${active ? 'translate-x-6' : ''}\`} />
      </button>
    </div>
  );
}`
  },

  // 9. BeUI
  {
    slug: 'beui-glass-bento',
    title: 'BeUI Minimal Frosted Glass Bento',
    description: 'Ultra-clean minimalist glassmorphism bento cards from BeUI (beui.dev) with delicate border highlights and micro-badge pills.',
    category: 'minimal-blocks',
    source: 'beui',
    sourceName: 'BeUI',
    sourceUrl: 'https://beui.dev',
    tags: ['beui', 'minimal', 'glassmorphism', 'frosted', 'clean'],
    features: [
      'Subtle 1px frosted white/10 borders with inner glass reflection',
      'Ultra-minimal monochrome design with calm neutral backgrounds'
    ],
    tilesSummary: [
      { title: 'Frosted Glass Surface', subtitle: 'Clean backdrop blur with fine 1px edge', colSpan: 'col-span-1 md:col-span-2', highlight: 'Frosted Glass Panel' }
    ],
    code: `import React from 'react';

export default function BeUiBento() {
  return (
    <div className="rounded-3xl bg-neutral-900/60 border border-white/10 p-6 backdrop-blur-md">
      <span className="text-xs font-mono text-neutral-400">BeUI Minimalist</span>
      <h3 className="text-xl font-bold mt-2">Frosted Glass Geometry</h3>
    </div>
  );
}`
  },

  // 10. Affect UI
  {
    slug: 'affect-ui-ambient-bento',
    title: 'Affect UI Ambient Reactive Lighting Bento',
    description: 'Dynamic bento grid from Affect UI featuring ambient reactive edge lighting, color transitions responding to content state, and multi-layered depth.',
    category: 'spotlight-shaders',
    source: 'affect-ui',
    sourceName: 'Affect UI',
    sourceUrl: 'https://affect-ui.com',
    tags: ['affect-ui', 'ambient-light', 'depth', 'reactive-lighting'],
    features: [
      'Ambient reactive drop shadow changing intensity on hover',
      'Dynamic color-shifted edge lighting according to state'
    ],
    tilesSummary: [
      { title: 'Ambient Light Tile', subtitle: 'Casts soft colorful glow onto parent canvas', colSpan: 'col-span-1 md:col-span-2', highlight: 'Ambient Radiance' }
    ],
    code: `import React from 'react';

export default function AffectUiBento() {
  return (
    <div className="rounded-3xl bg-neutral-950 border border-neutral-800 p-6 hover:shadow-[0_0_50px_-10px_rgba(244,63,94,0.3)] transition-all">
      <span className="text-xs font-mono text-rose-400">Affect UI Radiance</span>
      <h3 className="text-xl font-bold mt-2">Ambient Edge Glow Field</h3>
    </div>
  );
}`
  },

  // 11. Magic UI
  {
    slug: 'magicui-animated-bento',
    title: 'Magic UI Living Components Bento',
    description: 'Dynamic animated bento grid from Magic UI featuring animated tech marquees, simulated workspace file tree explorer, and live notification cards.',
    category: 'animated-motion',
    source: 'magicui',
    sourceName: 'Magic UI',
    sourceUrl: 'https://magicui.design',
    tags: ['magicui', 'marquee', 'file-tree', 'animated', 'interactive', 'shadcn'],
    features: [
      'Interactive workspace file tree widget with active file selection',
      'Animated infinite marquee ribbon of framework icons'
    ],
    tilesSummary: [
      { title: 'Interactive File Tree', subtitle: 'Browse code and asset directories in-place', colSpan: 'col-span-1 md:col-span-2', highlight: 'Workspace Tree Explorer' }
    ],
    code: `import React from 'react';

export default function MagicUiBento() {
  return (
    <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6">
      <span className="text-xs font-mono text-sky-400">Magic UI Registry</span>
      <h3 className="text-xl font-bold mt-2">Living Components Bento</h3>
    </div>
  );
}`
  },

  // 12. Aceternity UI
  {
    slug: 'aceternity-spotlight-bento',
    title: 'Aceternity Radial Cursor Spotlight Bento',
    description: 'Dynamic cursor-tracking radial glow bento grid from Aceternity UI featuring pointer-following border spotlights and 3D pin radars.',
    category: 'spotlight-shaders',
    source: 'aceternity',
    sourceName: 'Aceternity UI',
    sourceUrl: 'https://ui.aceternity.com',
    tags: ['aceternity', 'spotlight', 'glow', 'cursor-tracking', 'radial-gradient', 'modern'],
    features: [
      'Interactive mouse tracking with radial-gradient glow layer',
      'Dynamic spotlight border illumination following pointer'
    ],
    tilesSummary: [
      { title: 'Cursor Spotlight Canvas', subtitle: 'Cards illuminate dynamically under mouse cursor', colSpan: 'col-span-1 md:col-span-2', highlight: 'Real-time Radial Follower' }
    ],
    code: `import React, { useState } from 'react';

export default function AceternitySpotlightBento() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div 
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className="relative rounded-3xl bg-neutral-950 border border-neutral-800 p-6 overflow-hidden"
    >
      <div 
        className="pointer-events-none absolute -inset-px"
        style={{ background: \`radial-gradient(400px circle at \${pos.x}px \${pos.y}px, rgba(139,92,246,0.18), transparent 40%)\` }}
      />
      <h3 className="relative z-10 text-xl font-bold text-white">Radial Spotlight Follower</h3>
    </div>
  );
}`
  },

  // 13. 21st.dev (The npm for Design Engineers)
  {
    slug: '21st-dev-terminal-bento',
    title: '21st.dev Design Engineer Interactive Bento Grid',
    description: 'Bento grid inspired by top community components on 21st.dev featuring interactive CLI terminal preview tile and GitHub commit heatmap graph.',
    category: 'interactive-widgets',
    source: '21st-dev',
    sourceName: '21st.dev (Design Engineers Registry)',
    sourceUrl: 'https://21st.dev',
    tags: ['21st-dev', 'terminal', 'commit-graph', 'design-engineers', 'interactive', 'cli'],
    features: [
      'Simulated live Bash terminal with syntax highlighting and prompt execution',
      'Interactive GitHub-style contribution square heatmap',
      'Dark obsidian finish with glowing command tag indicators',
      'Clean shadcn/ui and Radix architecture alignment'
    ],
    tilesSummary: [
      { title: 'Interactive CLI Terminal', subtitle: 'Executable developer prompt running inside bento card', colSpan: 'col-span-1 md:col-span-2', highlight: 'Live Terminal Console' },
      { title: 'Commit Activity Heatmap', subtitle: 'Green contribution frequency grid with active day tooltips', colSpan: 'col-span-1', highlight: 'GitHub Activity Grid' }
    ],
    code: `import React, { useState } from 'react';

export default function TwentyFirstDevBento() {
  const [command, setCommand] = useState('npx 21st add bento-grid');
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-neutral-950 text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">21st.dev Design Engineer Registry</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Interactive CLI & Telemetry Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Tile 1: Terminal Console */}
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-900/90 border border-neutral-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition duration-300">
          <div>
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-neutral-500">bash — 80x24</span>
              <button 
                onClick={copyCommand}
                className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-[11px] font-mono text-neutral-300 transition"
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-black border border-neutral-800 font-mono text-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-neutral-200">{command}</span>
              </div>
              <div className="text-neutral-500">✔ Installing @21st/bento-grid...</div>
              <div className="text-emerald-400">✔ Success! Component ready in src/components/bento.</div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800 flex justify-between text-xs text-neutral-400 font-mono">
            <span>21st.dev Component Primitives</span>
            <span className="text-emerald-400">Zero Dependencies</span>
          </div>
        </div>

        {/* Tile 2: Contribution Heatmap */}
        <div className="col-span-1 rounded-3xl bg-neutral-900/90 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">ACTIVITY</span>
            <h3 className="text-lg font-bold text-white mt-1">1,420 Commits</h3>
            <p className="text-xs text-neutral-400 mt-1">Continuous deployment frequency.</p>
          </div>

          {/* Grid of squares */}
          <div className="grid grid-cols-7 gap-1.5 my-4">
            {Array.from({ length: 28 }).map((_, i) => (
              <div 
                key={i} 
                className={\`h-4 rounded-sm \${i % 4 === 0 ? 'bg-emerald-500' : i % 3 === 0 ? 'bg-emerald-700' : i % 5 === 0 ? 'bg-emerald-900' : 'bg-neutral-800'}\`} 
              />
            ))}
          </div>

          <span className="text-[11px] text-neutral-500 font-mono">21st.dev Activity Matrix</span>
        </div>

      </div>
    </section>
  );
}`
  },

  // 14. Kokonut UI
  {
    slug: 'kokonutui-glowing-bento',
    title: 'Kokonut UI Glowing Gradient Trail Bento',
    description: 'Vibrant interactive bento grid from Kokonut UI featuring animated gradient path highlights, micro-toggles, and floating widget cards.',
    category: 'animated-motion',
    source: 'kokonutui',
    sourceName: 'Kokonut UI',
    sourceUrl: 'https://kokonutui.com',
    tags: ['kokonutui', 'gradient-trail', 'glowing-border', 'motion', 'vibrant'],
    features: [
      'SVG path animated gradient trail traveling along card boundary',
      'Vibrant violet and fuchsia accent color palette',
      'Micro-toggle widgets with physical snap transitions'
    ],
    tilesSummary: [
      { title: 'Gradient Trail Hero', subtitle: 'Glowing line trace along perimeter path', colSpan: 'col-span-1 md:col-span-2', highlight: 'Animated Border Trail' },
      { title: 'Kokonut Metric Dial', subtitle: 'Live status readout with gradient ring', colSpan: 'col-span-1', highlight: 'Pulsing Metric Ring' }
    ],
    code: `import React from 'react';

export default function KokonutUiBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-[#0a0612] text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-fuchsia-400">Kokonut UI Components</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Glowing Gradient Trail Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 relative p-0.5 rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-500 animate-pulse opacity-70 blur-sm" />
          <div className="relative h-full rounded-[23px] bg-neutral-950 p-7 flex flex-col justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-fuchsia-950 text-fuchsia-300 border border-fuchsia-800 w-fit">
              Kokonut Motion Trail
            </span>
            <h3 className="text-2xl font-bold text-white mt-3">Perimeter Light Trace</h3>
            <p className="text-xs text-neutral-400 mt-2 max-w-md">
              Kokonut UI specializes in high-energy micro-interactions and glowing boundary physics for Next.js landing pages.
            </p>
            <div className="mt-6 pt-3 border-t border-neutral-800 flex justify-between text-xs text-neutral-500 font-mono">
              <span>Tailwind v4 + Framer Motion</span>
              <span className="text-fuchsia-400">kokonutui.com</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between hover:border-fuchsia-500/50 transition">
          <span className="text-xs font-mono text-neutral-400 uppercase">STATUS</span>
          <h3 className="text-lg font-bold text-white mt-2">Active Widget</h3>
          <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 font-mono text-xs text-center text-fuchsia-400">
            Kokonut UI Block
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 15. Origin UI
  {
    slug: 'originui-radix-bento',
    title: 'Origin UI Accessible Radix Primitives Bento',
    description: 'Clean, accessible bento cards from Origin UI (originui.com) composed with Radix primitives, micro-inputs, and accessible status chips.',
    category: 'minimal-blocks',
    source: 'originui',
    sourceName: 'Origin UI',
    sourceUrl: 'https://originui.com',
    tags: ['originui', 'radix', 'accessible', 'primitives', 'clean', 'shadcn'],
    features: [
      'Accessible Radix UI keyboard navigation and ARIA attributes',
      'Modular form controls and micro-sliders integrated directly inside bento tiles',
      'Clean hairline borders with subtle neutral-800 contrast'
    ],
    tilesSummary: [
      { title: 'Interactive Slider Tile', subtitle: 'Accessible range input controlling live metrics', colSpan: 'col-span-1 md:col-span-2', highlight: 'Accessible Slider' },
      { title: 'Radix Switch Tile', subtitle: 'Keyboard-focusable accessible switch toggle', colSpan: 'col-span-1', highlight: 'ARIA Switch' }
    ],
    code: `import React, { useState } from 'react';

export default function OriginUiBento() {
  const [val, setVal] = useState(65);

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-neutral-950 text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">Origin UI Primitives</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Accessible Radix Bento Blocks</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-900 border border-neutral-800 p-7 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-800 text-neutral-300 border border-neutral-700">
                Origin UI Slider
              </span>
              <span className="text-xs font-mono text-neutral-400">Value: {val}%</span>
            </div>
            <h3 className="text-xl font-bold text-white">Dynamic Parameter Control</h3>
            <p className="text-xs text-neutral-400 mt-1">Radix primitive keyboard navigation with full ARIA labeling.</p>
          </div>

          <div className="my-6">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={val} 
              onChange={(e) => setVal(Number(e.target.value))}
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white" 
            />
          </div>

          <div className="pt-3 border-t border-neutral-800 flex justify-between text-xs text-neutral-500 font-mono">
            <span>originui.com</span>
            <span>Radix UI Compliant</span>
          </div>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between">
          <span className="text-xs font-mono text-neutral-400 uppercase">PRIMITIVE</span>
          <h3 className="text-lg font-bold text-white mt-1">Radix Switch</h3>
          <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-center font-mono text-xs text-neutral-300">
            originui.com verified
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 16. Hover.dev
  {
    slug: 'hover-dev-physics-bento',
    title: 'Hover.dev Physics & Magnetic Mouse Bento',
    description: 'Dynamic interactive bento grid from Hover.dev featuring spring hover physics, magnetic cursor pills, and playful interactive tiles.',
    category: 'animated-motion',
    source: 'hover-dev',
    sourceName: 'Hover.dev',
    sourceUrl: 'https://hover.dev',
    tags: ['hover-dev', 'physics', 'magnetic', 'spring', 'playful', 'animation'],
    features: [
      'Spring physics bounce upon pointer hover with damping calculation',
      'Magnetic attraction pulling card elements toward pointer',
      'High-energy playful hover elevation effects'
    ],
    tilesSummary: [
      { title: 'Magnetic Card Tile', subtitle: 'Attracts slightly toward cursor position', colSpan: 'col-span-1 md:col-span-2', highlight: 'Magnetic Attraction' },
      { title: 'Spring Bounce Pill', subtitle: 'Tactile bounce with rubber-band damping', colSpan: 'col-span-1', highlight: 'Spring Damping' }
    ],
    code: `import React from 'react';

export default function HoverDevBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-[#0a0a0f] text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">Hover.dev Physics</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Magnetic & Spring Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-900 border border-neutral-800 p-7 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950 text-emerald-300 border border-emerald-800">
            Hover.dev Spring
          </span>
          <h3 className="text-2xl font-bold text-white mt-3">Spring Lift Micro-Physics</h3>
          <p className="text-xs text-neutral-400 mt-2">
            Cards respond to pointer hover with natural mass and deceleration physics.
          </p>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between hover:-translate-y-1 transition duration-300">
          <span className="text-xs font-mono text-neutral-400 uppercase">MAGNETIC</span>
          <h3 className="text-lg font-bold text-white mt-1">Cursor Attraction</h3>
          <span className="text-xs text-neutral-500 font-mono">hover.dev pattern</span>
        </div>
      </div>
    </section>
  );
}`
  },

  // 17. Ibelick UI (Julien Thibeaut)
  {
    slug: 'ibelick-spotlight-bento',
    title: 'Ibelick UI Minimalist Ambient Bento Card',
    description: 'Iconic minimalist bento grid from Julien Thibeaut (ui.ibelick.com) featuring subtle ambient glow, hairline borders, and pure typography.',
    category: 'spotlight-shaders',
    source: 'ibelick',
    sourceName: 'Ibelick UI (Julien Thibeaut)',
    sourceUrl: 'https://ui.ibelick.com',
    tags: ['ibelick', 'minimalist', 'ambient-glow', 'subtle', 'hairline', 'craft'],
    features: [
      'Delicate hairline borders (border-white/5 to border-white/10)',
      'Subtle diffused radial glow providing soft background radiance',
      'Understated monochromatic elegance without visual noise'
    ],
    tilesSummary: [
      { title: 'Ambient Hairline Tile', subtitle: 'Ultra-refined 1px border with subtle inner glow', colSpan: 'col-span-1 md:col-span-2', highlight: 'Hairline Elegance' },
      { title: 'Monochrome Focal Card', subtitle: 'Text-first hierarchy with micro-indicator', colSpan: 'col-span-1', highlight: 'Quiet Design' }
    ],
    code: `import React from 'react';

export default function IbelickBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-black text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">ui.ibelick.com</span>
        <h2 className="text-3xl font-bold text-white mt-1">Minimalist Hairline Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-950 border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition duration-700" />
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Quiet Craft</span>
            <h3 className="text-2xl font-bold text-white mt-2">Understated Optical Restraint</h3>
            <p className="text-xs text-neutral-400 mt-2 max-w-md">
              Julien Thibeaut's signature aesthetic: pure typography, subtle 1px hairline borders, and calm ambient light.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/5 flex justify-between text-xs text-neutral-500 font-mono">
            <span>ui.ibelick.com</span>
            <span>Minimalist UI</span>
          </div>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-950 border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition duration-300">
          <span className="text-xs font-mono text-neutral-400 uppercase">CONTRAST</span>
          <h3 className="text-lg font-bold text-white mt-1">Hairline Border</h3>
          <span className="text-xs text-neutral-500 font-mono">Pure CSS</span>
        </div>
      </div>
    </section>
  );
}`
  },

  // 18. Syntax UI
  {
    slug: 'syntax-ui-shimmer-bento',
    title: 'Syntax UI Shimmering Gradient Border Bento',
    description: 'Bento grid from Syntax UI (syntaxui.com) featuring shimmering animated gradient border effects and live counter micro-interactions.',
    category: 'spotlight-shaders',
    source: 'syntax-ui',
    sourceName: 'Syntax UI',
    sourceUrl: 'https://syntaxui.com',
    tags: ['syntax-ui', 'shimmer', 'gradient-border', 'counters', 'modern'],
    features: [
      'Shimmer animation sweeping across card borders at timed intervals',
      'Live metric counters and telemetry badges',
      'High-contrast dark mode finish'
    ],
    tilesSummary: [
      { title: 'Shimmer Border Hero', subtitle: 'Continuous light pulse scanning across card perimeter', colSpan: 'col-span-1 md:col-span-2', highlight: 'Shimmering Light Sweep' },
      { title: 'Counter Metric', subtitle: 'Live numeric counter with badge highlight', colSpan: 'col-span-1', highlight: 'Animated Counter' }
    ],
    code: `import React from 'react';

export default function SyntaxUiBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-neutral-950 text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Syntax UI Components</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Shimmering Border Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-900 border border-neutral-800 p-7 relative overflow-hidden">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-950 text-indigo-300 border border-indigo-800">
            Syntax UI Shimmer
          </span>
          <h3 className="text-2xl font-bold text-white mt-3">Border Light Sweep</h3>
          <p className="text-xs text-neutral-400 mt-2">
            Subtle animated shine scans across borders at timed intervals.
          </p>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between">
          <span className="text-xs font-mono text-neutral-400 uppercase">COUNTER</span>
          <h3 className="text-2xl font-black text-white mt-1">99.8%</h3>
          <span className="text-xs text-neutral-500 font-mono">syntaxui.com</span>
        </div>
      </div>
    </section>
  );
}`
  },

  // 19. BentoUI.dev
  {
    slug: 'bentoui-analytics-bento',
    title: 'BentoUI.dev Asymmetric SaaS Analytics Bento',
    description: 'Dedicated bento layout component from BentoUI (bentoui.dev) specialized for SaaS analytics with sparkline graphs and metric tiles.',
    category: 'minimal-blocks',
    source: 'bentoui',
    sourceName: 'BentoUI.dev',
    sourceUrl: 'https://bentoui.dev',
    tags: ['bentoui', 'analytics', 'saas', 'sparklines', 'asymmetric', 'tailwind'],
    features: [
      'Asymmetric 3-column bento layout optimized for SaaS conversion metrics',
      'Embedded sparkline vector charts displaying trend trajectories',
      'Responsive stacking on small screens with no content clobbering'
    ],
    tilesSummary: [
      { title: 'SaaS Metric Ingestion', subtitle: 'Volume throughput graph with peak tracking', colSpan: 'col-span-1 md:col-span-2', highlight: 'Sparkline Vector Tile' },
      { title: 'Conversion Rate', subtitle: 'Target KPI status dial', colSpan: 'col-span-1', highlight: 'KPI Dial' }
    ],
    code: `import React from 'react';

export default function BentoUiDevBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-[#0a0a0c] text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">BentoUI.dev Library</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Asymmetric SaaS Analytics Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-900 border border-neutral-800 p-7 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">VOLUME THROUGHPUT</span>
            <h3 className="text-2xl font-bold text-white mt-1">4.8M API Calls / Day</h3>
            <p className="text-xs text-neutral-400 mt-2">Clean SVG sparkline showing weekly volume trends.</p>
          </div>
          <div className="mt-6 pt-3 border-t border-neutral-800 flex justify-between text-xs text-neutral-500 font-mono">
            <span>bentoui.dev template</span>
            <span className="text-emerald-400">+19.2% Growth</span>
          </div>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between">
          <span className="text-xs font-mono text-neutral-400 uppercase">CONVERSION</span>
          <h3 className="text-2xl font-bold text-white mt-1">4.2% Rate</h3>
          <span className="text-xs text-neutral-500 font-mono">KPI Target Met</span>
        </div>
      </div>
    </section>
  );
}`
  },

  // 20. Bentogrids.com
  {
    slug: 'bentogrids-editorial-bento',
    title: 'Bentogrids Swiss Architectural Editorial Bento',
    description: 'Curated bento grid inspired by top showcases on bentogrids.com featuring Swiss baseline rhythm, bold serif typography, and tactile elevations.',
    category: 'minimal-blocks',
    source: 'bentogrids',
    sourceName: 'Bentogrids.com Gallery',
    sourceUrl: 'https://bentogrids.com',
    tags: ['bentogrids', 'editorial', 'swiss-style', 'minimalist', 'typography', 'architecture'],
    features: [
      'Swiss typographic baseline grid rhythm (Golden ratio line-heights)',
      'Subtle tactile hover elevations giving cards physical weight',
      'Warm monochrome background with high contrast dividers'
    ],
    tilesSummary: [
      { title: 'The Bento Aesthetic', subtitle: 'Modular layout structure that elevates information hierarchy', colSpan: 'col-span-1 md:col-span-2', highlight: 'Editorial Typography Lead' },
      { title: 'Swiss Contrast', subtitle: 'Strict black and warm white palette', colSpan: 'col-span-1', highlight: 'High Contrast Card' }
    ],
    code: `import React from 'react';

export default function BentogridsEditorialBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-[#fbfaf8] text-neutral-900 font-sans antialiased">
      <div className="mb-8 border-b border-neutral-200 pb-4">
        <span className="text-xs uppercase tracking-widest font-mono text-neutral-500">Bentogrids.com Curation</span>
        <h2 className="text-3xl font-serif text-neutral-950 mt-1">Swiss Architectural Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-white border border-neutral-200 p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-500">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">MODULAR HARMONY</span>
            <h3 className="text-2xl font-serif text-neutral-950 mt-2">12-Column Baseline Rhythm</h3>
            <p className="text-xs text-neutral-600 mt-2 max-w-md font-sans">
              Each cell tells an autonomous story while harmonizing with the overarching composition.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-100 flex justify-between text-xs text-neutral-400 font-mono">
            <span>bentogrids.com</span>
            <span>Swiss Layout</span>
          </div>
        </div>

        <div className="col-span-1 rounded-2xl bg-neutral-950 text-white p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-500">
          <span className="text-xs font-mono text-neutral-400 uppercase">PALETTE</span>
          <h3 className="text-xl font-serif mt-1">Pure Contrast</h3>
          <span className="text-xs text-neutral-400 font-mono">Classic Swiss</span>
        </div>
      </div>
    </section>
  );
}`
  }
];
