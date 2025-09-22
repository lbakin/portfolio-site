'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Link as ScrollLink } from 'react-scroll';


const navItems = [
  { label: 'Home', kind: 'section', id: 'header' },
  { label: 'Featured Works', kind: 'section', id: 'works' },
  // { label: 'More Projects', kind: 'route', href: '/projects' },
  { label: 'Packages', kind: 'section', id: 'packages' },
  { label: 'Contact', kind: 'section', id: 'contact' },
];

const linkBase =
  'block rounded-md px-3 py-2 text-sm sm:text-base tracking-wide transition hover:bg-white hover:text-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60 focus-visible:ring-offset-rose-800';
const linkColors = 'text-rose-100';

function SmartNavLink({
  item,
  onClick,
}) {
  const pathname = usePathname();
  const onHome = pathname === '/' || pathname === '/home';

  if (item.kind === 'route') {
    return (
      <Link href={item.href} onClick={onClick} className={`${linkBase} ${linkColors}`}>
        {item.label}
      </Link>
    );
  }

  // Section links:
  // - On home: react-scroll for smooth/offset behavior
  // - Off home: normal link back to "/#section"
  return onHome ? (
    <ScrollLink
      to={item.id}
      smooth
      duration={400}
      offset={-80} // adjust for sticky nav height
      spy={true}
      onClick={onClick}
      className={`${linkBase} ${linkColors} cursor-pointer`}
    >
      {item.label}
    </ScrollLink>
  ) : (
    <Link href={`/#${item.id}`} onClick={onClick} className={`${linkBase} ${linkColors}`}>
      {item.label}
    </Link>
  );
}

const Nav = () => {
  const [open, setOpen] = useState(false);

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <div className="sticky top-0 z-50 w-full bg-rose-800/95 backdrop-blur border-b border-white/10">
      <nav aria-label="Primary" className="mx-auto max-w-6xl px-3 sm:px-4">
        <div className="flex h-12 sm:h-14 items-center justify-between">
          {/* Brand: always take you home */}
          <Link href="/" className="text-rose-50 font-semibold tracking-wide hover:text-white">
            levbakin.com
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <SmartNavLink item={item} />
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-rose-50 hover:bg-rose-700/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className={`h-6 w-6 transition-transform ${open ? 'scale-90' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile sheet */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="mt-1 grid gap-1 rounded-b-2xl bg-rose-800/95 p-2 shadow-lg ring-1 ring-white/10">
            {navItems.map((item) => (
              <li key={item.label}>
                <SmartNavLink item={item} onClick={() => setOpen(false)} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
