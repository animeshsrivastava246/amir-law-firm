import React, { useEffect, useState } from "react";
import practiceAreasData from "../../data/practiceAreas.json";

const PracticeAreas = () => {
	const [practiceAreas, setPracticeAreas] = useState([]);

	useEffect(() => {
		setPracticeAreas(practiceAreasData); // Use directly imported data
	}, []);

	return (
		<main>
			<section className="practice-areas grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
				{practiceAreas.map((area) => (
					<article
						key={area.name}
						className="shadow-md rounded-md bg-white py-4 px-6 hover:shadow-lg transition-shadow duration-300"
					>
						<h3 className="text-xl font-medium mb-2">{area.name}</h3>
						<p className="text-gray-700">{area.description}</p>
					</article>
				))}
			</section>
		</main>
	);
};

export default PracticeAreas;
