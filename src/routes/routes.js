import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import PrivacyPolicy from '../pages/privacyPolicy';
import Contact from '../pages/contact';
import Layout from '../components/layout/layout';
import TermOfUse from '../pages/termOfUse';
import Disclaimer from '../pages/disclaimer';

const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="term-of-use" element={<TermOfUse />} />
                    <Route path="disclaimer" element={<Disclaimer />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoute;
