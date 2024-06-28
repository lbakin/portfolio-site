import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  return (
    <header className="sticky top-0 w-full p-4 z-50">
      <nav>
        <ul className="flex justify-between">
          <li>
            <a href="/" className="text-black underline hover:text-red-600">
              Home
            </a>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-black underline hover:text-red-600 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
