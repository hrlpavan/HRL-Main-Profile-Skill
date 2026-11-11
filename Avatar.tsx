import React from "react";
import "./avatar.css";

export interface AvatarProps {
  /** Source URL of the avatar image */
  src: string;
  /** Accessible alt text */
  alt?: string;
  /** Overall diameter in pixels (defaults to 150) */
  size?: number | "sm" | "md" | "lg" | "xl";
  /** Whether to show the verified status badge */
  isVerified?: boolean;
  /** Custom badge background color (defaults to #D1002D) */
  badgeColor?: string;
  /** Custom badge border/ring cut-out color (defaults to #FFFFFF) */
  badgeBorderColor?: string;
  /** Optional custom badge icon element */
  badgeIcon?: React.ReactNode;
  /** Additional CSS class names */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * HRL Patented Circular Glass Avatar Component
 * 
 * Reusable React implementation featuring 4 visual layers:
 * 1. Base Image with dual-tier ambient + key elevation shadows
 * 2. Specular Glass Conic Rim with 225° incident angle
 * 3. Internal Specular Bevel with radial glare dome
 * 4. Absolute-anchored Cut-Out Verified Badge
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Profile Avatar",
  size = 150,
  isVerified = true,
  badgeColor,
  badgeBorderColor,
  badgeIcon,
  className = "",
  onClick,
}) => {
  const sizeClass = typeof size === "string" ? `hrl-avatar--${size}` : "";
  const inlineStyles: React.CSSProperties =
    typeof size === "number"
      ? {
          ["--avatar-size" as any]: `${size}px`,
          ["--badge-size" as any]: `${Math.round(size * 0.213)}px`,
        }
      : {};

  if (badgeColor) {
    (inlineStyles as any)["--badge-bg"] = badgeColor;
  }
  if (badgeBorderColor) {
    (inlineStyles as any)["--badge-border-color"] = badgeBorderColor;
  }

  return (
    <div
      className={`hrl-avatar-wrapper ${sizeClass} ${className}`.trim()}
      style={inlineStyles}
      onClick={onClick}
    >
      <img src={src} alt={alt} className="avatar-img" loading="eager" />

      {isVerified && (
        <div
          className="verified-badge"
          aria-label="Verified Sovereign Profile"
          title="Verified Sovereign Profile"
        >
          {badgeIcon || (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;
