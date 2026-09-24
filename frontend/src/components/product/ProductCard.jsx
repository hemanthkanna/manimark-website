import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'
import ribbonIcon from '../../assets/images/product-ribbon-icon.png'
import { discountPercent } from '../../data/products'

export default function ProductCard({ product }) {
  const discount = discountPercent(product)

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:shadow-md"
    >
      {product.featured && (
        <img
          src={ribbonIcon}
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-4 z-10 h-7 w-6 object-contain"
        />
      )}

      <div className="relative aspect-square overflow-hidden">
        <ProductImage product={product} className="transition duration-300 group-hover:scale-105" />
        {discount > 0 && (
          <span className="absolute top-3 right-3 rounded-full bg-brand-magenta px-2.5 py-1 text-xs font-semibold text-white">
            {discount}% OFF
          </span>
        )}
        {!product.inStock && (
          <span className="absolute inset-0 flex items-center justify-center bg-white/70 text-sm font-semibold text-neutral-700">
            Out of stock
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="font-semibold text-neutral-900">{product.name}</p>
        {product.weight && <p className="text-xs text-brand-gray">{product.weight}</p>}
        {product.description && (
          <p className="mt-1 line-clamp-2 text-xs text-brand-gray">{product.description}</p>
        )}

        <div className="mt-auto flex flex-col gap-2 pt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-semibold text-brand-magenta">
              ₹{product.price}
            </span>
            {discount > 0 && (
              <span className="text-sm text-neutral-400 line-through">₹{product.mrp}</span>
            )}
          </div>
          <button
            type="button"
            disabled={!product.inStock}
            onClick={(e) => {
              // Card itself is a Link to the product page — the button is
              // its own action and shouldn't trigger that navigation.
              e.preventDefault()
              e.stopPropagation()
            }}
            className="w-full shrink-0 rounded-full bg-brand-yellow px-4 py-2 text-xs font-semibold whitespace-nowrap text-neutral-900 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}
