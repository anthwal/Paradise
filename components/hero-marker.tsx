"use client";

// Marks the page as having a hero, for the header's over-hero variant (app/globals.css).
// Next.js keeps recently visited pages in the DOM, hidden by React <Activity>
// (node_modules/next/dist/docs/01-app/02-guides/preserving-ui-state.md), so a hidden
// page's marker would still match body:has([data-hero]). React detaches refs when a
// page is hidden and re-attaches them when it is shown again, so the ref cleanup
// removes the attribute while hidden. The server-rendered attribute avoids a flash on load.
export default function HeroMarker() {
  return (
    <span
      hidden
      data-hero=""
      ref={(marker) => {
        if (!marker) return;
        marker.setAttribute("data-hero", "");
        return () => marker.removeAttribute("data-hero");
      }}
    />
  );
}
