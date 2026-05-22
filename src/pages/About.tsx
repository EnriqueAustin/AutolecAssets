import { SectionHeading } from "../components/SectionHeading";
import { images } from "../data/site";

export function About() {
  return (
    <>
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <img src={images.logoGrey} alt="Autolec Assets mark" className="w-full rounded-md bg-white object-contain p-10" />
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-normal text-white/60">About Autolec</p>
            <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
              Established from the ground up, rebuilt with field-proven experience.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75">
              AAA Autolec was originally established on the 26th of February, 1994. Gideon Steenkamp, qualified as a diesel mechanic and auto-electrician, began as sole owner and employee out of Wonderfontein.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-9 text-soil/75">
            <p>In 2003, he sold the company and underwent further training in project management, gaining experience running large projects and establishing sites before reacquiring the company in 2016.</p>
            <p>With Gideon's endless pursuit of excellence, AAA Autolec branched out into boilermaking, manufacturing, rebuilding and maintaining agricultural and construction vehicles, as well as site maintenance.</p>
            <p>He believes that no work is too daunting for AAA Autolec to tackle.</p>
          </div>
          <img src={images.team} alt="Autolec team" className="h-full min-h-[420px] w-full rounded-md object-cover" />
        </div>
      </section>

      <section className="bg-field py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Where we've been" title="A working footprint across custom builds and rebuilds." copy="The original site included a map of locations where Autolec has worked, including custom builds and rebuilds." />
          <iframe
            className="mt-8 h-[520px] w-full rounded-md border-0 shadow-xl shadow-ink/10"
            src="https://www.google.com/maps/d/u/0/embed?mid=1sgC1QcudtN3E13dJxRNd6KOewRy6Dn2E"
            title="Autolec work locations map"
          />
        </div>
      </section>
    </>
  );
}
