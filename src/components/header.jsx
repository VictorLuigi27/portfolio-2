import { useState } from 'react';
import { Link } from 'react-router-dom';

// Ici ce sera la barre de navigation en haut de la page
export default function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode); 
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-zinc-950 dark:bg-custom-dark-header flex justify-between items-center gap-4 p-8 lg:px-20 lg:py-6 sticky">
      <div className="flex justify-center items-center gap-4 lg:gap-40">
        {/* Lien Home */}
        <Link to="/">
          <div
            className={`bg-black p-2 rounded-2xl border-2 border-emerald-500 lg:p-5 ${activeLink === 'home' ? 'shadow-[0_4px_5px_rgba(255,255,255,0.5)]' : 'shadow-lg'}`}
            onClick={() => handleLinkClick('home')}
          >
            
              <p className="text-white text-sm lg:text-xl">Home</p>
            
          </div>
        </Link>

        {/* Lien About */}
        <Link to="/about">
          <div
            className={`bg-black p-2 rounded-2xl border-2 border-emerald-500 lg:p-5 ${activeLink === 'about' ? 'shadow-[0_4px_5px_rgba(255,255,255,0.5)]' : 'shadow-lg'}`}
            onClick={() => handleLinkClick('about')}
          >
            
              <p className="text-white text-sm lg:text-xl">About</p>
            
          </div>
        </Link>

        {/* Lien Portfolio */}
        <Link to="/portfolio">
          <div
            className={`bg-black p-2 rounded-2xl border-2 border-emerald-500 lg:p-5 ${activeLink === 'portfolio' ? 'shadow-[0_4px_5px_rgba(255,255,255,0.5)]' : 'shadow-lg'}`}
            onClick={() => handleLinkClick('portfolio')}
          >
            
              <p className="text-white text-sm lg:text-xl">Portfolio</p>
            
          </div>
        </Link>

        {/* Lien Best Of */}
        <Link to="/bestOf">
          <div
            className={`bg-black p-2 rounded-2xl border-2 border-emerald-500 lg:p-5 ${activeLink === 'bestof' ? 'shadow-[0_4px_5px_rgba(255,255,255,0.5)]' : 'shadow-lg'}`}
            onClick={() => handleLinkClick('bestof')}
          >
            
            
              <p className="text-white text-sm lg:text-xl">Best Of</p>
            
          </div>
        </Link>
      </div>

      {/* Bouton Dark Mode */}
      <div className='lg:ml-[25rem]'>
        <button
          onClick={toggleDarkMode}
          className="p-3 bg-black border-2 border-yellow-400 text-white rounded-xl"
        >
          <img
          className='w-[6rem] lg:w-11 '
          src='/src/assets/icons/dark-mode-icon.svg'
          alt='dark-mode'
          />
        </button>
    </div>

      {/* Logo : aligné à droite en desktop */}
      <div className="ml-auto">
        <img 
          className="lg:w-16"
          src="/src/assets/icons/Logo.svg"
          alt="logo-site"
          width={40} 
        />
      </div>
    </nav>
  );
}
