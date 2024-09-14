import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LawLogo } from "../../assets/logos/law-logo.svg";
import {
	FaPhone,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaEnvelope,
	FaTwitter,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="w-full bg-gray-800 text-white p-8 flex flex-col items-center mt-auto">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Company Info Section */}
				<div>
					<h3>
						{/* Logo */}
						<Link
							to="/"
							className="text-xl font-semibold mb-4 flex items-center"
						>
							<LawLogo
								style={{ fill: "white", height: "80px", width: "120px" }} // Increased size for better visibility
								className="mr-2"
							/>
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
					<h3 className="text-xl font-semibold mb-4">Quick Links</h3>
					<ul className="space-y-2">
						<li>
							<Link to="/about" className="text-gray-400 hover:text-yellow-500">
								About Us
							</Link>
						</li>
						<li>
							<Link
								to="/careers"
								className="text-gray-400 hover:text-yellow-500"
							>
								Careers
							</Link>
						</li>
						<li>
							<Link
								to="/privacy-policy"
								className="text-gray-400 hover:text-yellow-500"
							>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link
								to="/terms-conditions"
								className="text-gray-400 hover:text-yellow-500"
							>
								Terms & Conditions
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="text-gray-400 hover:text-yellow-500"
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				{/* Social Media & Contact Section */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Follow Us</h3>
					<div className="flex space-x-4 mb-6">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-yellow-500"
						>
							<FaFacebookF size={24} />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-yellow-500"
						>
							<FaTwitter size={24} />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-yellow-500"
						>
							<FaLinkedinIn size={24} />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-yellow-500"
						>
							<FaInstagram size={24} />
						</a>
					</div>

					<h3 className="text-xl font-semibold mb-4">Contact Us</h3>
					<p className="text-gray-400 flex items-center">
						<FaEnvelope className="mr-2" />
						Email: info@lawfirm.com
					</p>
					<p className="text-gray-400 flex items-center">
						<FaPhone className="mr-2" />
						Phone: +91 98765 43210
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
