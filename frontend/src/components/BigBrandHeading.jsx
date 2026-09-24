// The oversized display headings used as page markers — "MANIMARK" on the
// About Us page (gradient, fading out top-to-bottom) and "OUR STORES" on
// the Store page (solid). Matches the PSDs' AmericanPurposeSTRIPE display
// face with Fredoka as the closest available web-font stand-in.
export default function BigBrandHeading({ children, variant = 'solid', className = '' }) {
  const style =
    variant === 'gradient'
      ? {
          backgroundImage: 'linear-gradient(to bottom, #E23AA6, rgba(226,58,166,0))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }
      : { color: '#E23AA6' }

  return (
    <p
      className={'font-display leading-[0.85] font-semibold uppercase select-none ' + className}
      style={style}
      aria-hidden="true"
    >
      {children}
    </p>
  )
}
