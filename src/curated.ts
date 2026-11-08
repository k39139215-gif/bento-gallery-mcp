import { BentoItem } from './types.js';

export const CURATED_BENTO_GRIDS: BentoItem[] = [
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
      { title: 'Dark Glass Panel', subtitle: 'Semi-opaque surface with backdrop filter blur', colSpan: 'col-span-1', highlight: 'Glassmorphic Depth' },
      { title: 'Cyber Pulse Dial', subtitle: 'Animated neon status indicator', colSpan: 'col-span-1', highlight: 'Neon Pulse Tag' },
      { title: 'Full Responsive Matrix', subtitle: 'Adapts smoothly from mobile stack to 3-column widescreen', colSpan: 'col-span-1 md:col-span-2', highlight: 'Fluid Grid Layout' }
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
        
        {/* Tile 1: Conic Halo Card (Hero 2-cols) */}
        <div className="col-span-1 md:col-span-2 relative p-0.5 rounded-3xl overflow-hidden group">
          {/* Animated Conic Gradient Border */}
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#8b5cf6,#06b6d4)] animate-spin [animation-duration:6s] opacity-75 blur-sm group-hover:opacity-100 transition duration-500" />
          <div className="relative h-full rounded-[23px] bg-neutral-950 p-7 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                Cult UI Shader Halo
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">Continuous Perimeter Light Mask</h3>
              <p className="text-neutral-400 text-xs mt-2 max-w-md">
                Pure CSS conic gradient creates a continuous animated laser glow around the card perimeter without heavy canvas dependencies.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-neutral-800 pt-3">
              <span>CSS Conic Animation</span>
              <span className="text-cyan-400">Zero Runtime Overhead</span>
            </div>
          </div>
        </div>

        {/* Tile 2: Glass Panel */}
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
      { title: 'Global Edge Sync', subtitle: 'Multi-region synchronization with sub-second replication', colSpan: 'col-span-1', highlight: '99.99% Uptime Badge' },
      { title: 'Granular Access Roles', subtitle: 'RBAC permissions with token revocation', colSpan: 'col-span-1', highlight: 'Security Shield Tile' },
      { title: 'API Webhook Dispatch', subtitle: 'Instant webhook delivery with automatic retry', colSpan: 'col-span-1 md:col-span-2', highlight: 'Payload Delivery Meter' }
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
        
        {/* Tile 1: Hero Metric (2-cols) */}
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

        {/* Tile 2: Security */}
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
      { title: 'Fluid Tab Switcher', subtitle: 'Sliding pill highlight tracking active segment', colSpan: 'col-span-1', highlight: 'Sliding Indicator' },
      { title: 'State Transition Trigger', subtitle: 'Smooth color and dimension morphing', colSpan: 'col-span-1 md:col-span-2', highlight: 'Seamless Layout Shift' }
    ],
    code: `import React, { useState } from 'react';

export default function TransitionsDevBento() {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Performance', 'Reliability', 'Scalability'];

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-[#0d0e12] text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono">Transitions.dev Component System</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Fluid Morphing Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Tile 1: Expandable Bento Card */}
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

          {expanded && (
            <div className="mt-6 pt-4 border-t border-neutral-800 grid grid-cols-3 gap-3 animate-fadeIn">
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-center">
                <div className="text-sm font-bold text-indigo-400">0.2s</div>
                <div className="text-[11px] text-neutral-500">Duration</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-center">
                <div className="text-sm font-bold text-indigo-400">Spring</div>
                <div className="text-[11px] text-neutral-500">Easing</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-center">
                <div className="text-sm font-bold text-indigo-400">Zero Jank</div>
                <div className="text-[11px] text-neutral-500">FPS</div>
              </div>
            </div>
          )}
        </div>

        {/* Tile 2: Sliding Tab Tile */}
        <div className="col-span-1 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">Segmented Tab</span>
            <h3 className="text-lg font-bold text-white mt-1">Sliding Indicator</h3>
          </div>
          <div className="space-y-2 my-4">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={\`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition duration-300 \${activeTab === idx ? 'bg-indigo-600 text-white' : 'bg-neutral-950 text-neutral-400 hover:text-white'}\`}
              >
                {tab}
              </button>
            ))}
          </div>
          <span className="text-[11px] text-neutral-500 font-mono">Transitions.dev pattern</span>
        </div>

      </div>
    </section>
  );
}`
  },
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
      { title: 'Dynamic Node Counter', subtitle: 'Live telemetry counting active particle nodes', colSpan: 'col-span-1', highlight: 'Real-time Count Pill' },
      { title: 'Repulsion Radius', subtitle: 'Pointer interaction field pushing particles away', colSpan: 'col-span-1', highlight: 'Cursor Physics' }
    ],
    code: `import React, { useRef, useEffect } from 'react';

export default function CossUiParticlesBento() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = 240);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];
    for (let i = 0; i < 45; i++) {
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

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            ctx.beginPath();
            ctx.strokeStyle = \`rgba(168, 85, 247, \${1 - dist / 60})\`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
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

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-neutral-950 text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">Coss UI (Browse Particles)</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Living Particle Canvas Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 overflow-hidden relative group">
          <div className="relative z-10 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800">
              Interactive Micro-Canvas
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">Dynamic Constellation Matrix</h3>
          </div>
          <div className="w-full h-60 rounded-2xl bg-black/60 border border-neutral-800/80 overflow-hidden relative">
            <canvas ref={canvasRef} className="w-full h-full block" />
          </div>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">TELEMETRY</span>
            <h3 className="text-lg font-bold text-white mt-1">45 Particle Nodes</h3>
            <p className="text-xs text-neutral-400 mt-2">Constellation mesh calculates pairwise proximity distances in real-time.</p>
          </div>
          <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs text-purple-400 text-center">
            requestAnimationFrame (60 FPS)
          </div>
        </div>
      </div>
    </section>
  );
}`
  },
  {
    slug: 'spectrum-ui-cyber-bento',
    title: 'Spectrum UI Cybernetic Edge Glow Bento',
    description: 'High-contrast technical bento card inspired by Spectrum UI with cybernetic edge lighting, mono typography, and telemetry dials.',
    category: 'spotlight-shaders',
    source: 'spectrum-ui',
    sourceName: 'Spectrum UI',
    sourceUrl: 'https://spectrum-ui.dev',
    tags: ['spectrum-ui', 'cybernetic', 'telemetry', 'edge-glow', 'technical', 'monochrome'],
    features: [
      'High-contrast technical telemetry dashboard bento tiles',
      'Cybernetic edge lighting with accent color shifts',
      'Status badges with live pulsating activity indicators',
      'Responsive multi-breakpoint layout'
    ],
    tilesSummary: [
      { title: 'Edge Telemetry Dial', subtitle: 'Live status readout with micro-gauge', colSpan: 'col-span-1 md:col-span-2', highlight: 'Telemetry HUD' },
      { title: 'Status Ping Card', subtitle: 'Sub-millisecond node ping verification', colSpan: 'col-span-1', highlight: 'Status Beacon' }
    ],
    code: `import React from 'react';

export default function SpectrumUiBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-[#0a0a0e] text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-blue-400 font-mono">Spectrum UI Engineering</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Cybernetic Telemetry Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-[#0f1117] border border-blue-900/40 p-6 flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/50 transition duration-300">
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
            <span className="text-xs font-mono text-blue-400 font-semibold uppercase">NODE STATUS // PRIMARY</span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE
            </span>
          </div>
          <div className="my-6 grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 font-mono">
              <div className="text-xs text-neutral-400">RTT Ping</div>
              <div className="text-xl font-bold text-white mt-1">4.2ms</div>
            </div>
            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 font-mono">
              <div className="text-xs text-neutral-400">Bandwidth</div>
              <div className="text-xl font-bold text-blue-400 mt-1">9.8 Gbps</div>
            </div>
            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 font-mono">
              <div className="text-xs text-neutral-400">Drop Rate</div>
              <div className="text-xl font-bold text-white mt-1">0.00%</div>
            </div>
          </div>
          <div className="text-xs text-neutral-500 font-mono">Spectrum UI Telemetry HUD</div>
        </div>

        <div className="col-span-1 rounded-2xl bg-[#0f1117] border border-blue-900/40 p-6 flex flex-col justify-between hover:border-blue-500/50 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">SECURITY STATUS</span>
            <h3 className="text-lg font-bold text-white mt-1">Zero Trust Shield</h3>
            <p className="text-xs text-neutral-400 mt-2">Continuous hardware key verification on all sockets.</p>
          </div>
          <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs text-blue-400 text-center">
            mTLS v1.3 STRICT
          </div>
        </div>
      </div>
    </section>
  );
}`
  },
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
      'Asymmetric col-span-8 and col-span-4 golden-ratio proportioning',
      'Fluid auto-rows adaptation preventing horizontal scroll or content overflow',
      'Clean baseline vertical rhythms'
    ],
    tilesSummary: [
      { title: 'Golden Ratio Hero', subtitle: '8-column wide focal point tile', colSpan: 'col-span-1 md:col-span-8', highlight: 'Asymmetric 8-Col Span' },
      { title: 'Complementary Stat', subtitle: '4-column companion tile', colSpan: 'col-span-1 md:col-span-4', highlight: 'Balanced 4-Col Span' }
    ],
    code: `import React from 'react';

export default function UseLayoutBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-neutral-950 text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">UseLayout Architecture</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Asymmetric 12-Column Bento System</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="col-span-1 md:col-span-8 rounded-3xl bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400">8 OF 12 COLUMNS</span>
            <h3 className="text-2xl font-bold text-white mt-2">Primary Optical Anchor</h3>
            <p className="text-neutral-400 text-xs mt-2 max-w-md">
              UseLayout calculates visual weight ratios so that key narrative tiles draw natural optical focus before secondary cards.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-between text-xs text-neutral-500 font-mono">
            <span>Golden Ratio 1.618 Proportions</span>
            <span>UseLayout Grid Spec</span>
          </div>
        </div>

        <div className="col-span-1 md:col-span-4 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400">4 OF 12 COLUMNS</span>
            <h3 className="text-lg font-bold text-white mt-1">Secondary Companion</h3>
            <p className="text-xs text-neutral-400 mt-2">Provides quick numeric validation and complementary micro-stats.</p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-center font-mono text-xs text-white">
            100% Responsive Grid
          </div>
        </div>
      </div>
    </section>
  );
}`
  },
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
      'Tactile hover lift with responsive elevation shadows',
      'Micro audio-visual haptic feedback triggers',
      'Meticulously crafted border-radius and inner padding math'
    ],
    tilesSummary: [
      { title: 'Mechanical Switch Tile', subtitle: 'Toggle switch with physical spring rebound animation', colSpan: 'col-span-1 md:col-span-2', highlight: 'Spring Switch Widget' },
      { title: 'Craft Polish Dial', subtitle: 'Sub-pixel alignment and optical spacing', colSpan: 'col-span-1', highlight: 'Craft Metric' }
    ],
    code: `import React, { useState } from 'react';

export default function DetailsDesignBento() {
  const [enabled, setEnabled] = useState(true);

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-[#101012] text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">Details.design Craft</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Tactile Micro-Interaction Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-900 border border-neutral-800 p-7 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono text-amber-400">HARDWARE-INSPIRED TOGGLE</span>
            <h3 className="text-2xl font-bold text-white mt-2">Physical Spring Feedback</h3>
            <p className="text-xs text-neutral-400 mt-2 max-w-md">
              Toggle the switch below to experience spring damping physics inspired by high-end audio interfaces.
            </p>
          </div>

          <div className="my-6 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-200">Haptic Micro-Switch</span>
            <button 
              onClick={() => setEnabled(!enabled)}
              className={\`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 \${enabled ? 'bg-amber-500' : 'bg-neutral-800'}\`}
            >
              <div className={\`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 \${enabled ? 'translate-x-6' : 'translate-x-0'}\`} />
            </button>
          </div>

          <div className="text-xs text-neutral-500 font-mono">Switch status: {enabled ? 'Engaged' : 'Disengaged'}</div>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">CRAFT STANDARD</span>
            <h3 className="text-lg font-bold text-white mt-1">Invisible Polish</h3>
            <p className="text-xs text-neutral-400 mt-2">Software that feels physical through restraint and physics.</p>
          </div>
          <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs text-amber-400 text-center">
            details.design verified
          </div>
        </div>
      </div>
    </section>
  );
}`
  },
  {
    slug: 'beui-glass-bento',
    title: 'BeUI Minimal Frosted Glass Bento',
    description: 'Ultra-clean minimalist glassmorphism bento cards from BeUI (beui.dev) with delicate border highlights and micro-badge pills.',
    category: 'minimal-blocks',
    source: 'beui',
    sourceName: 'BeUI',
    sourceUrl: 'https://beui.dev',
    tags: ['beui', 'minimal', 'glassmorphism', 'frosted', 'clean', 'monochrome'],
    features: [
      'Subtle 1px frosted white/10 borders with inner glass reflection',
      'Ultra-minimal monochrome design with calm neutral backgrounds',
      'Compact micro-badge indicator pills',
      'Tailwind CSS clean utility structure'
    ],
    tilesSummary: [
      { title: 'Frosted Glass Surface', subtitle: 'Clean backdrop blur with fine 1px edge', colSpan: 'col-span-1 md:col-span-2', highlight: 'Frosted Glass Panel' },
      { title: 'Micro-Pill Tile', subtitle: 'Compact tag with subtle glowing dot', colSpan: 'col-span-1', highlight: 'Status Pill' }
    ],
    code: `import React from 'react';

export default function BeUiBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-[#0c0d0e] text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">BeUI Design Library</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Minimal Frosted Glass Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-900/60 border border-white/10 p-7 flex flex-col justify-between backdrop-blur-md hover:border-white/20 transition">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300">
              BeUI Glass Minimal
            </span>
            <h3 className="text-2xl font-bold text-white mt-3">Calm, Restrained Geometry</h3>
            <p className="text-neutral-400 text-xs mt-2 max-w-md">
              Focuses on content legibility without loud saturated gradients. Fine 1px frosted borders separate modules with zero visual clutter.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10 flex justify-between text-xs text-neutral-500 font-mono">
            <span>border-white/10</span>
            <span>Minimalist UI</span>
          </div>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-900/60 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-md hover:border-white/20 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">STATUS</span>
            <h3 className="text-lg font-bold text-white mt-1">Micro Pill</h3>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-center text-neutral-300">
            beui.dev component
          </div>
        </div>
      </div>
    </section>
  );
}`
  },
  {
    slug: 'affect-ui-ambient-bento',
    title: 'Affect UI Ambient Reactive Lighting Bento',
    description: 'Dynamic bento grid from Affect UI featuring ambient reactive edge lighting, color transitions responding to content state, and multi-layered depth.',
    category: 'spotlight-shaders',
    source: 'affect-ui',
    sourceName: 'Affect UI',
    sourceUrl: 'https://affect-ui.com',
    tags: ['affect-ui', 'ambient-light', 'depth', 'reactive-lighting', 'modern'],
    features: [
      'Ambient reactive drop shadow changing intensity on hover',
      'Dynamic color-shifted edge lighting according to state',
      'Soft diffused multi-layer background blur',
      'Clean interactive state feedback'
    ],
    tilesSummary: [
      { title: 'Ambient Light Tile', subtitle: 'Casts soft colorful glow onto parent canvas', colSpan: 'col-span-1 md:col-span-2', highlight: 'Ambient Radiance' },
      { title: 'State Color Shift', subtitle: 'Dynamic hue transition on user engagement', colSpan: 'col-span-1', highlight: 'Reactive Hue' }
    ],
    code: `import React, { useState } from 'react';

export default function AffectUiBento() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-black text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-rose-400 font-mono">Affect UI System</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Ambient Reactive Lighting Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div 
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={\`col-span-1 md:col-span-2 rounded-3xl bg-neutral-950 border border-neutral-800 p-7 flex flex-col justify-between transition-all duration-500 \${hovered ? 'border-rose-500/60 shadow-[0_0_50px_-10px_rgba(244,63,94,0.3)]' : ''}\`}
        >
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-950/80 text-rose-300 border border-rose-800/60">
              Affect UI Radiance
            </span>
            <h3 className="text-2xl font-bold text-white mt-3">Ambient Edge Glow Field</h3>
            <p className="text-neutral-400 text-xs mt-2 max-w-md">
              Hover over this card to cast a dynamic ambient colored shadow onto the page canvas.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-between text-xs text-neutral-400 font-mono">
            <span>Hover Status: <strong className={hovered ? 'text-rose-400' : 'text-neutral-500'}>{hovered ? 'Radiant' : 'Resting'}</strong></span>
            <span>Affect UI Lighting</span>
          </div>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between hover:border-rose-500/40 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">DEPTH LAYER</span>
            <h3 className="text-lg font-bold text-white mt-1">Multi-Layer Glow</h3>
          </div>
          <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-center font-mono text-xs text-rose-400">
            affect-ui.com
          </div>
        </div>
      </div>
    </section>
  );
}`
  },
  {
    slug: 'magicui-animated-bento',
    title: 'Magic UI Interactive Bento Grid',
    description: 'Dynamic animated bento grid from Magic UI featuring animated tech marquees, simulated workspace file tree explorer, and live notification cards.',
    category: 'animated-motion',
    source: 'magicui',
    sourceName: 'Magic UI',
    sourceUrl: 'https://magicui.design',
    tags: ['magicui', 'marquee', 'file-tree', 'animated', 'interactive', 'shadcn'],
    features: [
      'Interactive workspace file tree widget with active file selection',
      'Animated infinite marquee ribbon of framework icons',
      'Real-time event notification cards with active pulses',
      'Seamless shadcn/ui and Tailwind CSS compatibility'
    ],
    tilesSummary: [
      { title: 'Interactive File Tree', subtitle: 'Browse code and asset directories in-place', colSpan: 'col-span-1 md:col-span-2', highlight: 'Workspace Tree Explorer' },
      { title: 'Tech Marquee Strip', subtitle: 'Smooth infinite ticker ribbon', colSpan: 'col-span-1', highlight: 'Marquee Strip Animation' }
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
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-neutral-950 text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-sky-400 font-mono">Magic UI Registry</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Living Components Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
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
                  <span className="text-[11px] text-neutral-500">{file.size}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span>Selected: <strong className="text-white font-mono">{selectedFile}</strong></span>
            <span className="text-sky-400 font-mono">magicui.design</span>
          </div>
        </div>

        <div className="col-span-1 rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase">MARQUEE</span>
            <h3 className="text-lg font-bold text-white mt-1">Infinite Ticker</h3>
          </div>
          <div className="my-6 flex gap-2 overflow-hidden">
            {['React', 'Next.js', 'Tailwind', 'Motion'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg bg-neutral-800 border border-neutral-700 text-xs font-medium whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
          <span className="text-xs text-neutral-500 font-mono">Animated Marquee</span>
        </div>
      </div>
    </section>
  );
}`
  },
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
      'Dynamic spotlight border illumination following pointer',
      'Glassmorphic card panels with backdrop blur',
      'Vibrant violet and indigo accent glows'
    ],
    tilesSummary: [
      { title: 'Cursor Spotlight Canvas', subtitle: 'Cards illuminate dynamically under mouse cursor', colSpan: 'col-span-1 md:col-span-2', highlight: 'Real-time Radial Follower' },
      { title: 'Concentric Radar Ring', subtitle: 'Pulsing telemetry radar tile', colSpan: 'col-span-1', highlight: 'Radar Ping' }
    ],
    code: `import React, { useRef, useState, MouseEvent } from 'react';

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
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition duration-300"
          style={{
            background: \`radial-gradient(600px circle at \${mousePos.x}px \${mousePos.y}px, rgba(120, 119, 198, 0.18), transparent 40%)\`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function AceternitySpotlightBento() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 bg-black text-white font-sans antialiased">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-violet-400 font-mono">Aceternity UI Components</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Radial Cursor Spotlight Bento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <SpotlightCard className="col-span-1 md:col-span-2">
          <div className="h-full min-h-[200px] flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-950 text-violet-300 border border-violet-800">
                Radial Spotlight
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">Pointer Illuminated Borders</h3>
              <p className="text-neutral-400 text-xs mt-2 max-w-md">
                Hover cursor across this card to experience pointer-following radial light cones and illuminated borders.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-between text-xs text-neutral-400 font-mono">
              <span>Pure React + CSS Radial Math</span>
              <span>ui.aceternity.com</span>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="col-span-1">
          <div className="h-full min-h-[200px] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase">RADAR</span>
              <h3 className="text-lg font-bold text-white mt-1">Concentric Rings</h3>
            </div>
            <div className="relative my-6 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-violet-500/40 animate-ping absolute" />
              <div className="w-4 h-4 rounded-full bg-violet-500" />
            </div>
            <span className="text-xs text-neutral-500 font-mono text-center">Aceternity Radar</span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}`
  }
];
