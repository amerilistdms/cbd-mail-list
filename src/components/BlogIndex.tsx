"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { posts, type Post } from "@/data/posts";

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesQuery(post: Post, query: string) {
  const tokens = normalize(query).split(" ").filter(Boolean);
  if (!tokens.length) return true;

  const haystack = normalize(
    [post.title, post.category, post.excerpt, post.slug.replaceAll("-", " ")].join(" ")
  );

  return tokens.every((token) => haystack.includes(token));
}

export function BlogIndex() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const filtered = useMemo(
    () => posts.filter((post) => matchesQuery(post, deferredQuery)),
    [deferredQuery]
  );
  const hasQuery = query.trim().length > 0;

  return (
    <section className="bg-frost pt-20">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-12">
        <div data-hero className="mb-10 flex max-w-[720px] flex-col items-center gap-6 text-center md:mb-14 md:gap-[24px]">
          <h1 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[48px]">
            Notes for brands that sell CBD.
          </h1>
          <p className="max-w-[460px] text-base leading-7 text-foreground/75">
            How buyer lists, email, and direct mail actually work for hemp and wellness companies.
          </p>

          <label className="mt-2 flex w-full max-w-[495px] items-center justify-between gap-3 rounded-md border border-[#1e2d2b]/15 py-2 pl-4 pr-2">
            <span className="sr-only">Search Stories</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Stories"
              autoComplete="off"
              spellCheck={false}
              className="min-w-0 flex-1 bg-transparent text-sm tracking-[0.14px] text-foreground outline-none placeholder:text-foreground"
            />
            {hasQuery ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="grid size-9 shrink-0 place-items-center rounded-md bg-[#142220] text-frost"
                aria-label="Clear search"
              >
                <span className="text-lg leading-none" aria-hidden>
                  ×
                </span>
              </button>
            ) : (
              <span
                className="grid size-9 shrink-0 place-items-center rounded-md bg-[#142220] text-frost"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="none">
                  <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M16 16.5 20 20.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
            )}
          </label>
        </div>

        {filtered.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
            {filtered.map((post) => (
              <article key={post.slug} className="flex flex-col gap-8">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[3/2] w-full overflow-hidden rounded-[20px]"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                    quality={90}
                  />
                </Link>
                <div className="flex flex-col gap-4 text-left">
                  <div className="flex flex-col gap-2">
                    <p className="font-serif text-base italic font-normal text-blue">
                      {post.category}
                    </p>
                    <h2 className="max-w-[291px] text-lg font-bold leading-snug text-foreground">
                      <Link href={`/blog/${post.slug}`} className="hover:text-green">
                        {post.title}
                      </Link>
                    </h2>
                  </div>
                  <p className="line-clamp-5 text-base leading-6 text-foreground">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex w-full max-w-[420px] flex-col items-center gap-4 py-16 text-center">
            <p className="text-base text-foreground">No stories match “{query.trim()}”.</p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-sm text-blue underline-offset-2 hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
