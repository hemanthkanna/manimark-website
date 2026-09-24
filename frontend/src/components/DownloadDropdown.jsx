import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download, FileText } from "lucide-react";

export default function DownloadDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDownload = (type) => {
    // Placeholder for now
    console.log(`Download ${type}`);

    // Later:
    // window.open(fileUrl, "_blank");
    // or trigger actual download
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* Main Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          flex items-center gap-2
          rounded-full
          bg-brand-magenta
          px-5 py-3
          font-body
          text-sm font-extrabold
          text-white
          shadow-md
          transition-all duration-300
          hover:bg-brand-magenta-dark
          hover:shadow-lg
        "
      >
        <Download size={18} />

        <span>Downloads</span>

        <ChevronDown
          size={18}
          className={`
            transition-transform duration-300
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`
          absolute right-0 top-full z-50 mt-2
          w-52
          origin-top-right
          rounded-2xl
          bg-white
          p-2
          shadow-xl
          ring-1 ring-black/5
          transition-all duration-200
          ${
            isOpen
              ? "visible scale-100 opacity-100"
              : "invisible scale-95 opacity-0"
          }
        `}
      >
        {/* Brochure */}
        <button
          type="button"
          onClick={() => handleDownload("Brochure")}
          className="
            flex w-full items-center gap-3
            rounded-xl
            px-4 py-3
            text-left
            transition-colors duration-200
            hover:bg-brand-pink-soft
          "
        >
          <div
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-full
              bg-brand-teal-light
              text-brand-teal
            "
          >
            <FileText size={18} />
          </div>

          <div>
            <p className="font-body text-sm font-extrabold text-[#1f1f1f]">
              Brochure
            </p>

            <p className="font-body text-xs text-brand-gray">
              Download brochure
            </p>
          </div>
        </button>

        {/* Catalog */}
        <button
          type="button"
          onClick={() => handleDownload("Catalog")}
          className="
            flex w-full items-center gap-3
            rounded-xl
            px-4 py-3
            text-left
            transition-colors duration-200
            hover:bg-brand-pink-soft
          "
        >
          <div
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-full
              bg-brand-yellow-light
              text-brand-orange
            "
          >
            <FileText size={18} />
          </div>

          <div>
            <p className="font-body text-sm font-extrabold text-[#1f1f1f]">
              Catalog
            </p>

            <p className="font-body text-xs text-brand-gray">
              Download catalog
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
