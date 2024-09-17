import React from "react";
import AppointmentForm from "../forms/AppointmentForm";

const ContactUs = () => {
	return (
		<main
			className="relative p-8 bg-gray-50 bg-fixed bg-cover bg-center min-h-[75vh]"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/contact.png")})`,
			}}
		>
			{/* Overlay for better text readability */}
			<div className="absolute inset-0 bg-black bg-opacity-60" />

			<section className="relative container mx-auto text-center mb-12 px-4 max-w-screen-xl ">
				<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
					Contact Us
				</h2>
				<p className="text-lg md:text-xl text-gray-200 mb-4">
					Email: info@lawfirm.com
				</p>
				<p className="text-lg md:text-xl text-gray-200 mb-4">
					Phone: +91 98765 43210
				</p>
				<p className="text-lg md:text-xl text-gray-200">
					Address: Lucknow, India
				</p>
			</section>

			{/* Include Appointment Form */}
			<section className="relative container mx-auto p-4 max-w-screen-xl ">
				<AppointmentForm />
			</section>
		</main>
	);
};

export default ContactUs;
