import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ScrollEffects } from "@/components/ScrollEffects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "CBD Email Lists is the AmeriList practice for brands that sell oils, gummies, topicals, and pet wellness to people who already buy them.",
  path: "/about",
});

const pillars = [
  {
    n: "01",
    title: "Buyers, not a broad file",
    body: "The work is finding people who already purchase CBD and wellness, not renting a list of vaguely health-interested adults.",
  },
  {
    n: "02",
    title: "The channel follows the buyer",
    body: "Email, mail, phone, and digital sit on the same audience, so the offer shows up where a response is likely.",
  },
  {
    n: "03",
    title: "AmeriList since 2002",
    body: "The CBD practice is newer. The audience work underneath it has been running for more than twenty years.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark />
        <PageHero
          title={
            <h1 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] text-frost sm:text-[48px] md:text-[56px]">
              The AmeriList practice for brands that sell CBD.
            </h1>
          }
        >
          <p className="text-base leading-7 text-frost/80">
            We build the buyer lists and the outreach for companies selling oils, gummies, topicals,
            and pet wellness to people already in the category.
          </p>
          <Link
            href="/contact#contact-form"
            className="inline-flex rounded-md bg-frost px-5 py-3 text-sm font-semibold text-[#142220] transition-colors hover:bg-white"
          >
            Get a buyer count
          </Link>
        </PageHero>

        <section data-reveal className="bg-white py-16 md:py-24">
          <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-5 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] md:gap-16 md:px-10">
            <div data-reveal-child className="space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f7c7a]">
                The work
              </p>
              <h2 className="max-w-[520px] text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[42px]">
                A count is the start. The campaign is the point.
              </h2>
              <div className="max-w-[520px] space-y-4 text-[15px] leading-7 text-foreground/75 md:text-base">
                <p>
                  Marketers come to us when a broad wellness file has already spent the budget.
                  We narrow to people whose purchases and interests match the product on the label.
                </p>
                <p>
                  AmeriList has done audience work since 2002. CBD Email Lists is that practice,
                  pointed at hemp, CBD, and the wellness shelf around it.
                </p>
              </div>
            </div>

            <figure data-reveal-child className="relative aspect-[2/3] overflow-hidden rounded-[28px] bg-[#eef3ee]">
              <Image
                src="/images/nora-topicals-ErNCyAsDgfg-unsplash.jpg"
                alt="Hand holding a bottle of CBD oil among leaves"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </figure>
          </div>
        </section>

        <section data-reveal className="bg-[#142220] py-16 text-frost md:py-24">
          <div className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
            <h2
              data-reveal-child
              className="mb-12 max-w-[560px] text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[42px]"
            >
              What stays the same on every campaign.
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
              {pillars.map((item) => (
                <article key={item.n} data-reveal-child className="border-t border-frost/15 pt-5">
                  <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#9fd0c4]">{item.n}</p>
                  <h3 className="mb-3 text-lg font-semibold leading-snug tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-sm leading-6 text-frost/72">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section data-reveal className="bg-[#eef3ee] py-16 md:py-24">
          <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10">
            <figure data-reveal-child className="relative aspect-[2/3] overflow-hidden rounded-[28px] bg-[#eef3ee]">
              <Image
                src="/images/rob-warner-Z4uL4k0LZAM-unsplash.jpg"
                alt="Sugar-coated gummies stacked on a pale background"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </figure>
            <div data-reveal-child className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f7c7a]">Since 2002</p>
              <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[40px]">
                AmeriList experience, aimed at this shelf.
              </h2>
              <div className="space-y-4 text-[15px] leading-7 text-foreground/75">
                <p>
                  Since 2002, AmeriList has helped businesses reach the people most likely to
                  respond, with audience data built for mail, email, phone, and digital.
                </p>
                <p>
                  CBD Email Lists uses that same practice for brands selling hemp and wellness
                  products to consumers who already buy them.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/services"
                  className="inline-flex rounded-md bg-[#142220] px-5 py-3 text-sm font-semibold text-frost transition-colors hover:bg-[#0f7c7a]"
                >
                  See the services
                </Link>
                <Link
                  href="/contact#contact-form"
                  className="inline-flex rounded-md border border-[#142220]/20 px-5 py-3 text-sm font-semibold text-[#142220]"
                >
                  Get a buyer count
                </Link>
              </div>
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
