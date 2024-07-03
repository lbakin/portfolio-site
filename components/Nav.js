import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  const LinkClasses="text-black underline hover:text-rose-800 hover:bg-white rounded-md cursor-pointer"

  return (
    <div className="sticky top-0 w-full px-4 z-50 bg-white">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/" className={`${LinkClasses}`}>
              Home
            </Link>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className={`${LinkClasses}`}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
