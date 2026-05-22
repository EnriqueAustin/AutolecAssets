import { ArrowRight, CheckCircle2, Factory, Gauge, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageCard } from "../components/ImageCard";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/ui/Button";
import { contact, faqs, images, services, stats } from "../data/site";

export function Home() {
  return (
    <>
      <section className="clip-angle relative min-h-[720px] overflow-hidden bg-ink text-white">
        <img src={images.hero} alt="Autolec agricultural machine in the field" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/75 to-ink/20" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-32 pt-20 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-md bg-autolec-green px-4 py-2 text-sm font-extrabold uppercase tracking-normal">
              We strive for excellence
            </p>
            <h1 className="font-display text-5xl leading-none text-balance md:text-7xl">
              Agricultural machinery built, repaired and maintained for hard working sites.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Autolec Assets repairs and maintains agricultural vehicles, machines, facilities and equipment, and manufactures improved baggers and de-baggers from real field experience.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/machines">Explore Machines <ArrowRight size={18} /></Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${contact.email}`}>Request Support</a>
              </Button>
            </div>
          </div>
          <div className="hidden rounded-md border border-white/20 bg-white/10 p-5 backdrop-blur lg:block">
            <img src={images.logo} alt="Autolec Assets logo" className="mx-auto h-44 w-44 object-contain" />
            <div className="mt-5 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-md bg-white p-4 text-ink">
                  <p className="font-display text-2xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-normal text-soil/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="About us"
            title="Field experience turned into practical machine innovation."
            copy="AAA Autolec was originally established on 26 February 1994. Today, that repair and project experience supports mechanical, auto-electrical, boilermaking, manufacturing, rebuilding and site maintenance work."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Mastery", "Diesel mechanic and auto-electrician expertise."],
              ["Dedication", "Repair, rebuild and maintain equipment used in tough agricultural environments."],
              ["Innovation", "Improved machine designs shaped by servicing real equipment."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-md border border-ink/10 p-5">
                <CheckCircle2 className="mb-4 text-autolec-green" />
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-soil/70">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-field py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our service solutions"
              title="A practical one-stop partner for agricultural machinery work."
            />
            <Button asChild variant="secondary">
              <Link to="/what-we-offer">What We Offer</Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <ImageCard key={service.title} title={service.title} copy={service.copy} image={service.image} to="/what-we-offer" tone={service.tone} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={images.machines} alt="De-bagger machinery" className="h-80 w-full rounded-md object-cover" />
            <img src={images.workshop} alt="Autolec workshop welding" className="mt-10 h-80 w-full rounded-md object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our machines"
              title="Baggers and de-baggers designed for high throughput and simpler maintenance."
              copy="Autolec machines are designed around real operator needs: standard tractor compatibility, accessible components, metric parts and robust site performance."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-md bg-autolec-green p-5 text-white"><Gauge /><p className="mt-4 font-bold">150-200t/h loading capacity</p></div>
              <div className="rounded-md bg-autolec-red p-5 text-white"><Factory /><p className="mt-4 font-bold">Manufacturing and rebuilding</p></div>
              <div className="rounded-md bg-autolec-blue p-5 text-white"><Wrench /><p className="mt-4 font-bold">Mechanical and electrical support</p></div>
            </div>
            <Button asChild className="mt-8">
              <Link to="/machines">View Machine Details</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading align="center" eyebrow="Frequently asked questions" title="Quick answers before you call." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-md bg-white p-6 shadow-sm shadow-ink/5">
                <h3 className="font-bold text-ink">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-soil/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
