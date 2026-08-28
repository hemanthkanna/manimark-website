import ebrochPhoto from "../assets/images/ebroch-photo.png";
import chatBg from "../assets/images/chat-bg.png";
import whatsappIcon from "../assets/images/whatsapp-icon.png";
import socialPinterest from "../assets/images/social-pinterest.png";
import socialInstagram from "../assets/images/social-instagram.png";
import socialFacebook from "../assets/images/social-facebook.png";
import socialYoutube from "../assets/images/social-youtube.png";
import socialQuora from "../assets/images/social-quora.png";

const QUICK_LINKS = [
  "Home",
  "Products",
  "About Us",
  "Find a Store",
  "Contact Us",
];
const POLICIES = ["Privacy Policy", "Cookies Policy", "Terms and Condition"];
const WHATS_NEW = ["Deals", "New Arrivals"];
const BROWSE_CATEGORIES = [
  "Burfi",
  "Balls",
  "Savouries",
  "Sweets",
  "Premium Products",
  "Gift Boxes",
  "Oils",
];
const POPULAR_PRODUCTS = [
  "Peanut Burfi",
  "Fine Peanut Burfi",
  "Kamarkat",
  "Coconut Balls",
  "Sesame Balls",
  "Energy Laddu",
  "Masala Peanut",
];

const SOCIALS = [
  {
    src: socialPinterest,
    label: "Pinterest",
    link: "https://www.youtube.com/channel/UC3h-J8j4uvtQGJd_Lz8lxOw",
  },
  {
    src: socialInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/arcotmanimark_official/",
  },
  {
    src: socialFacebook,
    label: "Facebook",
    link: "https://www.facebook.com/Manimarksnacks/",
  },
  {
    src: socialYoutube,
    label: "YouTube",
    link: "https://www.youtube.com/channel/UC3h-J8j4uvtQGJd_Lz8lxOw",
  },
  { src: socialQuora, label: "Quora", link: "https://www.quora.com" },
];

function FooterHeading({ children }) {
  return <h4 className="font-semibold text-neutral-900">{children}</h4>;
}

function FooterList({ items }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item}>
          <a
            href="#"
            className="text-brand-gray transition hover:text-brand-magenta"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white pt-14 pb-10">
      <div className="mx-auto max-w-[1366px] px-4 md:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 text-sm sm:grid-cols-3 lg:grid-cols-[1.9fr_1fr_1fr_1fr_2.3fr] lg:gap-x-8">
          {/* Company info */}
          <div className="col-span-2 sm:col-span-1">
            <p className="font-semibold text-neutral-900">
              Arcot Manimark Foods PVT. LTD.
            </p>
            <p className="mt-2 leading-relaxed text-brand-gray">
              S.F,No:870/5, Narayanapuram Village,
              <br />
              Kannamangalam Road, Kavanoor Post,
              <br />
              Arcot Thaluk, Ranipet Dis, Tamilnadu,
              <br />
              Ranipet, Tamil Nadu - 632507
            </p>
            <p className="mt-4 leading-relaxed text-brand-gray">
              7904490146 / 7904490633
              <br />
              customercare@manimark.com
            </p>
            <p className="mt-4 leading-relaxed text-brand-gray">
              © 2026 Arcot Manimark Foods |
              <br />
              All Rights Reserved |
              <br />
              Website Design by Regin Designs
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

          {/* Promo cards */}
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-2 lg:col-span-1 lg:max-w-xs">
            <a
              href="#"
              className="group relative flex h-32 items-center overflow-hidden rounded-2xl bg-brand-magenta px-5"
            >
              <span className="font-display relative z-10 text-2xl font-semibold text-white uppercase">
                E-Broch
              </span>
              <img
                src={ebrochPhoto}
                alt="Download the Arcot Manimark e-brochure"
                className="absolute inset-y-0 right-0 h-full w-auto object-cover opacity-90 transition group-hover:opacity-100"
              />
            </a>
            <a
              href="#"
              className="group relative flex h-32 items-center overflow-hidden rounded-2xl bg-[#3CB54A] px-5"
            >
              <span className="font-display relative z-10 text-3xl font-semibold text-white">
                Hi
              </span>
              <img
                src={chatBg}
                alt="Chat with Arcot Manimark support on WhatsApp"
                className="absolute inset-y-0 right-0 h-full w-auto object-cover"
              />
              <img
                src={whatsappIcon}
                alt=""
                className="absolute bottom-4 left-14 h-6 w-6 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
