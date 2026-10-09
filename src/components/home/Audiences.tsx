import Image from "next/image";

const audiences = [
  {
    title: "Hemp and CBD users",
    copy: "People already flagged by lifestyle, survey, and buying signals.",
  },
  {
    title: "Product buyers",
    copy: "Shoppers of oils, gummies, topicals, and the rest of the wellness shelf.",
  },
  {
    title: "Sleep and calm seekers",
    copy: "Consumers looking for stress, sleep, and everyday self-care products.",
  },
  {
    title: "Pet owners",
    copy: "Households buying treats, tinctures, and wellness for animals.",
  },
  {
    title: "Natural-product shoppers",
    copy: "Supplement, botanical, and clean-label buyers online and in store.",
  },
  {
    title: "Category investors",
    copy: "People paying attention to hemp and wellness as a market, not only a purchase.",
  },
];

export function Audiences() {
  return (
    <section className="bg-[#eef3ee]">
      <div data-reveal className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <figure data-reveal-child className="relative aspect-[3/2] overflow-hidden rounded-[28px] bg-[#d7e0d6]">
          <Image
            src="/images/honest-paws-Cm_O7FBrdhQ-unsplash.jpg"
            alt="A person offering a wellness dropper while a dog watches"
            fill
            className="object-cover object-[center_42%]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        </figure>

        <div>
          <p data-reveal-child className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f7c7a]">
            The buyers
          </p>
          <h2
            data-reveal-child
            className="max-w-[460px] text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[42px]"
          >
            People already spending in the category.
          </h2>
          <ul className="mt-8 divide-y divide-[#1e2d2b]/10">
            {audiences.map((item) => (
              <li key={item.title} data-reveal-child className="grid gap-1 py-3.5 sm:grid-cols-[168px_1fr] sm:gap-6">
                <h3 className="text-[15px] font-semibold tracking-[-0.01em]">{item.title}</h3>
                <p className="text-sm leading-6 text-foreground/65">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
