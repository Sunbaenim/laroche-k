import '../styles/header.css';
import logo from '../assets/logo.png';
import openNav from '../assets/icon-hamburger.svg';
import closeNav from '../assets/icon-close.svg';
import { useState } from 'react';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollTo = (section) => {
        const sectionToScroll = document.getElementById(section);
        console.log(sectionToScroll.offsetTop);
        window.scrollTo(0, sectionToScroll.offsetTop - 96);
        if (window.innerWidth < 768) {
            setIsMenuOpen(false);
        }
    }

    const test = () => {console.log(window.innerWidth < 768)}

    return(
        <header onClick={() => test()}>
            <a href="/">
                <div className='logo-container'>
                    <img src={logo} alt="logo du site" />
                    <h1>Laroche Kathy</h1>
                </div>
            </a>
            <div className='nav-wrapper'>
                {window.innerWidth < 768 && (
                    <div className='menu-icon'>
                        {isMenuOpen === false && <img onClick={() => setIsMenuOpen(true)} src={openNav} alt="ouvrir le menu" />}
                        {isMenuOpen && <img onClick={() => setIsMenuOpen(false)} src={closeNav} alt="fermer le menu" />}
                    </div>
                )}
                {(window.innerWidth >= 768 || isMenuOpen) &&
                    (<nav>
                        <ul>
                            <li onClick={() => scrollTo('presentation')}>Présentation</li>
                            <li onClick={() => scrollTo('liste-des-soins')}>Liste des soins</li>
                            <li onClick={() => scrollTo('lieux-de-prestation')}>Lieux de prestation</li>
                            <li onClick={() => scrollTo('contact')}>Contact</li>
                        </ul>
                    </nav>)
                }
            </div>
        </header>
    );
}

export default Header;