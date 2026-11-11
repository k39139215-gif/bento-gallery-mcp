# Contributing to Bento Gallery MCP

Thank you for your interest in contributing to **Bento Gallery MCP**! We welcome new Bento Grid components, UI registry integrations, performance improvements, and documentation fixes.

## Adding a New Bento Grid Component

1. Identify the component source (must be a reputable open-source component library, design system, or MIT-licensed registry).
2. Ensure you have the raw source code (React, Tailwind CSS, and Framer Motion if applicable).
3. Add the component metadata and code to `src/data/grids.ts`.
4. Run `npm run build && npm test` to verify all MCP tools return the new grid correctly.
5. Submit a Pull Request with a clear title and link to the author's official documentation.

## Code Standards
- TypeScript with strict type checking.
- Clean JSX with semantic Tailwind CSS classes.
- Zero external CSS dependencies beyond Tailwind CSS and optional `framer-motion` or `lucide-react`.
- Always credit the original author and repository URL.

## Local Development
```bash
git clone https://github.com/k39139215-gif/bento-gallery-mcp.git
cd bento-gallery-mcp
npm install
npm run build
npm test
```
