interface LogoProps {
  className?: string
}

/**
 * The LANN wordmark and icon combined into a single SVG illustration — a
 * route (curved line) linking two waypoints to a ringed destination marker,
 * illustrating route + pathway + map in one mark, per the brand's meaning
 * ("လမ်း" = path/way/direction). Kept to simple strokes/circles so it stays
 * legible at nav-bar size. Uses currentColor so it follows the surrounding
 * text color (near-black in light mode, near-white in dark mode).
 */
export function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 124 32"
      className={className}
      fill="none"
      role="img"
      aria-label="LANN"
    >
      <title>LANN</title>

      {/* Route: start waypoint -> mid waypoint -> destination marker */}
      <path
        d="M6,25 Q10,17 14,18 Q17,10 22,8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="25" r="2.6" fill="currentColor" />
      <circle cx="14" cy="18" r="1.7" fill="currentColor" />
      <circle cx="22" cy="8" r="4" stroke="currentColor" strokeWidth="2.1" />
      <circle cx="22" cy="8" r="1.2" fill="currentColor" />

      <text
        x="33"
        y="23"
        fontFamily="Poppins, ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
        fontSize="20"
        letterSpacing="0.3"
        fill="currentColor"
      >
        LANN
      </text>
    </svg>
  )
}
