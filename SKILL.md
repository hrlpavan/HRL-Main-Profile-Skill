---
name: hrl-main-profile-skill
description: "Reverse-engineered circular profile avatar component pattern featuring 4 optical depth layers: dual-tier elevation drop shadows, 225° specular glass conic rim, internal convex lens glare bevel, and cut-out anchored verified badge. Supports Pure HTML/CSS, Tailwind CSS v3/v4, and React/TypeScript."
---

# HRL Main Profile Skill — Circular Profile Avatar System

This skill provides the reverse-engineered design pattern, token architecture, and copy-paste component templates for the circular profile avatar used in the HRL Canonical Knowledge Graph and executive profile systems.

## Component Architecture Overview

The component solves circular avatar clipping, directional glass lighting, and high-salience status badges without requiring external SVG filter hacks or client-side JavaScript.

### The 4 Visual Layers:
1. **Layer 1: Base Image & Elevation**: Circular clipped image (`object-fit: cover`, `border-radius: 50%`) with dual-tier shadows (ambient blur + key drop shadow).
2. **Layer 2: Specular Conic Rim (`::before`)**: 225° incident angle conic gradient with CSS `mask-composite: exclude` creating a 2px directional rim highlight.
3. **Layer 3: Internal Specular Glare (`::after`)**: Convex glass lens effect with top radial light gradient and top/bottom inner shadow bevels (`inset 0 1.5px 2px white`, `inset 0 -1.5px 2px black`).
4. **Layer 4: Anchored Verified Badge**: Absolute-positioned circular badge at ~4:30 clock position with a 2px solid cut-out border and centered checkmark icon.

## Rapid Usage

### Pure CSS:
```html
<link rel="stylesheet" href="avatar.css">

<div class="hrl-avatar-wrapper hrl-avatar--lg">
  <img src="avatar.jpg" alt="Profile" class="avatar-img" />
  <div class="verified-badge">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
</div>
```

### React / Next.js:
```tsx
import { Avatar } from './Avatar';

export function UserHero() {
  return (
    <Avatar 
      src="/profile.jpg" 
      size="lg" 
      isVerified={true} 
      badgeColor="#D1002D" 
    />
  );
}
```
