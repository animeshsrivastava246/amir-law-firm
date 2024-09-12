import React from "react";
import "../styles/Footer.css"; // Import specific styles for Footer

const Footer = () => {
	return (
		<footer>
			<p>
				&copy; {new Date().getFullYear()} Amir Law Firm. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
