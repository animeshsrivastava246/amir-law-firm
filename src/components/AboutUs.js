import React, { useEffect, useState } from "react";
// import "./styles/AboutUs.css"; // Import specific styles for AboutUs
import "../styles/AboutUs.css"

const AboutUs = () => {
	const [aboutData, setAboutData] = useState({});

	useEffect(() => {
		fetch("/data/about.json")
			.then((response) => response.json())
			.then((data) => setAboutData(data));
	}, []);

	return (
		<main>
			<section className="about-us">
				<h2>{aboutData.title}</h2>
				<p>{aboutData.content}</p>
			</section>
		</main>
	);
};

export default AboutUs;
