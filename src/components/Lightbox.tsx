import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryItem = { title: string; image: string };

type LightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const item = items[index];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="animate-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <X size={22} />
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + items.length) % items.length); }}
        className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <ChevronLeft size={24} />
      </button>

      <figure className="max-h-[88vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.title} className="max-h-[80vh] w-auto rounded-md object-contain" />
        <figcaption className="mt-3 text-center text-sm font-semibold text-white/80">
          {item.title} <span className="text-white/40">({index + 1}/{items.length})</span>
        </figcaption>
      </figure>

      <button
        type="button"
        aria-label="Next image"
        onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % items.length); }}
        className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:bottom-auto"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
