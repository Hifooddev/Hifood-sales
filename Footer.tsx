
import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Menu', 'Specials', 'Gift Cards'],
    },
    {
      title: 'Services',
      links: ['Catering', 'Order Status', 'Delivery Options', 'Find a Store'],
    },
    {
      title: 'Our Company',
      links: ['About Us', 'Newsroom', 'Careers', 'Contact Us'],
    },
  ];

  return (
    <footer className="bg-zinc-100 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-zinc-600 tracking-wider uppercase">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-800 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Tokbokki Store Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-800">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-800">Terms of Use</a>
            <a href="#" className="hover:text-zinc-800">Sales and Refunds</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
