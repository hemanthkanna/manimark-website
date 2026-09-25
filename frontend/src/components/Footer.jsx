import { useState } from "react";
import { Link } from "react-router-dom";
import ebrochPhoto from "../assets/images/ebroch-photo.png";
import chatBg from "../assets/images/chat-bg.png";
import whatsappIcon from "../assets/images/whatsapp-icon.png";
import socialPinterest from "../assets/images/social-pinterest.png";
import socialInstagram from "../assets/images/social-instagram.png";
import socialFacebook from "../assets/images/social-facebook.png";
import socialYoutube from "../assets/images/social-youtube.png";
import socialQuora from "../assets/images/social-quora.png";
import socialReddit from "../assets/images/social-reddit.png";
import ChatBot from "./ChatBot";
import { categories } from "../data/categories";
import { products } from "../data/products";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/about-us" },
  { label: "Find a Store", to: "/store" },
  { label: "Contact Us", to: "/coming-soon" },
];

const POLICIES = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Cookie Policy", to: "/cookie-policy" },
];

const WHATS_NEW = [
  { label: "Deals", to: "/coming-soon" },
  { label: "New Arrivals", to: "/" },
];

const BROWSE_CATEGORIES = categories.map((c) => ({
  label: c.name,
  to: `/products/${c.slug}`,
}));
const POPULAR_PRODUCT_IDS = [
  "peanut-burfi",
  "fine-peanut-burfi",
  "coconut-balls",
  "energy-laddu",
];

const POPULAR_PRODUCTS = POPULAR_PRODUCT_IDS.map((id) => {
  const product = products.find((p) => p.id === id);
  return { label: product.name.toLowerCase(), to: `/product/${product.id}` };
});
const DISCOVER_MANIMARK = [
  { label: "Quality & Hygiene", to: "/about-us#quality-hygiene" },
  { label: "Dealer / Distributor Enquiry", to: "/coming-soon" },
  { label: "Bulk Orders", to: "/coming-soon" },
  { label: "Careers", to: "/coming-soon" },
  { label: "FAQ", to: "/coming-soon" },
];

const SOCIALS = [
  {
    src: socialPinterest,
    label: "Pinterest",
    link: "https://in.pinterest.com/arcotmanimarkfoodspvtltd/",
  },
  {
    src: socialInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/arcotmanimark_official",
  },
  {
    src: socialFacebook,
    label: "Facebook",
    link: "https://www.facebook.com/Manimarkfoodspvtltd/",
  },
  {
    src: socialYoutube,
    label: "YouTube",
    link: "https://www.youtube.com/@arcotmanimarkfoodspvtltd",
  },
  {
    src: socialReddit,
    label: "Reddit",
    link: "https://www.reddit.com/user/Manimarkfoodpvtltd/",
  },
  {
    src: socialQuora,
    label: "Quora",
    link: "https://www.quora.com/profile/Arcot-Manimark-Foods-Pvt-Ltd",
  },
];

function FooterHeading({ children }) {
  return <h4 className="font-semibold text-neutral-900">{children}</h4>;
}

// For routable items: [{ label, to }]
function FooterList({ items }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map(({ label, to }) => (
        <li key={label}>
          <Link
            to={to}
            state={to === "/coming-soon" ? { navLabel: label } : undefined}
            className="text-brand-gray transition hover:text-brand-magenta"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// For placeholder items with no destination yet.
function FooterPlainList({ items }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.to}
            className="text-brand-gray transition hover:text-brand-magenta"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <footer className="bg-white pt-14 pb-10">
      <div className="mx-auto max-w-[1366px] px-4 md:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 text-sm sm:grid-cols-3 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1fr_2fr] lg:gap-x-6">
          {/* Company info */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="font-semibold text-neutral-900">
              Arcot Manimark Foods PVT. LTD.
            </p>
            <p className="mt-2 leading-relaxed text-brand-gray">
              S.F. No. 870/5, Narayanapuram Village,
              <br />
              Kannamangalam Road, Kavanoor Post,
              <br />
              Arcot Taluk, Ranipet District,
              <br />
              Tamil Nadu – 632507.
            </p>
            <p className="mt-4 leading-relaxed text-brand-gray">
              <a
                href="tel:+91 79044 89576"
                className="hover:text-brand-magenta"
              >
                +91 79044 89576
              </a>
              <br />
              <a
                href="mailto:customercare@manimark.com"
                className="hover:text-brand-magenta"
              >
                customercare@manimark.com
              </a>
            </p>
            <p className="mt-4 leading-relaxed text-brand-gray">
              © 2026 Arcot Manimark Foods |
              <br />
              All Rights Reserved |
              <br />
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ src, label, link }) => (
                <a
                  key={label}
                  href={link}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 transition hover:border-brand-magenta"
                >
                  <img src={src} alt="" className="h-4 w-4 object-contain" />
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links + Policies */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterList items={QUICK_LINKS} />
            <div className="mt-6">
              <FooterHeading>Policies</FooterHeading>
              <FooterList items={POLICIES} />
            </div>
          </div>
          {/* What's New + Browse Categories */}
          <div>
            <FooterHeading>What&apos;s New</FooterHeading>
            <FooterList items={WHATS_NEW} />
            <div className="mt-6">
              <FooterHeading>Browse Categories</FooterHeading>
              <FooterList items={BROWSE_CATEGORIES} />
            </div>
          </div>
          {/* Popular Products */}
          <div>
            <FooterHeading>Popular Products</FooterHeading>
            <FooterList items={POPULAR_PRODUCTS} />
          </div>
          {/* Discover Manimark */}
          <div>
            <FooterHeading>Discover Manimark</FooterHeading>
            <FooterList items={DISCOVER_MANIMARK} />
          </div>
          {/* Promo cards */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              {/* E-Brochure */}
              <a
                href="#"
                className="group relative flex min-h-[120px] flex-1 items-center overflow-hidden rounded-2xl bg-brand-magenta px-5 py-4 sm:h-32"
              >
                <span className="font-display relative z-10 text-2xl font-semibold uppercase text-white">
                  E-Broch
                </span>

                <img
                  src={ebrochPhoto}
                  alt="Download the Arcot Manimark e-brochure"
                  className="absolute right-0 top-0 h-full w-auto max-w-[65%] object-cover opacity-90 transition group-hover:opacity-100"
                />
              </a>

              {/* WhatsApp */}
              <button
                type="button"
                onClick={() => setIsChatOpen(true)}
                className="group relative flex min-h-[120px] flex-1 items-center overflow-hidden rounded-2xl bg-[#3CB54A] px-5 py-4 text-left sm:h-32"
              >
                <span className="font-display relative z-10 text-3xl font-semibold text-white">
                  Hi
                </span>

                <img
                  src={chatBg}
                  alt=""
                  className="absolute right-0 top-0 h-full w-auto max-w-[65%] object-cover"
                />

                <img
                  src={whatsappIcon}
                  alt=""
                  className="absolute bottom-4 left-14 z-10 h-6 w-6 object-contain"
                />
              </button>
            </div>

            {/* Chatbot */}
            <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
          </div>
        </div>
      </div>
    </footer>
  );
}
