import React from "react";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full py-6 px-4 md:px-16 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Digital Invoicing</div>

        {/* Nav Links */}
        <ul className="flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="group relative cursor-pointer">
              <a
                href={item.href}
                className="transition-colors duration-300 group-hover:text-blue-600"
              >
                {item.label}
              </a>
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"
              />
            </li>
          ))}
        </ul>

        {/* Login / Sign Up */}
        <div className="flex items-center space-x-4">
          <button className="group relative text-gray-700 font-medium transition hover:text-blue-600">
            Login
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

