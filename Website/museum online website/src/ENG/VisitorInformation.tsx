import React, { useEffect } from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/VisitorInformation.css';


const VisitorInformation: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | VisitorInformation';
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

export default VisitorInformation;