import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-shadow-md">Ayman's Portfolio</h1>
        <div>
          <Link href="/About" className="ml-4 hover:underline hover:text-yellow-300 transition-colors duration-200">
            About
          </Link>
          <Link href="/Portfolio" className="ml-4 hover:underline hover:text-yellow-300 transition-colors duration-200">
            Portfolio
          </Link>
          <Link href="/Contact" className="ml-4 hover:underline hover:text-yellow-300 transition-colors duration-200">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
