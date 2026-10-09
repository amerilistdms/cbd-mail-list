import Image from "next/image";
import Link from "next/link";

const listOptions = [
  "CBD Users",
  "Wellness Seekers",
  "Pet CBD Buyers",
  "Topicals & Skincare",
  "Supplement Shoppers",
  "Industry Professionals",
];

const services = [
  "CBD Consumer Lists",
  "CBD Email Lists",
  "CBD Mailing Lists",
  "Audience Profiling",
  "Audience Modeling",
  "Data Enhancement",
  "Custom Audiences",
  "Multichannel Marketing",
];

const company = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#101c1a] text-frost">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-12 px-5 py-12 md:px-10 md:pt-14 md:pb-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-16">
          <div className="max-w-[280px]">
            <Image
              src="/images/logo nav white.svg"
              alt="AmeriList CBD Mail List"
              width={168}
              height={35}
              className="h-8 w-auto"
            />
            <p className="mt-5 text-sm leading-6 text-frost/75">
              Audience data and outreach for companies that sell CBD to people who already buy it.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 md:gap-16">
              <div>
                <p className="mb-2 text-sm font-bold tracking-[0.14px]">List Options</p>
                <ul className="space-y-2 text-sm tracking-[0.14px]">
                  {listOptions.map((item) => (
                    <li key={item}>
                      <Link href="/list-options" className="hover:opacity-80">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold tracking-[0.14px]">Services</p>
                <ul className="space-y-2 text-sm tracking-[0.14px]">
                  {services.map((item) => (
                    <li key={item}>
                      <Link href="/services" className="hover:opacity-80">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold tracking-[0.14px]">Company</p>
                <ul className="space-y-2 text-sm tracking-[0.14px]">
                  {company.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="hover:opacity-80">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        <div className="flex flex-col gap-4 border-t border-frost/12 pt-6 text-sm text-frost/70 sm:flex-row sm:items-center sm:justify-between">
          <p>A division of AmeriList. Audience data and marketing solutions since 2002.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-frost">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-frost">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-frost">
              Cookie Policy
            </Link>
          </div>
        </div>
        <p className="text-sm text-frost/50">© 2026 CBD Email Lists. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
