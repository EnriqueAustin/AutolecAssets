import { CircuitBoard, Cog, Hammer } from "lucide-react";
import { ImageCard } from "../components/ImageCard";
import { SectionHeading } from "../components/SectionHeading";
import { services } from "../data/site";

const icons = [CircuitBoard, Cog, Hammer];

export function WhatWeOffer() {
  return (
    <>
      <section className="industrial-grid bg-field py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-normal text-autolec-green">Nature of business</p>
          <h1 className="mb-5 max-w-4xl font-display text-4xl leading-tight text-ink md:text-6xl">
            Repair, maintenance and manufacturing for agricultural equipment.
          </h1>
          <SectionHeading
            copy="Autolec Assets specializes in repairing and maintaining vehicles, machines, facilities and equipment used in agriculture and agricultural construction. With expertise in electrical and mechanical work, the team provides fault finding and repair services for a broad spectrum of machinery and equipment."
            title="Field-tested support across electrical, mechanical and manufacturing work."
            className="mt-8"
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index];
              return (
                <div key={service.title} className="rounded-md border border-ink/10 p-6">
                  <Icon className="mb-5 text-autolec-green" size={34} />
                  <h2 className="font-display text-2xl">{service.title}</h2>
                  <p className="mt-4 leading-7 text-soil/70">{service.copy}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <ImageCard key={service.title} title={service.title} copy={service.copy} image={service.image} to="/gallery" tone={service.tone} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
