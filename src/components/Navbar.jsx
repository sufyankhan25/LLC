import React, { useState } from "react";
import { Briefcase, Phone, Home, Info, Star, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* ✅ Stylized Company Name */}
        <div className="flex flex-col leading-tight">
          <span className="text-2xl font-extrabold tracking-wider italic text-blue-700">
            FACT
          </span>
          <span className="text-xs italic text-gray-500 -mt-1">
            Fincs... acc. & tax..
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="flex items-center gap-1 hover:text-blue-600">
            <Home size={16} /> Home
          </a>
          <a href="#about" className="flex items-center gap-1 hover:text-blue-600">
            <Info size={16} /> About
          </a>
          <a href="#services" className="flex items-center gap-1 hover:text-blue-600">
            <Briefcase size={16} /> Services
          </a>
          <a href="#whyus" className="flex items-center gap-1 hover:text-blue-600">
            <Star size={16} /> Why Us
          </a>
          <a href="#contact" className="flex items-center gap-1 hover:text-blue-600">
            <Phone size={16} /> Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          <a href="#home" onClick={closeMenu} className="block hover:text-blue-600 flex items-center gap-1">
            <Home size={16} /> Home
          </a>
          <a href="#about" onClick={closeMenu} className="block hover:text-blue-600 flex items-center gap-1">
            <Info size={16} /> About
          </a>
          <a href="#services" onClick={closeMenu} className="block hover:text-blue-600 flex items-center gap-1">
            <Briefcase size={16} /> Services
          </a>
          <a href="#whyus" onClick={closeMenu} className="block hover:text-blue-600 flex items-center gap-1">
            <Star size={16} /> Why Us
          </a>
          <a href="#contact" onClick={closeMenu} className="block hover:text-blue-600 flex items-center gap-1">
            <Phone size={16} /> Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
