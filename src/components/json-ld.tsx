/**
 * Renders a JSON-LD structured-data block. Pass any schema.org object as
 * `data`; it is serialized into a <script type="application/ld+json"> tag.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const ORGANIZATION_ID = "https://branebridge.com/#organization";

/** Build a BreadcrumbList schema from an ordered list of crumbs. */
export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://branebridge.com${item.path}`,
    })),
  };
}

/** Shared Organization / LocalBusiness node, referenced by other schemas. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": ORGANIZATION_ID,
  name: "BraneBridge",
  url: "https://branebridge.com",
  logo: "https://branebridge.com/images/branebridge-logo-green.svg",
  image: "https://branebridge.com/opengraph-image",
  description:
    "GCP cost optimization and cloud engineering for seed-to-growth startups spending $20k+/mo on Google Cloud Platform.",
  email: "contact@branebridge.com",
  telephone: "+1-647-598-1817",
  founder: {
    "@type": "Person",
    name: "Sheldon Soloa",
    jobTitle: "Founder & Principal Engineer",
    sameAs: "https://www.linkedin.com/in/sheldon-soloa/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/branebridge",
    "https://www.linkedin.com/in/sheldon-soloa/",
  ],
};
