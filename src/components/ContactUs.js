import React from "react";
import AppointmentForm from "./AppointmentForm";

const ContactUs = () => {
	return (
		<main>
			<section className="contact-us">
				<h2>Contact Us</h2>
				<p>Email: info@lawfirm.com</p>
				<p>Phone: +91 98765 43210</p>
				<p>Address: Lucknow, India</p>
			</section>

			{/* Include Appointment Form */}
			<AppointmentForm />
		</main>
	);
};

export default ContactUs;
