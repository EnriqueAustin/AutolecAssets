import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-field px-4 text-center">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-normal text-autolec-green">404</p>
        <h1 className="mt-3 font-display text-4xl">Page not found</h1>
        <Button asChild className="mt-6">
          <Link to="/">Back Home</Link>
        </Button>
      </div>
    </section>
  );
}
