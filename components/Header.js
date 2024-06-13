import Link from 'next/link';

const Header = () => (
  <nav>
    <Link href="/" passHref>
      <a>Home</a>
    </Link>
    <Link href="/projects/" passHref>
      <a>Projects</a>
    </Link>
  </nav>
);

export default Header;
