import React from "react";
import {
	FaPhone,
	FaWhatsapp,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaEnvelope,
	FaCalendarCheck,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import contactInfo from "../../data/contactInfo.json";

const TopBar = () => {
	return (
		<div className="bg-gray-800 text-gray-300 py-2 px-4">
			<div className="container mx-auto flex justify-around items-center space-x-6">
				{/* Icons for mobile view, text for larger screens */}
				<div className="flex space-x-4">
					{/* Phone */}
					<a
						href={`tel:${contactInfo.tel}`}
						className="hidden text-xl sm:block hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						Call Us: {contactInfo.phone}
					</a>
					<a
						href={`tel:${contactInfo.tel}`}
						className="sm:hidden text-2xl text-indigo-700 hover:text-indigo-400 transition-transform transform hover:scale-105 duration-300"
					>
						<FaPhone />
					</a>

					{/* WhatsApp */}
					<a
						href={`https://wa.me/${contactInfo.socialMedia.whatsapp}`}
						className="hidden text-xl sm:block hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						WhatsApp
					</a>
					<a
						href={`https://wa.me/${contactInfo.socialMedia.whatsapp}`}
						className="sm:hidden text-2xl text-indigo-700 hover:text-indigo-400 transition-transform transform hover:scale-105 duration-300"
					>
						<FaWhatsapp />
					</a>

					{/* Facebook */}
					<a
						href={`${contactInfo.socialMedia.facebook}`}
						className="hidden text-xl sm:block hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						Facebook
					</a>
					<a
						href={`${contactInfo.socialMedia.facebook}`}
						className="sm:hidden text-2xl text-indigo-700 hover:text-indigo-400 transition-transform transform hover:scale-105 duration-300"
					>
						<FaFacebookF />
					</a>

					{/* Instagram */}
					<a
						href={`${contactInfo.socialMedia.instagram}`}
						className="hidden text-xl sm:block hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						Instagram
					</a>
					<a
						href={`${contactInfo.socialMedia.instagram}`}
						className="sm:hidden text-2xl text-indigo-700 hover:text-indigo-400 transition-transform transform hover:scale-105 duration-300"
					>
						<FaInstagram />
					</a>

					{/* LinkedIn */}
					<a
						href={`${contactInfo.socialMedia.linkedin}`}
						className="hidden text-xl sm:block hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						LinkedIn
					</a>
					<a
						href={`${contactInfo.socialMedia.linkedin}`}
						className="sm:hidden text-2xl text-indigo-700 hover:text-indigo-400 transition-transform transform hover:scale-105 duration-300"
					>
						<FaLinkedinIn />
					</a>

					{/* X (formerly Twitter) */}
					<a
						href={`${contactInfo.socialMedia.x}`}
						className="hidden text-xl sm:block hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						X
					</a>
					<a
						href={`${contactInfo.socialMedia.x}`}
						className="sm:hidden text-2xl text-indigo-700 hover:text-indigo-400 transition-transform transform hover:scale-105 duration-300"
					>
						<BsTwitterX />
					</a>

					{/* Email */}
					<a
						href={`mailto:${contactInfo.email}`}
						className="hidden text-xl sm:block hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						Email Us
					</a>
					<a
						href={`mailto:${contactInfo.email}`}
						className="sm:hidden text-2xl text-indigo-700 hover:text-indigo-400 transition-transform transform hover:scale-105 duration-300"
					>
						<FaEnvelope />
					</a>

					{/* Make an Appointment */}
					<Link
						to="/contact"
						className="hidden text-xl sm:block hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						Make an Appointment
					</Link>
					<Link
						to="/contact"
						className="sm:hidden text-2xl text-indigo-700 hover:text-indigo-400 transition-transform transform hover:scale-105 duration-300"
					>
						<FaCalendarCheck />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
