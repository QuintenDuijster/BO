import React, { useEffect } from 'react';
import './css/Faq.css';
import './Herbruikbaar/pageStyle.css';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';


const Faq: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | Faq';
    }, []);

    return (
        <>
            <Header />

            <Footer />
        </>
    );
};

export default Faq;