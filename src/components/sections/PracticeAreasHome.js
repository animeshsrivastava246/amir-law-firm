import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import practiceAreasData from "../../data/practiceAreas.json";

const PracticeAreasHome = () => {
	const [practiceAreas, setPracticeAreas] = useState([]);

	useEffect(() => {
		setPracticeAreas(practiceAreasData); // Use directly imported data
	}, []);
	return (
		<main
			className="relative py-16 bg-gray-50 bg-fixed bg-cover bg-center min-h-[25vh]"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/practices.png")})`,
			}}
		>
			{/* Overlay for better text readability */}
			<div className="absolute inset-0 bg-black bg-opacity-60" />

			<section className="relative container mx-auto text-center px-4 max-w-screen-xl">
				<h2 className="text-5xl font-semibold text-center text-gray-100 mb-12">
					Practice Areas
				</h2>
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{practiceAreas.slice(0, 3).map((area) => (
						<article
							key={area.name}
							className="shadow-md rounded-md bg-white py-4 px-6 transition-all duration-300 hover:scale-95 hover:shadow-lg"
						>
							<h3 className="text-2xl font-medium mb-2">{area.name}</h3>
							<p className="text-gray-700">{area.description}</p>
						</article>
					))}
				</section>
				<Link
					to="/practice-areas"
					className="inline-block bg-indigo-600 text-white mt-2 px-6 py-2 rounded-full hover:bg-indigo-700 transition"
				>
					View All
				</Link>
			</section>
		</main>
	);
};

export default PracticeAreasHome;
