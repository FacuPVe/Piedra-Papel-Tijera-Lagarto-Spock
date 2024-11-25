import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-500 text-white p-4 md:p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl md:text-4xl font-bold">Piedra, Papel, Tijera, Lagarto, Spock</h1>
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        <div className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:block 
          w-full md:w-auto 
          mt-4 md:mt-0 
          text-center
        `}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <Link 
              to="/" 
              className="text-white hover:text-red-200 text-xl md:text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/game" 
              className="text-white hover:text-red-200 text-xl md:text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Juego
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-red-200 text-xl md:text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
