import React from 'react';
import './Header.css';


const Header: React.FC = () => 
{
    return (
        <header> {/* dit is de header voor de website! */}
            <ul className="lef">
                <li>
                    <a href="http://localhost:5173/">Logo</a>
                </li>
                <li className="dropdown">
                    <span>Over Nxt</span>
                    <div className="dropdown-content">
                        <ul>
                            <li><a href="OverNxt">Reviews</a></li>
                            <li><a href="OverNxt">Ons team</a></li>
                            <li><a href="OverNxt">Eten en Drinken</a></li>
                            <li><a href="OverNxt">Onze huisregels</a></li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown">
                    <span>Uitjes</span>
                    <div className="dropdown-content">
                        <ul>
                            <li><a href="Uitjes">Bedrijfsuitje</a></li>
                            <li><a href="Uitjes">Educatie</a></li>
                            <li><a href="Uitjes">Workshops</a></li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown">
                    <span>Contact</span>
                    <div className="dropdown-content">
                        <ul>
                            <li><a href="Contact">Routeomschrijving</a></li>
                            <li><a href="Contact">Contactgegevens</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="faq">Faq</a></li>
            </ul>
            <ul className="right">
                <li><a href="Tickets">Tickets</a></li>
            </ul>
        </header>
    );
};

export default Header;