import React, { useEffect, useState } from "react";

const PracticeAreas = () => {
	const [practiceAreas, setPracticeAreas] = useState([]);

	useEffect(() => {
		fetch("/data/practiceAreas.json")
			.then((response) => response.json())
			.then((data) => setPracticeAreas(data.areas));
	}, []);

	return (
		<main>
			<section className="practice-areas grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{practiceAreas.map((area) => (
					<article
						key={area.name}
						className="shadow-md rounded-md bg-white py-4 px-6 hover:shadow-lg"
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
