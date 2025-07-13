import React from "react";
import { Briefcase, Phone, Home, Info, Star } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MyLLC</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="flex items-center gap-1 hover:text-blue-600"><Home size={16}/>Home</a>
          <a href="#about" className="flex items-center gap-1 hover:text-blue-600"><Info size={16}/>About</a>
          <a href="#services" className="flex items-center gap-1 hover:text-blue-600"><Briefcase size={16}/>Services</a>
          <a href="#whyus" className="flex items-center gap-1 hover:text-blue-600"><Star size={16}/>Why Us</a>
          <a href="#contact" className="flex items-center gap-1 hover:text-blue-600"><Phone size={16}/>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;