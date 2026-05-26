import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { SpecTable } from "../components/SpecTable";
import { Button } from "../components/ui/Button";
import { contact, gallery, machines } from "../data/site";

export function Machines() {
  return (
    <>
      <section className="bg-ink px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="animate-fade-in-down mb-4 text-sm font-extrabold uppercase tracking-normal text-white/60">Our machines</p>
          <h1 className="animate-fade-in-up max-w-5xl font-display text-5xl leading-tight md:text-7xl">High-capacity agricultural bagging and de-bagging machines.</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6">
          {machines.map((machine, index) => (
            <Reveal key={machine.title} as="article">
              <div className="grid gap-8 rounded-md border border-ink/10 bg-field/60 p-4 md:p-6 lg:grid-cols-2 lg:items-start">
                <img
                  src={machine.image}
                  alt={machine.title}
                  className={`h-full min-h-[420px] w-full rounded-md object-cover transition-transform duration-500 hover:scale-[1.02] ${index % 2 ? "lg:order-2" : ""}`}
                />
                <div className="p-2 md:p-4">
                  <SectionHeading eyebrow="Machine profile" title={machine.title} />
                  <div className="mt-6 grid gap-4 text-soil/75">
                    {machine.copy.map((paragraph) => (
                      <p key={paragraph} className="leading-8">{paragraph}</p>
                    ))}
                  </div>
                  <h3 className="mt-8 mb-4 font-display text-2xl">Specifications</h3>
                  <SpecTable rows={machine.specs} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading eyebrow="Machine gallery" title="Recent builds, rebuilds and site-ready equipment." className="text-white [&_h2]:text-white [&_p]:text-white/70" />
            </Reveal>
            <Reveal delay={200}>
              <Button asChild variant="outline"><a href={`mailto:${contact.email}`}>Ask About a Build</a></Button>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.slice(0, 8).map((item, i) => (
              <Reveal key={item.title} delay={i * 80} as="figure">
                <div className="overflow-hidden rounded-md bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg">
                  <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105" />
                  <p className="px-4 py-3 text-sm font-semibold text-white/80">{item.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
