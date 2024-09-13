import React, { useState } from "react";

const AppointmentForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, message } = formData;
		const mailtoLink = `mailto:example@lawfirm.com?subject=Appointment Request&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
		window.location.href = mailtoLink;
	};

	return (
		<div className="container mx-auto py-16">
			<h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
				Make an Appointment
			</h2>
			<form
				onSubmit={handleSubmit}
				className="max-w-lg mx-auto space-y-6 bg-white p-8 shadow-md rounded-lg"
			>
				<div>
					<label className="block text-gray-700 mb-2">Name</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-yellow-500"
						placeholder="Enter your name"
						required
					/>
				</div>
				<div>
					<label className="block text-gray-700 mb-2">Email</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-yellow-500"
						placeholder="Enter your email"
						required
					/>
				</div>
				<div>
					<label className="block text-gray-700 mb-2">Message</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-yellow-500"
						placeholder="Enter your message"
						rows="4"
						required
					></textarea>
				</div>
				<button
					type="submit"
					className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600 transition-colors"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AppointmentForm;
