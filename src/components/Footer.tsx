import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    main: [
      { name: "How It Works", href: "/how-it-works" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-display font-bold text-white">
              REGENT
            </Link>
            <p className="mt-4 text-silver-300 max-w-md">
              Operational excellence for modern golf facilities. Transform your 
              beverage service with sophisticated on-course ordering technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-silver-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-silver-300 mb-4">
              Get insights on golf facility operations and industry trends.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-silver-300">
                © {currentYear} Regent. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {footerNavigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-silver-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-silver-300">
              <p className="text-sm">hello@regentops.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}