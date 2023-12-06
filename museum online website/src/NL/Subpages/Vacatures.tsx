import React, { useEffect } from 'react';
import Header from '../Herbruikbaar/Header.tsx';
import Footer from '../Herbruikbaar/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/Faq.css';


const Vactures: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | Vactures';
    }, []);

    return (
        <>
            <Header />

            <main>
                <h1>Vacatures</h1>
                <p>
                    Whatever
                    happens Nxt
                    Een team verbonden door een liefde voor kunst en vooruitgang. We willen de toekomst en het heden ontdekken met nieuwe mediakunst. Ga je mee op zoektocht?
                </p>
                <div className="Vacatures">
                    <p> er zijn geen cacatures</p>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Vactures;
