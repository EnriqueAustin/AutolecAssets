import { gallery } from "../data/site";

export function Gallery() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-normal text-autolec-green">Gallery</p>
          <h1 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            Built, rebuilt, delivered and working in the field.
          </h1>
          <p className="mt-5 text-base leading-8 text-soil/75 md:text-lg">
            A selection of Autolec machines, workshop progress, rebuilds and completed agricultural equipment.
          </p>
        </div>
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((item) => (
            <figure key={item.title} className="mb-5 break-inside-avoid overflow-hidden rounded-md border border-ink/10 bg-field">
              <img src={item.image} alt={item.title} className="w-full object-cover" />
              <figcaption className="px-4 py-3 text-sm font-bold text-soil/80">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
