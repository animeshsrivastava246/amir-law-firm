import React from "react";
import AppointmentForm from "../forms/AppointmentForm";

const ContactUs = () => {
	return (
		<main
			className="relative py-16 bg-gray-50 bg-fixed bg-cover bg-center"
			style={{
				backgroundImage: `url(${require("../../assets/logos/clients-logo.png")})`,
			}}
		>
			<section className="container mx-auto text-center mb-12">
				<h2 className="text-4xl font-semibold text-gray-800 mb-6">
					Contact Us
				</h2>
				<p className="text-lg text-gray-600">Email: info@lawfirm.com</p>
				<p className="text-lg text-gray-600">Phone: +91 98765 43210</p>
				<p className="text-lg text-gray-600">Address: Lucknow, India</p>
			</section>

			{/* Include Appointment Form */}
			<section className="bg-white py-12 shadow-lg">
				<AppointmentForm />
			</section>
		</main>
	);
};

export default ContactUs;
