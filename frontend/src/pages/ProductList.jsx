import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/product/ProductCard";
import { categories, getCategoryBySlug } from "../data/categories";
import { products } from "../data/products";
import DownloadDropdown from "../components/DownloadDropdown";
import CustomizedOrderButton from "../components/BulkOrderButton";

const SORTS = {
  recommended: { label: "Recommended", compare: null },
  "price-asc": {
    label: "Price: Low to High",
    compare: (a, b) => a.price - b.price,
  },
  "price-desc": {
    label: "Price: High to Low",
    compare: (a, b) => b.price - a.price,
  },
};

const PRODUCTS_PER_PAGE = 8;

export default function ProductList() {
  const { categorySlug } = useParams();
  const [searchParams] = useSearchParams();

  const [sort, setSort] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);

  const query = (searchParams.get("q") || "").trim().toLowerCase();

  const activeCategory = categorySlug ? getCategoryBySlug(categorySlug) : null;

  /*
   * Filter + Search + Sort
   */
  const filtered = useMemo(() => {
    let list = products;

    // Category filter
    if (categorySlug) {
      list = list.filter((p) => p.category === categorySlug);
    }

    // Search filter
    if (query) {
      list = list.filter((p) => p.name.toLowerCase().includes(query));
    }

    // Sort
    const { compare } = SORTS[sort];

    return compare ? [...list].sort(compare) : list;
  }, [categorySlug, query, sort]);

  /*
   * Reset pagination when filters/search/sort change
   */
  useEffect(() => {
    setCurrentPage(1);
  }, [categorySlug, query, sort]);

  /*
   * Pagination calculations
   */
  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

    const endIndex = startIndex + PRODUCTS_PER_PAGE;

    return filtered.slice(startIndex, endIndex);
  }, [filtered, currentPage]);

  /*
   * Handle page change
   */
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    // Scroll back to products section
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*
   * Generate page numbers
   */
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <>
      <TopBar />
      <Header />

      <main className="bg-[#F5F5F7]">
        <section className="mx-auto max-w-[1366px] px-4 pt-8 pb-16 md:px-8">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
              {activeCategory ? activeCategory.name : "All Products"}
            </h1>

            <div className="flex flex-wrap gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <DownloadDropdown />

                <CustomizedOrderButton />
              </div>

              {/* Brand */}
              <label className="sr-only" htmlFor="brand-filter">
                Filter by brand
              </label>

              <select
                id="brand-filter"
                defaultValue="all"
                className="rounded-full border-0 bg-white px-5 py-2.5 text-sm text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 focus:ring-brand-magenta"
              >
                <option value="all">All Brands</option>

                <option value="arcot-manimark">Arcot Manimark</option>
              </select>

              {/* Sort */}
              <label className="sr-only" htmlFor="sort-by">
                Sort by
              </label>

              <select
                id="sort-by"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-full border-0 bg-white px-5 py-2.5 text-sm text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 focus:ring-brand-magenta"
              >
                {Object.entries(SORTS).map(([value, { label }]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search result text */}
          {query && (
            <p className="mt-2 text-sm text-brand-gray">
              Showing results for &ldquo;
              {searchParams.get("q")}
              &rdquo;
            </p>
          )}

          {/* Category filter */}
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              to="/products"
              className={
                "rounded-full px-4 py-2 text-sm font-semibold transition " +
                (!activeCategory
                  ? "bg-brand-magenta text-white"
                  : "bg-white text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:bg-neutral-50")
              }
            >
              All
            </Link>

            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className={
                  "rounded-full px-4 py-2 text-sm font-semibold transition " +
                  (activeCategory?.slug === cat.slug
                    ? "bg-brand-magenta text-white"
                    : "bg-white text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:bg-neutral-50")
                }
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Products */}
          {filtered.length > 0 ? (
            <>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2">
                  {/* Previous */}
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>

                  {/* Page numbers */}
                  {pageNumbers.map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={
                        "h-10 w-10 rounded-full text-sm font-semibold transition " +
                        (currentPage === page
                          ? "bg-brand-magenta text-white"
                          : "bg-white text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:bg-neutral-100")
                      }
                    >
                      {page}
                    </button>
                  ))}

                  {/* Next */}
                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Showing count */}
              <div className="mt-4 text-center text-sm text-brand-gray">
                Showing {(currentPage - 1) * PRODUCTS_PER_PAGE + 1} -{" "}
                {Math.min(currentPage * PRODUCTS_PER_PAGE, filtered.length)} of{" "}
                {filtered.length} products
              </div>
            </>
          ) : (
            <p className="mt-10 text-brand-gray">
              No products here yet — more{" "}
              {activeCategory ? activeCategory.name.toLowerCase() : "products"}{" "}
              are coming soon.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
