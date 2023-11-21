import React from 'react';
import './Footer.css';

const Footer: React.FC = () => 
{
    return (
        <footer>
            <div className="subPages">
                <ul>
                    <li><a href="#test"><h3>Over Nxt</h3></a></li>
                    <li><a href="#test">Reviews</a></li>
                    <li><a href="#test">Ons team</a></li>
                    <li><a href="#test">Eten en Drinken</a></li>
                    <li><a href="#test">Onze huisregels</a></li>
                </ul>
                <ul>
                    <li><a href="#test"><h3>Uitjes</h3></a></li>
                    <li><a href="#test">Bedrijfuitje</a></li>
                    <li><a href="#test">Educatie</a></li>
                    <li><a href="#test">Workshop</a></li>
                </ul>
                <ul>
                    <li><a href="#test"><h3>Contact</h3></a></li>
                    <li><a href="#test">Routeomschrijving</a></li>
                    <li><a href="#test">Contactgegevens</a></li>
                </ul>
                <ul> 
                    <li><a href="#test"><h3>Faq</h3></a></li>
                    <li><a href="#test"><h3>Tickets</h3></a></li>
                </ul>
            </div>

            <div className="information">
                <ul>
                    <li><div className="line"></div></li>
                    <li><h3>Address</h3></li>
                    <li><p>Asterweg 22</p></li>
                    <li><p>1031 HP Amsterdam</p></li>
                </ul>
                <ul>
                    <li><div className="line"></div></li>
                    <li><h3>Neem contact op</h3></li>
                    <li><p>Telefoonnummer:</p></li>
                    <li><p>727-425-2760</p></li>
                    <li><p>Email:</p></li>
                    <li><p>info@nxtmuseum.com</p></li>
                </ul>
                <ul>
                    <li><div className="line"></div></li>
                    <li><h3>Volg Nxt</h3></li>
                    <li><a>Instagram</a></li>
                    <li><a>Youtube</a></li>
                    <li><a>TikTok</a></li>
                    <li><a>Twitter</a></li>
                </ul>
                <ul>
                    <li><div className="line"></div></li>
                    <li><h3>Stay in the loop with what's Nxt</h3></li>
                    <li><p>Schrijf je in voor onze nieuwsbrief en krijg als eerste toegang tot onze nieuwe programma's & exclusieve acties.</p></li>
                    <li>
                        <form>
                            <input type="text"></input>
                            <input type="submit"></input>
                        </form>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;