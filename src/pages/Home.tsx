import { ArrowRight, CheckCircle2, Factory, Gauge, HardHat, Leaf, Star, Warehouse, Wheat, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion } from "../components/Accordion";
import { ContactForm } from "../components/ContactForm";
import { ImageCard } from "../components/ImageCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { Button } from "../components/ui/Button";
import { contact, faqs, images, industries, reviews, services, stats } from "../data/site";

const industryIcons = { wheat: Wheat, grain: Warehouse, citrus: Leaf, construction: HardHat };

export function Home() {
  return (
    <>
      <Seo
        title="Agricultural Machinery Repair, Maintenance & Manufacturing"
        description="Autolec Assets manufactures, repairs and maintains agricultural machinery, vehicles and equipment in Middelburg, South Africa — including high-capacity baggers and de-baggers."
        path="/"
      />
      {/* Hero */}
      <section className="clip-angle relative min-h-[720px] overflow-hidden bg-ink text-white">
        <img src={images.hero} alt="Autolec agricultural machine in the field" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/75 to-ink/20" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-32 pt-20 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="animate-fade-in-down mb-5 inline-flex rounded-md bg-autolec-green px-4 py-2 text-sm font-extrabold uppercase tracking-wide">
              We strive for excellence
            </p>
            <h1 className="animate-fade-in-up font-display text-4xl leading-[1.05] text-balance sm:text-5xl md:text-7xl md:leading-none">
              Agricultural machinery built, repaired and maintained for hard working sites.
            </h1>
            <p className="animate-fade-in-up delay-200 mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Autolec Assets repairs and maintains agricultural vehicles, machines, facilities and equipment, and manufactures improved baggers and de-baggers from real field experience.
            </p>
            <div className="animate-fade-in-up delay-400 mt-9 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/machines">Explore Machines <ArrowRight size={18} /></Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
          <div className="animate-slide-in-right delay-300 rounded-md border border-white/20 bg-white/10 p-5 backdrop-blur">
            <img src={images.logo} alt="Autolec Assets logo" className="mx-auto h-32 w-32 object-contain lg:h-44 lg:w-44" />
            <div className="mt-5 grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div key={stat.label} className="animate-scale-in rounded-md bg-white p-4 text-ink" style={{ animationDelay: `${400 + i * 100}ms` }}>
                  <p className="font-display text-2xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-soil/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="About us"
              title="Field experience turned into practical machine innovation."
              copy="AAA Autolec was originally established on 26 February 1994. Today, that repair and project experience supports mechanical, auto-electrical, boilermaking, manufacturing, rebuilding and site maintenance work."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Mastery", "Diesel mechanic and auto-electrician expertise."],
              ["Dedication", "Repair, rebuild and maintain equipment used in tough agricultural environments."],
              ["Innovation", "Improved machine designs shaped by servicing real equipment."],
            ].map(([title, copy], i) => (
              <Reveal key={title} delay={i * 150}>
                <div className="rounded-md border border-ink/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
                  <CheckCircle2 className="mb-4 text-autolec-green" />
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-soil/70">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-field py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Our service solutions"
                title="A practical one-stop partner for agricultural machinery work."
              />
            </Reveal>
            <Reveal delay={200}>
              <Button asChild>
                <Link to="/what-we-offer">What We Offer</Link>
              </Button>
            </Reveal>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 150} className="h-full [&>a]:h-full">
                <ImageCard title={service.title} copy={service.copy} image={service.image} to="/what-we-offer" tone={service.tone} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Industries we serve"
              title="Trusted across South Africa's agricultural and construction sectors."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => {
              const Icon = industryIcons[ind.icon];
              return (
                <Reveal key={ind.title} delay={i * 120}>
                  <div className="rounded-md border border-ink/10 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-autolec-green/30 hover:shadow-lg hover:shadow-autolec-green/5">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-autolec-green/10 transition-transform duration-300 hover:scale-110">
                      <Icon className="text-autolec-green" size={28} />
                    </div>
                    <h3 className="font-display text-xl">{ind.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-soil/70">{ind.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Machines highlight */}
      <section className="bg-field py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <Reveal direction="left">
              <img src={images.machines} alt="De-bagger machinery" loading="lazy" decoding="async" className="h-80 w-full rounded-md object-cover" />
            </Reveal>
            <Reveal direction="left" delay={200}>
              <img src={images.workshop} alt="Autolec workshop welding" loading="lazy" decoding="async" className="mt-10 h-80 w-full rounded-md object-cover" />
            </Reveal>
          </div>
          <div>
            <Reveal direction="right">
              <SectionHeading
                eyebrow="Our machines"
                title="Baggers and de-baggers designed for high throughput and simpler maintenance."
                copy="Autolec machines are designed around real operator needs: standard tractor compatibility, accessible components, metric parts and robust site performance."
              />
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { bg: "bg-autolec-green", icon: <Gauge />, text: "150-200t/h loading capacity" },
                { bg: "bg-autolec-red", icon: <Factory />, text: "Manufacturing and rebuilding" },
                { bg: "bg-autolec-blue", icon: <Wrench />, text: "Mechanical and electrical support" },
              ].map((item, i) => (
                <Reveal key={item.text} delay={300 + i * 120}>
                  <div className={`${item.bg} rounded-md p-5 text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                    {item.icon}<p className="mt-4 font-bold">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={600}>
              <Button asChild className="mt-8">
                <Link to="/machines">View Machine Details</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Google rating */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <Reveal>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-autolec-green">Rated on Google</p>
            <div className="flex items-center justify-center gap-3">
              <span className="font-display text-6xl leading-none">{reviews.rating.toFixed(1)}</span>
              <span className="flex" aria-label={`${reviews.rating} out of 5 stars`}>
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star
                    key={n}
                    size={28}
                    className={n < Math.round(reviews.rating) ? "fill-amber-400 text-amber-400" : "fill-white/15 text-white/15"}
                  />
                ))}
              </span>
            </div>
            <p className="mt-4 text-white/70">
              Based on {reviews.count} verified Google reviews — including{" "}
              {reviews.authors.map((a, i) => (
                <span key={a.name}>
                  {i > 0 && " and "}
                  <span className="font-semibold text-white">{a.name}</span>
                  {a.localGuide && <span className="text-white/50"> (Local Guide)</span>}
                </span>
              ))}.
            </p>
            <Button asChild className="mt-8">
              <a href={reviews.url} target="_blank" rel="noreferrer">Read our Google reviews</a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <SectionHeading align="center" eyebrow="Frequently asked questions" title="Quick answers before you call." />
          </Reveal>
          <Reveal delay={200}>
            <div className="mx-auto mt-10 max-w-3xl">
              <Accordion items={faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal direction="left">
            <div>
              <SectionHeading
                eyebrow="Get in touch"
                title="Ready to talk machinery?"
                copy="Fill in the form and we'll get back to you, or contact us directly using the details below."
              />
              <div className="mt-8 grid gap-4 text-sm">
                <a href={`tel:${contact.office.replace(/\D/g, "")}`} className="flex items-center gap-3 text-soil/70 transition-colors hover:text-autolec-green">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-field"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg></span>
                  Office: {contact.office}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-soil/70 transition-colors hover:text-autolec-green">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-field"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg></span>
                  {contact.email}
                </a>
                <div className="flex items-center gap-3 text-soil/70">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-field"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
                  {contact.address.join(", ")}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
