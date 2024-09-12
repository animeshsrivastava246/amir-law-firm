import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Import specific styles for Header

const Header = () => {
	return (
		<header>
			<h1>Amir Law Firm</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/practice-areas">Practice Areas</Link>
					</li>
					<li>
						<Link to="/blogs">Blogs</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
