import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ScrollEffects } from "@/components/ScrollEffects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Request free CBD list counts, book a call, or ask AmeriList about email, postal, and digital audience targeting for your campaign.",
  path: "/contact",
});

const topics = [
  "Your target audience",
  "Geographic markets",
  "Marketing channels",
  "Available audience counts",
  "Pricing options",
  "Campaign recommendations",
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark />
        <PageHero
          title={
            <h1 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] text-frost sm:text-[48px] md:text-[56px]">
              Tell us the product you sell.
            </h1>
          }
        >
          <p className="text-base leading-7 text-frost/80">
            Share the audience, the market, and the channel. We come back with counts and a way to
            reach those buyers.
          </p>
          <ul className="space-y-2 text-sm leading-6 text-frost/75">
            {topics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#contact-form"
              className="inline-flex rounded-md bg-frost px-5 py-3 text-sm font-semibold text-[#142220]"
            >
              Get a buyer count
            </Link>
            <Link
              href="tel:+18004572899"
              className="inline-flex rounded-md border border-frost/30 px-5 py-3 text-sm font-semibold text-frost"
            >
              Call the team
            </Link>
          </div>
        </PageHero>

        <section id="contact-form" data-reveal className="bg-white py-16 md:py-20">
          <div className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
            <div data-reveal-child className="mb-10 max-w-[640px]">
              <h2 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[42px]">
                Send the details.
              </h2>
              <p className="mt-4 text-base leading-7 text-foreground/75">
                A few notes on the campaign are enough. We follow up with counts, pricing, and a
                recommendation.
              </p>
            </div>

            <div data-reveal-child className="rounded-2xl border border-[#1e2d2b]/10 px-4 py-6 md:px-8 md:py-8">
              <ContactForm />
            </div>
          </div>
        </section>

        <div data-reveal>
          <Footer />
        </div>
      </ScrollEffects>
    </main>
  );
}
