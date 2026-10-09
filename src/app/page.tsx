import type { Metadata } from "next";
import { SplashClient } from "@/components/SplashClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "CBD Email Lists",
    description:
      "Reach verified CBD buyers and wellness consumers with opt-in email leads, mailing lists, and audience targeting from AmeriList.",
    path: "/home",
    noIndex: true,
  }),
  title: {
    absolute: "CBD Email Lists | AmeriList",
  },
};

export default function SplashPage() {
  return <SplashClient />;
}
