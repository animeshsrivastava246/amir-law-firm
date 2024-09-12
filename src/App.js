import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import PracticeAreas from "./components/PracticeAreas";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/practice-areas" element={<PracticeAreas />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/contact" element={<ContactUs />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
