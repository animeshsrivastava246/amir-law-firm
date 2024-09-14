import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LawLogo } from "../../assets/logos/law-logo.svg";
import TopBar from "./TopBar";

const Header = () => {
	// State for toggling the mobile menu
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Toggle the mobile menu
	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<main className="sticky top-0 z-50">
			{/* Fixed TopBar - Separate from header */}
			<TopBar />
			{/* Main Header */}
			<header className="w-full">
				<nav className="bg-gray-900 p-3 shadow-md">
					<div className="container mx-auto flex justify-between items-center">
						{/* Logo */}
						<Link to="/" className="flex items-center">
							<LawLogo
								style={{ fill: "white", height: "80px", width: "120px" }} // Increased size for better visibility
								className="mr-2"
							/>
						</Link>

						{/* Hamburger Menu for small screens */}
						<div className="md:hidden">
							<button
								onClick={toggleMobileMenu}
								className="text-gray-300 hover:text-yellow-500 focus:outline-none"
							>
								{/* Hamburger icon */}
								<svg
									className="w-8 h-8"
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
						<div className="hidden md:flex space-x-6 text-lg">
							<Link to="/" className="text-gray-300 bg-yellow-700 hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-300">
								Home
							</Link>
							<Link to="/about" className="text-gray-300 bg-yellow-700 hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-300">
								About Us
							</Link>
							<Link
								to="/practice-areas"
								className="text-gray-300 bg-yellow-700 hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-300"
							>
								Practice Areas
							</Link>
							<Link to="/blogs" className="text-gray-300 bg-yellow-700 hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-300">
								Blogs
							</Link>
							<Link
								to="/contact"
								className="text-gray-300 bg-yellow-700 hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-300"
							>
								Contact Us
							</Link>
						</div>
					</div>

					{/* Mobile Navigation Links */}
					{isMobileMenuOpen && (
						<div className="md:hidden bg-gray-800 p-4">
							<Link
								to="/"
								onClick={toggleMobileMenu}
								className="block text-gray-300 hover:text-yellow-500 mb-2"
							>
								Home
							</Link>
							<Link
								to="/about"
								onClick={toggleMobileMenu}
								className="block text-gray-300 hover:text-yellow-500 mb-2"
							>
								About Us
							</Link>
							<Link
								to="/practice-areas"
								onClick={toggleMobileMenu}
								className="block text-gray-300 hover:text-yellow-500 mb-2"
							>
								Practice Areas
							</Link>
							<Link
								to="/blogs"
								onClick={toggleMobileMenu}
								className="block text-gray-300 hover:text-yellow-500 mb-2"
							>
								Blogs
							</Link>
							<Link
								to="/contact"
								onClick={toggleMobileMenu}
								className="block text-gray-300 hover:text-yellow-500 mb-2"
							>
								Contact Us
							</Link>
						</div>
					)}
				</nav>
			</header>
		</main>
	);
};

export default Header;
