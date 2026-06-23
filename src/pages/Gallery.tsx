import { useState } from "react";
import { Lightbox } from "../components/Lightbox";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { gallery } from "../data/site";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <Seo
        title="Gallery"
        description="A selection of Autolec machines, workshop progress, rebuilds and completed agricultural equipment built, rebuilt and delivered across South Africa."
        path="/gallery"
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-in-down mb-3 text-sm font-extrabold uppercase tracking-wide text-autolec-green">Gallery</p>
          <h1 className="animate-fade-in-up font-display text-4xl leading-tight text-ink md:text-6xl">
            Built, rebuilt, delivered and working in the field.
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 text-base leading-8 text-soil/75 md:text-lg">
            A selection of Autolec machines, workshop progress, rebuilds and completed agricultural equipment.
          </p>
        </div>
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 100}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`View ${item.title}`}
                className="mb-5 block w-full break-inside-avoid overflow-hidden rounded-md border border-ink/10 bg-field text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autolec-green"
              >
                <figure>
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="w-full object-cover transition-transform duration-500 hover:scale-105" />
                  <figcaption className="px-4 py-3 text-sm font-bold text-soil/80">{item.title}</figcaption>
                </figure>
              </button>
            </Reveal>
          ))}
        </div>
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
