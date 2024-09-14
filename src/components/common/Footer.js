import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="w-full bg-gray-800 text-white py-8 flex flex-col items-center mt-auto">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Company Info Section */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Amir Law Firm</h3>
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
					<ul className="flex space-x-4">
						<li>
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-yellow-500"
							>
								Facebook
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-yellow-500"
							>
								Twitter
							</a>
						</li>
						<li>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-yellow-500"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-yellow-500"
							>
								Instagram
							</a>
						</li>
					</ul>

					<h3 className="text-xl font-semibold mt-6 mb-4">Contact Us</h3>
					<p className="text-gray-400">Email: info@lawfirm.com</p>
					<p className="text-gray-400">Phone: +91 98765 43210</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
