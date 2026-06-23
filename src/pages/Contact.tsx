import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { contact } from "../data/site";

export function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Autolec Assets for a quote, a custom bagger or de-bagger build, or on-site repair and maintenance. Based at 53 November St, Middelburg, South Africa."
        path="/contact"
      />
      <section className="industrial-grid bg-field py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="animate-fade-in-down mb-4 text-sm font-extrabold uppercase tracking-wide text-autolec-green">Contact us</p>
          <h1 className="animate-fade-in-up mb-5 max-w-4xl font-display text-4xl leading-tight text-ink md:text-6xl">
            Get in touch for a quote or to discuss your project.
          </h1>
          <p className="animate-fade-in-up delay-200 max-w-2xl text-lg leading-8 text-soil/75">
            Whether you need machinery repaired, a new bagger or de-bagger built, or on-site maintenance support — we're ready to help.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <Reveal direction="left">
            <div>
              <SectionHeading title="Contact details" />
              <div className="mt-8 grid gap-5">
                {[
                  {
                    icon: <Phone size={18} />,
                    href: `tel:${contact.office.replace(/\D/g, "")}`,
                    label: "Phone",
                    lines: [`Office: ${contact.office}`, `Gideon: ${contact.gideon}`, `Heila: ${contact.heila}`],
                  },
                  {
                    icon: <Mail size={18} />,
                    href: `mailto:${contact.email}`,
                    label: "Email",
                    lines: [contact.email],
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: "Address",
                    lines: [contact.address.join(", ")],
                  },
                  {
                    icon: <Clock size={18} />,
                    label: "Working Hours",
                    lines: ["Monday – Friday: 07:00 – 17:00", "Saturday: By arrangement"],
                  },
                ].map((item, i) => {
                  const Tag = item.href ? "a" : "div";
                  return (
                    <Reveal key={item.label} delay={i * 100}>
                      <Tag
                        {...(item.href ? { href: item.href } : {})}
                        className="group flex gap-4 text-soil/75 transition-colors hover:text-autolec-green"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-field transition-colors group-hover:bg-autolec-green/10">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-ink">{item.label}</p>
                          {item.lines.map((line) => (
                            <p key={line} className="text-sm">{line}</p>
                          ))}
                        </div>
                      </Tag>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <ContactForm heading="Send us an enquiry" />
          </Reveal>
        </div>
      </section>

      <section className="bg-field py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <a
              href="https://www.google.com/maps/search/53+November+St,+Middelburg,+1050,+South+Africa"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-md border border-ink/10 bg-white p-6 shadow-lg shadow-ink/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-autolec-green/30 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-autolec-green/10 transition-colors duration-300 group-hover:bg-autolec-green/20">
                  <MapPin className="text-autolec-green" size={22} />
                </div>
                <div>
                  <p className="font-bold text-ink">Find us on Google Maps</p>
                  <p className="text-sm text-soil/60">{contact.address.join(", ")}</p>
                </div>
              </div>
              <span className="text-sm font-bold uppercase tracking-wide text-autolec-green opacity-0 transition-opacity duration-300 group-hover:opacity-100">Open Map &rarr;</span>
            </a>
          </Reveal>
          <Reveal delay={150}>
            <iframe
              className="mt-6 h-[420px] w-full rounded-md border-0 shadow-lg shadow-ink/5"
              src="https://maps.google.com/maps?q=53+November+St,+Middelburg,+1050,+South+Africa&output=embed"
              title="Autolec Assets location map"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
