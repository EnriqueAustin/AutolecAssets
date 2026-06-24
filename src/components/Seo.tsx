type SeoProps = {
  title: string;
  description: string;
  /** Path-only canonical, e.g. "/machines". */
  path?: string;
  /** Set on pages that should be kept out of search indexes (e.g. 404). */
  noindex?: boolean;
};

const SITE_NAME = "Autolec Assets (Pty) Ltd";
const BASE_URL = "https://aaaautolec.co.za";
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

// React 19 hoists these tags into <head> automatically.
export function Seo({ title, description, path = "", noindex = false }: SeoProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </>
  );
}
