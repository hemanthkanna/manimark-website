// No product photography exists yet for most SKUs (see data/products.js).
// Renders the real photo when one is set, otherwise a clean branded
// placeholder so the grid never looks broken while real photos are pending.
export default function ProductImage({ product, className = '' }) {
  if (product.image) {
    return (
      <img
        src={product.image}
        alt={product.name}
        className={'h-full w-full object-cover ' + className}
      />
    )
  }

  return (
    <div
      className={
        'flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-yellow-light to-brand-yellow text-center ' +
        className
      }
    >
      <svg viewBox="0 0 48 48" className="h-10 w-10 text-brand-magenta/70" fill="currentColor" aria-hidden="true">
        <rect x="10" y="14" width="28" height="26" rx="4" />
        <path d="M16 14a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
      <span className="px-3 text-xs font-semibold text-neutral-700">{product.name}</span>
    </div>
  )
}
