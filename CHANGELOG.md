# Changelog

#### _Put the latest entry at the top, please!_

## Entry Format

#### Date:

MM-DD-YYYY

#### Engineer:

Your Name Here (feel free to link your GitHub, LinkedIn, personal/professional websites, plug your business, etc.)

#### Details

Use plain language to document changes. Regular acronyms are okay.

---

## Begin Changelog:

---

#### Date: 08-19-2026

#### Engineer: Robby Wideman

#### Details

## Website UI & Team Page Update

### Added

- Added global `Navbar` and `Footer` components to the root layout.
- Added responsive hamburger navigation using `hamburger-react`.
- Added a new `/team` page with responsive two-column member profiles for Alex Pulido and Robby Wideman.
- Added circular team headshots with acid-green borders, and subtle glow.
- Added profile sections for bios, education, highlights, and technical focus areas.

### Changed

- Updated site styling to a black-and-acid-green ZeroStack Labs theme as well as changing font to Saira Semi-Condensed for a better "tech" look.
- Added reusable ZeroStack color tokens to the Tailwind theme, including `zs-black`, `zs-panel`, `zs-green`, `zs-muted`, and related colors.
- Updated the homepage to use the new ZeroStack color system consistently.
- Updated GitHub and YouTube buttons with themed hover effects and scaling.
- Added explicit `React.ReactNode` typing for root layout `children`.
- Simplified navigation code originally reused from `robbywideman.dev` for the current ZeroStack Labs site structure.

### Fixed

- Added the missing `hamburger-react` dependency.
- Removed unused `react-icons` / `GiEggPod` code inherited from the previous navbar.
- Fixed the team profile grid so Alex and Robby display side-by-side on larger screens and stack on smaller screens.
- Fixed Tailwind custom color registration so utilities such as `text-zs-green`, `bg-zs-black`, and `border-zs-green` render correctly.
- Standardized background colors across the page, navbar, and footer.

---

#### Date: 08-15-2026

#### Engineer: Robby Wideman

#### Details

Spun up basic landing page with links to YouTube and GitHub. Deployed to Verce, linked to actual domain `www.zerostacklabs.dev`.

---
