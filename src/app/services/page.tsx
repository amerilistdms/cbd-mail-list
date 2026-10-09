import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ScrollEffects } from "@/components/ScrollEffects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Buyer lists, email, direct mail, phone, digital audiences, profiling, and modeling for companies that sell CBD.",
  path: "/services",
});

const services = [
  {
    title: "CBD consumer lists",
    copy: "People selected by CBD purchases, hemp interest, wellness signals, and where they live.",
  },
  {
    title: "Email to opted-in buyers",
    copy: "Permission-based email for consumers who already pay attention to this category.",
  },
  {
    title: "Mailing lists",
    copy: "Households for postcards, samples, and offers aimed at qualified wellness buyers.",
  },
  {
    title: "Audience profiling",
    copy: "A clear picture of the customers who already buy, so the next file looks like them.",
  },
  {
    title: "Audience modeling",
    copy: "Lookalikes built from your buyers, not from a generic wellness interest.",
  },
  {
    title: "Data enhancement",
    copy: "Extra contact and demographic detail appended to the names you already have.",
  },
  {
    title: "Custom audiences",
    copy: "A file cut to the product, the geography, and the channel you actually plan to use.",
  },
  {
    title: "Multichannel outreach",
    copy: "Email, mail, phone, and digital kept on one audience so the campaign stays consistent.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark />
        <PageHero
          title={
            <h1 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] text-frost sm:text-[48px] md:text-[56px]">
              What AmeriList does for a CBD brand.
            </h1>
          }
        >
          <p className="text-base leading-7 text-frost/80">
            Lists, email, mail, phone, and digital — built so the people who already buy oils,
            gummies, topicals, and pet wellness can hear from you.
          </p>
          <Link
            href="/contact#contact-form"
            className="inline-flex rounded-md bg-frost px-5 py-3 text-sm font-semibold text-[#142220] transition-colors hover:bg-white"
          >
            Get a buyer count
          </Link>
        </PageHero>

        <section data-reveal className="bg-white pt-16 md:pt-24">
          <div className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
            <figure data-reveal-child className="relative aspect-[2/1] overflow-hidden rounded-[28px]">
              <Image
                src="/images/elsa-olofsson-7K93db_iq08-unsplash.jpg"
                alt="CBD oils, balms, and gummies laid out together"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1120px) 100vw, 1120px"
              />
            </figure>
          </div>
        </section>

        <section data-reveal className="bg-white py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
            <ol className="grid gap-px overflow-hidden rounded-2xl bg-[#1e2d2b]/10 sm:grid-cols-2">
              {services.map((item, index) => (
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
