import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LegalBody, LegalHero, LegalSection } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name}, ${site.city} collects, uses and protects the personal information you share with us — bookings, enquiries and in-store records.`,
};

const UPDATED = "18 November 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LegalHero eyebrow="Legal" title="Privacy Policy" updated={UPDATED} />
        <div className="bg-cloud py-12 sm:py-16">
          <LegalBody>
            <LegalSection index={1} title="Who We Are">
              <p>
                {site.name} (“we”, “us”, “our”) operates this website as an
                information and enquiry channel for our optical store and vision
                clinic at {site.addressLines.slice(1).join(", ")}. This policy
                explains what personal information we handle through the website,
                over phone, WhatsApp and email, and how we look after it.
              </p>
              <p>
                We manage personal data in line with the Digital Personal Data
                Protection Act, 2023 (India) and this policy applies to every
                visitor and customer who contacts us through this site.
              </p>
            </LegalSection>

            <LegalSection index={2} title="Information We Collect">
              <p>
                <strong>This website does not require an account, does not
                accept online payments and does not run its own analytics or
                advertising cookies.</strong> We only receive information when
                you choose to share it with us, typically:
              </p>
              <p>
                <strong>Booking &amp; enquiry details</strong> — when you call
                us, message us on WhatsApp or email us (for example through the
                “Book an Eye Test” links), we receive your name, phone number
                and whatever you tell us, such as preferred appointment times.
              </p>
              <p>
                <strong>In-store &amp; clinical records</strong> — prescription
                details, eye-test results and contact-lens fitting notes
                recorded during your visit are held by the store for dispensing
                and after-care. This policy also covers how we handle those
                records.
              </p>
              <p>
                <strong>Technical basics</strong> — like most websites, our
                hosting provider may log standard technical details (such as IP
                address and browser type) for security and troubleshooting.
              </p>
            </LegalSection>

            <LegalSection index={3} title="How We Use Your Information">
              <p>We use the information you share only to:</p>
              <p>
                respond to your enquiries and confirm or reschedule
                appointments · remind you of booked visits or ready orders ·
                provide eye tests, dispensing, fitting and after-care services ·
                maintain accurate clinical and sales records · comply with
                legal, tax or regulatory obligations.
              </p>
              <p>
                We do not send marketing messages unless you ask us to, and we
                never sell your personal data.
              </p>
            </LegalSection>

            <LegalSection index={4} title="Google Maps, WhatsApp & Third-Party Services">
              <p>
                Our Contact section embeds a <strong>Google Maps</strong> map so
                you can find the store. This embed is loaded from Google and may
                set cookies or collect technical data under Google&apos;s own
                privacy policy. The page also links to{" "}
                <strong>WhatsApp</strong> and our social media profiles — once
                you tap those links, the corresponding platform&apos;s terms and
                privacy policy apply to your conversation with us there.
              </p>
            </LegalSection>

            <LegalSection index={5} title="Sharing Your Information">
              <p>
                We share personal information only with: our staff and
                optometrists who need it to serve you; the messaging or telecom
                services you choose to contact us through (such as WhatsApp or
                your email provider); and authorities where disclosure is
                required by law. Lens and frame suppliers never receive your
                personal details.
              </p>
            </LegalSection>

            <LegalSection index={6} title="Retention & Security">
              <p>
                We keep enquiry messages only as long as needed to serve you,
                and clinical/prescription records for as long as is customary
                and legally permitted for after-care. We store paper and digital
                records with reasonable safeguards and restrict access to
                authorised staff.
              </p>
            </LegalSection>

            <LegalSection index={7} title="Your Rights">
              <p>
                Under Indian data-protection law you can ask us to confirm,
                correct, or erase your personal data, or nominate someone to
                exercise these rights on your behalf. To raise any request or
                grievance, contact us using the details below — we will respond
                within a reasonable period.
              </p>
            </LegalSection>

            <LegalSection index={8} title="Changes to This Policy">
              <p>
                We may update this policy from time to time. The “last updated”
                date at the top of this page always reflects the current
                version, and continued use of the website after changes means
                you accept the revised policy.
              </p>
            </LegalSection>

            <LegalSection index={9} title="Contact Us">
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
