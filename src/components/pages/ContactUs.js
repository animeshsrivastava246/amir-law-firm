import React from "react";
import AppointmentForm from "../forms/AppointmentForm";
import contactInfo from "../../data/contactInfo.json";

const ContactUs = () => {
	return (
		<main
			className="relative p-8 bg-fixed bg-cover bg-center min-h-[75vh] bg-gray-900"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/contact.png")})`,
			}}
		>
			<section className="relative container mx-auto text-center mb-12 p-4 max-w-screen-xl bg-indigo-950 bg-opacity-80 rounded-full">
				<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
					Contact Us
				</h2>
				<p className="text-lg md:text-xl text-gray-200 mb-4">
					Email: {contactInfo.email}
				</p>
				<p className="text-lg md:text-xl text-gray-200 mb-4">
					Phone: {contactInfo.phone}
				</p>
				<p className="text-lg md:text-xl text-gray-200">
					Address: {contactInfo.address}
				</p>
			</section>

			{/* Include Appointment Form */}
			<section className="relative container mx-auto max-w-screen-xl ">
				<AppointmentForm />
			</section>
		</main>
	);
};

export default ContactUs;
