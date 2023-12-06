import React from 'react';
import '../../Reusable/pageStyle.css';
import './CSS/FooterEN.css';


const Footer: React.FC = () => 
{
    return (
        <footer>
            <nav>
                <ul>
                    <li><a className="hoverLink" href="#"><h3>tbt</h3></a></li>
                    <li><a className="hoverLink" href="#">tbt</a></li>
                    <li><a className="hoverLink" href="#">tbt</a></li>
                    <li><a className="hoverLink" href="#">tbt</a></li>
                </ul>
                <ul>
                    <li><a className="hoverLink" href="#"><h3>tbt</h3></a></li>
                    <li><a className="hoverLink" href="#">tbt</a></li>
                    <li><a className="hoverLink" href="#">tbt</a></li>
                    <li><a className="hoverLink" href="#">tbt</a></li>
                </ul>
                <ul>
                    <li><a className="hoverLink" href="#"><h3>tbt</h3></a></li>
                    <li><a className="hoverLink" href="#">tbt</a></li>
                    <li><a className="hoverLink" href="#">tbt</a></li>
                    <li><a className="hoverLink" href="#">tbt</a></li>
                </ul>
            </nav>

            <div className="information">
                <ul>
                    <li className="Line"></li>
                    <li><h3>Address</h3></li>
                    <li><p>Asterweg 22 <br /> 1031 HP Amsterdam</p></li>
                </ul>
                <ul>
                    <li className="Line"></li>
                    <li><h3>Contact us</h3></li>
                    <li><p>Phonenumber: <br /> 727-425-2760 <br /> Email: <br /> info@nxtmuseum.com</p></li>
                </ul>
                <ul>
                    <li className="Line"></li>
                    <li><h3>Follow Nxt</h3></li>
                    <li><a href="https://www.instagram.com/nxtmuseum/" target="_blank">Instagram</a></li>
                    <li><a href="https://www.youtube.com/channel/UC1Afhs22rJqLfblV4GOpFTA" target="_blank">Youtube</a></li>
                    <li><a href="https://www.tiktok.com/@nxtmuseum?" target="_blank">TikTok</a></li>
                    <li><a href="https://twitter.com/nxtmuseum" target="_blank">Twitter</a></li>
                </ul>
            </div>

            <ul>
                <li>Monday: gesloten</li>
                <li>Tuesday: 10:30 - 20:30</li>
                <li>Wednesday: 11:00 - 21:30</li>
                <li>Thursday: 10:30 - 22:30</li>
                <li>Friday: gesloten</li>
                <li>Saturday: 10:30 - 20:30</li>
                <li>Sunday: 10:30 - 22:30</li>
            </ul>
        </footer>
    );
};

export default Footer;