export type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
};

// Real delivery only happens when an endpoint is configured (production).
// Until then, submissions are stubbed: logged locally and "succeed" without
// reaching the live business inbox. Set VITE_FORM_ENDPOINT in a .env file to
// go live (e.g. a Formspree/Web3Forms/custom URL that accepts a JSON POST).
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export const isLiveDelivery = Boolean(ENDPOINT);

export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  if (!ENDPOINT) {
    // STUB MODE — not in production. Do not deliver to the website email yet.
    console.info("[enquiry stub] would deliver:", payload);
    await new Promise((resolve) => setTimeout(resolve, 600));
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Enquiry delivery failed (${res.status})`);
  }
}
