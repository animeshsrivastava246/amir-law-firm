import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { ReactComponent as LawLogo } from "../../assets/logos/law-logo.svg";
import TopBar from "./TopBar";

const Header = () => {
	// State for toggling the mobile menu
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const location = useLocation(); // Get the current location

	// Toggle the mobile menu
	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	// Determine if the current path matches the link's path
	const getLinkClass = (path) =>
		`text-gray-100 hover:bg-indigo-800 px-3 py-2 rounded-md transition-transform transform hover:scale-105 duration-300 ${
			location.pathname === path
				? "border-b-2 text-indigo-400 border-indigo-400"
				: ""
		}`;

	return (
		<main className="sticky top-0 z-50">
			{/* Fixed TopBar - Separate from header */}
			<TopBar />
			{/* Main Header */}
			<header className="w-full">
				<nav className="bg-gray-900 py-2 shadow-md">
					<div className="container mx-auto flex justify-between items-center">
						{/* Logo */}
						<Link to="/" className="flex items-center">
							{/* <LawLogo
								style={{ fill: "white", height: "4rem", width: "6rem" }} // Used rem units for relative sizing
								className="mr-2"
							/> */}
							<img
								src={require("../../assets/logos/law-logo-1.png")}
								alt="Law Logo"
								style={{ height: "4rem", width: "8rem" }} // Adjust the size as needed
								className="mr-2"
							/>
						</Link>

						{/* Hamburger Menu for small screens */}
						<div className="md:hidden">
							<button
								onClick={toggleMobileMenu}
								className="text-gray-300 hover:text-indigo-700"
							>
								{/* Hamburger icon */}
								<svg
									className="w-6 h-6" // Adjusted size for responsiveness
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									></path>
								</svg>
							</button>
						</div>

						{/* Navigation Links for large screens */}
						<div className="hidden md:flex space-x-5 text-lg">
							<Link to="/" className={getLinkClass("/")}>
								Home
							</Link>
							<Link to="/about" className={getLinkClass("/about")}>
								About Us
							</Link>
							<Link
								to="/practice-areas"
								className={getLinkClass("/practice-areas")}
							>
								Practice Areas
							</Link>
							<Link to="/blogs" className={getLinkClass("/blogs")}>
								Blogs
							</Link>
							<Link to="/contact" className={getLinkClass("/contact")}>
								Contact Us
							</Link>
						</div>
					</div>

					{/* Mobile Navigation Links */}
					<div
						className={`md:hidden bg-indigo-900 rounded-lg mt-2 overflow-hidden transition-all duration-300 ${
							isMobileMenuOpen
								? "max-h-screen opacity-100"
								: "max-h-0 opacity-0"
						}`}
						style={{ transitionProperty: "max-height, opacity" }}
					>
						<Link
							to="/"
							onClick={toggleMobileMenu}
							className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-2 transition-transform transform hover:scale-105 duration-300 ${
								location.pathname === "/"
									? "border-b-2 text-indigo-400 border-indigo-400"
									: ""
							}`}
						>
							Home
						</Link>
						<Link
							to="/about"
							onClick={toggleMobileMenu}
							className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-2 transition-transform transform hover:scale-105 duration-300 ${
								location.pathname === "/about"
									? "border-b-2 text-indigo-400 border-indigo-400"
									: ""
							}`}
						>
							About Us
						</Link>
						<Link
							to="/practice-areas"
							onClick={toggleMobileMenu}
							className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-2 transition-transform transform hover:scale-105 duration-300 ${
								location.pathname === "/practice-areas"
									? "border-b-2 text-indigo-400 border-indigo-400"
									: ""
							}`}
						>
							Practice Areas
						</Link>
						<Link
							to="/blogs"
							onClick={toggleMobileMenu}
							className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-2 transition-transform transform hover:scale-105 duration-300 ${
								location.pathname === "/blogs"
									? "border-b-2 text-indigo-400 border-indigo-400"
									: ""
							}`}
						>
							Blogs
						</Link>
						<Link
							to="/contact"
							onClick={toggleMobileMenu}
							className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-2 transition-transform transform hover:scale-105 duration-300 ${
								location.pathname === "/contact"
									? "border-b-2 text-indigo-400 border-indigo-400"
									: ""
							}`}
						>
							Contact Us
						</Link>
					</div>
				</nav>
			</header>
		</main>
	);
};

export default Header;
