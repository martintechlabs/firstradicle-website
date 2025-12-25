import { Layout } from "@/components/Layout";
import { Section, Headline, Subheadline, OrganicButton } from "@/components/LandingComponents";
import { Link } from "wouter";

export default function Guarantee() {
  return (
    <Layout>
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-chart-2/20 text-chart-2 px-4 py-1.5 rounded-full font-sans font-bold text-sm mb-6 border border-chart-2/30">
            The Ironclad Promise
          </div>
          <Headline>6 Weeks. Production Ready. Or Your Money Back.</Headline>
          <Subheadline className="mx-auto">
            We don't believe in vague timelines or "hourly billing" black holes. We deal in outcomes.
          </Subheadline>
        </div>

        <div className="max-w-3xl mx-auto prose prose-lg prose-stone">
          <div className="bg-white p-8 rounded-2xl border-2 border-chart-2/20 shadow-lg mb-12">
            <h3 className="font-serif text-2xl font-bold text-primary mt-0">Our Guarantee to You</h3>
            <p>
              If we fail to deliver a feature-complete, production-ready migration of your agreed-upon scope within 6 weeks of the project start date, <strong>we will refund 100% of your project fees.</strong>
            </p>
            <p className="mb-0">
              No fine print. No excuses. If we don't ship, you don't pay.
            </p>
          </div>

          <h3>Why do we offer this?</h3>
          <p>
            Because we've seen too many founders get burned by agencies that drag projects out for months to bill more hours. We are incentivized to ship fast and ship right.
          </p>

          <h3 className="mt-12">What "Production Ready" Means</h3>
          <ul className="list-none pl-0 space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-chart-2 font-bold text-xl">✓</span>
              <span><strong>Feature Parity:</strong> All core features from your no-code app are working.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-chart-2 font-bold text-xl">✓</span>
              <span><strong>Data Integrity:</strong> All your user data is migrated and accessible.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-chart-2 font-bold text-xl">✓</span>
              <span><strong>Zero Critical Bugs:</strong> The app is stable and ready for real users.</span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-16">
          <Link href="/unblock">
            <OrganicButton className="text-lg px-8 py-4">
              Start Your Risk-Free Migration
            </OrganicButton>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
