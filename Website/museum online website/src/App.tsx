import React from 'react';
import './App.css';

const App: React.FC = () =>
{
    return (
        <div className="App">
            <header>
                <ul>
                    <li><a href="#test1">test</a></li>
                    <li className="dropdown-1">
                        <span>text</span>
                        <div className="dropdown-content" id="dropdown1-content">
                            <ul>
                                <li><a href="#test1">test</a></li>
                                <li><a href="#test2">test</a></li>
                                <li><a href="#test3">test</a></li>
                                <li><a href="#test4">test</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="dropdown-2">
                        <span>text</span>
                        <div className="dropdown-content" id="dropdown2-content">
                            <ul>
                                <li><a href="#test1">test</a></li>
                                <li><a href="#test2">test</a></li>
                                <li><a href="#test3">test</a></li>
                                <li><a href="#test4">test</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#test4">test</a></li>
                    <li><a href="#test5">test</a></li>
                </ul>
            </header>
        </div>
    );
};

export default App;