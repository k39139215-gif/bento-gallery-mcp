import fs from "fs";
import path from "path";

const artPath = "C:\\Users\\kartik\\.gemini\\antigravity\\brain\\d3f1c1a7-da68-4618-9150-e431dc30a492\\all_bentos_review.html";
let content = fs.readFileSync(artPath, "utf8");

content = content.replace("https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js", "https://cdn.tailwindcss.com");

const seoHead = `  <meta name="description" content="Curated Bento Grid UI Components from 20 Premier Design Engineering Libraries (Aceternity UI, Magic UI, Kokonut UI, Cult UI, shadcn). Model Context Protocol (MCP) server for Cursor, Claude Desktop, and AI coding assistants.">
  <meta name="keywords" content="bento grid, bento ui, mcp server, model context protocol, aceternity ui, magic ui, kokonut ui, cult ui, shadcn, tailwind css, react, framer motion, cursor mcp, claude desktop mcp, ai coding, awesome mcp">
  <meta name="author" content="Kartik">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://k39139215-gif.github.io/bento-gallery-mcp/">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://k39139215-gif.github.io/bento-gallery-mcp/">
  <meta property="og:title" content="Bento Gallery MCP • 20 Premier Design Engineering Libraries">
  <meta property="og:description" content="Model Context Protocol (MCP) server & CLI curating world-class Bento Grid UI components directly for Claude Desktop, Cursor, and AI coding assistants.">
  <meta property="og:image" content="https://ui.aceternity.com/api/og">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://k39139215-gif.github.io/bento-gallery-mcp/">
  <meta name="twitter:title" content="Bento Gallery MCP • 20 Premier Design Engineering Libraries">
  <meta name="twitter:description" content="Curated Bento Grid UI Components for Cursor and Claude Desktop. Real React + Tailwind code from Aceternity, Magic UI, Kokonut UI, and Cult UI.">
  <meta name="twitter:image" content="https://ui.aceternity.com/api/og">

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Bento Gallery MCP",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Model Context Protocol (MCP) server & CLI for curated Bento Grid UI components from 20 premier design engineering libraries.",
        "url": "https://k39139215-gif.github.io/bento-gallery-mcp/",
        "author": {
          "@type": "Person",
          "name": "Kartik"
        }
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "bento-gallery-mcp",
        "codeRepository": "https://github.com/k39139215-gif/bento-gallery-mcp",
        "programmingLanguage": "TypeScript",
        "license": "https://opensource.org/licenses/MIT",
        "runtimePlatform": "Node.js"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Bento Gallery MCP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bento Gallery MCP is an open-source Model Context Protocol server that allows AI coding assistants like Claude Desktop, Cursor, and Antigravity to search, query, and inject production-ready Bento Grid UI components directly from 20 top design engineering libraries."
            }
          },
          {
            "@type": "Question",
            "name": "Which component libraries are supported in Bento Gallery MCP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It includes Aceternity UI, Magic UI, Kokonut UI, Cult UI, motion-primitives by Ibelick, Spell.sh, Coss UI (Cal.com), Transitions.dev, Details.design, Rareblocks/Rare UI, Spectrum UI, BeUI, DaisyUI, Flowbite, Preline UI, HyperUI, Meraki UI, Tailspark, Cruip, and WickedBlocks."
            }
          },
          {
            "@type": "Question",
            "name": "How do I install Bento Gallery MCP in Claude Desktop or Cursor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Add bento-gallery to your claude_desktop_config.json or mcp_config.json pointing to node /path/to/bento-gallery-mcp/dist/mcp.js, or run via npx."
            }
          }
        ]
      }
    ]
  }
  </script>`;

content = content.replace('<meta name="viewport" content="width=device-width, initial-scale=1.0">', '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' + seoHead);

fs.writeFileSync("index.html", content, "utf8");
console.log("✓ Generated SEO-optimized index.html for bento-gallery-mcp");
