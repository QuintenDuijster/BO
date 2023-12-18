import React, { useEffect } from 'react';
import Header from './Reusable/Header.tsx';
import Footer from './Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/MainPage.css';


const MainPage: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum';
    }, []);

    return (
        <>
            <Header />

            <main className="MainPage">
                <div>
                    <article>
                        <h1>Nxt Museum</h1>
                        <p>
                            The home of new media art. Discover large scale, multi-sensory exhibitions which challenge assumptions and open minds. We seek, show and question what is Nxt.
                        </p>
                    </article>
                </div>
                <div className="grids">
                    <article className="grid1">
                        <h2>What is Nxt</h2>
                        <p>
                            Nxt Museum is the first museum in the Netherlands dedicated to new media art. We focus on art that uses modern tools to embody modern times. We believe that the tools used in artistic expression reflect the times we live in. That makes them the perfect means to understand contemporary complexities allowing us to recognise, relate and reflect on our realities.
                        </p>
                        <a>Exhibitions</a>
                    </article>
                    <article className="grid2">
                        <h2>Opening hours</h2>
                        <ul>
                            <li>Monday: gesloten</li>
                            <li>Tuesday: 10:30 - 20:30</li>
                            <li>Wednesday: 11:00 - 21:30</li>
                            <li>Thursday: 10:30 - 22:30</li>
                            <li>Friday: gesloten</li>
                            <li>Saturday: 10:30 - 20:30</li>
                            <li>Sunday: 10:30 - 22:30</li>
                        </ul>
                        <a>Contact</a>
                    </article>
                    <article className="grid3">
                        <h2>The Space</h2>
                        <p>
                            Based in North Amsterdam, the space is built specifically to explore new media art; art that expands technical possibilities and applications, is dynamic and unbound by form and that generates movement whether physical, mental or emotional. The space provides all the ingredients for these progressive art forms to grow, flourish and evolve. Nxt Museum is a place where creatives bring their visions to life.
                        </p>
                        <a>More about nxt</a>
                    </article>
                    <article className="grid4">
                        <h2>Our purpose</h2>
                        <p>
                            It’s our mission to facilitate new and next iterations of creative expression. Everything we do, want and fear relates directly to the future. It is one of the most fascinating concepts for the human mind. A thrilling source of inspiration that drives endless questions. Today, these questions are more important and complex than ever. What’s next? We don’t know, but we are endlessly curious to explore together.
                        </p>
                        <a>More about nxt</a>
                    </article>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default MainPage;