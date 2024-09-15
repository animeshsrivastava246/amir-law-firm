import React from "react";
import {
	FaPhone,
	FaEnvelope,
	FaCalendarCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import contactInfo from "../../data/contactInfo.json";

const TopBar = () => {
	return (
		<div className="bg-gray-800 text-gray-300 py-2 px-4">
			<div className="container mx-auto flex justify-between items-center space-x-4 flex-nowrap overflow-hidden">
				{/* Call Us */}
				<a
					href={`tel:${contactInfo.tel}`}
					className="flex items-center hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300 whitespace-nowrap"
				>
					<FaPhone className="text-2xl sm:hidden text-indigo-700" />
					<span className="hidden sm:inline">Call Us: {contactInfo.phone}</span>
				</a>

				{/* Email */}
				<a
					href={`mailto:${contactInfo.email}`}
					className="flex items-center hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300 whitespace-nowrap"
				>
					<FaEnvelope className="text-2xl sm:hidden text-indigo-700" />
					<span className="hidden sm:inline">Email Us</span>
				</a>

				{/* Make an Appointment */}
				<Link
					to="/contact"
					className="flex items-center hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300 whitespace-nowrap"
				>
					<FaCalendarCheck className="text-2xl sm:hidden text-indigo-700" />
					<span className="hidden sm:inline">Make an Appointment</span>
				</Link>
			</div>
		</div>
	);
};

export default TopBar;
