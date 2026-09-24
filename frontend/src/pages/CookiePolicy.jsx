import PolicyLayout from "../components/policies/PolicyLayout";

function Section({ id, number, title, children }) {
  return (
    <section
      id={id}
      className="border-b border-gray-100 py-8 first:pt-0 last:border-b-0"
    >
      <div className="flex gap-4">
        {number && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-teal font-display font-bold text-white">
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
          <span className="absolute -left-4 top-[11px] h-2 w-2 rounded-full bg-brand-teal" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function CookieType({ number, title, children }) {
  return (
    <div className="rounded-2xl border border-brand-teal-light/60 bg-brand-teal-light/20 p-5">
      <div className="flex gap-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-teal font-display text-sm font-bold text-white">
          {number}
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-gray-900">
            {title}
          </h3>

          <div className="mt-2 space-y-2 font-body text-[15px] leading-7 text-brand-gray">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CookiePolicy() {
  return (
    <PolicyLayout
      title="Website Cookie Policy"
      description="Learn how MANIMARK uses cookies and similar tracking technologies to improve your browsing experience."
    >
      <Section id="introduction" title="Introduction">
        <p>
          This Cookie Policy explains how MANIMARK uses cookies and similar
          tracking technologies on our website at WWW. .COM (the "Website").
        </p>

        <div className="rounded-2xl bg-brand-yellow/30 p-5 font-body font-semibold text-gray-800">
          By using the Website, you consent to the use of cookies as described
          in this policy.
        </div>
      </Section>

      <Section id="information" number="1" title="What Are Cookies?">
        <p>
          Cookies are small text files that are placed on your device (computer,
          tablet, or mobile phone) when you visit a website.
        </p>

        <p>
          They are widely used to make websites work more efficiently and to
          provide information to the website owner.
        </p>
      </Section>

      <Section number="2" title="Types of Cookies We Use">
        <div className="space-y-5">
          <CookieType number="1" title="Strictly Necessary Cookies">
            <p>
              These cookies are essential for the proper functioning of the
              Website. They enable you to navigate the site and use its
              features, such as accessing secure areas.
            </p>

            <p>
              Without these cookies, certain services or functions on the
              Website would not be available.
            </p>
          </CookieType>

          <CookieType number="2" title="Performance Cookies">
            <p>
              These cookies collect information about how you use the Website,
              such as which pages you visit most often and if you encounter
              error messages.
            </p>

            <p>
              This information is used to improve the Website's performance and
              user experience.
            </p>

            <p>
              These cookies do not collect information that can identify you
              personally. All data is aggregated and anonymous.
            </p>
          </CookieType>

          <CookieType number="3" title="Functionality Cookies">
            <p>
              These cookies allow the Website to remember choices you make, such
              as your username, language preference, or region.
            </p>

            <p>
              They provide enhanced, more personalized features and improve your
              browsing experience.
            </p>
          </CookieType>

          <CookieType number="4" title="Marketing Cookies">
            <p>
              These cookies track your visits to the Website and your
              interaction with our content.
            </p>

            <p>
              They are used to deliver marketing communications that are
              relevant to you and to measure the effectiveness of our marketing
              campaigns.
            </p>

            <p>
              We may use third-party services, such as Google Analytics, to
              collect this information.
            </p>
          </CookieType>
        </div>
      </Section>

      <Section id="usage" number="3" title="How We Use Cookies">
        <p>We use cookies for the following purposes:</p>

        <BulletList
          items={[
            "To enhance the functionality and performance of the Website",
            "To analyse Website traffic and usage patterns",
            "To provide personalized content and services",
            "To manage and improve our marketing efforts",
          ]}
        />
      </Section>

      <Section number="4" title="Managing Cookies">
        <p>
          You can manage your cookie preferences through your browser settings.
          Most browsers allow you to:
        </p>

        <BulletList
          items={[
            "Accept or reject all cookies",
            "Accept or reject third-party cookies",
            "Clear cookies from your browser history",
            "Set preferences for specific websites",
          ]}
        />

        <div className="rounded-2xl bg-brand-pink-soft p-5">
          <p>
            Please note that if you disable cookies, some features of the
            Website may not function properly.
          </p>
        </div>
      </Section>

      <Section number="5" title="Third-Party Cookies">
        <p>
          We may use third-party services, such as Google Analytics, to collect
          information about how you use the Website.
        </p>

        <p>
          These third parties may set their own cookies on your device. We do
          not control these third-party cookies, and you should refer to their
          respective privacy policies for information on how they use cookies.
        </p>
      </Section>

      <Section number="6" title="Changes to This Cookie Policy">
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons.
        </p>

        <p>
          We will notify you of any material changes by posting the updated
          policy on the Website.
        </p>
      </Section>

      <Section id="contact" number="7" title="Contact Us">
        <p>
          If you have any questions or concerns about this Cookie Policy or our
          use of cookies, please contact us at:
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
