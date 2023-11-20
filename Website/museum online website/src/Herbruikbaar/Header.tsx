import React from 'react';
import './Header.css';

const Header: React.FC = () => 
{
    return (
        <header> {/* dit is de header voor de website! */}
            <ul>
                <li><a href="http://localhost:5174"><p>Ntx</p><p>Museum</p></a></li>
                <li className="dropdown">
                    <span>text</span>
                    <div className="dropdown-content">
                        <ul>
                            <li><a href="#test1">test</a></li>
                            <li><a href="#test2">test</a></li>
                            <li><a href="#test3">test</a></li>
                            <li><a href="#test4">test</a></li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown">
                    <span>text</span>
                    <div className="dropdown-content">
                        <ul>
                            <li><a href="#test1">test</a></li>
                            <li><a href="#test2">test</a></li>
                            <li><a href="#test3">test</a></li>
                            <li><a href="#test4">test</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="http://localhost:5174/faq">faq</a></li>
                <li><a href="#test5">test</a></li>
            </ul>
        </header>
    );
};

export default Header;