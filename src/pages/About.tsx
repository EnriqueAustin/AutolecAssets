import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { gallery, images } from "../data/site";

export function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="AAA Autolec was established in 1994 by diesel mechanic and auto-electrician Gideon Steenkamp. Today the team handles boilermaking, manufacturing, rebuilds and site maintenance across South Africa."
        path="/about"
      />
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="animate-scale-in overflow-hidden rounded-md">
            <img src={images.workshop} alt="Gideon welding in the Autolec workshop" loading="lazy" decoding="async" className="h-full min-h-[340px] w-full rounded-md object-cover" />
          </div>
          <div>
            <p className="animate-fade-in-down mb-4 text-sm font-extrabold uppercase tracking-wide text-white/60">About Autolec</p>
            <h1 className="animate-fade-in-up font-display text-4xl leading-tight text-white md:text-6xl">
              Established from the ground up, rebuilt with field-proven experience.
            </h1>
            <p className="animate-fade-in-up delay-200 mt-6 text-lg leading-8 text-white/75">
              AAA Autolec was originally established on the 26th of February, 1994. Gideon Steenkamp, qualified as a diesel mechanic and auto-electrician, began as sole owner and employee out of Wonderfontein.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <div className="space-y-6 text-lg leading-9 text-soil/75">
              <p>In 2003, he sold the company and underwent further training in project management, gaining experience running large projects and establishing sites before reacquiring the company in 2016.</p>
              <p>With Gideon's endless pursuit of excellence, AAA Autolec branched out into boilermaking, manufacturing, rebuilding and maintaining agricultural and construction vehicles, as well as site maintenance.</p>
              <p>He believes that no work is too daunting for AAA Autolec to tackle.</p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <img src={images.team} alt="Autolec team" loading="lazy" decoding="async" className="h-full min-h-[420px] w-full rounded-md object-cover transition-transform duration-500 hover:scale-[1.02]" />
          </Reveal>
        </div>
      </section>

      <section className="bg-field py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <SectionHeading eyebrow="Where we've been" title="A working footprint across custom builds and rebuilds." copy="From our base in Middelburg, we've delivered custom builds, rebuilds and on-site maintenance to agricultural operations across Mpumalanga and beyond." />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {gallery.slice(0, 3).map((item, i) => (
              <Reveal key={item.title} delay={200 + i * 120}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full rounded-md object-cover shadow-lg shadow-ink/10 transition-transform duration-500 hover:scale-[1.02]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
