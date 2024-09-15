import React from "react";

const AboutUs = () => {
	return (
		<main
			className="relative py-16 bg-gray-50 bg-fixed bg-cover bg-center min-h-[75vh]"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/about.png")})`,
			}}
		>
			{/* Overlay for better text readability */}
			<div className="absolute inset-0 bg-black bg-opacity-60" />

			<section className="relative container mx-auto text-center px-4">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
					About Us
				</h2>
				<p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
					We are a distinguished law firm, renowned for our expertise across a
					diverse array of practice areas. Our mission is to deliver exemplary
					legal services, characterized by an unwavering commitment to
					personalized client care. By integrating a bespoke approach with our
					extensive legal acumen, we strive to address each client's unique
					needs with the utmost diligence and precision, ensuring the highest
					standard of legal representation.
				</p>
			</section>
		</main>
	);
};

export default AboutUs;
