import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Mail, Menu, Phone, X } from "lucide-react";
import { contact, images, navItems } from "../data/site";
import { Button } from "./ui/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm shadow-ink/10">
      <div className="hidden bg-ink text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs font-semibold">
          <div className="flex items-center gap-6">
            <a className="flex items-center gap-2" href={`tel:${contact.office.replace(/\D/g, "")}`}>
              <Phone size={14} /> Office: {contact.office}
            </a>
            <a className="flex items-center gap-2" href={`mailto:${contact.email}`}>
              <Mail size={14} /> {contact.email}
            </a>
          </div>
          <a className="flex items-center gap-2" href={contact.facebook} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            Follow our work
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={images.logo} alt="Autolec Assets" className="h-12 w-12 object-contain" />
          <div>
            <p className="font-display text-lg leading-none text-ink">Autolec Assets</p>
            <p className="text-xs font-bold uppercase tracking-normal text-autolec-green">(Pty) LTD</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-normal transition hover:text-autolec-green ${
                  isActive ? "text-autolec-green" : "text-soil"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">Get a Quote</Link>
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition hover:bg-field lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-ink/10 px-4 py-3 lg:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-4 py-3 text-sm font-extrabold uppercase tracking-normal transition ${
                    isActive ? "bg-autolec-green text-white" : "text-soil hover:bg-field"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-md bg-autolec-green px-4 py-3 text-center text-sm font-extrabold uppercase tracking-normal text-white"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
