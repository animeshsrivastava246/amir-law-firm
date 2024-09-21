import React from "react";
import {
	FaPhone,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaEnvelope,
	FaWhatsapp,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import contactInfo from "../../data/contactInfo.json";

const TopBar = () => {
	return (
		<div className="bg-gray-800 text-gray-300 py-0.5 px-0.5">
			<div className="container mx-auto flex justify-between items-center space-x-4 flex-nowrap overflow-hidden max-w-screen-xl">
				{/* Left Section - Call Us and Email */}
				<div className="flex space-x-1">
					{/* Call Us */}
					<a
						href={`tel:${contactInfo.tel}`}
						className="flex items-center hover:bg-indigo-900 p-2 rounded-full transition-transform transform hover:scale-105 duration-300 whitespace-nowrap"
					>
						<FaPhone className="text-2xl sm:hidden rotate-90" />
						<span className="hidden sm:inline">Phone: {contactInfo.phone}</span>
					</a>

					{/* Email Us */}
					<a
						href={`mailto:${contactInfo.email}`}
						className="flex items-center hover:bg-indigo-900 py-2 px-1 rounded-full transition-transform transform hover:scale-105 duration-300 whitespace-nowrap"
					>
						<FaEnvelope className="text-2xl sm:hidden" />
						<span className="hidden sm:inline">Email: {contactInfo.email}</span>
					</a>
				</div>

				{/* Right Section - Social Media Icons */}
				<div className="flex space-x-3">
					<a
						href={contactInfo.socialMedia.facebook}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						<FaFacebookF className="text-xl" />
					</a>

					<a
						href={contactInfo.socialMedia.x}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						<BsTwitterX className="text-xl" />
					</a>

					<a
						href={contactInfo.socialMedia.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						<FaLinkedinIn className="text-xl" />
					</a>

					<a
						href={contactInfo.socialMedia.instagram}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						<FaInstagram className="text-xl" />
					</a>

					<a
						href={contactInfo.socialMedia.whatsapp}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:bg-indigo-900 px-2 py-1 rounded-full transition-transform transform hover:scale-105 duration-300"
					>
						<FaWhatsapp className="text-xl" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
