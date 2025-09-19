// components/Footer.js
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
      <footer className="bg-rose-800 text-white text-center">
          <p>© {currentYear} by Lev Bakin. All rights reserved.</p>
      </footer>
  );
}