import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { images } from "../data/site";

export function About() {
  return (
    <>
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="animate-scale-in w-full rounded-md bg-white object-contain p-10">
            <img src={images.logoGrey} alt="Autolec Assets mark" className="w-full object-contain" />
          </div>
          <div>
            <p className="animate-fade-in-down mb-4 text-sm font-extrabold uppercase tracking-normal text-white/60">About Autolec</p>
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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="space-y-6 text-lg leading-9 text-soil/75">
              <p>In 2003, he sold the company and underwent further training in project management, gaining experience running large projects and establishing sites before reacquiring the company in 2016.</p>
              <p>With Gideon's endless pursuit of excellence, AAA Autolec branched out into boilermaking, manufacturing, rebuilding and maintaining agricultural and construction vehicles, as well as site maintenance.</p>
              <p>He believes that no work is too daunting for AAA Autolec to tackle.</p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <img src={images.team} alt="Autolec team" className="h-full min-h-[420px] w-full rounded-md object-cover transition-transform duration-500 hover:scale-[1.02]" />
          </Reveal>
        </div>
      </section>

      <section className="bg-field py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <SectionHeading eyebrow="Where we've been" title="A working footprint across custom builds and rebuilds." copy="The original site included a map of locations where Autolec has worked, including custom builds and rebuilds." />
          </Reveal>
          <Reveal delay={200}>
            <iframe
              className="mt-8 h-[520px] w-full rounded-md border-0 shadow-xl shadow-ink/10"
              src="https://maps.google.com/maps?q=53+November+St,+Middelburg,+1050,+South+Africa&output=embed"
              title="Autolec work locations map"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
