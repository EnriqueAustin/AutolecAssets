import { type FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/Button";
import { contact } from "../data/site";

type ContactFormProps = {
  heading?: string;
  compact?: boolean;
};

export function ContactForm({ heading = "Request a Quote", compact = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Quote Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  const inputBase =
    "w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-soil/40 focus:border-autolec-green focus:outline-none focus:ring-2 focus:ring-autolec-green/20 transition";

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "rounded-md border border-ink/10 bg-white p-6 shadow-lg shadow-ink/5 md:p-8"}>
      {heading && <h3 className="mb-5 font-display text-2xl text-ink">{heading}</h3>}
      <div className={compact ? "grid gap-3" : "grid gap-4 sm:grid-cols-2"}>
        <input name="name" type="text" required placeholder="Your name" className={inputBase} />
        <input name="email" type="email" required placeholder="Email address" className={inputBase} />
        <input name="phone" type="tel" placeholder="Phone number" className={inputBase} />
        {!compact && (
          <input name="subject" type="text" placeholder="Subject (optional)" className={inputBase} />
        )}
      </div>
      <textarea
        name="message"
        required
        rows={compact ? 3 : 4}
        placeholder="Tell us about your project or equipment needs..."
        className={`${inputBase} mt-4 resize-none`}
      />
      <Button type="submit" className="mt-4 w-full sm:w-auto">
        {submitted ? "Opening email client..." : (
          <>Send Enquiry <Send size={16} /></>
        )}
      </Button>
    </form>
  );
}
