import React, { useEffect, useState } from "react";
import AppointmentForm from "./AppointmentForm";
import "../styles/ContactUs.css"; // Import specific styles for ContactUs

const ContactUs = () => {
	const [contact, setContact] = useState({});

	useEffect(() => {
		fetch("/data/contact.json")
			.then((response) => response.json())
			.then((data) => setContact(data));
	}, []);

	return (
		<main>
			<section className="contact-us">
				<h2>{contact.title}</h2>
				<p>Email: {contact.email}</p>
				<p>Phone: {contact.phone}</p>
				<p>Address: {contact.address}</p>
			</section>

			{/* Include Appointment Form */}
			<AppointmentForm />
		</main>
	);
};

export default ContactUs;
