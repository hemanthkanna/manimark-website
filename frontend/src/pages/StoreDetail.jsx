import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import RatingStars from "../components/RatingStars";
import StoreCard from "../components/store/StoreCard";
import { getStoreById, stores } from "../data/stores";

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function StoreDetail() {
  const { storeId } = useParams();
  const store = getStoreById(storeId);

  const [showAllStores, setShowAllStores] = useState(false);

  if (!store) {
    return (
      <>
        <TopBar />
        <Header />

        <main className="mx-auto max-w-[1366px] px-4 py-20 text-center md:px-8">
          <p className="text-lg font-semibold text-neutral-900">
            Store not found
          </p>

          <p className="mt-2 text-brand-gray">
            This store may have moved or isn&apos;t open yet.
          </p>

          <Link
            to="/store"
            className="mt-6 inline-block rounded-full bg-brand-yellow px-6 py-2.5 text-sm font-semibold text-neutral-900"
          >
            Back to all stores
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const otherStores = stores.filter((s) => s.id !== store.id);

  // Show only 4 initially
  const visibleStores = showAllStores ? otherStores : otherStores.slice(0, 4);

  const mapsHref = store.mapUrl;

  return (
    <>
      <TopBar />
      <Header />

      <main className="bg-[#F5F5F7]">
        <section className="mx-auto max-w-[1366px] px-4 pt-8 pb-16 md:px-8">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Find a Store", to: "/store" },
              { label: store.name },
            ]}
          />

          <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="overflow-hidden rounded-[24px]">
              <img
                src={store.photo}
                alt={`${store.name} store front`}
                className="h-100 w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
                {store.name}
              </h1>

              <p className="mt-2 text-brand-gray">{store.address}</p>

              <div className="mt-4 flex items-center gap-4">
                <RatingStars rating={store.rating} />

                <span className="text-sm text-brand-gray">
                  Opened {dateFormatter.format(new Date(store.openingDate))}
                </span>
              </div>

              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-fit rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:brightness-105"
              >
                Get Directions
              </a>
            </div>
          </div>

          {otherStores.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-neutral-900">Other stores</p>

                {otherStores.length > 4 && (
                  <button
                    type="button"
                    onClick={() => setShowAllStores((prev) => !prev)}
                    className="text-sm font-semibold text-neutral-900 underline underline-offset-4"
                  >
                    {showAllStores ? "Show Less" : "View All"}
                  </button>
                )}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {visibleStores.map((s) => (
                  <StoreCard key={s.id} store={s} />
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
