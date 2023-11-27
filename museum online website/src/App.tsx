import React from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';


import './css/App.css';
import './Herbruikbaar/pageStyle.css';
import './Herbruikbaar/hoverLink.css';

const App: React.FC = () =>
{
    return (
        <>
            <Header />

            <main>
                <div className="main">
                    <h1>Nxt Museum</h1>
                    <p>
                        The home of new media art. Discover large scale, multi-sensory exhibitions which challenge assumptions and open minds.<br />
                        We seek, show and question what is Nxt.
                    </p>
                </div>
                <div className="articles">
                    <article className="left">
                        <h3>What Is Nxt</h3>
                        <p>
                            Nxt Museum is the first museum in the Netherlands dedicated to new media art. We focus on art that uses modern tools to embody modern times.<br />
                            We believe that the tools used in artistic expression reflect the times we live in.<br />
                            That makes them the perfect means to understand contemporary complexities allowing us to recognise, relate and reflect on our realities.<br />
                        </p>
                        <a></a>
                    </article>
                    <article className="right">
                        <h3>Opening hours</h3>
                        <p>
                            Sun - Tues: 10:30 - 20:30<br />
                            Wed: 10:30 - 21:30<br />
                            Thurs - Sat: 10:30 - 22:30<br />
                            Maandag: closed<br />
                            Disnsdag: 10:30 - 20:30<br />
                            Woensdag: 10:30 - 21:30<br />
                            DonderDag: 10:30 - 22:30 <br />
                            Vrijdag: closed <br />
                            Zaterdag: 10:30 - 22:30<br />
                            Zondag: 10:30 - 20:30<br />
                        </p>
                        <a></a>
                    </article>
                    <article className="left">
                        <h3>The Space</h3>
                        <p>
                            Based in North Amsterdam, the space is built specifically to explore new media art; art that expands technical possibilities and applications,<br />
                            is dynamic and unbound by form and that generates movement whether physical, mental or emotional.<br />
                            The space provides all the ingredients for these progressive art forms to grow, flourish and evolve.<br />
                            Nxt Museum is a place where creatives bring their visions to life.<br />
                        </p>
                        <a></a>
                    </article>
                    <article className="right">
                        <h3>Our Purpose</h3>
                        <p>
                            It’s our mission to facilitate new and next iterations of creative expression.<br />
                            Everything we do, want and fear relates directly to the future. It is one of the most fascinating concepts for the human mind.<br />
                            A thrilling source of inspiration that drives endless questions.<br />
                            Today, these questions are more important and complex than ever. What’s next? We don’t know, but we are endlessly curious to explore together.<br />
                        </p>
                        <a></a>
                    </article>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default App;


