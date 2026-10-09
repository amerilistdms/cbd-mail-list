"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

const links = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/list-options", label: "List Options" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

type HeaderProps = {
  overDark?: boolean;
};

function isActive(pathname: string, href: string) {
  return (
    pathname === href ||
    (href === "/home" && pathname === "/") ||
    (href !== "/home" && pathname.startsWith(`${href}/`))
  );
}

function scrollTopIfCurrent(pathname: string, href: string, e: MouseEvent) {
  if (!isActive(pathname, href)) return;
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Header({ overDark = true }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const light = !overDark;
  const docked = scrolled || light;
  const onDark = !light;
  const ink = onDark ? "text-frost" : "text-foreground";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        className={`pointer-events-auto w-full transition-colors duration-300 ${
          !docked ? "bg-transparent" : onDark ? "cbd-nav--dark" : "cbd-nav--light"
        }`}
      >
        <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between gap-4 px-5 md:h-16 md:px-10">
          <Link
            href="/home"
            className="relative z-50 shrink-0"
            onClick={(e) => {
              if (pathname === "/home" || pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src={onDark ? "/images/logo nav white.svg" : "/images/logo nav colored.svg"}
              alt="AmeriList"
              width={141}
              height={29}
              priority
              className="h-[22px] w-auto sm:h-[26px]"
            />
          </Link>

          <nav className={`hidden items-center gap-8 lg:flex ${ink}`}>
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTopIfCurrent(pathname, link.href, e)}
                  className={`text-[13px] tracking-[-0.01em] transition-colors ${
                    active
                      ? onDark
                        ? "font-semibold text-frost underline decoration-[#7dbaa6] decoration-2 underline-offset-8"
                        : "font-semibold text-[#0f7c7a] underline decoration-[#0f7c7a] decoration-2 underline-offset-8"
                      : onDark
                        ? "text-frost/70 hover:text-frost"
                        : "text-foreground/65 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="relative z-50 flex items-center gap-2">
            <Link
              href="/contact#contact-form"
              className={`hidden rounded-md px-3.5 py-2 text-[13px] font-semibold sm:inline-flex ${
                onDark
                  ? "bg-frost text-[#142220] hover:bg-white"
                  : "bg-[#142220] text-frost hover:bg-[#0f7c7a]"
              }`}
            >
              Get a buyer count
            </Link>

            <button
              type="button"
              className={`grid size-9 place-items-center lg:hidden ${ink}`}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="flex w-4 flex-col gap-1.5">
                <span className={`h-px w-full ${onDark ? "bg-frost" : "bg-foreground"}`} />
                <span className={`h-px w-full ${onDark ? "bg-frost" : "bg-foreground"}`} />
                <span className={`h-px w-3 ${onDark ? "bg-frost" : "bg-foreground"}`} />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div
            className={`border-t px-5 py-3 lg:hidden ${
              onDark ? "border-frost/10 bg-[#101c1a]" : "border-black/5 bg-white"
            }`}
          >
            <nav className="mx-auto flex w-full max-w-[1200px] flex-col gap-1 pb-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setOpen(false);
                    scrollTopIfCurrent(pathname, link.href, e);
                  }}
                  className={`px-1 py-2.5 text-sm ${
                    isActive(pathname, link.href)
                      ? onDark
                        ? "font-semibold text-frost"
                        : "font-semibold text-[#0f7c7a]"
                      : onDark
                        ? "text-frost/75"
                        : "text-foreground/75"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact#contact-form"
                onClick={() => setOpen(false)}
                className={`mt-2 inline-flex w-fit rounded-md px-4 py-2.5 text-sm font-semibold ${
                  onDark ? "bg-frost text-[#142220]" : "bg-[#142220] text-frost"
                }`}
              >
                Get a buyer count
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
