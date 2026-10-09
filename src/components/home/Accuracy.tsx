const points = [
  {
    n: "01",
    title: "Broad lists waste the budget",
    body: "A file of “health interested” adults is not a file of people who buy CBD. The spend disappears before the offer is even seen.",
  },
  {
    n: "02",
    title: "Response follows the category",
    body: "Campaigns do better when the audience already buys oils, gummies, topicals, sleep support, or pet wellness.",
  },
  {
    n: "03",
    title: "AmeriList has done this since 2002",
    body: "CBD Email Lists sits on that audience practice. The category is newer. The list work is not.",
  },
];

export function Accuracy() {
  return (
    <section className="bg-white">
      <div data-reveal className="mx-auto w-full max-w-[1120px] px-5 py-20 md:px-10 md:py-28">
        <h2
          data-reveal-child
          className="max-w-[640px] text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[42px]"
        >
          A tighter list is how the budget stays on buyers.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {points.map((point) => (
            <article key={point.n} data-reveal-child>
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[#0f7c7a]">{point.n}</p>
              <h3 className="mb-3 text-lg font-semibold leading-snug tracking-[-0.02em]">{point.title}</h3>
              <p className="text-sm leading-6 text-foreground/70">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
