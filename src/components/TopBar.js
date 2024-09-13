import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
	return (
		<div className="fixed top-0 w-full bg-gray-800 text-white p-2 flex justify-center space-x-4 z-50">
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
			<Link to="/contact" className="hover:text-yellow-400">
				Make an Appointment
			</Link>
		</div>
	);
};

export default TopBar;
