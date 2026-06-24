import { Seo } from "../components/Seo";
import { contact } from "../data/site";

const LAST_UPDATED = "24 June 2026";

export function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Autolec Assets collects, uses and protects your personal information in line with South Africa's Protection of Personal Information Act (POPIA)."
        path="/privacy"
      />

      <section className="industrial-grid bg-field py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-autolec-green">Legal</p>
          <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-soil/60">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-[15px] leading-7 text-soil/80 md:px-6">
          <p>
            Autolec Assets (Pty) Ltd ("Autolec", "we", "us" or "our") respects your privacy and is
            committed to protecting your personal information. This policy explains what information we
            collect, how we use it and your rights under the Protection of Personal Information Act, 2013
            (POPIA).
          </p>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">Who we are</h2>
            <p>
              Autolec Assets (Pty) Ltd is based at {contact.address.join(", ")}. You can reach us by phone
              on {contact.office} or by email at{" "}
              <a href={`mailto:${contact.email}`} className="text-autolec-green underline">{contact.email}</a>.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">Information we collect</h2>
            <p>
              When you use our contact or enquiry form, we collect the information you provide directly:
              your name, email address, phone number and the details of your message or enquiry. We do not
              collect special personal information, and we do not knowingly collect information from
              children.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">How we use your information</h2>
            <p>We use the personal information you provide only to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>respond to your enquiry and provide quotes or information you request;</li>
              <li>arrange repairs, maintenance, manufacturing or delivery of equipment; and</li>
              <li>keep a record of our communication with you.</li>
            </ul>
            <p className="mt-2">
              We will not use your information for unrelated purposes, and we do not sell your personal
              information to anyone.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">Who we share it with</h2>
            <p>
              We do not sell or rent your personal information. We may share it only with trusted service
              providers who help us operate the website and deliver enquiries to us (for example, the form
              and email delivery provider that routes your message to our inbox). These providers process
              the information on our behalf and are not permitted to use it for their own purposes.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">Cookies and embedded content</h2>
            <p>
              This website does not use advertising or tracking cookies. Some pages embed a Google Maps
              map so you can find us, and we load fonts from Google Fonts. These third-party services may
              set their own cookies or receive your IP address when their content loads. You can control
              cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">How long we keep it</h2>
            <p>
              We keep enquiry information only for as long as needed to deal with your request and to meet
              our legal and business record-keeping obligations, after which it is securely deleted or
              anonymised.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">Your rights under POPIA</h2>
            <p>You have the right to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>ask what personal information we hold about you and request access to it;</li>
              <li>ask us to correct or delete information that is inaccurate or no longer needed;</li>
              <li>object to the processing of your information; and</li>
              <li>
                lodge a complaint with the Information Regulator of South Africa
                (<a href="https://inforegulator.org.za" target="_blank" rel="noreferrer" className="text-autolec-green underline">inforegulator.org.za</a>).
              </li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${contact.email}`} className="text-autolec-green underline">{contact.email}</a>.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Any changes will be posted on this page with a
              revised "last updated" date.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
