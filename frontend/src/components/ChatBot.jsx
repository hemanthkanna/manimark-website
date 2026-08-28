import { X } from "lucide-react";

const ChatBot = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] h-[500px] w-[380px] overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close chatbot"
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition hover:bg-white"
      >
        <X size={18} />
      </button>

      <iframe
        src="https://mani-mark-roh4.vercel.app/"
        title="ChatBot"
        className="h-full w-full border-0"
      />
    </div>
  );
};

export default ChatBot;
