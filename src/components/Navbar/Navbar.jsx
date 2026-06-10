import { useEffect, useState } from 'react';

import { Link } from 'react-scroll';

import { FaBars, FaTimes } from 'react-icons/fa';

import './Navbar.css';

function Navbar() {

  const [navBg, setNavBg] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  // CHANGE NAVBAR BACKGROUND ON SCROLL
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  // NAVIGATION ITEMS
 const navLinks = [
  {
    name: 'Home',
    path: 'home'
  },
  {
    name: 'About',
    path: 'about'
  },
  {
    name: 'Skills',
    path: 'skills'
  },
  {
    name: 'Projects',
    path: 'projects'
  },
  {
    name: 'Education',
    path: 'education'
  },
  {
    name: 'Certifications',
    path: 'certifications'
  },
  {
    name: 'Contact',
    path: 'contact'
  }
];

  return (

    <nav className={navBg ? 'navbar active' : 'navbar'}>

      <div className="custom-container navbar-wrapper">

        {/* LOGO */}
        <div className="logo">

          <span>Sumit Patil</span>

        </div>

        {/* DESKTOP MENU */}
        <ul className={menuOpen ? 'nav-links active' : 'nav-links'} >
            <div className="mobile-menu-header">

              <h3>Navigation</h3>

              <p>
                Explore my portfolio
              </p>

            </div>
          {
            navLinks.map((link, index) => (

              <li key={index}>

                <Link
                  to={link.path}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                >

                  {link.name}

                </Link>

              </li>

            ))
          }
          
        </ul>
            
        {/* MOBILE MENU ICON */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {
            menuOpen
              ? <FaTimes />
              : <FaBars />
          }

        </div>

      </div>

    </nav>
  );
}

export default Navbar;