import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import practiceAreasData from "../../data/practiceAreas.json";

const PracticeAreasHome = () => {
	const [practiceAreas, setPracticeAreas] = useState([]);

	useEffect(() => {
		setPracticeAreas(practiceAreasData);
	}, []);

	return (
		<main
			className="relative p-8 bg-gray-50 bg-fixed bg-cover bg-center min-h-[25vh]"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/privacy.png")})`,
			}}
		>
			<section className="relative container mx-auto text-center px-4 max-w-screen-xl">
				<h2 className="text-5xl font-semibold text-center text-gray-100 mb-12  p-3 bg-black bg-opacity-80">
					Practice Areas
				</h2>
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{practiceAreas.slice(0, 6).map((area) => (
						<article
							key={area.name}
							className="shadow-lg rounded-md bg-white py-6 px-8 transition-transform duration-300 hover:scale-100 hover:shadow-xl"
							style={{ minHeight: "250px" }}
						>
							<h3 className="text-2xl font-semibold mb-4">{area.name}</h3>
							<p className="text-gray-700 text-justify">{area.description}</p>
						</article>
					))}
				</section>
				<Link
					to="/practice-areas"
					className="inline-block bg-indigo-600 text-white mt-6 px-8 py-3 rounded-full hover:bg-indigo-700 transition"
				>
					View All
				</Link>
			</section>
		</main>
	);
};

export default PracticeAreasHome;
