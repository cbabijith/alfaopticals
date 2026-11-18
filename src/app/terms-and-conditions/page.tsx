import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LegalBody, LegalHero, LegalSection } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${site.name} website and for eye-test bookings, dispensing and clinical services in ${site.city}, ${site.region}.`,
};

const UPDATED = "18 November 2026";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LegalHero eyebrow="Legal" title="Terms & Conditions" updated={UPDATED} />
        <div className="bg-cloud py-12 sm:py-16">
          <LegalBody>
            <LegalSection index={1} title="Acceptance of Terms">
              <p>
                These terms govern your use of the {site.name} website and the
                enquiry/booking services offered through it. By browsing this
                site or contacting us through it, you agree to these terms. If
                you do not agree, please do not use the site.
              </p>
            </LegalSection>

            <LegalSection index={2} title="Use of This Website">
              <p>
                This website is an information channel for our store and vision
                clinic in {site.city}. Content — including frame and lens
                descriptions, prices where shown, and photographs — is provided
                in good faith for general information, and product images are
                indicative. The site does not process online payments or
                accounts.
              </p>
            </LegalSection>

            <LegalSection index={3} title="Bookings & Appointments">
              <p>
                “Book an Eye Test” links, calls, WhatsApp messages and emails
                are <strong>booking requests, not confirmed appointments</strong>.
                An appointment is confirmed only when our staff confirm the date
                and time with you. Walk-ins are welcome but are subject to
                optometrist availability. Please arrive on time; if you need to
                reschedule, let us know as early as you can.
              </p>
            </LegalSection>

            <LegalSection index={4} title="Eye Tests & Clinical Services">
              <p>
                Computerised eye testing, refraction, contact-lens fitting and
                related services at our clinic are performed by trained
                optometrists and staff. These services support vision care and
                eyewear dispensing; they are <strong>not a substitute for
                medical diagnosis or treatment by an ophthalmologist</strong>.
                If our examination indicates a condition that needs medical
                attention, we will refer you to a qualified eye doctor.
              </p>
              <p>
                Recommended lenses and frames are suggestions — the final
                choice of eyewear is always yours.
              </p>
            </LegalSection>

            <LegalSection index={5} title="Prescriptions & Contact Lenses">
              <p>
                Contact lenses are dispensed only after a fitting and against a
                valid, unexpired prescription — either from our own examination
                or from your eye doctor. Follow the wearing schedule, cleaning
                instructions and after-care advice given to you, and attend
                follow-up visits as advised. Misuse of contact lenses can harm
                your eyes; discontinue use and consult us or your doctor if you
                experience discomfort, redness or vision changes.
              </p>
            </LegalSection>

            <LegalSection index={6} title="Pricing, Products & Availability">
              <p>
                Prices, offers, frame styles, lens options and brand availability
                change from time to time and may vary from what is shown on this
                site. Prices quoted <strong>in-store at the time of purchase
                prevail</strong>. Product availability is subject to stock, and
                manufacturer warranties (where applicable) are governed by the
                respective brand&apos;s warranty terms.
              </p>
            </LegalSection>

            <LegalSection index={7} title="Intellectual Property">
              <p>
                The design, text, photographs and branding on this website
                belong to {site.name} or are used with permission. You may not
                copy, reuse or distribute site content for commercial purposes
                without our written consent.
              </p>
            </LegalSection>

            <LegalSection index={8} title="Third-Party Links">
              <p>
                This site links to third-party services such as Google Maps,
                WhatsApp and our social media profiles. We do not control those
                platforms and are not responsible for their content, availability
                or practices.
              </p>
            </LegalSection>

            <LegalSection index={9} title="Limitation of Liability">
              <p>
                To the fullest extent permitted by law, {site.name} is not
                liable for any indirect or consequential loss arising from use
                of this website, or from reliance on general information
                published on it. Nothing in these terms limits liability that
                cannot be limited under law.
              </p>
            </LegalSection>

            <LegalSection index={10} title="Governing Law & Jurisdiction">
              <p>
                These terms are governed by the laws of India, and any disputes
                are subject to the exclusive jurisdiction of the courts at
                {" "}{site.city}, {site.region}.
              </p>
            </LegalSection>

            <LegalSection index={11} title="Changes to These Terms">
              <p>
                We may revise these terms from time to time. The “last updated”
                date at the top of this page reflects the current version, and
                continued use of the website after changes constitutes
                acceptance of the revised terms.
              </p>
            </LegalSection>

            <LegalSection index={12} title="Contact Us">
              <p>
                {site.name}, {site.addressLines.slice(1).join(", ")} · Phone:{" "}
                <a href={site.phoneHref}>{site.phoneDisplay}</a> · Email:{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </LegalSection>
          </LegalBody>
        </div>
      </main>
      <Footer />
    </>
  );
}
