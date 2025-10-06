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

// ---- Data (JS only) ----
const ALL_PROJECTS = [
  {
    title: "Lima Cadillac: Homepage Polish",
    href: "https://www.limacadillac.com/",
    image: "/images/projects/limacadillac-home.png", 
    alt: "Lima Cadillac homepage with large hero and clear CTAs",
    blurb:
      "Homepage refresh with clear CTA hierarchy, tighter hero spacing, ADA contrast, and standardized promo tiles for seasonal offers.",
    external: true,
    tags: ["DealerOn", "Homepage", "Accessibility"],
  },
  {
    title: "Bergstrom Neenah: Costco Member Pricing",
    href: "https://www.bergstromneenah.com/costco-member-pricing",
    image: "/images/projects/bergstrom-costco-thumb.png", 
    alt: "Bergstrom Neenah Costco member pricing page",
    blurb:
      "Modular info page with concise copy blocks, scannable headings, and mobile-friendly spacing. Built for quick edits by editors.",
    external: true,
    tags: ["DealerOn", "Content", "Landing"],
  },
  {
    title: "VW of Clear Lake: Tech Hiring",
    href: "https://www.vwofclearlake.com/tech-hiring.html",
    image: "/images/projects/vw-clearlake-hiring.png", 
    alt: "VW of Clear Lake technician hiring page with benefits list and apply CTA",
    blurb:
      "Single-purpose landing focused on recruitment. Clear value props, bulleted requirements, and prominent apply CTA. Tightened semantics for SEO.",
    external: true,
    tags: ["DealerOn", "Landing", "SEO"],
  },
  {
    title: "Otto Cadillac: Service Page Refresh",
    href: "https://www.cadillac-otto.com/service",
    image: "/images/projects/otto-service.png",
    alt: "Service page hero with service lane imagery",
    blurb:
      "Bootstrap 3.4 + extend.css clean up, content reflow, and GA4-tagged CTAs. Improved readability and conversion on mobile.",
    external: true,
    tags: ["DealerOn", "Bootstrap"],
  },
  // {
  //   title: "Rum Bar (Drupal 10)",
  //   href: "/projects/rumbar",
  //   image: "/images/rumbar-thumb.jpg",
  //   alt: "Dark teal hero with rum bottle silhouette",
  //   blurb:
  //     "Custom Drupal theme with hero paragraph type, centralized color variables, and a clean content model for growth.",
  //   tags: ["Drupal", "Design System"],
  // },
  {
    title: "OCF Operations Map",
    href: "https://ocf-map.netlify.app/",
    image: "/images/projects/ocf-map-thumb.png",
    alt: "Leaflet map with custom Oregon marker and semi-transparent site overlays",
    blurb:
      "Lightweight Leaflet map with user geolocation, custom Oregon pin, and togglable raster overlays for on-site operations.",
    external: true,
    tags: ["Leaflet", "React", "GIS", "Overlays"],
  },
];

// ---- Page ----
export default function MoreProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const set = new Set(["All"]);
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
                A growing selection of site builds and component work, including representative DealerOn pages.
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

        {/* Grid */}
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
            const linkProps = p.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <li key={p.title} className="h-full">
                <article
                  className="
                    group flex h-full flex-col overflow-hidden rounded-2xl
                    border border-neutral-200 bg-white shadow-sm outline-none ring-0
                    transition [@media(hover:hover)]:hover:shadow-md focus-within:ring-2 focus-within:ring-rose-800
                  "
                >
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
                  <div className="flex flex-1 flex-col p-4">
                    <h2 className="text-lg font-medium text-neutral-900">
                      {p.title}
                      {p.external && (
                        <span className="ml-1 align-middle text-neutral-500" aria-hidden="true">
                          ↗
                        </span>
                      )}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700 line-clamp-3 selection:bg-rose-100">
                      {p.blurb}
                    </p>
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
            Showing <strong>{projects.length}</strong>{" "}
            {activeTag === "All" ? "projects" : `${activeTag} project(s)`}.
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
