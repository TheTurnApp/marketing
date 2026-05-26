import { Metadata } from "next";
import Link from "next/link";
import { Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - The Turn",
  description: "Learn how The Turn collects, uses, and protects your personal information when you use our on-course ordering platform.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function Privacy() {
  const lastUpdated = "May 26, 2026";

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-ink to-ink-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold sm:text-5xl lg:text-6xl">
              Privacy <span className="text-gold">Policy</span>
            </h1>
            <p className="mt-6 text-xl text-silver-300 max-w-3xl mx-auto">
              How we collect, use, and protect your information when you use The Turn.
            </p>
            <p className="mt-4 text-sm text-silver-300">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              <div>
                <p className="text-lg text-ink-600">
                  The Turn ("we," "our," or "us") respects your privacy and is committed
                  to protecting your personal information. This Privacy Policy explains
                  how we collect, use, disclose, and safeguard your information when you
                  visit our website or use our on-course ordering platform (collectively,
                  the "Service").
                </p>
                <p className="mt-4 text-lg text-ink-600">
                  Please read this Privacy Policy carefully. By using the Service, you
                  agree to the practices described in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-ink-600 mb-4">
                  We collect information that you provide directly to us, information
                  collected automatically, and information from third parties.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  Information You Provide
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-ink-600">
                  <li>
                    <strong>Account Information:</strong> Name, email address, phone
                    number, club or facility affiliation, and password.
                  </li>
                  <li>
                    <strong>Order Information:</strong> Items purchased, delivery
                    location on course, payment details, and order history.
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Credit card or other payment
                    details, processed securely through our payment processors. We do
                    not store full payment card numbers on our servers.
                  </li>
                  <li>
                    <strong>Communications:</strong> Messages, support requests, and
                    feedback you send to us.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  Information Collected Automatically
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-ink-600">
                  <li>
                    <strong>Device Information:</strong> Device type, operating system,
                    browser type, and unique device identifiers.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Pages viewed, features used, time
                    spent, and interaction patterns.
                  </li>
                  <li>
                    <strong>Location Data:</strong> With your permission, we may
                    collect precise location data to identify your position on the
                    course for order delivery.
                  </li>
                  <li>
                    <strong>Cookies and Similar Technologies:</strong> We use cookies
                    and similar tracking technologies to enhance your experience.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-ink-600 mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-600">
                  <li>To provide, operate, and maintain the Service</li>
                  <li>To process and fulfill your orders</li>
                  <li>To facilitate communication between you and the golf facility</li>
                  <li>To send you transactional messages and service notifications</li>
                  <li>
                    To send marketing communications, where you have consented to
                    receive them
                  </li>
                  <li>To improve, personalize, and develop new features</li>
                  <li>To monitor and analyze usage and trends</li>
                  <li>
                    To detect, prevent, and address fraud, security, or technical issues
                  </li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  3. How We Share Your Information
                </h2>
                <p className="text-ink-600 mb-4">
                  We do not sell your personal information. We may share your
                  information in the following limited circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-600">
                  <li>
                    <strong>With Golf Facilities:</strong> We share order and account
                    information with the golf facility you are ordering from so they
                    can fulfill your orders.
                  </li>
                  <li>
                    <strong>With Service Providers:</strong> We share information with
                    third-party vendors who perform services on our behalf, such as
                    payment processing, hosting, analytics, and customer support.
                  </li>
                  <li>
                    <strong>For Legal Reasons:</strong> We may disclose information if
                    required by law, regulation, legal process, or governmental request.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> Information may be transferred
                    in connection with a merger, acquisition, or sale of assets.
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> We may share information for
                    other purposes with your explicit consent.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  4. Data Security
                </h2>
                <p className="text-ink-600">
                  We implement reasonable administrative, technical, and physical
                  safeguards designed to protect your information from unauthorized
                  access, disclosure, alteration, and destruction. However, no method
                  of transmission over the internet or electronic storage is completely
                  secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  5. Data Retention
                </h2>
                <p className="text-ink-600">
                  We retain your personal information for as long as necessary to
                  provide the Service, comply with our legal obligations, resolve
                  disputes, and enforce our agreements. When information is no longer
                  needed, we securely delete or anonymize it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  6. Your Rights and Choices
                </h2>
                <p className="text-ink-600 mb-4">
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-600">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Request portability of your information</li>
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>Opt out of marketing communications at any time</li>
                </ul>
                <p className="mt-4 text-ink-600">
                  To exercise these rights, contact us at{" "}
                  <a
                    href="mailto:hello@trytheturn.com"
                    className="text-ink underline hover:text-gold transition-colors"
                  >
                    hello@trytheturn.com
                  </a>
                  .
                </p>

                <div className="mt-6 bg-ink-50 rounded-xl p-6 border border-silver-200">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-ink rounded-lg mr-4 mt-1 flex-shrink-0">
                      <Trash2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ink mb-2">
                        Delete Your Account
                      </h4>
                      <p className="text-ink-600">
                        You can request deletion of your account and associated
                        personal information at any time through our self-serve
                        page:{" "}
                        <Link
                          href="/delete-account"
                          className="text-ink underline hover:text-gold transition-colors"
                        >
                          trytheturn.com/delete-account
                        </Link>
                        . We will process your request promptly, subject to limited
                        retention required to complete pending orders, resolve
                        disputes, or comply with legal obligations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  7. Cookies, Analytics, and Tracking Technologies
                </h2>
                <p className="text-ink-600 mb-4">
                  We use cookies and similar technologies to remember your preferences,
                  understand how you use the Service, and improve your experience. You
                  can control cookies through your browser settings. Disabling cookies
                  may affect the functionality of the Service.
                </p>
                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  PostHog Product Analytics
                </h3>
                <p className="text-ink-600 mb-4">
                  We use PostHog, a product analytics platform, to understand how
                  members and staff use the Service so we can improve features,
                  diagnose issues, and measure performance. PostHog may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-600">
                  <li>
                    Pages and screens viewed, buttons clicked, and other interaction
                    events
                  </li>
                  <li>
                    Device information including browser, operating system, and screen
                    size
                  </li>
                  <li>
                    Approximate location derived from IP address (typically
                    city-level)
                  </li>
                  <li>
                    A pseudonymous identifier that links your activity across sessions
                  </li>
                </ul>
                <p className="mt-4 text-ink-600">
                  PostHog acts as our data processor and handles this information on
                  our behalf. For more information about PostHog's data practices, see
                  their privacy policy at{" "}
                  <a
                    href="https://posthog.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline hover:text-gold transition-colors"
                  >
                    posthog.com/privacy
                  </a>
                  . You can opt out of analytics tracking by enabling Do Not Track in
                  your browser or by contacting us at{" "}
                  <a
                    href="mailto:hello@trytheturn.com"
                    className="text-ink underline hover:text-gold transition-colors"
                  >
                    hello@trytheturn.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  8. Push Notifications
                </h2>
                <p className="text-ink-600 mb-4">
                  With your permission, we send push notifications to your mobile
                  device to keep you informed about your orders and account activity.
                  Notifications may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-600">
                  <li>
                    <strong>Order updates:</strong> Confirmation, preparation status,
                    and delivery notifications for orders placed on the course.
                  </li>
                  <li>
                    <strong>Account activity:</strong> Security alerts, payment
                    confirmations, and important account changes.
                  </li>
                  <li>
                    <strong>Service announcements:</strong> Updates from your golf
                    facility, including promotions, menu changes, and events (where
                    you have opted in).
                  </li>
                </ul>
                <p className="mt-4 text-ink-600">
                  To enable push notifications, you must grant permission through your
                  device's operating system. We collect device push tokens solely to
                  deliver these notifications. You can disable push notifications at
                  any time through your device settings or within the app's
                  notification preferences. Disabling notifications may affect your
                  ability to receive timely order updates.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  9. Third-Party Services
                </h2>
                <p className="text-ink-600">
                  The Service may contain links to third-party websites or integrate
                  with third-party services (such as payment processors and analytics
                  providers). We are not responsible for the privacy practices of these
                  third parties. We encourage you to review their privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  10. Children's Privacy
                </h2>
                <p className="text-ink-600">
                  The Service is not directed to children under the age of 13 (or the
                  equivalent minimum age in your jurisdiction). We do not knowingly
                  collect personal information from children. If we learn we have
                  collected information from a child without verified parental consent,
                  we will delete it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  11. International Data Transfers
                </h2>
                <p className="text-ink-600">
                  Your information may be processed and stored in the United States or
                  other countries where we or our service providers operate. These
                  countries may have data protection laws that differ from those in
                  your country. By using the Service, you consent to such transfers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  12. Changes to This Privacy Policy
                </h2>
                <p className="text-ink-600">
                  We may update this Privacy Policy from time to time. When we make
                  material changes, we will notify you by updating the "Last updated"
                  date and, where appropriate, providing additional notice. Your
                  continued use of the Service after changes are posted constitutes
                  your acceptance of the revised policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  13. Contact Us
                </h2>
                <p className="text-ink-600 mb-4">
                  If you have questions, concerns, or requests regarding this Privacy
                  Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-ink-50 rounded-xl p-6 border border-silver-200">
                  <p className="text-ink-600">
                    <strong className="text-ink">The Turn</strong>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:hello@trytheturn.com"
                      className="text-ink underline hover:text-gold transition-colors"
                    >
                      hello@trytheturn.com
                    </a>
                  </p>
                  <p className="mt-4 text-ink-600">
                    You may also reach us through our{" "}
                    <Link
                      href="/contact"
                      className="text-ink underline hover:text-gold transition-colors"
                    >
                      contact page
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
