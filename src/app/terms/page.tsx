import { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - The Turn",
  description: "The terms and conditions that govern your use of The Turn's on-course ordering platform.",
  alternates: {
    canonical: "/terms",
  },
};

export default function Terms() {
  const lastUpdated = "May 27, 2026";

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-ink to-ink-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold sm:text-5xl lg:text-6xl">
              Terms of <span className="text-gold">Service</span>
            </h1>
            <p className="mt-6 text-xl text-silver-300 max-w-3xl mx-auto">
              The rules and obligations that govern your use of The Turn.
            </p>
            <p className="mt-4 text-sm text-silver-300">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              <div>
                <p className="text-lg text-ink-600">
                  These Terms of Service ("Terms") form a binding agreement
                  between you and The Turn ("we," "our," or "us") and govern
                  your access to and use of our website, mobile applications,
                  and on-course ordering platform (collectively, the "Service").
                </p>
                <p className="mt-4 text-lg text-ink-600">
                  By creating an account, placing an order, or otherwise using
                  the Service, you agree to be bound by these Terms. If you do
                  not agree, do not use the Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  1. Eligibility and Account Registration
                </h2>
                <p className="text-ink-600 mb-4">
                  To use the Service, you must be at least 18 years of age (or
                  the age of majority in your jurisdiction) and capable of
                  forming a legally binding contract. By using the Service, you
                  represent and warrant that you meet these requirements.
                </p>
                <p className="text-ink-600">
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for all activity that occurs
                  under your account. Notify us immediately at{" "}
                  <a
                    href="mailto:support@trytheturn.com"
                    className="text-ink underline hover:text-gold transition-colors"
                  >
                    support@trytheturn.com
                  </a>{" "}
                  of any unauthorized use. We may suspend or terminate accounts
                  that violate these Terms or that we reasonably believe pose a
                  risk to the Service or other users.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  2. The Turn Is a Technology Platform
                </h2>
                <p className="text-ink-600 mb-4">
                  The Turn provides software that connects members and guests
                  with the golf facility, club, or course (each, a "Course")
                  where they are playing. We do not prepare food or beverages,
                  do not stock inventory, and do not employ the staff who
                  fulfill orders.
                </p>
                <p className="text-ink-600 mb-4">
                  <strong>The Course is the seller of record</strong> for every
                  order placed through the Service. The Course sets pricing,
                  menus, hours of operation, age-restricted product
                  availability, delivery zones, and refund policies. The Course
                  is solely responsible for the quality, safety, fulfillment,
                  and legality of the items it sells. Your contract for the
                  purchase of any item is with the Course, not with The Turn.
                </p>
                <p className="text-ink-600">
                  The Turn's role is limited to providing the technology that
                  facilitates ordering, payment processing, and communication
                  between you and the Course.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  3. Acceptable Use
                </h2>
                <p className="text-ink-600 mb-4">
                  You agree to use the Service only for lawful purposes and in
                  accordance with these Terms. You will not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-600">
                  <li>
                    Use the Service to violate any applicable law, regulation,
                    or third-party right
                  </li>
                  <li>
                    Provide false, inaccurate, or misleading information,
                    including about your age or identity
                  </li>
                  <li>
                    Order alcohol on behalf of, or for delivery to, anyone under
                    the legal drinking age
                  </li>
                  <li>
                    Resell, redistribute, or commercially exploit any items
                    ordered through the Service
                  </li>
                  <li>
                    Interfere with, disrupt, or attempt to gain unauthorized
                    access to the Service, our systems, or other users'
                    accounts
                  </li>
                  <li>
                    Use bots, scrapers, or automated tools to access the Service
                    without our prior written consent
                  </li>
                  <li>
                    Harass, threaten, or abuse Course staff, other users, or
                    The Turn personnel
                  </li>
                  <li>
                    Use the Service to transmit spam, malware, or other harmful
                    content
                  </li>
                  <li>
                    Reverse engineer, decompile, or otherwise attempt to extract
                    the source code of the Service
                  </li>
                </ul>
                <p className="mt-4 text-ink-600">
                  We may investigate suspected violations and, at our
                  discretion, suspend or terminate access, refuse to process
                  orders, and report conduct to law enforcement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  4. Alcohol and Age Verification
                </h2>
                <div className="bg-ink-50 rounded-xl p-6 border border-silver-200 mb-4">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-ink rounded-lg mr-4 mt-1 flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ink mb-2">
                        21+ to order alcohol
                      </h4>
                      <p className="text-ink-600">
                        You must be at least 21 years old (or the legal
                        drinking age in your jurisdiction, if higher) to order
                        alcoholic beverages through the Service.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-ink-600 mb-4">
                  By placing an order that includes alcohol, you represent and
                  warrant that you are of legal drinking age and that the
                  alcohol is for your personal consumption and not for resale.
                  You agree to the following:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-600">
                  <li>
                    A valid government-issued photo ID may be required at the
                    time of delivery. The Course or its staff may refuse
                    delivery if you cannot produce ID, appear underage, or
                    appear intoxicated.
                  </li>
                  <li>
                    The Course is the licensed alcohol retailer and reserves
                    the right to refuse, cancel, or limit any alcohol order at
                    its sole discretion, including for service to apparently
                    intoxicated persons.
                  </li>
                  <li>
                    Alcohol orders that are refused at delivery are subject to
                    the Course's refund and restocking policies. Alcohol that
                    has been delivered is non-returnable.
                  </li>
                  <li>
                    You will not share your account with, or order alcohol on
                    behalf of, anyone under the legal drinking age. Providing
                    alcohol to minors may be a crime.
                  </li>
                  <li>
                    The Service may not be available in jurisdictions where
                    on-course alcohol delivery is prohibited.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  5. Orders, Pricing, and Payment
                </h2>
                <p className="text-ink-600 mb-4">
                  When you place an order through the Service, you authorize
                  the Course (through our payment processors) to charge your
                  selected payment method for the full order total, including
                  any applicable taxes, gratuities, service fees, and platform
                  fees disclosed at checkout.
                </p>
                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  Pricing
                </h3>
                <p className="text-ink-600 mb-4">
                  Item prices are set by the Course and may change at any time.
                  The price shown at checkout is the price you will be charged
                  for that order, except in the case of an obvious pricing
                  error, in which case the Course or The Turn may cancel the
                  order and issue a refund.
                </p>
                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  Fees
                </h3>
                <p className="text-ink-600 mb-4">
                  Your order total may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-600">
                  <li>
                    <strong>Item charges:</strong> Set by the Course for the
                    food, beverage, and merchandise you order.
                  </li>
                  <li>
                    <strong>Taxes:</strong> Sales, alcohol, and other taxes as
                    required by law.
                  </li>
                  <li>
                    <strong>Service or delivery fees:</strong> Set by the
                    Course to support on-course delivery operations.
                  </li>
                  <li>
                    <strong>Platform fee:</strong> A fee retained by The Turn
                    for use of the technology platform, where applicable.
                  </li>
                  <li>
                    <strong>Gratuity:</strong> Optional or suggested tip
                    distributed to Course staff. Gratuity is voluntary unless
                    otherwise disclosed.
                  </li>
                  <li>
                    <strong>Payment processing surcharges:</strong> Where
                    permitted by law and disclosed at checkout.
                  </li>
                </ul>
                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  Payment Processing
                </h3>
                <p className="text-ink-600 mb-4">
                  Payments are processed by third-party payment processors,
                  including Stripe. By providing payment information, you
                  authorize us and our processors to charge your payment method
                  for amounts you owe. You represent that you are authorized to
                  use the payment method provided. We do not store full payment
                  card numbers on our servers.
                </p>
                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  Refunds and Cancellations
                </h3>
                <p className="text-ink-600">
                  Because the Course is the seller of record, refund and
                  cancellation decisions for the items themselves are made by
                  the Course in accordance with its policies. Refundable
                  amounts will be returned to the payment method used for the
                  original order. The Turn will, on the Course's behalf,
                  process approved refunds through our payment processor.
                  Platform fees may be non-refundable except where required by
                  law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  6. Delivery on Course
                </h2>
                <p className="text-ink-600 mb-4">
                  The Service is designed for delivery to your position on the
                  golf course. To enable delivery, you may be asked to share
                  your approximate or precise location. You are responsible for
                  providing accurate location and contact information and for
                  being reasonably available to accept delivery.
                </p>
                <p className="text-ink-600">
                  Delivery times are estimates and may be affected by pace of
                  play, weather, course conditions, staffing, and other factors
                  outside our or the Course's control. The Course may, at its
                  discretion, refuse or modify deliveries for safety, weather,
                  or operational reasons.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  7. Intellectual Property
                </h2>
                <p className="text-ink-600 mb-4">
                  The Service, including all software, designs, text, graphics,
                  logos, and other content, is owned by The Turn or its
                  licensors and is protected by intellectual property laws. We
                  grant you a limited, non-exclusive, non-transferable,
                  revocable license to use the Service for its intended
                  purpose, subject to these Terms.
                </p>
                <p className="text-ink-600">
                  You may not copy, modify, distribute, sell, lease, or create
                  derivative works of any part of the Service, except as
                  expressly permitted by us in writing. "The Turn" and our
                  logos are trademarks of The Turn. All other trademarks
                  belong to their respective owners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  8. User Content and Feedback
                </h2>
                <p className="text-ink-600 mb-4">
                  If you submit reviews, comments, suggestions, or other
                  content through the Service ("User Content"), you grant The
                  Turn and the relevant Course a worldwide, royalty-free,
                  non-exclusive, perpetual, transferable license to use,
                  reproduce, modify, publish, and display that content in
                  connection with operating and improving the Service.
                </p>
                <p className="text-ink-600">
                  You represent that you have all rights necessary to grant
                  this license and that your User Content does not violate any
                  law or third-party right. We may remove User Content that we
                  reasonably believe violates these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  9. Privacy
                </h2>
                <p className="text-ink-600">
                  Your use of the Service is also governed by our{" "}
                  <Link
                    href="/privacy"
                    className="text-ink underline hover:text-gold transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  , which explains how we collect, use, and share information.
                  By using the Service, you consent to those practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  10. Disclaimers
                </h2>
                <p className="text-ink-600 mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM
                  COURSE OF DEALING OR USAGE OF TRADE.
                </p>
                <p className="text-ink-600">
                  WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
                  TIMELY, SECURE, OR ERROR-FREE, OR THAT ANY ORDER WILL BE
                  FULFILLED WITHIN A PARTICULAR TIMEFRAME. THE TURN IS NOT
                  RESPONSIBLE FOR THE QUALITY, SAFETY, LEGALITY, OR DELIVERY OF
                  ITEMS SOLD BY ANY COURSE THROUGH THE SERVICE.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  11. Limitation of Liability
                </h2>
                <p className="text-ink-600 mb-4">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE
                  TURN OR ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                  EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST
                  DATA, OR LOSS OF GOODWILL, ARISING OUT OF OR RELATING TO YOUR
                  USE OF THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE
                  POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="text-ink-600">
                  OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO
                  THESE TERMS OR THE SERVICE WILL NOT EXCEED THE GREATER OF
                  (A) THE AMOUNTS YOU PAID TO THE TURN (EXCLUDING AMOUNTS PAID
                  TO COURSES) IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR
                  (B) ONE HUNDRED U.S. DOLLARS ($100). SOME JURISDICTIONS DO
                  NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO
                  THESE LIMITATIONS MAY NOT APPLY TO YOU.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  12. Indemnification
                </h2>
                <p className="text-ink-600">
                  You agree to indemnify, defend, and hold harmless The Turn
                  and its officers, directors, employees, and agents from and
                  against any claims, liabilities, damages, losses, and
                  expenses (including reasonable attorneys' fees) arising out
                  of or related to (a) your use of the Service, (b) your
                  violation of these Terms, (c) your violation of any law or
                  third-party right, or (d) any User Content you submit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  13. Dispute Resolution and Arbitration
                </h2>
                <p className="text-ink-600 mb-4">
                  <strong>Please read this section carefully.</strong> It
                  affects your legal rights, including your right to file a
                  lawsuit in court.
                </p>
                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  Informal Resolution First
                </h3>
                <p className="text-ink-600 mb-4">
                  Before filing a claim, you agree to try to resolve the
                  dispute informally by emailing us at{" "}
                  <a
                    href="mailto:support@trytheturn.com"
                    className="text-ink underline hover:text-gold transition-colors"
                  >
                    support@trytheturn.com
                  </a>{" "}
                  with a description of the dispute and the relief you seek. We
                  will attempt to resolve the dispute in good faith within
                  sixty (60) days.
                </p>
                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  Binding Arbitration
                </h3>
                <p className="text-ink-600 mb-4">
                  If we cannot resolve the dispute informally, you and The Turn
                  agree that any dispute, claim, or controversy arising out of
                  or relating to these Terms or the Service will be resolved
                  exclusively by final and binding arbitration administered by
                  the American Arbitration Association (AAA) under its
                  Consumer Arbitration Rules, rather than in court, except as
                  provided below.
                </p>
                <p className="text-ink-600 mb-4">
                  Arbitration will be conducted by a single arbitrator in the
                  English language. The seat of arbitration will be in the
                  United States in a location reasonably convenient to you, or
                  by video or telephone where permitted. The arbitrator's
                  decision will be binding and may be entered as a judgment in
                  any court of competent jurisdiction.
                </p>
                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  Class Action Waiver
                </h3>
                <p className="text-ink-600 mb-4">
                  You and The Turn agree that each may bring claims against the
                  other only in your or its individual capacity and not as a
                  plaintiff or class member in any purported class,
                  consolidated, or representative proceeding. The arbitrator
                  may not consolidate the claims of more than one person.
                </p>
                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  Exceptions
                </h3>
                <p className="text-ink-600 mb-4">
                  Either party may (a) bring an individual claim in small
                  claims court for disputes within that court's jurisdiction,
                  or (b) seek injunctive or equitable relief in court to
                  protect intellectual property rights.
                </p>
                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  Governing Law
                </h3>
                <p className="text-ink-600 mb-4">
                  These Terms and any dispute arising out of them are governed
                  by the laws of the State of Delaware, without regard to its
                  conflict of laws principles. To the extent any claim is not
                  subject to arbitration, you and The Turn consent to the
                  exclusive jurisdiction of the state and federal courts
                  located in Delaware.
                </p>
                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">
                  30-Day Opt-Out
                </h3>
                <p className="text-ink-600">
                  You may opt out of the arbitration agreement and class-action
                  waiver by sending written notice to{" "}
                  <a
                    href="mailto:support@trytheturn.com"
                    className="text-ink underline hover:text-gold transition-colors"
                  >
                    support@trytheturn.com
                  </a>{" "}
                  within thirty (30) days of first accepting these Terms.
                  Opting out will not affect any other provision of these
                  Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  14. Termination
                </h2>
                <p className="text-ink-600 mb-4">
                  You may stop using the Service at any time and may request
                  account deletion through our{" "}
                  <Link
                    href="/delete-account"
                    className="text-ink underline hover:text-gold transition-colors"
                  >
                    self-serve page
                  </Link>
                  . We may suspend or terminate your access at any time, with
                  or without notice, if we believe you have violated these
                  Terms or if termination is required for legal, security, or
                  operational reasons.
                </p>
                <p className="text-ink-600">
                  Sections that by their nature should survive termination —
                  including ownership, disclaimers, limitation of liability,
                  indemnification, and dispute resolution — will survive.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  15. Changes to These Terms
                </h2>
                <p className="text-ink-600">
                  We may update these Terms from time to time. When we make
                  material changes, we will update the "Last updated" date and,
                  where appropriate, provide additional notice (for example, by
                  email or an in-app notice). Your continued use of the Service
                  after changes take effect constitutes your acceptance of the
                  revised Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  16. Miscellaneous
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-ink-600">
                  <li>
                    <strong>Entire Agreement:</strong> These Terms, together
                    with our Privacy Policy, constitute the entire agreement
                    between you and The Turn regarding the Service.
                  </li>
                  <li>
                    <strong>Severability:</strong> If any provision is found
                    unenforceable, the remaining provisions will remain in full
                    force and effect.
                  </li>
                  <li>
                    <strong>No Waiver:</strong> Our failure to enforce any
                    right or provision is not a waiver of that right or
                    provision.
                  </li>
                  <li>
                    <strong>Assignment:</strong> You may not assign these Terms
                    without our prior written consent. We may assign these
                    Terms in connection with a merger, acquisition, or sale of
                    assets.
                  </li>
                  <li>
                    <strong>Force Majeure:</strong> Neither party is liable for
                    delays or failures caused by events outside its reasonable
                    control.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  17. Contact Us
                </h2>
                <p className="text-ink-600 mb-4">
                  If you have questions about these Terms, contact us:
                </p>
                <div className="bg-ink-50 rounded-xl p-6 border border-silver-200">
                  <p className="text-ink-600">
                    <strong className="text-ink">The Turn</strong>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:support@trytheturn.com"
                      className="text-ink underline hover:text-gold transition-colors"
                    >
                      support@trytheturn.com
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
