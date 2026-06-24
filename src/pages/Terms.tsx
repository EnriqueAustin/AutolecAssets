import { Seo } from "../components/Seo";
import { contact } from "../data/site";

const LAST_UPDATED = "24 June 2026";

export function Terms() {
  return (
    <>
      <Seo
        title="Terms of Use"
        description="The terms that govern your use of the Autolec Assets website."
        path="/terms"
      />

      <section className="industrial-grid bg-field py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-autolec-green">Legal</p>
          <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">Terms of Use</h1>
          <p className="mt-4 text-sm text-soil/60">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-[15px] leading-7 text-soil/80 md:px-6">
          <p>
            These terms govern your use of the Autolec Assets (Pty) Ltd website. By accessing or using the
            site, you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">Information on this website</h2>
            <p>
              We take care to keep the information on this website accurate and up to date, but it is
              provided for general information only. Machine specifications, capacities and availability may
              change, and nothing on this site constitutes a binding quote or offer. Please contact us to
              confirm details before relying on them.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">Intellectual property</h2>
            <p>
              All content on this site — including text, images, logos, machine designs and graphics — is
              owned by or licensed to Autolec Assets and may not be copied, reproduced or used without our
              written permission.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">Acceptable use</h2>
            <p>
              You agree not to use this website for any unlawful purpose, to interfere with its operation,
              or to submit false, abusive or spam content through our forms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">External links</h2>
            <p>
              This site may link to third-party websites (such as social media or map services). We are not
              responsible for the content or practices of those sites.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">Limitation of liability</h2>
            <p>
              To the extent permitted by law, Autolec Assets is not liable for any loss or damage arising
              from your use of, or reliance on, this website or its content.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">Governing law</h2>
            <p>These terms are governed by the laws of the Republic of South Africa.</p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl text-ink">Contact</h2>
            <p>
              Questions about these terms? Email us at{" "}
              <a href={`mailto:${contact.email}`} className="text-autolec-green underline">{contact.email}</a>{" "}
              or call {contact.office}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
