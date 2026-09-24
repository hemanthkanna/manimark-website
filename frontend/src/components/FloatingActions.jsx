import { useEffect, useState } from "react";
import { ArrowUp, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917904490633";
const PHONE_NUMBER = "+917904490633";

export default function FloatingActions() {
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowActions(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`
        fixed right-4 bottom-5 z-50
        flex flex-col items-end gap-3
        transition-all duration-300
        sm:right-6 sm:bottom-6
        ${
          showActions
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }
      `}
    >
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          group relative
          flex h-13 w-13 items-center justify-center
          rounded-full
          bg-brand-teal
          text-white
          shadow-lg
          transition-all duration-300
          hover:scale-110
          hover:bg-brand-magenta
          hover:shadow-xl
          sm:h-14 sm:w-14
        "
      >
        <MessageCircle
          size={25}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:scale-110"
        />

        <span
          className="
            absolute right-16
            hidden whitespace-nowrap
            rounded-full
            bg-brand-magenta
            px-4 py-2
            text-sm font-bold text-white
            shadow-md
            sm:block
            opacity-0 translate-x-2
            transition-all duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          WhatsApp
        </span>
      </a>

      {/* Call */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call us"
        className="
          group relative
          flex h-13 w-13 items-center justify-center
          rounded-full
          bg-brand-yellow
          text-[#1f1f1f]
          shadow-lg
          transition-all duration-300
          hover:scale-110
          hover:bg-brand-magenta
          hover:text-white
          hover:shadow-xl
          sm:h-14 sm:w-14
        "
      >
        <Phone
          size={24}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:rotate-12"
        />

        <span
          className="
            absolute right-16
            hidden whitespace-nowrap
            rounded-full
            bg-brand-magenta
            px-4 py-2
            text-sm font-bold text-white
            shadow-md
            sm:block
            opacity-0 translate-x-2
            transition-all duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          Call Us
        </span>
      </a>

      {/* Scroll To Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          group
          flex h-11 w-11 items-center justify-center
          rounded-full
          bg-brand-magenta
          text-white
          shadow-lg
          transition-all duration-300
          hover:scale-110
          hover:bg-brand-magenta-dark
          hover:shadow-xl
        "
      >
        <ArrowUp
          size={21}
          strokeWidth={2.5}
          className="
            transition-transform duration-300
            group-hover:-translate-y-1
          "
        />
      </button>
    </div>
  );
}
