import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'


//ENG
import MainPage from './EN/MainPage';
import EngContact from './EN/Contact';
import EducationAndWorkshops from './EN/EducationAndWorkshops';
import VisitorInformation from './EN/VisitorInformation';
import WhatsLive from './EN/WhatsLive';
import Tickets from './EN/Tickets';
import Faq from './EN/Faq';

//NL
import HoofdPagina from './NL/HoofdPagina';
import NlContact from './NL/Contact';
import OpleidingenEnWorkshops from './NL/SchoolEnWorkshops.tsx';
import BezoekersInformatie from './NL/BezoekersInformatie';
import WatIsLive from './NL/WatIsLive';
import Kaartjes from './NL/Kaartjes';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/*ENG*/}
                <Route index element={<MainPage />} />
                <Route path="Contact" element={<EngContact />} />
                <Route path="EducationAndWorkshops" element={<EducationAndWorkshops />} />
                <Route path="VisitorInformation" element={<VisitorInformation />} />
                <Route path="WhatsLive" element={<WhatsLive />} />
                <Route path="Tickets" element={<Tickets />} />
                <Route path="Faq" element={<Faq />} />

                {/*NL*/}
                <Route path="NL" element={<HoofdPagina />} />
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

