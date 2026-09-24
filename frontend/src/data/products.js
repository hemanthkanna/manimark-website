// Source of truth: MM-WEB-PROD-P01.psd for "Special Peanut Burfi" (the only
// product it shows — its 8-card grid is the same card repeated, the same
// mockup-filler pattern as the Store PSD's repeated store cards).
//
// ⚠️ Every other product below is still SAMPLE DATA — no PSD covers them.
// Their names/categories are real (from the "Popular Products" / "Browse
// Categories" lists already on the Home/About/Store footers), but price,
// description, variants and stock are placeholder values for layout only.
// `image: null` renders a branded placeholder (see ProductImage) instead of
// a fabricated photo.
//
// Shape matches what a `/products` API endpoint would return, so swapping
// this file for a fetch call is the only change the UI should need.

import specialPeanutBurfiPhoto from '../assets/images/product-special-peanut-burfi.png'

const commonDescription =
  'Made in small batches with high-grade nuts, natural spices and authentic ingredients — no white sugar.'

export const products = [
  // Real product, from the Product PSD.
  {
    id: 'special-peanut-burfi',
    name: 'Special Peanut Burfi',
    category: 'premium-products',
    price: 150,
    mrp: null,
    weight: '200 gm',
    // The PSD's own description text cuts off mid-sentence ("...Made with
    // high-qu ...."); its real opening line is kept verbatim and completed
    // with the same generic brand copy used for the sample products below,
    // rather than guessing the missing words.
    description:
      'Indulge in the rich and nutty flavor of Peanut Burfi. ' + commonDescription,
    variants: ['200 gm'],
    inStock: true,
    image: specialPeanutBurfiPhoto,
    featured: true,
  },

  // ⚠️ Sample data from here down — see file header.
  {
    id: 'peanut-burfi',
    name: 'Peanut Burfi',
    category: 'burfi',
    price: 99,
    mrp: 120,
    description: commonDescription,
    variants: ['100g', '250g', '500g'],
    inStock: true,
    image: null,
  },
  {
    id: 'fine-peanut-burfi',
    name: 'Fine Peanut Burfi',
    category: 'burfi',
    price: 109,
    mrp: 130,
    description: commonDescription,
    variants: ['100g', '250g', '500g'],
    inStock: true,
    image: null,
  },
  {
    id: 'kamarkat',
    name: 'Kamarkat',
    category: 'burfi',
    price: 89,
    mrp: 105,
    description: commonDescription,
    variants: ['100g', '250g'],
    inStock: true,
    image: null,
  },
  {
    id: 'coconut-balls',
    name: 'Coconut Balls',
    category: 'balls',
    price: 95,
    mrp: 110,
    description: commonDescription,
    variants: ['100g', '250g'],
    inStock: true,
    image: null,
  },
  {
    id: 'sesame-balls',
    name: 'Sesame Balls',
    category: 'balls',
    price: 95,
    mrp: 110,
    description: commonDescription,
    variants: ['100g', '250g'],
    inStock: true,
    image: null,
  },
  {
    id: 'energy-laddu',
    name: 'Energy Laddu',
    category: 'sweets',
    price: 129,
    mrp: 150,
    description: commonDescription,
    variants: ['250g', '500g'],
    inStock: true,
    image: null,
  },
  {
    id: 'masala-peanut',
    name: 'Masala Peanut',
    category: 'savouries',
    price: 79,
    mrp: 95,
    description: commonDescription,
    variants: ['100g', '200g'],
    inStock: true,
    image: null,
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(categorySlug) {
  return products.filter((p) => p.category === categorySlug)
}

export function discountPercent(product) {
  if (!product.mrp || product.mrp <= product.price) return 0
  return Math.round(((product.mrp - product.price) / product.mrp) * 100)
}
