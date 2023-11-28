import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/index.css'


//ENG
import MainPage from './ENG/MainPage';
import AboutUs from './ENG/AboutUs';
import EngContact from './ENG/Contact';
import EducationAndWorkshops from './ENG/EducationAndWorkshops';
import VisitorInformation from './ENG/VisitorInformation';
import WhatsLive from './ENG/WhatsLive';
import Tickets from './ENG/Tickets';
import Faq from './ENG/Faq';

//NL
import HoofdPagina from './NL/HoofdPagina';
import OverOns from './NL/OverOns';
import NlContact from './NL/Contact';
import OpleidingenEnWorkshops from './NL/OpleidingenEnWorkshops';
import BezoekersInformatie from './NL/BezoekersInformatie';
import WatIsLive from './NL/WatIsLive';
import Kaartjes from './NL/Kaartjes';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/*ENG*/}
                <Route index element={<MainPage />} />
                <Route path="AboutUS" element={<AboutUs />} />
                <Route path="Contact" element={<EngContact />} />
                <Route path="EducationAndWorkshops" element={<EducationAndWorkshops />} />
                <Route path="VisitorInformation" element={<VisitorInformation />} />
                <Route path="WhatsLive" element={<WhatsLive />} />
                <Route path="Tickets" element={<Tickets />} />
                <Route path="Faq" element={<Faq />} />

                {/*NL*/}
                <Route path="NL" element={<HoofdPagina />} />
                <Route path="NL/OverOns" element={<OverOns />} />
                <Route path="NL/NlContact" element={<NlContact />} />
                <Route path="NL/OpleidingenEnWorkshops" element={<OpleidingenEnWorkshops />} />
                <Route path="NL/BezoekersInformatie" element={<BezoekersInformatie />} />
                <Route path="NL/WatIsLive" element={<WatIsLive />} />
                <Route path="NL/Kaartjes" element={<Kaartjes />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Router />);

