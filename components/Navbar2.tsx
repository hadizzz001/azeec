'use client';
import { useState } from 'react'; 
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
<nav className="top-0 bg-transparent absolute w-full z-50 text-white mb-20">
  <div className="container mx-auto flex items-center justify-between px-4 py-4">
    {/* Logo */}
<div className="text-xl font-bold">
  <a href="/">
    <img
      src="https://res.cloudinary.com/dvsbgovdg/image/upload/v1752244868/white_mqkril.webp"
      width={200}
      alt="Logo"
      style={{ cursor: 'pointer' }}
    />
  </a>
</div>

    {/* Desktop Nav */}
    <ul className="hidden md:flex space-x-8 font-semibold text-lg">
      <li><a className='text-white ' href="/">Home</a></li>
      <li><a className='text-white ' href="/projects">Projects</a></li>
      <li><a className='text-white ' href="/about">About</a></li>
      <li><a className='text-white ' href="/contact">Contact Us</a></li>
    </ul>

    {/* Mobile Menu Icon */}
    <button className="md:hidden z-50" onClick={toggleMenu}>
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="md:hidden bg-white text-black w-full h-screen absolute top-0 left-0 z-40 flex flex-col px-6 py-8 space-y-6 text-xl font-semibold">
      {/* Close Button inside the menu */}
      <button
        className="absolute top-4 right-4 text-black"
        onClick={() => setMenuOpen(false)}
      >
        <X size={28} />
      </button>

      <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
      <li><a href="/projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
      <li><a href="/about" onClick={() => setMenuOpen(false)}>About</a></li>
      <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
    </div>
  )}
</nav>


  );
};

export default NavBar;
