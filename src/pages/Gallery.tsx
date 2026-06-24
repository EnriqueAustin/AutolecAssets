import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Lightbox } from "../components/Lightbox";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { Button } from "../components/ui/Button";
import { gallery, galleryCategories } from "../data/site";

type Filter = "All" | (typeof galleryCategories)[number];

const filters: Filter[] = ["All", ...galleryCategories];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (activeFilter === "All" ? gallery : gallery.filter((item) => item.category === activeFilter)),
    [activeFilter],
  );

  const countFor = (filter: Filter) =>
    filter === "All" ? gallery.length : gallery.filter((item) => item.category === filter).length;

  return (
    <section className="bg-white py-20">
      <Seo
        title="Gallery"
        description="A selection of Autolec baggers, de-baggers, outloaders and workshop builds — agricultural equipment built, rebuilt and delivered across South Africa."
        path="/gallery"
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-in-down mb-3 text-sm font-extrabold uppercase tracking-wide text-autolec-green">Gallery</p>
          <h1 className="animate-fade-in-up font-display text-4xl leading-tight text-ink md:text-6xl">
            Built, rebuilt, delivered and working in the field.
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 text-base leading-8 text-soil/75 md:text-lg">
            Real baggers, de-baggers and outloaders from the Autolec workshop — from frame fabrication right through to machines loaded and ready for site.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5" role="group" aria-label="Filter gallery by machine type">
          {filters.map((filter) => {
            const active = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={active}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm font-bold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autolec-green ${
                  active
                    ? "border-autolec-green bg-autolec-green text-white"
                    : "border-ink/15 bg-white text-soil/80 hover:border-autolec-green/50 hover:text-ink"
                }`}
              >
                {filter}
                <span className={active ? "ml-1.5 text-white/70" : "ml-1.5 text-soil/40"}>{countFor(filter)}</span>
              </button>
            );
          })}
        </div>

        <div key={activeFilter} className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((item, i) => {
            const galleryIndex = gallery.indexOf(item);
            return (
              <Reveal key={item.title} delay={(i % 3) * 100}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(galleryIndex)}
                  aria-label={`View ${item.title}`}
                  className="mb-5 block w-full break-inside-avoid overflow-hidden rounded-md border border-ink/10 bg-field text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autolec-green"
                >
                  <figure>
                    <img
                      src={item.image}
                      alt={item.title}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <figcaption className="px-4 py-3">
                      <span className="block text-sm font-bold text-ink">{item.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-soil/75">{item.description}</span>
                    </figcaption>
                  </figure>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-md bg-ink px-6 py-12 text-center text-white md:px-12">
            <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-4xl">
              Need a machine built, rebuilt or delivered?
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/70">
              Tell us what you run and the throughput you need — we'll build or rebuild to suit your site.
            </p>
            <Button asChild>
              <Link to="/contact">Get in touch <ArrowRight size={18} /></Link>
            </Button>
          </div>
        </Reveal>
      </div>

      {openIndex !== null && (
        <Lightbox
          items={gallery}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
