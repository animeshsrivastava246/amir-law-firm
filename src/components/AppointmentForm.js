import React, { useState } from "react";
import "../styles/AppointmentForm.css"; // Import specific styles for AppointmentForm

const AppointmentForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission (e.g., send to an API or email)
		console.log("Appointment Request:", formData);
		// Reset form after submission
		setFormData({
			name: "",
			email: "",
			phone: "",
			message: "",
		});
	};

	return (
		<section className="appointment-form">
			<h2>Book an Appointment</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>

				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>

				<label htmlFor="phone">Phone:</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
				/>

				<label htmlFor="message">Message:</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
				></textarea>

				<button type="submit">Submit</button>
			</form>
		</section>
	);
};

export default AppointmentForm;
