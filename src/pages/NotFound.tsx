import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Seo } from "../components/Seo";

export function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-field px-4 text-center">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has moved."
        noindex
      />
      <div>
        <p className="text-sm font-extrabold uppercase tracking-wide text-autolec-green">404</p>
        <h1 className="mt-3 font-display text-4xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-soil/70">
          The page you're after doesn't exist or has moved. Try one of these instead.
        </p>
        <Button asChild className="mt-6">
          <Link to="/">Back Home</Link>
        </Button>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-wide text-soil">
          <Link to="/machines" className="transition hover:text-autolec-green">Our Machines</Link>
          <Link to="/what-we-offer" className="transition hover:text-autolec-green">What We Offer</Link>
          <Link to="/gallery" className="transition hover:text-autolec-green">Gallery</Link>
          <Link to="/contact" className="transition hover:text-autolec-green">Contact</Link>
        </div>
      </div>
    </section>
  );
}
