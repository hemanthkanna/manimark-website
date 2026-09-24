// Source: "Browse Categories" list, consistent across the Home, About Us
// and Store PSD footers. Slugs drive the /products/:category route.
export const categories = [
  { slug: 'burfi', name: 'Burfi' },
  { slug: 'balls', name: 'Balls' },
  { slug: 'savouries', name: 'Savouries' },
  { slug: 'sweets', name: 'Sweets' },
  { slug: 'premium-products', name: 'Premium Products' },
  { slug: 'gift-boxes', name: 'Gift Boxes' },
  { slug: 'oils', name: 'Oils' },
]

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug)
}
