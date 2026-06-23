import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, images, navItems, services } from "../data/site";
import { Button } from "./ui/Button";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="industrial-grid border-y border-white/10 bg-autolec-green/15">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-6">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-white/70">Ready to talk machinery?</p>
            <h2 className="font-display text-3xl leading-tight md:text-5xl">Get practical support from people who know the work.</h2>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={`tel:${contact.office.replace(/\D/g, "")}`}>Call Office</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] md:px-6">
        <div>
          <img src={images.logo} alt="Autolec Assets" loading="lazy" decoding="async" className="mb-5 h-16 w-16 object-contain" />
          <p className="max-w-sm text-sm leading-7 text-white/70">
            Autolec Assets specializes in agricultural machinery repair, maintenance and manufacturing, with a focus on practical field-tested equipment.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-autolec-green hover:text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
          </div>
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
            <a className="flex gap-3 hover:text-white" href={`mailto:${contact.email}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 h-4 w-4 shrink-0"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
              {contact.email}
            </a>
            <p className="flex gap-3"><MapPin className="mt-1 shrink-0" size={16} /> {contact.address.join(", ")}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} Autolec Assets (Pty) LTD. All rights reserved.
      </div>
    </footer>
  );
}
