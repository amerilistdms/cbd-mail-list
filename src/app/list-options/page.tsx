import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ScrollEffects } from "@/components/ScrollEffects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "List Options",
  description:
    "CBD users, wellness seekers, pet buyers, topical shoppers, supplement buyers, and geographic markets from AmeriList.",
  path: "/list-options",
});

const lists = [
  {
    title: "CBD users",
    copy: "Consumers marked by hemp and CBD purchases, behavior, and interest.",
  },
  {
    title: "Wellness and self-care",
    copy: "People looking for stress relief, sleep, recovery, and everyday wellness.",
  },
  {
    title: "Topicals and skincare",
    copy: "Buyers of creams, balms, serums, and clean-label personal care.",
  },
  {
    title: "Pet CBD",
    copy: "Households buying treats, tinctures, and wellness for dogs and cats.",
  },
  {
    title: "Supplements and natural health",
    copy: "Shoppers of vitamins, botanicals, and functional products.",
  },
  {
    title: "Industry professionals",
    copy: "People working in hemp, CBD manufacturing, and wellness businesses.",
  },
  {
    title: "Retail and online shoppers",
    copy: "Audiences tied to purchases at wellness stores, pharmacies, and online shops.",
  },
  {
    title: "Geographic markets",
    copy: "Counts cut by state, county, city, ZIP code, or a retail trade area.",
  },
];

export default function ListOptionsPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark />
        <PageHero
          title={
            <h1 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] text-frost sm:text-[48px] md:text-[56px]">
              The buyers a CBD brand can reach.
            </h1>
          }
        >
          <p className="text-base leading-7 text-frost/80">
            Segments built from purchases, interests, and geography, so the file matches the
            product you sell.
          </p>
          <Link
            href="/contact#contact-form"
            className="inline-flex rounded-md bg-frost px-5 py-3 text-sm font-semibold text-[#142220] transition-colors hover:bg-white"
          >
            Get a buyer count
          </Link>
        </PageHero>

        <section data-reveal className="bg-white py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
            <ol className="grid gap-px overflow-hidden rounded-2xl bg-[#1e2d2b]/10 sm:grid-cols-2">
              {lists.map((item, index) => (
                <li key={item.title} data-reveal-child className="bg-white p-6 md:p-8">
                  <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-[#0f7c7a]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mb-2 text-xl font-semibold tracking-[-0.02em]">{item.title}</h2>
                  <p className="text-sm leading-6 text-foreground/70">{item.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <div data-reveal>
          <Footer />
        </div>
      </ScrollEffects>
    </main>
  );
}
