interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'breadcrumb';
  data?: object;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData;

  switch (type) {
    case 'organization':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "The Turn",
        "description": "Modern on-course ordering for golf clubs. Give members a beautifully simple way to order — and your team the tools to deliver effortlessly.",
        "url": "https://trytheturn.com",
        "logo": "https://trytheturn.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@trytheturn.com",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://trytheturn.com"
        ]
      };
      break;

    case 'website':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "The Turn — On-Course Ordering",
        "description": "Modern on-course ordering for golf clubs. Give members a beautifully simple way to order — and your team the tools to deliver effortlessly.",
        "url": "https://trytheturn.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://trytheturn.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };
      break;

    case 'service':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Golf Club On-Course Ordering Platform",
        "description": "Modern on-course ordering technology that elevates golf club beverage and F&B service while keeping personal service at the center.",
        "provider": {
          "@type": "Organization",
          "name": "The Turn"
        },
        "areaServed": "United States",
        "serviceType": "Golf Operations Technology",
        "offers": {
          "@type": "Offer",
          "description": "On-course ordering platform for golf clubs with implementation and support",
          "availableAtOrFrom": {
            "@type": "Place",
            "name": "Golf Clubs Nationwide"
          }
        }
      };
      break;

    case 'breadcrumb':
      structuredData = data;
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
