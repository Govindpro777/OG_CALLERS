# OG Callers landing page

## Build
- Recreate the supplied dark neon-green OG Callers page at `/`, keeping the reference as visual guidance rather than embedding the screenshot.
- Split the page into reusable JSX components for navigation, hero, community metrics, leaderboard, community panel, hall/shame lists, contests, and footer.
- Add responsive layouts for desktop, tablet, and mobile while preserving the same content hierarchy and compact trading-dashboard aesthetic.
- Add restrained Framer Motion entrances, staggered rows/cards, counters, and ambient chart movement with reduced-motion support.

## Visual system
- Define the black/green/red semantic palette, condensed display typography, borders, glow effects, grid background, spacing, and radii in the global Tailwind design system.
- Recreate the mascot/group artwork with original CSS and icon-based treatments; use the uploaded screenshot only as the reference because no separate background artwork was supplied.

## Technical details
- Keep the implementation Vite-only while building all page sections as JSX modules.
- Use Tailwind CSS classes for layout/styling, Lucide icons, and Framer Motion for animation.
- Add page-specific title, description, Open Graph, and Twitter metadata.
- Verify the result in the browser at desktop and mobile sizes and resolve any build or console errors.
