import { useMemo, useState } from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BigBrandHeading from '../components/BigBrandHeading'
import StoreCard from '../components/store/StoreCard'
import storeHeroIcon from '../assets/images/store-hero-icon.png'
import { stores, storeStates, storeCities, upcomingLocations } from '../data/stores'

const ALL = 'All'

export default function StoreList() {
  const [state, setState] = useState(ALL)
  const [city, setCity] = useState(ALL)

  const filtered = useMemo(
    () =>
      stores.filter(
        (store) =>
          (state === ALL || store.state === state) && (city === ALL || store.city === city)
      ),
    [state, city]
  )

  return (
    <>
      <TopBar />
      <Header />
      <main className="bg-[#F5F5F7]">
        <section className="mx-auto max-w-[1366px] px-4 pt-10 pb-6 md:px-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
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
                className="pointer-events-none absolute right-0 bottom-2 w-2/5 max-w-[220px] object-contain sm:right-4"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-end gap-3">
              <label className="sr-only" htmlFor="state-filter">
                Filter by state
              </label>
              <select
                id="state-filter"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="rounded-full border-0 bg-white px-5 py-2.5 text-sm text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 focus:ring-brand-magenta"
              >
                <option value={ALL}>All States</option>
                {storeStates.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
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
                {storeCities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1366px] px-4 pb-16 md:px-8">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((store) => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
          ) : (
            <p className="text-brand-gray">No stores match those filters yet.</p>
          )}

          <div className="mt-12">
            <p className="font-semibold text-neutral-900">Opening soon in</p>
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
  )
}
