import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, images, navItems, services } from "../data/site";
import { Button } from "./ui/Button";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="industrial-grid border-y border-white/10 bg-autolec-green/15">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-6">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-normal text-white/70">Ready to talk machinery?</p>
            <h2 className="font-display text-3xl leading-tight md:text-5xl">Get practical support from people who know the work.</h2>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild>
              <a href={`mailto:${contact.email}`}>Email Autolec</a>
            </Button>
            <Button asChild variant="outline">
              <a href={`tel:${contact.office.replace(/\D/g, "")}`}>Call Office</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] md:px-6">
        <div>
          <img src={images.logo} alt="Autolec Assets" className="mb-5 h-16 w-16 object-contain" />
          <p className="max-w-sm text-sm leading-7 text-white/70">
            Autolec Assets specializes in agricultural machinery repair, maintenance and manufacturing, with a focus on practical field-tested equipment.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold uppercase">Company</h3>
          <div className="grid gap-3 text-sm text-white/70">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold uppercase">Services</h3>
          <div className="grid gap-3 text-sm text-white/70">
            {services.map((service) => (
              <Link key={service.title} to="/what-we-offer" className="hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold uppercase">Contact</h3>
          <div className="grid gap-3 text-sm leading-6 text-white/70">
            <p className="flex gap-3"><Phone className="mt-1 shrink-0" size={16} /> Office: {contact.office}<br />Gideon: {contact.gideon}<br />Heila: {contact.heila}</p>
            <a className="flex gap-3 hover:text-white" href={`mailto:${contact.email}`}><Mail className="mt-1 shrink-0" size={16} /> {contact.email}</a>
            <p className="flex gap-3"><MapPin className="mt-1 shrink-0" size={16} /> {contact.address.join(", ")}</p>
            <a className="flex gap-3 hover:text-white" href={contact.facebook} target="_blank" rel="noreferrer"><ExternalLink className="mt-1 shrink-0" size={16} /> Facebook updates and reviews</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        © Autolec Assets (Pty) LTD. Rebuilt as a Vite React modular site.
      </div>
    </footer>
  );
}
