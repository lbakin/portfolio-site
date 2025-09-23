"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
  title: "More Projects | Lev Bakin",
  description: "Additional projects in a uniform, readable grid.",
};

// ---- Data ----
type Project = {
  title: string;
  href: string;
  image: string;  // /public path or remote
  alt: string;
  blurb: string;  // 1–2 sentences max; will clamp
  external?: boolean;
  tags: string[]; // used for simple filtering
};

const ALL_PROJECTS: Project[] = [
  {
    title: "Otto Cadillac — Service Page Refresh",
    href: "https://example-dealeron.com/otto-cadillac/service",
    image: "/images/otto-service.jpg",
    alt: "Service page hero with service lane imagery",
    blurb:
      "Bootstrap 3.4 + extend.css clean-up, content reflow, and GA4-tagged CTAs. Improved readability and conversion on mobile.",
    external: true,
    tags: ["DealerOn", "Bootstrap"],
  },
  {
    title: "Dealer Specials Landing Template",
    href: "https://example-dealeron.com/sample-dealer/specials",
    image: "/images/dealer-specials.jpg",
    alt: "Specials page tiles with offers",
    blurb:
      "Reusable promo tiles with consistent typography, ADA contrast, and analytics events wired to every CTA variant.",
    external: true,
    tags: ["DealerOn", "Analytics"],
  },
  {
    title: "Rum Bar (Drupal 10)",
    href: "/projects/rumbar",
    image: "/images/rumbar-thumb.jpg",
    alt: "Dark teal hero with rum bottle silhouette",
    blurb:
      "Custom Drupal theme with hero paragraph type, centralized color variables, and clean content model for growth.",
    tags: ["Drupal", "Design System"],
  },
  {
    title: "OCF Operations Map",
    href: "https://ocf-map.netlify.app/",
    image: "/images/projects/ocf-map-thumb.png", 
    alt: "Leaflet map with custom Oregon marker and semi-transparent site overlays",
    blurb:
      "Lightweight Leaflet map with user geolocation, custom Oregon pin, and togglable raster overlays for on-site operations. Built for quick situational awareness on mobile.",
    external: true,
    tags: ["Leaflet", "React", "GIS", "Overlays"]
  }
  
];

// ---- Page ----
export default function MoreProjectsPage() {
  const [activeTag, setActiveTag] = useState<string>("All");

  const tags = useMemo(() => {
    const set = new Set<string>(["All"]);
    ALL_PROJECTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  const projects = useMemo(() => {
    if (activeTag === "All") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    
    <div>
      <Nav />
      <main
        className="
        relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8
        before:pointer-events-none before:absolute before:inset-0
        before:bg-[radial-gradient(60rem_40rem_at_20%_-10%,rgba(244,63,94,0.06),transparent_60%),radial-gradient(50rem_30rem_at_120%_20%,rgba(0,0,0,0.05),transparent_60%)]
        before:content-['']
        "
      >
        {/* Section header */}
        <header className="mb-8 border-b border-neutral-200 pb-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">More Projects</h1>
              <p className="mt-2 text-neutral-700">
                A growing selection of site builds and component work.
              </p>
            </div>
            
          </div>
          {/* Filters */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => {
              const active = t === activeTag;
              return (
                <button
                  key={t}
                  onClick={() => setActiveTag(t)}
                  className={[
                    "rounded-full border px-3 py-1 text-sm transition focus:outline-none focus:ring-2",
                    active
                      ? "border-rose-800 bg-rose-50 text-rose-900 focus:ring-rose-800"
                      : "border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 focus:ring-rose-800",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </header>
        {/* Uniform-height grid with readability focus effect */}
        <ul
          className="
            grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3
            [@media(hover:hover)]:hover:[&>li]:opacity-60
            [@media(hover:hover)]:hover:[&>li:hover]:opacity-100
            focus-within:[&>li]:opacity-60
            focus-within:[&>li:focus-within]:opacity-100
            transition
          "
        >
          {projects.map((p) => {
            const linkProps = p.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <li key={p.title} className="h-full">
                {/* Card: uniform height via flex layout */}
                <article
                  className="
                    group flex h-full flex-col overflow-hidden rounded-2xl
                    border border-neutral-200 bg-white shadow-sm outline-none ring-0
                    transition [@media(hover:hover)]:hover:shadow-md focus-within:ring-2 focus-within:ring-rose-800
                  "
                >
                  {/* Fixed image ratio to normalize card tops */}
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                    <div
                      className="
                        absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent
                        transition-opacity group-hover:from-black/45 group-focus-within:from-black/45
                      "
                      aria-hidden="true"
                    />
                  </div>
                  {/* Body grows; blurb clamped so heights match */}
                  <div className="flex flex-1 flex-col p-4">
                    <h2 className="text-lg font-medium text-neutral-900">
                      {p.title}
                      {p.external && (
                        <span className="ml-1 align-middle text-neutral-500" aria-hidden="true">
                          ↗
                        </span>
                      )}
                    </h2>
                    <p
                      className="
                        mt-2 text-sm leading-relaxed text-neutral-700
                        line-clamp-3
                        selection:bg-rose-100
                      "
                    >
                      {p.blurb}
                    </p>
                    {/* Tags */}
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-700"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    {/* Footer pinned to bottom for equal card height */}
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <Link
                        href={p.href}
                        {...linkProps}
                        className="text-sm font-medium underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-800"
                        aria-label={`Open ${p.title}`}
                        data-ga4="more_projects_card_click"
                      >
                        View project
                      </Link>
                      {/* Subtle micro-interaction badge */}
                      <span
                        className="
                          inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 text-[11px] text-neutral-500
                          transition group-hover:border-rose-200 group-hover:text-rose-700
                        "
                        aria-hidden="true"
                      >
                        Readable focus
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
        {/* Footer note */}
        <div className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-6 text-sm text-neutral-600">
          <p>
            Showing <strong>{projects.length}</strong> {activeTag === "All" ? "projects" : `${activeTag} project(s)`}.
          </p>
          <Link href="/#contact" className="underline-offset-4 hover:underline">
            Want details? Let’s chat →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
