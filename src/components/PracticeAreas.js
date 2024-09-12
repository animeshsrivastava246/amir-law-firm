import React, { useEffect, useState } from "react";
import "../styles/PracticeAreas.css"; // Import specific styles for PracticeAreas

const PracticeAreas = () => {
	const [practiceAreas, setPracticeAreas] = useState([]);

	useEffect(() => {
		fetch("/data/practiceAreas.json")
			.then((response) => response.json())
			.then((data) => setPracticeAreas(data.areas));
	}, []);

	return (
		<main>
			<section className="practice-areas">
				<h2>Practice Areas</h2>
				<ul>
					{practiceAreas.map((area) => (
						<li key={area.name}>
							<h3>{area.name}</h3>
							<p>{area.description}</p>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
};

export default PracticeAreas;
