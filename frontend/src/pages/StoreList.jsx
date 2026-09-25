import { useEffect, useMemo, useState } from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BigBrandHeading from "../components/BigBrandHeading";
import StoreCard from "../components/store/StoreCard";
import storeHeroIcon from "../assets/images/store-hero-icon.png";
import {
  stores,
  storeStates,
  storeCities,
  upcomingLocations,
} from "../data/stores";

const ALL = "All";
const STORES_PER_PAGE = 8;

export default function StoreList() {
  const [state, setState] = useState(ALL);
  const [city, setCity] = useState(ALL);
  const [currentPage, setCurrentPage] = useState(1);

  /*
   * Get cities based on selected state
   *
   * If "All States" is selected,
   * show all available cities.
   *
   * Otherwise, only show cities belonging
   * to the selected state.
   */
  const availableCities = useMemo(() => {
    if (state === ALL) {
      return storeCities;
    }

    return [
      ...new Set(
        stores
          .filter((store) => store.state === state)
          .map((store) => store.city),
      ),
    ].sort();
  }, [state]);

  /*
   * Filter stores by state and city
   */
  const filtered = useMemo(
    () =>
      stores.filter(
        (store) =>
          (state === ALL || store.state === state) &&
          (city === ALL || store.city === city),
      ),
    [state, city],
  );

  /*
   * Reset pagination whenever filters change
   */
  useEffect(() => {
    setCurrentPage(1);
  }, [state, city]);

  /*
   * Calculate total pages
   */
  const totalPages = Math.ceil(filtered.length / STORES_PER_PAGE);

  /*
   * Get stores for current page
   */
  const paginatedStores = useMemo(() => {
    const startIndex = (currentPage - 1) * STORES_PER_PAGE;

    const endIndex = startIndex + STORES_PER_PAGE;

    return filtered.slice(startIndex, endIndex);
  }, [filtered, currentPage]);

  /*
   * Handle pagination
   */
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

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

  /*
   * Handle state change
   *
   * Whenever state changes, reset city to
   * "All Cities".
   */
  const handleStateChange = (e) => {
    const selectedState = e.target.value;

    setState(selectedState);
    setCity(ALL);
  };

  return (
    <>
      <TopBar />
      <Header />

      <main className="bg-[#F5F5F7]">
        {/* =====================================================
            HERO + FILTERS
        ====================================================== */}
        <section className="mx-auto max-w-[1366px] px-4 pt-10 pb-6 md:px-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            {/* Hero */}
            <div className="relative">
              <BigBrandHeading className="text-[18vw] sm:text-[90px] md:text-[110px]">
                Our
                <br />
                Sto
                <br />
                res
              </BigBrandHeading>

              <img
                src={storeHeroIcon}
                alt="Arcot Manimark storefront illustration"
                className="pointer-events-none absolute right-0 bottom-2 w-3/5 max-w-[300px] object-contain sm:right-4"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-end gap-3">
              {/* =================================================
                  STATE FILTER
              ================================================== */}
              <label className="sr-only" htmlFor="state-filter">
                Filter by state
              </label>

              <select
                id="state-filter"
                value={state}
                onChange={handleStateChange}
                className="rounded-full border-0 bg-white px-5 py-2.5 text-sm text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 focus:ring-brand-magenta"
              >
                <option value={ALL}>All States</option>

                {storeStates.map((stateName) => (
                  <option key={stateName} value={stateName}>
                    {stateName}
                  </option>
                ))}
              </select>

              {/* =================================================
                  CITY FILTER
              ================================================== */}
              <label className="sr-only" htmlFor="city-filter">
                Filter by city
              </label>

              <select
                id="city-filter"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="rounded-full border-0 bg-white px-5 py-2.5 text-sm text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 focus:ring-brand-magenta"
              >
                <option value={ALL}>All Cities</option>

                {availableCities.map((cityName) => (
                  <option key={cityName} value={cityName}>
                    {cityName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* =====================================================
            STORE LIST
        ====================================================== */}
        <section className="mx-auto max-w-[1366px] px-4 pb-16 md:px-8">
          {filtered.length > 0 ? (
            <>
              {/* Store Grid */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {paginatedStores.map((store) => (
                  <StoreCard key={store.id} store={store} />
                ))}
              </div>

              {/* =================================================
                  PAGINATION
              ================================================== */}
              {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                  {/* Previous */}
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}
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

              {/* =================================================
                  RESULT COUNT
              ================================================== */}
              <div className="mt-4 text-center text-sm text-brand-gray">
                Showing {(currentPage - 1) * STORES_PER_PAGE + 1} -{" "}
                {Math.min(currentPage * STORES_PER_PAGE, filtered.length)} of{" "}
                {filtered.length} stores
              </div>
            </>
          ) : (
            <p className="text-brand-gray">
              No stores match those filters yet.
            </p>
          )}

          {/* =====================================================
              OPENING SOON
          ====================================================== */}
          <div className="mt-12">
            {/* <p className="font-semibold text-neutral-900">Opening soon in</p> */}

            <div className="mt-4 flex flex-wrap gap-2">
              {upcomingLocations.map((place) => (
                <span
                  key={place}
                  className="rounded-full bg-white px-4 py-2 text-sm text-brand-gray shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                >
                  {place}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
