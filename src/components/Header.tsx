import { Link, NavLink } from "react-router-dom";
import { ExternalLink, Mail, Phone } from "lucide-react";
import { contact, images, navItems } from "../data/site";
import { Button } from "./ui/Button";

export function Header() {
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
            <ExternalLink size={14} /> Follow our work
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

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <a href={`mailto:${contact.email}`}>Contact Us</a>
          </Button>
        </div>
      </div>

      <nav className="grid grid-cols-2 gap-1 border-t border-ink/10 px-4 py-2 sm:grid-cols-5 lg:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-center text-xs font-extrabold uppercase tracking-normal ${
                isActive ? "bg-autolec-green text-white" : "bg-field text-soil"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
