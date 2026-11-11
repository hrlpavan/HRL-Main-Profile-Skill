# HRL Main Profile Skill — Circular Avatar Design Pattern

[![GitHub License](https://img.shields.io/badge/license-MIT-red.svg)](LICENSE)
[![CSS3](https://img.shields.io/badge/CSS3-Standard-blue.svg)](avatar.css)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v3%20%7C%20v4-38BDF8.svg)](README.md#tailwind-css-v3--v4-snippet)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB.svg)](Avatar.tsx)
[![Role Application Prompt](https://img.shields.io/badge/Master%20Prompt-Included-success.svg)](ROLE_AVATAR_APPLICATION_PROMPT.md)

Production-ready, reverse-engineered implementation of the high-contrast circular profile avatar with multi-layer glass optics and an anchored verified status badge, extracted from the **HRL International Canonical Knowledge Graph Profile System**.

---

## ⚡ Direct Copy-Paste Prompt: Apply Across Company Roles

To apply this design system to any company role, leadership directory, or client profile, copy the master prompt from [`ROLE_AVATAR_APPLICATION_PROMPT.md`](ROLE_AVATAR_APPLICATION_PROMPT.md) or issue the following command to any coding agent:

> *"Apply the HRL 4-layer optical circular avatar design pattern (specular conic rim, internal lens glare, elevation drop-shadows, and cut-out verified badge) across the company roles in this project using the specification in `ROLE_AVATAR_APPLICATION_PROMPT.md`."*

---

## 1. Code Location & Anatomy Extraction

### Primary Code Locations in Canonical Codebase
- **Production HTML & Markup**: `/Users/pavankumars/.gemini/antigravity/scratch/hrl-international-website-/hrlpavan.html` (Lines 996–1018)
- **Production CSS Definitions**: `/Users/pavankumars/.gemini/antigravity/scratch/hrl-international-website-/hrlpavan.html` (Lines 401–475)
- **Standalone Optics Prototype**: `/Users/pavankumars/.gemini/antigravity/scratch/test_glass_avatar.html`
- **Canonical Portrait Asset**: `assets/hrlpavan-founder-avatar.jpg` (SHA-256: `0660daf4d7377af82d844c854db878139dbee957e69575e83e2fc89862a07b8e`)

---

### Structural Layering & Z-Index Stacking

```
┌─────────────────────────────────────────────────────────────┐
│ 4. Verified Badge (.verified-badge)            [z-index: 4] │
│    - Position: absolute (bottom: 2px, right: 2px)           │
│    - Ring cutout: 2px solid #FFFFFF                         │
├─────────────────────────────────────────────────────────────┤
│ 3. Internal Specular Glare & Bevel (::after)   [z-index: 3] │
│    - Radial top-light glare (circle at 50% 0%)              │
│    - Top specular highlight (inset 0 1.5px 2px white)       │
│    - Bottom shadow bevel (inset 0 -1.5px 2px black)         │
├─────────────────────────────────────────────────────────────┤
│ 2. Specular Glass Conic Rim (::before)         [z-index: 2] │
│    - 225° Incident Angle Conic Gradient                     │
│    - Sub-pixel rim mask: mask-composite: exclude            │
│    - Outer drop-shadow filter: drop-shadow(0 2px 6px black) │
├─────────────────────────────────────────────────────────────┤
│ 1. Base Image Element (.avatar-img)            [z-index: 1] │
│    - Aspect-ratio: 1/1, border-radius: 50%                  │
│    - Ambient + Key dual elevation shadows                   │
│    - Fallback surface: #0B0E14                              │
├─────────────────────────────────────────────────────────────┤
│ 0. Coordinate Root (.avatar-wrapper)                        │
│    - Position: relative, width/height: 150px, flex-shrink: 0│
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Design Token & Visual Breakdown

| Token Property | Exact Value / Formula | Visual Role & Rationale |
| :--- | :--- | :--- |
| **Container Width / Height** | `150px × 150px` (`--avatar-size: 150px`) | Standard desktop hero profile size. Scalable via responsive scalers (`clamp(96px, 15vw, 150px)`). |
| **Aspect Ratio Locking** | `aspect-ratio: 1 / 1;` & `border-radius: 50%` | Prevents elliptical distortion across all viewport scales. |
| **Image Fit & Alignment** | `object-fit: cover; object-position: center top;` | Maintains face framing and avoids distortion regardless of native image dimensions. |
| **Key Drop Shadow** | `0 16px 36px rgba(0, 0, 0, 0.45)` | Simulates deep focal elevation off white surfaces (`#FFFFFF` background). |
| **Ambient Blur Shadow** | `0 4px 12px rgba(0, 0, 0, 0.30)` | Provides local grounding light occlusion. |
| **Specular Conic Rim** | `conic-gradient(from 225deg, ...)` | Simulates an upper-left directional key light (225° incident angle). |
| **Rim Cut-Out Mask** | `-webkit-mask-composite: xor; mask-composite: exclude;` | Uses `padding: 2px` on `inset: -2px` to render only the 2px border ring without covering the image. |
| **Internal Lens Glare** | `radial-gradient(circle at 50% 0%, rgba(255,255,255,0.28) 0%, transparent 65%)` | Adds physical curvature/convexity to the avatar glass lens. |
| **Dual Inner Bevels** | `inset 0 1.5px 2px rgba(255,255,255,0.85), inset 0 -1.5px 2px rgba(0,0,0,0.50)` | Crisp top white highlight and bottom dark rim giving tactile physical depth. |
| **Verified Badge Dimensions** | `32px × 32px` (`calc(var(--avatar-size) * 0.213)`) | Proportionally balanced at ~21.3% of avatar diameter. |
| **Badge Background** | `#D1002D` (`var(--hrl-crimson)`) | High-salience sovereign crimson brand color. |
| **Badge Cut-Out Border** | `2px solid #FFFFFF` | Crisp separation ring separating badge from background photo. |
| **Badge Position Coordinates** | `bottom: 2px; right: 2px;` | Anchors the badge cleanly at the 4:30 clock position on the circle radius. |
| **Badge Icon** | `16px × 16px` SVG, stroke `3px` white | High-contrast, pixel-perfect checkmark. |

---

## 3. Modular Reusable Snippets

### Option A: Pure HTML + Scoped CSS

#### HTML:
```html
<div class="hrl-avatar-wrapper hrl-avatar--lg">
  <img src="avatar.jpg" alt="Profile" class="avatar-img" />
  <div class="verified-badge" title="Verified Sovereign Identity">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
</div>
```

#### Scoped CSS:
```css
:root {
  --avatar-size: 150px;
  --badge-size: 32px;
  --badge-bg: #D1002D;
  --badge-color: #FFFFFF;
  --badge-border-color: #FFFFFF;
  --badge-border-width: 2px;
  --badge-offset: 2px;
}

.hrl-avatar-wrapper {
  position: relative;
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.hrl-avatar-wrapper .avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  display: block;
  background-color: #0B0E14;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), 0 4px 12px rgba(0, 0, 0, 0.30);
}

/* 225° Specular Glass Conic Rim */
.hrl-avatar-wrapper::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  padding: 2px;
  background: conic-gradient(
    from 225deg,
    rgba(255, 255, 255, 0.95) 0deg,
    rgba(255, 255, 255, 0.30) 65deg,
    rgba(255, 255, 255, 0.05) 140deg,
    rgba(0, 0, 0, 0.40) 180deg,
    rgba(255, 255, 255, 0.20) 240deg,
    rgba(255, 255, 255, 0.80) 310deg,
    rgba(255, 255, 255, 0.95) 360deg
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.35));
  z-index: 2;
}

/* Internal Specular Bevel & Light Glare */
.hrl-avatar-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 65%);
  box-shadow: 
    inset 0 1.5px 2px rgba(255, 255, 255, 0.85),
    inset 0 -1.5px 2px rgba(0, 0, 0, 0.50);
  z-index: 3;
}

/* Verified Badge */
.hrl-avatar-wrapper .verified-badge {
  position: absolute;
  bottom: var(--badge-offset);
  right: var(--badge-offset);
  width: var(--badge-size);
  height: var(--badge-size);
  border-radius: 50%;
  background: var(--badge-bg);
  color: var(--badge-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--badge-border-width) solid var(--badge-border-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.20);
  z-index: 4;
}

.hrl-avatar-wrapper .verified-badge svg {
  width: calc(var(--badge-size) * 0.5);
  height: calc(var(--badge-size) * 0.5);
}
```

---

### Option B: Tailwind CSS (v3 / v4)

Using idiomatic utility classes and arbitrary properties:

```html
<div class="relative inline-block w-[150px] h-[150px] rounded-full shrink-0 select-none
  before:content-[''] before:absolute before:-inset-[2px] before:rounded-full before:p-[2px]
  before:[background:conic-gradient(from_225deg,rgba(255,255,255,0.95)_0deg,rgba(255,255,255,0.3)_65deg,rgba(255,255,255,0.05)_140deg,rgba(0,0,0,0.4)_180deg,rgba(255,255,255,0.2)_240deg,rgba(255,255,255,0.8)_310deg,rgba(255,255,255,0.95)_360deg)]
  before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
  before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]
  before:drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] before:pointer-events-none before:z-[2]
  after:content-[''] after:absolute after:inset-0 after:rounded-full after:pointer-events-none
  after:[background:radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.05)_40%,transparent_65%)]
  after:[box-shadow:inset_0_1.5px_2px_rgba(255,255,255,0.85),inset_0_-1.5px_2px_rgba(0,0,0,0.5)] after:z-[3]">

  <!-- Profile Image -->
  <img 
    src="avatar.jpg" 
    alt="Profile" 
    class="w-full h-full rounded-full object-cover object-top block bg-[#0B0E14] shadow-[0_16px_36px_rgba(0,0,0,0.45),0_4px_12px_rgba(0,0,0,0.30)]" 
  />

  <!-- Verified Badge -->
  <div class="absolute bottom-[2px] right-[2px] w-[32px] h-[32px] rounded-full bg-[#D1002D] text-white flex items-center justify-center border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.20)] z-[4] transition-transform hover:scale-110">
    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
</div>
```

---

## 4. Multi-Platform Deployment & Verification

This repository is mirrored and continuously deployed across both enterprise developer platforms:
- **GitHub**: [https://github.com/hrlpavan/HRL-Main-Profile-Skill](https://github.com/hrlpavan/HRL-Main-Profile-Skill)
- **GitLab**: [https://gitlab.com/hrlpavan/HRL-Main-Profile-Skill](https://gitlab.com/hrlpavan/HRL-Main-Profile-Skill)

Licensed under MIT. Sovereign Design & Architecture © 2026 HRL International.
