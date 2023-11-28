import React, { useEffect } from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/HoofdPagina.css';

const HooftPagina: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum';
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

export default HooftPagina;