import { useMemo, useState } from "react";
import { MapPin, Search, RotateCcw } from "lucide-react";

import StoreMap from "./StoreMap";

export default function StoreLocator({ stores = [] }) {
  const [selectedStore, setSelectedStore] = useState(null);
  const [search, setSearch] = useState("");
  const [resetMap, setResetMap] = useState(0);

  const filteredStores = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return stores;
    }

    return stores.filter((store) => {
      return (
        store.name.toLowerCase().includes(query) ||
        store.city.toLowerCase().includes(query) ||
        store.state.toLowerCase().includes(query) ||
        store.address.toLowerCase().includes(query)
      );
    });
  }, [stores, search]);

  const handleStoreClick = (store) => {
    setSelectedStore(store);
  };

  const handleReset = () => {
    setSearch("");
    setSelectedStore(null);

    // Increment so MapController knows reset was requested
    setResetMap((prev) => prev + 1);
  };

  if (!stores.length) {
    return null;
  }

  return (
    <section className="bg-brand-pink-soft py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="font-body text-sm font-extrabold uppercase tracking-[0.2em] text-brand-magenta">
            Find Us
          </p>

          <h2 className="mt-2 font-display text-4xl font-bold text-[#1f1f1f] sm:text-5xl">
            Visit Our Stores
          </h2>

          <p className="mx-auto mt-3 max-w-2xl font-body text-brand-gray">
            Find a ManiMark store near you.
          </p>
        </div>

        {/* Locator */}
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-lg lg:grid-cols-[360px_1fr]">
          {/* Left */}
          <div className="flex max-h-[550px] flex-col p-4 sm:p-5">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">Our Stores</h3>

              <span className="rounded-full bg-brand-yellow-light px-3 py-1 font-body text-xs font-extrabold">
                {stores.length} Stores
              </span>
            </div>

            {/* Search */}
            <div className="relative mb-3">
              <Search
                size={18}
                className="
                  absolute left-3 top-1/2
                  -translate-y-1/2
                  text-brand-gray
                "
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search store or city..."
                className="
                  h-11 w-full
                  rounded-xl
                  border border-gray-200
                  bg-gray-50
                  pl-10 pr-4
                  font-body text-sm
                  outline-none
                  transition
                  focus:border-brand-magenta
                  focus:bg-white
                  focus:ring-2
                  focus:ring-brand-magenta/10
                "
              />
            </div>

            {/* Reset */}
            <button
              type="button"
              onClick={handleReset}
              className="
                mb-4
                flex w-full
                items-center justify-center gap-2
                rounded-xl
                border border-brand-teal-light
                px-4 py-2.5
                font-body
                text-sm font-extrabold
                text-brand-teal
                transition-all
                hover:border-brand-teal
                hover:bg-brand-teal-light/30
              "
            >
              <RotateCcw size={16} />
              Reset Map
            </button>

            {/* Store List */}
            <div className="flex-1 overflow-y-auto">
              {filteredStores.length > 0 ? (
                <div className="space-y-3">
                  {filteredStores.map((store) => {
                    const selected = selectedStore?.id === store.id;

                    return (
                      <button
                        key={store.id}
                        type="button"
                        onClick={() => handleStoreClick(store)}
                        className={`
                          w-full
                          rounded-2xl
                          border
                          p-4
                          text-left
                          transition-all
                          duration-300
                          ${
                            selected
                              ? "border-brand-magenta bg-brand-pink-soft shadow-sm"
                              : "border-gray-100 hover:border-brand-teal-light hover:bg-gray-50"
                          }
                        `}
                      >
                        <div className="flex gap-3">
                          <div
                            className={`
                              flex h-10 w-10 shrink-0
                              items-center justify-center
                              rounded-full
                              ${
                                selected
                                  ? "bg-brand-magenta text-white"
                                  : "bg-brand-teal-light text-brand-teal"
                              }
                            `}
                          >
                            <MapPin size={19} />
                          </div>

                          <div className="min-w-0">
                            <h4 className="font-display text-lg font-bold">
                              {store.name}
                            </h4>

                            <p className="mt-1 font-body text-sm text-brand-gray">
                              {store.address}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="py-10 text-center">
                  <MapPin size={32} className="mx-auto text-brand-teal-light" />

                  <p className="mt-3 font-body text-sm font-bold text-brand-gray">
                    No stores found
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-2 text-sm font-extrabold text-brand-magenta"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right - Map */}
          <div className="h-[400px] lg:h-[550px]">
            <StoreMap
              stores={stores}
              selectedStore={selectedStore}
              resetMap={resetMap}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
