import React from 'react';
import './Header.css';

const Header: React.FC = () => 
{
    return (
        <header> {/* dit is de header voor de website! */}
            <ul className="lef">
                <li>
                    <a href="http://localhost:5174">Logo</a>
                </li>
                <li className="dropdown">
                    <span>Over Nxt</span>
                    <div className="dropdown-content">
                        <ul>
                            <li><a href="http://localhost:5174/OverNxt">Reviews</a></li>
                            <li><a href="http://localhost:5174/OverNxt">Ons team</a></li>
                            <li><a href="http://localhost:5174/OverNxt">Eten en Drinken</a></li>
                            <li><a href="http://localhost:5174/OverNxt">Onze huisregels</a></li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown">
                    <span>Uitjes</span>
                    <div className="dropdown-content">
                        <ul>
                            <li><a href="http://localhost:5174/Uitjes">Bedrijfsuitje</a></li>
                            <li><a href="http://localhost:5174/Uitjes">Educatie</a></li>
                            <li><a href="http://localhost:5174/Uitjes">Workshops</a></li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown">
                    <span>Contact</span>
                    <div className="dropdown-content">
                        <ul>
                            <li><a href="http://localhost:5174/Contact">Routeomschrijving</a></li>
                            <li><a href="http://localhost:5174/Contact">Contactgegevens</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="http://localhost:5174/faq">faq</a></li>
            </ul>
            <ul className="right">
                <li><a href="http://localhost:5174/Tickets">Tickets</a></li>
            </ul>
        </header>
    );
};

export default Header;