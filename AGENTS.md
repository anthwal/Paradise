<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

**DO NOT OVER-ENGINEER ANYTHING**

**Generate Production grade frontend code with optimal memory usage**

Make small, incremental ,reviewable ,testable ,and verifiable changes.

**Nothing goes past without my review, and testing, only move forward if I say so.**

Follow proper documented Next.js project structure, conventions for file naming, component naming, variable naming etc. Nothing should be built from scratch if any package already provides it, only do it if its absolutely required, and cannot be done any other way.

Follow proper style guide for layouts, components, etc. **DO NOT DEVIATE FROM THE STYLE GUIDE.** All the code written should be human readable and reviewable, maintainable without any AI tool dependency.
All code should live where the convention suggests it should live, for example, routes live where Next.js says they should be, style files (css, scss), etc. should live where the Next.js convention states, and similar rules are applicable for styles from packages as well.

<!-- END:nextjs-agent-rules -->
