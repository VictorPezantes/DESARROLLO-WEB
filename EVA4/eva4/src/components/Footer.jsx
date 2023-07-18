import React, { useState } from 'react';
import '../styles/footer.css';
import facebookIcon from '../images/facebook.png';
import twitterIcon from '../images/twitter.png';
import instagramIcon from '../images/insta.png';

const Footer = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleIconHover = (event, iconName) => {
        setHoveredIcon(iconName);
    };

    const resetHoveredIcon = () => {
        setHoveredIcon(null);
    };

    return (
        <footer>
            <div className="social-media">
                <a
                    href="#"
                    className={`social-link ${hoveredIcon === 'facebook' ? 'hovered' : ''}`}
                    onMouseEnter={(event) => handleIconHover(event, 'facebook')}
                    onMouseLeave={resetHoveredIcon}
                >
                    <img src={facebookIcon} alt="Facebook" />
                </a>
                <a
                    href="#"
                    className={`social-link ${hoveredIcon === 'twitter' ? 'hovered' : ''}`}
                    onMouseEnter={(event) => handleIconHover(event, 'twitter')}
                    onMouseLeave={resetHoveredIcon}
                >
                    <img src={twitterIcon} alt="Twitter" />
                </a>
                <a
                    href="#"
                    className={`social-link ${hoveredIcon === 'instagram' ? 'hovered' : ''}`}
                    onMouseEnter={(event) => handleIconHover(event, 'instagram')}
                    onMouseLeave={resetHoveredIcon}
                >
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            </div>
            <p className="credits">© 2023 Hygzy. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;