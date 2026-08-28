import curlySwirl from "../assets/images/curly-swirl.png";
import girlProduct from "../assets/images/girl-product.png";
import storeIllustration from "../assets/images/store-illustration.png";
import shopNowMascot from "../assets/images/shop-now-mascot.png";
import starBurst from "../assets/images/star-burst-bg.png";
import StarIcon from "./StarIcon";

function NewArrivalsCard() {
  return (
    <div className="relative flex h-full min-h-[520px] flex-col overflow-hidden rounded-[28px] bg-brand-yellow-light md:min-h-full">
      <img
        src={curlySwirl}
        alt=""
        className="pointer-events-none absolute top-0 left-0 h-3/4 w-3/4 object-contain opacity-90"
      />
      <img
        src={girlProduct}
        alt="Model holding an Arcot Manimark peanut burfi pack"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="relative z-10 mt-auto flex flex-col items-end gap-4 p-6 text-right sm:p-8">
        <h3 className="font-display text-4xl leading-[0.95] font-semibold text-white uppercase drop-shadow-sm sm:text-5xl">
          New
          <br />
          Arrivals
        </h3>
        <button
          type="button"
          className="rounded-full bg-brand-orange px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 cursor-pointer"
        >
          View more
        </button>
      </div>
    </div>
  );
}

function FindOutletCard() {
  return (
    <div className="relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[28px] bg-brand-teal-light p-5 sm:min-h-[260px] sm:p-8">
      <h3 className="font-display relative z-10 text-right text-2xl leading-[0.95] font-semibold text-white uppercase sm:text-3xl lg:text-4xl">
        Find
        <br />
        Outlet
      </h3>
      <img
        src={storeIllustration}
        alt="Arcot Manimark storefront"
        className="pointer-events-none absolute -bottom-2 -left-4 h-[55%] w-auto object-contain sm:h-[62%]"
      />
    </div>
  );
}

function ShopNowCard() {
  return (
    <div className="relative flex h-full min-h-[220px] flex-col justify-center overflow-hidden rounded-[28px] bg-brand-pink-card p-5 sm:min-h-[260px] sm:p-8">
      <img
        src={shopNowMascot}
        alt="Arcot Manimark mascot shopping with a basket of peanut burfi products"
        className="pointer-events-none absolute top-0 -right-3 h-[78%] max-h-none w-auto object-contain sm:-top-6 sm:-right-3 sm:h-[115%]"
      />
      <div className="relative z-10 max-w-[62%] sm:max-w-none">
        <h3 className="font-display text-2xl leading-[0.95] font-semibold text-white sm:text-3xl lg:text-4xl">
          <span className="uppercase">Shop</span>
          <br />
          <span className="lowercase">now</span>
        </h3>
        <button
          type="button"
          className="mt-4 w-fit rounded-full bg-brand-yellow px-6 py-2.5 text-sm font-semibold text-neutral-900 transition hover:brightness-105 cursor-pointer"
        >
          Products
        </button>
      </div>
    </div>
  );
}

function ReviewCard() {
  return (
    <div className="relative flex h-full min-h-[200px] flex-col justify-center overflow-hidden rounded-[28px] bg-brand-review-yellow p-5 sm:min-h-[220px] sm:p-8">
      <img
        src={starBurst}
        alt=""
        className="pointer-events-none absolute -top-10 -right-6 h-32 w-32 object-contain opacity-95 sm:h-40 sm:w-40"
      />
      <img
        src={starBurst}
        alt=""
        className="pointer-events-none absolute -bottom-10 right-16 h-24 w-24 object-contain opacity-90 sm:h-28 sm:w-28"
      />
      <div className="relative z-10 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-5 w-5" fill="#ffffff" />
        ))}
      </div>
      <p className="relative z-10 mt-3 max-w-md text-[15px] leading-relaxed text-neutral-900">
        Very tasty groundnut specialities made from selective nuts and jaggery.
        Now they have introduced many more varities of sweets using groundnut.
      </p>
      <p className="relative z-10 mt-3 text-sm font-semibold text-neutral-900">
        immanuel rajaiah (Google Reviewer)
      </p>
    </div>
  );
}

export default function PromoGrid() {
  return (
    <section className="mx-auto max-w-[1366px] px-4 pb-10 md:px-8">
      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        <div className="md:row-span-1">
          <NewArrivalsCard />
        </div>
        <div className="flex flex-col gap-5 md:gap-6">
          <div className="grid grid-cols-2 gap-5 md:gap-6">
            <FindOutletCard />
            <ShopNowCard />
          </div>
          <ReviewCard />
        </div>
      </div>
    </section>
  );
}
