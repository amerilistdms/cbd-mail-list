"use client";

import Image from "next/image";
import Link from "next/link";
import "./home-hero.css";

export function Hero() {
  return (
    <section className="cbd-hero" aria-label="Homepage hero">
      <div className="cbd-hero__atmosphere" aria-hidden />
      <div className="cbd-hero__grain" aria-hidden />

      <div className="cbd-hero__stage">
        <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-8 px-5 py-10 md:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,480px)] lg:gap-6 lg:py-8">
          <div data-hero className="max-w-[620px]">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9fd0c4] md:text-xs">
              Lead generation for companies that sell CBD
            </p>
            <h1 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] text-frost sm:text-[48px] md:text-[60px]">
              Reach people who already buy CBD.
            </h1>
            <p className="mt-6 max-w-[500px] text-base leading-7 text-frost/80 md:text-lg md:leading-8">
              AmeriList builds the buyer lists and runs the outreach — email, mail, phone, and
              digital — so oils, gummies, topicals, and pet wellness brands sell to consumers who
              are already in the category.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact#contact-form"
                className="inline-flex rounded-md bg-frost px-5 py-3 text-sm font-semibold text-[#142220] transition-colors hover:bg-white"
              >
                Get a buyer count
              </Link>
              <Link
                href="/services"
                className="inline-flex text-sm font-semibold text-frost/85 underline decoration-frost/35 underline-offset-4 transition-colors hover:text-frost hover:decoration-frost"
              >
                See how leads get built
              </Link>
            </div>
          </div>

          <figure data-hero className="cbd-hero__visual">
            <div className="cbd-hero__frame">
              <Image
                src="/images/sophie-n-m_CnFOg7nfI-unsplash.jpg"
                alt="Three bottles of CBD oil arranged beneath a leaf"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
