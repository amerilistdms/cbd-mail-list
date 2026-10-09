import Link from "next/link";

const offerings = [
  {
    title: "Postal lists",
    description: "Households selected around the people most likely to buy your CBD product.",
  },
  {
    title: "Consumer email",
    description: "Opted-in wellness shoppers you can write to without renting a random inbox file.",
  },
  {
    title: "Phone data",
    description: "Numbers for follow-up when a campaign needs a conversation, not another blast.",
  },
  {
    title: "Digital audiences",
    description: "Matched segments for the channels where your buyers already spend time.",
  },
  {
    title: "Customer matching",
    description: "Your buyers, expanded into people who purchase the same way.",
  },
  {
    title: "Direct mail",
    description: "Audience, data, and campaign support for postcards, samples, and offers.",
  },
  {
    title: "Permission email",
    description: "Outreach to people who agreed to hear about wellness products.",
  },
  {
    title: "Modeling",
    description: "Profiles of your best customers, then lookalikes built from that pattern.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div data-reveal className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            data-reveal-child
            className="max-w-[560px] text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[42px]"
          >
            What AmeriList does once you decide to sell more CBD.
          </h2>
          <p data-reveal-child className="max-w-[360px] text-[15px] leading-7 text-foreground/70">
            Lists are the start. The rest is the outreach that turns a wellness shopper into a
            customer for your oil, gummy, topical, or pet line.
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-[#1e2d2b]/10 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item, index) => (
            <li key={item.title} data-reveal-child className="bg-white p-6">
              <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-[#0f7c7a]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-2 text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="text-sm leading-6 text-foreground/65">{item.description}</p>
            </li>
          ))}
        </ol>

        <div data-reveal-child className="mt-8">
          <Link
            href="/services"
            className="inline-flex rounded-md bg-[#142220] px-5 py-3 text-sm font-semibold text-frost transition-colors hover:bg-[#0f7c7a]"
          >
            All lead services
          </Link>
        </div>
      </div>
    </section>
  );
}
