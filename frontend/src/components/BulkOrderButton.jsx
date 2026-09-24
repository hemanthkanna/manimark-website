import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function BulkOrderButton() {
  return (
    <Link
      to="/bulk-order"
      className="
        inline-flex items-center gap-2
        rounded-full
        bg-brand-yellow
        px-5 py-3
        font-body
        text-sm font-extrabold
        text-[#1f1f1f]
        shadow-md
        transition-all duration-300
        hover:bg-brand-yellow-light
        hover:shadow-lg
        hover:-translate-y-0.5
      "
    >
      <ShoppingCart size={18} />

      <span>Bulk Order</span>
    </Link>
  );
}
