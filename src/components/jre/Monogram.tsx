export function Crown({ className = "h-4 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 28h40l3-20-11 8-12-14-12 14L1 8l3 20Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="24" cy="3" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function Monogram({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 64" className="h-full w-auto" fill="none">
        <g className="text-gold" fill="currentColor">
          <path d="M46 4h28l2-4 2 4h28l-6 6H52l-6-6Z" opacity="0.75" />
        </g>
        <text
          x="60"
          y="52"
          textAnchor="middle"
          fontFamily="Cinzel, serif"
          fontSize="40"
          letterSpacing="1"
          fill="url(#jreGold)"
        >
          JRE
        </text>
        <defs>
          <linearGradient id="jreGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8a6128" />
            <stop offset="45%" stopColor="#f0dca4" />
            <stop offset="100%" stopColor="#9b6c32" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}

export function Piece({
  glyph,
  className = "",
}: {
  glyph: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`gold-text select-none leading-none ${className}`}
      style={{ fontFamily: "Georgia, serif" }}
    >
      {glyph}
    </span>
  );
}
