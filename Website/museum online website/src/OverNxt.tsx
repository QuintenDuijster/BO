import React from 'react';
import './OverNxt.css';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';


const OverNxt: React.FC = () =>
{
    return (
        <div className="OverNxt">
            <Header />

            <Footer />
        </div>
    );
};

export default OverNxt;