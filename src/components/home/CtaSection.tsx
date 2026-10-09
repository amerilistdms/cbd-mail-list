import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-white px-5 pb-20 md:px-10 md:pb-28">
      <div
        data-reveal
        className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 rounded-3xl bg-[#142220] px-7 py-12 text-frost md:flex-row md:items-end md:justify-between md:px-12 md:py-14"
      >
        <div data-reveal-child className="max-w-[640px]">
          <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] sm:text-[40px]">
            Tell us the product you sell.
          </h2>
          <p className="mt-4 max-w-[520px] text-base leading-7 text-frost/75">
            We come back with how many of those buyers AmeriList can reach, and which channel fits
            the offer.
          </p>
        </div>
        <Link
          data-reveal-child
          href="/contact#contact-form"
          className="inline-flex w-fit shrink-0 rounded-md bg-frost px-5 py-3 text-sm font-semibold text-[#142220] transition-colors hover:bg-white"
        >
          Start with a count
        </Link>
      </div>
    </section>
  );
}
