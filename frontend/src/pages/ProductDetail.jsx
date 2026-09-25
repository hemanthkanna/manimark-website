import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ProductImage from "../components/product/ProductImage";
import ProductCard from "../components/product/ProductCard";
import ribbonIcon from "../assets/images/product-ribbon-icon.png";
import { getCategoryBySlug } from "../data/categories";
import {
  getProductById,
  getProductsByCategory,
  discountPercent,
} from "../data/products";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [variant, setVariant] = useState(product?.variants?.[0]);
  const [qty, setQty] = useState(1);

  const [showAllRelated, setShowAllRelated] = useState(false);

  if (!product) {
    return (
      <>
        <TopBar />
        <Header />
        <main className="mx-auto max-w-[1366px] px-4 py-20 text-center md:px-8">
          <p className="text-lg font-semibold text-neutral-900">
            Product not found
          </p>
          <Link
            to="/products"
            className="mt-6 inline-block rounded-full bg-brand-yellow px-6 py-2.5 text-sm font-semibold text-neutral-900"
          >
            Browse all products
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const category = getCategoryBySlug(product.category);
  const discount = discountPercent(product);
  const related = getProductsByCategory(product.category).filter(
    (p) => p.id !== product.id,
  );

  const visibleRelated = showAllRelated ? related : related.slice(0, 4);

  return (
    <>
      <TopBar />
      <Header />
      <main className="bg-[#F5F5F7]">
        <section className="mx-auto max-w-[1366px] px-4 pt-8 pb-16 md:px-8">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              ...(category
                ? [{ label: category.name, to: `/products/${category.slug}` }]
                : []),
              { label: product.name },
            ]}
          />

          <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="relative aspect-square overflow-hidden rounded-[24px]">
              {product.featured && (
                <img
                  src={ribbonIcon}
                  alt=""
                  aria-hidden="true"
                  className="absolute top-0 left-6 z-10 h-9 w-8 object-contain"
                />
              )}
              <ProductImage product={product} />
            </div>

            <div className="flex flex-col justify-center">
              {category && (
                <Link
                  to={`/products/${category.slug}`}
                  className="w-fit text-sm font-semibold text-brand-magenta hover:underline"
                >
                  {category.name}
                </Link>
              )}
              <h1 className="mt-1 font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
                {product.name}
              </h1>

              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-display text-2xl font-semibold text-brand-magenta">
                  ₹{product.price}
                </span>
                {discount > 0 && (
                  <>
                    <span className="text-neutral-400 line-through">
                      ₹{product.mrp}
                    </span>
                    <span className="rounded-full bg-brand-magenta/10 px-2.5 py-1 text-xs font-semibold text-brand-magenta">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-brand-gray">
                {product.description}
              </p>

              {product.variants?.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-neutral-900">
                    Pack size
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setVariant(v)}
                        className={
                          "rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer " +
                          (variant === v
                            ? "bg-brand-magenta text-white"
                            : "bg-white text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:bg-neutral-50")
                        }
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="flex h-10 w-10 items-center justify-center text-lg text-neutral-700 cursor-pointer"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold text-neutral-900">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="flex h-10 w-10 items-center justify-center text-lg text-neutral-700 cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <span
                  className={
                    product.inStock
                      ? "text-sm text-green-700"
                      : "text-sm text-red-600"
                  }
                >
                  {product.inStock ? "In stock" : "Out of stock"}
                </span>
              </div>

              <button
                type="button"
                disabled={!product.inStock}
                className="mt-6 w-fit rounded-full bg-brand-yellow px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-neutral-900">
                  You might also like
                </p>

                {related.length > 4 && (
                  <button
                    type="button"
                    onClick={() => setShowAllRelated((prev) => !prev)}
                    className="text-sm font-semibold text-neutral-900 underline underline-offset-4 cursor-pointer"
                  >
                    {showAllRelated ? "Show Less" : "View All"}
                  </button>
                )}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                {visibleRelated.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
