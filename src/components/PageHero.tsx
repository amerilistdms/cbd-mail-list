import type { ReactNode } from "react";
import "./page-hero.css";

type PageHeroProps = {
  title: ReactNode;
  children: ReactNode;
  compact?: boolean;
};

export function PageHero({ title, children, compact = false }: PageHeroProps) {
  return (
    <section className={`page-hero${compact ? " page-hero--compact" : ""}`} aria-label="Page hero">
      <div className="page-hero__atmosphere" aria-hidden />
      <div className="page-hero__stage">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-5 pb-14 pt-8 md:flex-row md:items-end md:justify-between md:gap-16 md:px-10 md:pb-20 md:pt-12">
          <div data-hero className="max-w-[640px]">
            {title}
          </div>
          <div data-hero className="max-w-[420px] space-y-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
