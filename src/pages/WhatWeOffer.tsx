import { CheckCircle2, CircuitBoard, Cog, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageCard } from "../components/ImageCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { Button } from "../components/ui/Button";
import { services } from "../data/site";

const serviceDetails = [
  {
    icon: CircuitBoard,
    title: "Auto-Electrical",
    description: "Fault finding and repair services for agricultural vehicles, machines, facilities and site equipment.",
    points: [
      "Starter and alternator repairs and rebuilds",
      "Wiring harness fault finding and repair",
      "Electrical system diagnostics for tractors and machinery",
      "Site lighting and facility electrical work",
    ],
  },
  {
    icon: Cog,
    title: "Mechanical",
    description: "Mechanical repair, rebuilding and maintenance for agricultural and construction vehicles and machinery.",
    points: [
      "Diesel engine servicing and overhauls",
      "Hydraulic system repairs and maintenance",
      "Gearbox and drivetrain rebuilds",
      "On-site breakdown repair and support",
    ],
  },
  {
    icon: Hammer,
    title: "Manufacturing",
    description: "Improved agricultural equipment designs, including baggers and de-baggers built from hard-won field insight.",
    points: [
      "Custom bagger and de-bagger manufacturing",
      "Boilermaking and steel fabrication",
      "Machine rebuilds with design improvements",
      "Metric parts and standard components throughout",
    ],
  },
];

export function WhatWeOffer() {
  return (
    <>
      <Seo
        title="What We Offer — Electrical, Mechanical & Manufacturing"
        description="Repair, maintenance and manufacturing for agricultural equipment: auto-electrical fault finding, mechanical rebuilds, boilermaking and custom bagger and de-bagger manufacturing."
        path="/what-we-offer"
      />
      <section className="industrial-grid bg-field py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="animate-fade-in-down mb-4 text-sm font-extrabold uppercase tracking-wide text-autolec-green">Nature of business</p>
          <h1 className="animate-fade-in-up mb-5 max-w-4xl font-display text-4xl leading-tight text-ink md:text-6xl">
            Repair, maintenance and manufacturing for agricultural equipment.
          </h1>
          <Reveal delay={200}>
            <p className="mt-6 max-w-3xl text-base leading-8 text-soil/75 md:text-lg">
              Autolec Assets specializes in repairing and maintaining vehicles, machines, facilities and equipment used in agriculture and agricultural construction. With expertise in electrical and mechanical work, the team provides fault finding and repair services for a broad spectrum of machinery and equipment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              const imageData = services[index];
              return (
                <Reveal key={service.title}>
                  <div className={`grid gap-8 rounded-md border border-ink/10 bg-field/40 p-6 md:p-8 lg:grid-cols-[1fr_1.2fr] lg:items-center ${index % 2 ? "lg:[direction:rtl] lg:[&>*]:[direction:ltr]" : ""}`}>
                    <div className="overflow-hidden rounded-md">
                      <img src={imageData.image} alt={service.title} loading="lazy" decoding="async" className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-80" />
                    </div>
                    <div>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-autolec-green/10">
                        <Icon className="text-autolec-green" size={26} />
                      </div>
                      <h2 className="font-display text-3xl">{service.title}</h2>
                      <p className="mt-3 leading-7 text-soil/70">{service.description}</p>
                      <ul className="mt-5 grid gap-2">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-soil/75">
                            <CheckCircle2 className="mt-0.5 shrink-0 text-autolec-green" size={16} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-field py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Explore our work"
              title="See our services in action."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 150} className="h-full [&>a]:h-full">
                <ImageCard title={service.title} copy={service.copy} image={service.image} to="/gallery" tone={service.tone} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <div className="mt-10 text-center">
              <Button asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
