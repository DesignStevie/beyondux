import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LicensePortal from "./Projects/LicensePortal";
import TwoFactorAuth from "./Projects/TwoFactorAuth";
import CardPINs from "./Projects/CardPINs";
import Onboarding from "./Projects/Onboarding";
import DesignSystem from "./Projects/DesignSystem";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { Analytics } from '@vercel/analytics/react';
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/license-portal" element={<LicensePortal />} />
        <Route path="/two-factor-auth" element={<TwoFactorAuth />} />
        <Route path="/card-PINs" element={<CardPINs />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;