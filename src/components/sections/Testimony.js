import React, { useState, useEffect } from "react";
import testimoniesData from "../../data/testimonies.json";

const Testimony = () => {
	const [testimonies, setTestimonies] = useState([]);

	useEffect(() => {
		setTestimonies(testimoniesData);
	}, []);

	return (
		<section className="testimonials bg-white py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
					What Our Clients Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonies.map((testimony, index) => (
						<article
							key={index}
							className="testimonial shadow-md rounded-lg bg-white p-6 flex flex-col items-center"
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
