import React, { useState, useEffect } from "react";

const Testimony = () => {
	const [testimonies, setTestimonies] = useState([]);

	useEffect(() => {
		fetch("/data/testimonies.json")
			.then((response) => response.json())
			.then((data) => setTestimonies(data));
	}, []);

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-semibold text-gray-800 mb-8">
					What Our Clients Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonies.map((testimony, index) => (
						<div key={index} className="p-6 border rounded-lg shadow-lg">
							<p className="text-lg text-gray-600 mb-4">{`"${testimony.text}"`}</p>
							<p className="font-semibold text-gray-800">{`— ${testimony.name}`}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimony;
