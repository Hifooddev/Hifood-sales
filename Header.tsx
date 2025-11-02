
import React from 'react';

const BagIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const Header: React.FC = () => {
  const navItems = ["Store", "Menu", "Specials", "About Us", "Support"];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-zinc-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold tracking-tighter text-zinc-900">
              Tokbokki
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-zinc-600 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-zinc-600 hover:text-zinc-900 transition-colors">
              <SearchIcon className="h-5 w-5" />
            </button>
            <button className="text-zinc-600 hover:text-zinc-900 transition-colors">
              <BagIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
