import React from "react";
import { Link } from "react-router-dom";
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
import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="w-full bg-gray-800 text-white p-8 py-8 flex flex-col items-center mt-auto">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl ">
				{/* Company Info Section */}
				<div>
					<h3>
						{/* Logo */}
						<Link
							to="/"
							className="text-2xl font-semibold mb-4 flex items-center gap-4"
						>
							<Logo />
							Amir Law Firm
						</Link>
					</h3>
					<p className="text-gray-400">
						We offer expert legal services with a client-focused approach.
					</p>
					<p className="mt-4">
						&copy; {new Date().getFullYear()} Amir Law Firm. All rights
						reserved.
					</p>
				</div>

				{/* Quick Links Section */}
				<div>
					<h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
					<ul className="space-y-2">
						<li>
							<Link to="/about" className="text-gray-400 hover:text-indigo-500">
								About Us
							</Link>
						</li>
						<li>
							<Link
								to="/careers"
								className="text-gray-400 hover:text-indigo-500"
							>
								Careers
							</Link>
						</li>
						<li>
							<Link
								to="/privacy-policy"
								className="text-gray-400 hover:text-indigo-500"
							>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link
								to="/terms-conditions"
								className="text-gray-400 hover:text-indigo-500"
							>
								Terms & Conditions
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="text-gray-400 hover:text-indigo-500"
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				{/* Social Media & Contact Section */}
				<div>
					<h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
					<div className="flex space-x-4 mb-6">
						<a
							href={contactInfo.socialMedia.facebook}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-indigo-500"
						>
							<FaFacebookF size={24} />
						</a>
						<a
							href={contactInfo.socialMedia.x}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-indigo-500"
						>
							<BsTwitterX size={24} />
						</a>
						<a
							href={contactInfo.socialMedia.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-indigo-500"
						>
							<FaLinkedinIn size={24} />
						</a>
						<a
							href={contactInfo.socialMedia.instagram}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-indigo-500"
						>
							<FaInstagram size={24} />
						</a>
						<a
							href={contactInfo.socialMedia.whatsapp}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-indigo-500"
						>
							<FaWhatsapp size={24} />
						</a>
					</div>

					<h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
					<p className="text-gray-400 flex items-center">
						<FaEnvelope className="mr-2" />
						Email: {contactInfo.email}
					</p>
					<p className="text-gray-400 flex items-center">
						<FaPhone className="mr-2 rotate-90" />
						Phone: {contactInfo.phone}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
