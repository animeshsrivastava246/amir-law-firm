import React, { useEffect, useState } from "react";
import practiceAreasData from "../../data/practiceAreas.json";

const PracticeAreas = () => {
	const [practiceAreas, setPracticeAreas] = useState([]);

	useEffect(() => {
		setPracticeAreas(practiceAreasData); // Use directly imported data
	}, []);

	return (
		<main
			className="relative py-16 bg-gray-50 bg-fixed bg-cover bg-center"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/practices.png")})`,
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black opacity-60" />

			{/* Content */}
			<div className="relative z-10">
				<h2 className="text-5xl font-semibold text-center text-gray-100 mb-12">
					Practice Areas
				</h2>
				<section className="practice-areas grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
					{practiceAreas.map((area) => (
						<article
							key={area.name}
							className="shadow-md rounded-md bg-white bg-opacity-50 py-4 px-6 transition-all duration-300 hover:bg-opacity-100 hover:shadow-lg"
						>
							<h3 className="text-2xl font-medium mb-2">{area.name}</h3>
							<p className="text-gray-700">{area.description}</p>
						</article>
					))}
				</section>
			</div>
		</main>
	);
};

export default PracticeAreas;
