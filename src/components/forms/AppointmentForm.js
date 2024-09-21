import React, { useState } from "react";
import contactInfo from "../../data/contactInfo.json";

const AppointmentForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		let valid = true;
		let errors = {};

		if (!formData.name) {
			errors.name = "Name is required.";
			valid = false;
		}
		if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = "Valid email is required.";
			valid = false;
		}
		if (!formData.message) {
			errors.message = "Message is required.";
			valid = false;
		}

		setErrors(errors);
		return valid;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			const { name, email, message } = formData;
			const mailtoLink = `mailto:${contactInfo.email}?subject=Appointment Request&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
			window.location.href = mailtoLink;
		}
	};

	return (
		<main className="relative py-12">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-8 bg-black bg-opacity-80 p-4">
					Make an Appointment
				</h2>
				<form
					onSubmit={handleSubmit}
					className="max-w-md mx-auto space-y-6 p-6 bg-gray-800 shadow-lg rounded-lg bg-opacity-80"
				>
					<div>
						<label className="block text-gray-200 text-base mb-1">Name</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full border border-gray-600 p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							placeholder="Enter your name"
						/>
						{errors.name && (
							<p className="text-red-500 text-sm mt-1">{errors.name}</p>
						)}
					</div>
					<div>
						<label className="block text-gray-200 text-base mb-1">Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full border border-gray-600 p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							placeholder="Enter your email"
						/>
						{errors.email && (
							<p className="text-red-500 text-sm mt-1">{errors.email}</p>
						)}
					</div>
					<div>
						<label className="block text-gray-200 text-base mb-1">
							Message
						</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							className="w-full border border-gray-600 p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							placeholder="Enter your message"
							rows="5"
						></textarea>
						{errors.message && (
							<p className="text-red-500 text-sm mt-1">{errors.message}</p>
						)}
					</div>
					<button
						type="submit"
						className="w-full bg-indigo-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all duration-300"
					>
						Submit
					</button>
				</form>
			</div>
		</main>
	);
};

export default AppointmentForm;
