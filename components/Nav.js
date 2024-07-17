import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  const LinkClasses="text-black underline hover:text-rose-800 hover:bg-white rounded-md cursor-pointer"

  return (
    <div className="sticky top-0 w-full sm:px-4 z-50 bg-white">
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <ScrollLink 
              to="header"
              smooth={true}
              duration={500}
              className={`${LinkClasses} hidden sm:inline`}>
              Home
            </ScrollLink>
          </li>
          <div className="flex flex-row">
          <li>
            <ScrollLink
            to="works"
            smooth={true}
            duration={500}
            className={`${LinkClasses}`}
            >
              Featured Works
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
            to="packages"
            smooth={true}
            duration={500}
            className={`${LinkClasses}`}
            >
              Packages
            </ScrollLink>
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
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
