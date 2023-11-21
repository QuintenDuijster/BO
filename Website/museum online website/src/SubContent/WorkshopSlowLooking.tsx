import React from 'react';
import Header from '../Herbruikbaar/Header.tsx';
import Footer from '../Herbruikbaar/Footer.tsx';


const WorkshopSlowLooking: React.FC = () => {
    return (
        <div className="Workshop">

            <Header />

            <div className="Info">

                <h1>Slow Looking</h1>

                <p><img src="Images/WorkshopImg/NXT_Random-International_PR_Riccardo-De-Vecchi-photographer-12-1024x778.jpg" alt="The developer isn't good at coding here should be an image" /></p>

            </div>

            <Footer />

        </div>
    );
};

export default WorkshopSlowLooking;