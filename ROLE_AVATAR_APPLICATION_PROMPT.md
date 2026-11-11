# Master AI Agent Execution Prompt: Apply HRL Optical Circular Avatar Design Across Company Roles

> **How to Use**: Copy and paste the entire prompt block below directly into any AI assistant (Antigravity, Cursor, Claude Code, GitHub Copilot, Gemini) or client onboarding workflow. Whenever a role, leadership card, team roster, or profile component needs to be created or upgraded, this prompt forces deterministic application of the exact 4-layer optical circular avatar design system.

---

```markdown
### SYSTEM DIRECTIVE: Apply HRL Optical Circular Avatar Design System Across Role(s)

You are tasked with applying the official HRL 4-layer optical circular avatar design pattern to the designated company roles, leadership cards, and profile components in this codebase.

#### 1. Core Visual Layering Requirements (Must be strictly preserved)
Every role avatar MUST implement the 4 optical depth layers without skipping or flattening them:

- **Layer 1: Base Image & Elevation**:
  - Strict 1:1 circular ratio: `aspect-ratio: 1 / 1; border-radius: 50%; flex-shrink: 0;`
  - Image scaling: `width: 100%; height: 100%; object-fit: cover; object-position: center top;`
  - Fallback dark canvas: `background-color: #0B0E14;`
  - Dual-tier elevation shadows:
    `box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), 0 4px 12px rgba(0, 0, 0, 0.30);`

- **Layer 2: 225° Specular Glass Conic Rim (`::before`)**:
  - `position: absolute; inset: -2px; border-radius: 50%; padding: 2px;`
  - 225° incident angle conic gradient (directional top-left key light):
    `background: conic-gradient(from 225deg, rgba(255, 255, 255, 0.95) 0deg, rgba(255, 255, 255, 0.30) 65deg, rgba(255, 255, 255, 0.05) 140deg, rgba(0, 0, 0, 0.40) 180deg, rgba(255, 255, 255, 0.20) 240deg, rgba(255, 255, 255, 0.80) 310deg, rgba(255, 255, 255, 0.95) 360deg);`
  - Rim punch-out mask:
    `-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);`
    `-webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;`
  - Rim drop shadow: `filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.35)); z-index: 2;`

- **Layer 3: Internal Specular Bevel & Light Glare (`::after`)**:
  - `position: absolute; inset: 0; border-radius: 50%; pointer-events: none; z-index: 3;`
  - Convex dome glare:
    `background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 65%);`
  - Dual inner bevel shadows:
    `box-shadow: inset 0 1.5px 2px rgba(255, 255, 255, 0.85), inset 0 -1.5px 2px rgba(0, 0, 0, 0.50);`

- **Layer 4: Bottom-Right Anchored Verified Status Badge (`.verified-badge`)**:
  - Anchoring: `position: absolute; bottom: 2px; right: 2px; z-index: 4;`
  - Geometry: `width: 32px; height: 32px; border-radius: 50%;` (~21.3% of avatar diameter)
  - Cut-out punch ring: `border: 2px solid #FFFFFF;` (or matching surface color)
  - Badge elevation: `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.20);`
  - Division-aware badge background color:
    - Default / Core / Executive / Viral: `#D1002D` (Crimson)
    - Engineering / Infrastructure: `#0071E3` (Apple Azure)
    - Autonomous Systems / AI: `#8B5CF6` (Electric Violet)
    - Security / Governance: `#10B981` (Emerald)
  - SVG Icon: Centered white 16x16 checkmark (`stroke-width: 3; fill: none; stroke: currentColor;`)

#### 2. Target Markup Structure (HTML/JSX)
Ensure every role component renders this exact hierarchy:
```html
<div class="hrl-avatar-wrapper [size-modifier] [division-modifier]">
  <img 
    src="[ROLE_AVATAR_IMAGE_URL]" 
    alt="[ROLE_NAME] — [ROLE_TITLE]" 
    class="avatar-img" 
    loading="lazy" 
  />
  <div class="verified-badge" title="Verified Entity">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
</div>
```

#### 3. Execution Rules
1. Scan the targeted file(s) for existing role avatar markup (such as `.avatar-wrapper`, `<img>`, or standard unlayered circles).
2. Upgrade the CSS rules or Tailwind classes so the pseudo-elements (`::before` and `::after`) and `.verified-badge` are applied.
3. Ensure no flex parent collapses the avatar's circular dimensions (`flex-shrink: 0;` and explicit `width`/`height` or `--avatar-size`).
4. Test and verify in dark and light modes, guaranteeing that the cut-out ring and drop-shadows pop with maximum depth.
```
