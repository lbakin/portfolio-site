import Link from 'next/link';

const Layout = ({ children }) => (
  <div>
    
      <ul className="flex flex-row">
        <li>
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        
        <li>
          <Link href="/contact" passHref>
            Contact
          </Link>
        </li>
      </ul>
    
    <main className="min-h-screen">
      {children}
    </main>
  </div>
);

export default Layout;
