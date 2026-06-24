import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryItem = { title: string; image: string; description?: string };

type LightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const item = items[index];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
    // Focus capture/restore must run once per mount, not on every navigation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onNavigate]);

  if (!item) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="animate-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        ref={closeRef}
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
        <img src={item.image} alt={item.title} className="mx-auto max-h-[78vh] w-auto rounded-md object-contain" />
        <figcaption className="mx-auto mt-3 max-w-2xl text-center">
          <p className="text-sm font-semibold text-white">
            {item.title} <span className="text-white/60">({index + 1}/{items.length})</span>
          </p>
          {item.description && <p className="mt-1 text-sm leading-6 text-white/70">{item.description}</p>}
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
