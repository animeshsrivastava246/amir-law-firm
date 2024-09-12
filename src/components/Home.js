import React from "react";
import Clients from "./Clients";
import "../styles/Home.css"; // Import specific styles for Home

const Home = () => {
	return (
		<main>
			<header>
				<h1>Welcome to Our Law Firm</h1>
				<p>We provide comprehensive legal solutions to our clients.</p>
			</header>

			<section className="intro">
				<h2>Our Mission</h2>
				<p>
					Dedicated to offering the best legal services with a focus on client
					satisfaction.
				</p>
			</section>

			<Clients />
		</main>
	);
};

export default Home;
