// Source: "Browse Categories" list, consistent across the Home, About Us
// and Store PSD footers. Slugs drive the /products/:category route.
export const categories = [
  { slug: "balls", name: "Balls" },
  { slug: "burfi", name: "Burfi" },
  { slug: "premium-products", name: "Premium Products" },
  { slug: "snacks", name: "Snacks" },
  { slug: "sweets", name: "Sweets" },
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}
