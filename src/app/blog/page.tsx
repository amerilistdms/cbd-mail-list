import type { Metadata } from "next";
import { BlogIndex } from "@/components/BlogIndex";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description:
    "Insights on CBD audience data, email lists, and acquisition marketing for CBD brands, hemp companies, and agencies.",
  path: "/blog",
  image: "/images/crystalweed-cannabis-YQoRXkEtA4Q-unsplash.jpg",
});

export default function BlogPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark={false} />
        <BlogIndex />
        <div data-reveal>
          <Footer />
        </div>
      </ScrollEffects>
    </main>
  );
}
