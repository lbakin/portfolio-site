import Link from 'next/link';

const Layout = ({ children }) => (
  <div>
    <nav>
      <ul className="flex flex-row">
        <li>
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <a>About Me</a>
          </Link>
        </li>
        <li>
          <Link href="/skills" passHref>
            <a>Skills</a>
          </Link>
        </li>
        <li>
          <Link href="/projects" passHref>
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/testimonials" passHref>
            <a>Testimonials</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
    <main className="min-h-screen">
      {children}
    </main>
  </div>
);

export default Layout;
