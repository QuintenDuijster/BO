import React, { useEffect } from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/Contact.css';

const Contact: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | Contact';
    }, []);

    return (
        <>
            <Header />

            <main>

            </main>

            <Footer />
        </>
    );
};

export default Contact;