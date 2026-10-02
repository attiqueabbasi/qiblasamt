import { useId } from 'react';

interface IslamicPatternProps {
  className?: string;
  opacity?: number;
  color?: string;
}

/** Subtle repeating 8-point star geometric pattern used as faint decoration. */
export default function IslamicPattern({
  className = '',
  opacity = 0.035,
  color = 'var(--color-primary)',
}: IslamicPatternProps) {
  const patternId = `qibla-geo-pattern-${useId()}`;
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern id={patternId} width="64" height="64" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1.2">
            <path d="M32 4l7.5 20.5L60 32l-20.5 7.5L32 60l-7.5-20.5L4 32l20.5-7.5z" />
            <circle cx="32" cy="32" r="10" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
