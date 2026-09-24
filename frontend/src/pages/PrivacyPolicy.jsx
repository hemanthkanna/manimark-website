import PolicyLayout from "../components/policies/PolicyLayout";

function Section({ id, number, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-gray-100 py-8 first:pt-0 last:border-b-0"
    >
      <div className="flex gap-4">
        {number && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-magenta font-display font-bold text-white">
            {number}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            {title}
          </h2>

          <div className="mt-4 space-y-4 font-body text-[15px] leading-7 text-brand-gray">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index} className="relative pl-2">
          <span className="absolute -left-4 top-[11px] h-2 w-2 rounded-full bg-brand-magenta" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <PolicyLayout
      title="Website Privacy Policy"
      description="How MANIMARK collects, uses, discloses, and protects your personal information when you use our website."
    >
      <Section id="introduction" title="Introduction">
        <p>
          MANIMARK is committed to safeguarding the privacy of its website
          visitors and customers.
        </p>
        <p>
          This Privacy Policy outlines how we collect, use, disclose, and
          protect your personal information when you visit our website at www.
          .com (the "Website").
        </p>
      </Section>

      <Section id="information" number="1" title="Information We Collect">
        <h3 className="font-display text-xl font-bold text-gray-900">
          Personal Information
        </h3>

        <p>
          We collect personal information that you voluntarily provide to us
          through the Website, such as:
        </p>

        <BulletList
          items={[
            "Name",
            "Email address",
            "Phone number",
            "Physical address",
            "Company name",
            "Job title",
            "Any other information you choose to provide when filling out forms, registering for services, or contacting us",
          ]}
        />

        <h3 className="pt-3 font-display text-xl font-bold text-gray-900">
          Automatically Collected Information
        </h3>

        <p>
          We also automatically collect certain information about your device
          and usage of the Website, including:
        </p>

        <BulletList
          items={[
            "IP address",
            "Browser type and version",
            "Operating system and platform",
            "Pages viewed and navigation paths",
            "Information about the referring website",
            "Date and time of visits",
          ]}
        />
      </Section>

      <Section id="usage" number="2" title="How We Use Your Information">
        <p>We use the collected information for the following purposes:</p>

        <BulletList
          items={[
            "To provide and improve our products and services",
            "To respond to inquiries and requests",
            "To send you updates and information about our company and offerings",
            "To analyse Website traffic and usage patterns to enhance user experience",
            "For marketing and promotional activities, with your consent",
            "To comply with legal obligations and protect our rights and property",
          ]}
        />
      </Section>

      <Section number="3" title="Disclosure of Information">
        <p>We may disclose your personal information:</p>

        <BulletList
          items={[
            "To our subsidiaries, affiliates, and trusted third-party service providers who assist us in operating the Website and providing our services",
            "As required by law or to respond to legal requests from public authorities",
            "To protect the rights, property, or safety of MANIMARK, our users, or others",
            "In connection with a merger, acquisition, or sale of all or a portion of our assets",
          ]}
        />
      </Section>

      <Section number="4" title="Your Rights and Choices">
        <h3 className="font-display text-xl font-bold text-gray-900">
          Access and Correction
        </h3>

        <p>
          You have the right to access, update, or correct your personal
          information. You can do this by contacting us using the details
          provided in the "Contact Us" section.
        </p>

        <h3 className="pt-3 font-display text-xl font-bold text-gray-900">
          Marketing Preferences
        </h3>

        <p>
          You can opt out of receiving marketing communications from us by
          clicking the unsubscribe link in our emails or contacting us directly.
        </p>
      </Section>

      <Section number="5" title="Cookies and Tracking Technologies">
        <p>
          Our website uses cookies and similar tracking technologies to enhance
          your browsing experience.
        </p>

        <p>
          You can manage your cookie preferences through your browser settings.
          However, disabling cookies may affect the functionality of some
          Website features.
        </p>
      </Section>

      <Section number="6" title="Security">
        <p>
          We implement reasonable security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction.
        </p>

        <p>
          However, no method of transmission over the internet or electronic
          storage is completely secure, and we cannot guarantee absolute
          security.
        </p>
      </Section>

      <Section number="7" title="Children's Privacy">
        <p>
          Our website is not intended for children under the age of 18, and we
          do not knowingly collect personal information from them.
        </p>

        <p>
          If we become aware that we have collected personal information from a
          child under 18, we will take steps to delete it.
        </p>
      </Section>

      <Section number="8" title="Consent & Acknowledgement">
        <p>
          If and when you submit a form from MANIMARK in writing or through
          electronic media, by submitting this form, you are providing the
          required information to MANIMARK (Company) for consideration in
          relation to opportunities listed.
        </p>

        <h3 className="font-display text-xl font-bold text-gray-900">
          1. Consent for Data Collection
        </h3>

        <BulletList
          items={[
            "By filling out and submitting this form, you consent to the collection, processing, and storage of your personal information as per the terms outlined below.",
            "The data provided will be used solely for the purpose of evaluating your application for opportunities with the Company.",
          ]}
        />

        <h3 className="pt-3 font-display text-xl font-bold text-gray-900">
          2. Personal Data Collected
        </h3>

        <BulletList
          items={[
            "The personal data we collect includes name, contact information, business details, and investment capacity.",
            "We do not collect sensitive personal data (e.g., financial information, Aadhaar number, biometric data) unless explicitly required during the process.",
          ]}
        />

        <h3 className="pt-3 font-display text-xl font-bold text-gray-900">
          3. Purpose Limitation
        </h3>

        <BulletList
          items={[
            "Evaluating your suitability for opportunities.",
            "Communicating updates about your application.",
            "Processing background checks (if applicable).",
            "Marketing communications (if consent is provided).",
          ]}
        />

        <h3 className="pt-3 font-display text-xl font-bold text-gray-900">
          4. Third-Party Data Sharing
        </h3>

        <BulletList
          items={[
            "Service providers (e.g., technology platforms, marketing agencies) who assist us in processing your application.",
            "Business partners who are involved in evaluating or managing investment opportunities.",
            "Legal authorities if required by law or for legal purposes.",
          ]}
        />

        <p>
          All third parties are contractually obligated to handle your data
          securely and only for the purposes outlined above.
        </p>

        <h3 className="pt-3 font-display text-xl font-bold text-gray-900">
          5. Data Retention Period
        </h3>

        <BulletList
          items={[
            "Your personal data will be retained for a period of three years after the completion of the application process or until the purpose for which it was collected has been fulfilled, whichever is earlier.",
            "After this period, your data will be securely deleted unless retention is required by law.",
          ]}
        />
      </Section>

      <Section number="9" title="Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons.
        </p>

        <p>
          We will notify you of any material changes by posting the updated
          policy on the Website.
        </p>
      </Section>

      <Section id="contact" number="10" title="Contact Us">
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at:
        </p>

        <div className="rounded-2xl bg-brand-pink-soft p-5">
          <p className="font-display text-lg font-bold text-brand-magenta">
            MANIMARK
          </p>

          <p>S.F,No:870/5, Narayanapuram Village,</p>
          <p>
            Kannamangalam Road, Kavanoor Post, Arcot Thaluk, Ranipet Dis,
            Tamilnadu, Ranipet, Tamil Nadu - 632507
          </p>
          <p>customercare@manimark.com</p>
          <p>7904490146 | 7904490633</p>
        </div>
      </Section>
    </PolicyLayout>
  );
}
