import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import PracticeAreas from "./components/pages/PracticeAreas";
import Blogs from "./components/pages/Blogs";
import ContactUs from "./components/pages/ContactUs";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import Careers from "./components/pages/Careers";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
