const steps = [
  {
    id: "01",
    title: "Name the product",
    body: "Oil, gummy, topical, pet, or a mix. The count starts from what you actually sell.",
  },
  {
    id: "02",
    title: "Pick the buyers",
    body: "We narrow to consumers whose purchases and interests match that product.",
  },
  {
    id: "03",
    title: "Choose the channel",
    body: "Email, mail, phone, or digital — one file, used where the response is likely.",
  },
  {
    id: "04",
    title: "Run the outreach",
    body: "AmeriList supports the campaign so the list is not the last thing you receive.",
  },
];

export function Solutions() {
  return (
    <section className="bg-[#eef3ee] px-5 pb-16 md:px-10 md:pb-24">
      <div
        data-reveal
        className="mx-auto w-full max-w-[1120px] rounded-[28px] bg-[#142220] px-6 py-10 text-frost md:px-10 md:py-12"
      >
        <div className="max-w-[640px]">
          <p data-reveal-child className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9fd0c4]">
            A campaign, not a file drop
          </p>
          <h2
            data-reveal-child
            className="text-[32px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[40px]"
          >
            How a CBD lead program actually starts.
          </h2>
        </div>

        <ol className="mt-10 grid gap-8 border-t border-frost/15 pt-8 md:grid-cols-4 md:gap-0">
          {steps.map((step) => (
            <li
              key={step.id}
              data-reveal-child
              className="md:border-l md:border-frost/15 md:px-5 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#9fd0c4]">{step.id}</p>
              <h3 className="mb-2 text-lg font-semibold tracking-[-0.02em]">{step.title}</h3>
              <p className="text-sm leading-6 text-frost/72">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
