import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
	return (
		<div className="fixed top-0 left-0 w-full bg-gray-800 text-white px-4 py-2 flex justify-between items-center z-50">
			<div className="flex space-x-4">
				<a href="tel:+1234567890" className="hover:text-yellow-400">
					Call Us
				</a>
				<a
					href="https://wa.me/1234567890"
					className="hover:text-yellow-400"
					target="_blank"
					rel="noopener noreferrer"
				>
					WhatsApp
				</a>
			</div>
			<div className="flex space-x-4">
				<a
					href="https://www.facebook.com"
					className="hover:text-yellow-400"
					target="_blank"
					rel="noopener noreferrer"
				>
					Facebook
				</a>
				<a href="mailto:example@lawfirm.com" className="hover:text-yellow-400">
					Gmail
				</a>
				<Link to="/contact" className="btn btn-primary">
					Make an Appointment
				</Link>
			</div>
		</div>
	);
};

export default TopBar;
