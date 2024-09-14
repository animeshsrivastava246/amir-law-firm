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
		<main
			className="relative py-16 bg-fixed bg-cover bg-center"
			style={{
				backgroundImage: `url(${require("../../assets/banners/ila.png")})`,
			}}
		>
			<section className="bg-black bg-opacity-50 py-16">
				<div className="container mx-auto">
					<h2 className="text-4xl font-semibold text-center text-gray-100 mb-12">
						Make an Appointment
					</h2>
					<form
						onSubmit={handleSubmit}
						className="max-w-lg mx-auto space-y-6 bg-white p-10 shadow-lg rounded-lg"
					>
						<div>
							<label className="block text-gray-700 text-lg mb-2">Name</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-yellow-500"
								placeholder="Enter your name"
								required
							/>
						</div>
						<div>
							<label className="block text-gray-700 text-lg mb-2">Email</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-yellow-500"
								placeholder="Enter your email"
								required
							/>
						</div>
						<div>
							<label className="block text-gray-700 text-lg mb-2">Message</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-yellow-500"
								placeholder="Enter your message"
								rows="5"
								required
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-yellow-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all duration-300"
						>
							Submit
						</button>
					</form>
				</div>
			</section>
		</main>
	);
};

export default AppointmentForm;
