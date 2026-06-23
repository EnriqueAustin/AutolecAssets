import { type FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/Button";
import { submitEnquiry, isLiveDelivery } from "../lib/enquiry";

type ContactFormProps = {
  heading?: string;
  compact?: boolean;
};

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ heading = "Request a Quote", compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      await submitEnquiry({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        subject: String(data.get("subject") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-soil/40 focus:border-autolec-green focus:outline-none focus:ring-2 focus:ring-autolec-green/20 transition";
  const labelBase = "sr-only";

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "rounded-md border border-ink/10 bg-white p-6 shadow-lg shadow-ink/5 md:p-8"}>
      {heading && <h3 className="mb-5 font-display text-2xl text-ink">{heading}</h3>}
      <div className={compact ? "grid gap-3" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="cf-name" className={labelBase}>Your name</label>
          <input id="cf-name" name="name" type="text" required placeholder="Your name" className={inputBase} />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelBase}>Email address</label>
          <input id="cf-email" name="email" type="email" required placeholder="Email address" className={inputBase} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelBase}>Phone number</label>
          <input id="cf-phone" name="phone" type="tel" placeholder="Phone number" className={inputBase} />
        </div>
        {!compact && (
          <div>
            <label htmlFor="cf-subject" className={labelBase}>Subject (optional)</label>
            <input id="cf-subject" name="subject" type="text" placeholder="Subject (optional)" className={inputBase} />
          </div>
        )}
      </div>
      <label htmlFor="cf-message" className={labelBase}>Your message</label>
      <textarea
        id="cf-message"
        name="message"
        required
        rows={compact ? 3 : 4}
        placeholder="Tell us about your project or equipment needs..."
        className={`${inputBase} mt-4 resize-none`}
      />
      <Button type="submit" disabled={status === "sending"} className="mt-4 w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending..." : (
          <>Send Enquiry <Send size={16} /></>
        )}
      </Button>

      <div aria-live="polite" className="mt-3 min-h-[1.25rem] text-sm">
        {status === "sent" && (
          <p className="font-semibold text-autolec-green">
            Thanks — we've received your enquiry and will be in touch.
            {!isLiveDelivery && <span className="block text-xs font-normal text-soil/50">(Demo mode: message not yet delivered — form goes live in production.)</span>}
          </p>
        )}
        {status === "error" && (
          <p className="font-semibold text-autolec-red">Something went wrong. Please call or email us directly.</p>
        )}
      </div>
    </form>
  );
}
