import { Link } from 'react-router-dom'

// items: [{ label, to? }] — the last item (current page) should omit `to`.
export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-brand-gray">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.to ? (
              <Link to={item.to} className="transition hover:text-brand-magenta">
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
