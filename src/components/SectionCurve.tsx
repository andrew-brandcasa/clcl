import React from "react";

type Props = {
  height?: number;        // curve height in px
  fill?: string;          // color = background of the NEXT section
  className?: string;
};

export default function SectionCurve({
  height = 160,
  fill = "#FFFFFF",
  className = "",
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`section-curve pointer-events-none ${className}`}
      style={{ height }}
    >
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" width="100%" height="100%">
        {/* Gentle concave curve */}
        <path d="M0,40 C240,120 480,0 720,40 C960,80 1200,160 1440,80 L1440,160 L0,160 Z" fill={fill} />
      </svg>
    </div>
  );
}