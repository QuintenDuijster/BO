import React from 'react';
import './Footer.css';

const Footer: React.FC = () => 
{
    return (
        <footer>
            <ul>
                <li>
                    <h3>Postbus:</h3>
                    <p>Asterweg 22</p>
                    <p>1031 HP Amsterdam</p>
                </li>
                <li>
                    <h3>Neem Contact op</h3>
                    <p>Telefoonnummer: 727-425-2760</p>
                    <p>Email: info@nxtmuseum.com</p>
                </li>
            </ul>

            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <a href="#test">test</a>*/}
            {/*        <a href="#test">test</a>*/}
            {/*        <a href="#test">test</a>*/}
            {/*        <a href="#test">test</a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <a href="#test">test</a>*/}
            {/*        <a href="#test">test</a>*/}
            {/*        <a href="#test">test</a>*/}
            {/*        <a href="#test">test</a>*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </footer>
    );
};

export default Footer;