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
        "name": "Regent",
        "description": "Operational excellence for modern golf facilities. Transform your beverage service with sophisticated on-course ordering technology.",
        "url": "https://regentops.com",
        "logo": "https://regentops.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@regentops.com",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://regentops.com"
        ]
      };
      break;

    case 'website':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Regent Golf Operations Platform",
        "description": "Transform your golf facility's beverage service from outdated cart operations to sophisticated on-course ordering that matches your club's standards.",
        "url": "https://regentops.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://regentops.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };
      break;

    case 'service':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Golf Facility Beverage Cart Operations Platform",
        "description": "Sophisticated on-course ordering technology that elevates golf facility beverage service while maintaining premium member experience standards.",
        "provider": {
          "@type": "Organization",
          "name": "Regent"
        },
        "areaServed": "United States",
        "serviceType": "Golf Operations Technology",
        "offers": {
          "@type": "Offer",
          "description": "Comprehensive golf facility beverage ordering platform with implementation and support",
          "availableAtOrFrom": {
            "@type": "Place",
            "name": "Golf Facilities Nationwide"
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