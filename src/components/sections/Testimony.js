import React, { useState, useEffect } from "react";
import testimoniesData from "../../data/testimonies.json";

const Testimony = () => {
	const [testimonies, setTestimonies] = useState([]);

	useEffect(() => {
		setTestimonies(testimoniesData);
	}, []);

	return (
		<section
			className="relative py-16 bg-gray-50 bg-fixed bg-cover bg-center"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/testimony.png")})`,
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-40" />

			{/* Content */}
			<div className="relative z-10 container mx-auto px-4">
				<h2 className="text-5xl font-semibold text-center text-white mb-8">
					Testimonies
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonies.map((testimony, index) => (
						<article
							key={index}
							className="shadow-md rounded-lg bg-white bg-opacity-50 p-6 flex flex-col items-center transition-all duration-300 hover:bg-opacity-100"
						>
							<p className="text-lg text-gray-600 text-center mb-4">
								{testimony.text}
							</p>
							<div className="flex items-center justify-center">
								<p className="font-semibold text-gray-800 mr-2">
									— {testimony.name}
								</p>
								<img
									className="w-10 h-10 rounded-full object-cover"
									src={require(`../../assets/avatars/${
										testimony.avatar ? testimony.avatar : "default_avatar.png"
									}`)}
									alt={`${testimony.name}'s Avatar`}
								/>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimony;
