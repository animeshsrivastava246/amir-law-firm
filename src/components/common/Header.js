// Header.js
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import Logo from "./Logo";

const Header = () => {
<<<<<<< HEAD
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const location = useLocation();

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	const getLinkClass = (path) =>
		`text-gray-100 hover:bg-indigo-800 py-2 px-1 rounded-none transition-transform transform hover:scale-105 duration-300 ${
			location.pathname === path
				? "border-b-2 text-indigo-400 border-indigo-400"
				: ""
		}`;

	return (
		<main className="w-full sticky top-0 z-50 bg-gray-900 shadow-md">
			{/* Fixed TopBar */}
			<TopBar />
			{/* Main Header */}
			<header>
				<nav
					className="p-1"
					style={{
						display: "grid",
						alignItems: "center",
						justifyItems: "center",
					}}
				>
					<div className="container mx-auto flex pr-2 justify-between items-center w-full max-w-screen-xl">
						<Logo />
=======
  // State for toggling the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determine if the current path matches the link's path
  const getLinkClass = (path) =>
    `text-gray-100 hover:bg-indigo-800 px-2 py-1 rounded-none transition-transform transform hover:scale-105 duration-300 ${
      location.pathname === path
        ? "border-b-2 text-indigo-400 border-indigo-400"
        : ""
    }`;

  return (
    <main className="sticky top-0 z-50">
      {/* Fixed TopBar - Separate from header */}
      <TopBar />
      {/* Main Header */}
      <header className="w-full border-b-[1px] border-indigo-700 border-opacity-70">
        <nav
          className="bg-gray-900 pt-1 pb-2 px-2 shadow-md"
          style={{
            display: "grid",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <div className="container mx-auto flex pr-2 justify-between items-center w-full max-w-screen-xl">
            <Logo />
>>>>>>> 92eaf2eba461458e0ec0a002ac18a43cabaac078

            {/* Hamburger Menu for small screens */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-indigo-700"
              >
                {/* Hamburger icon */}
                <svg
                  className="w-6 h-6"
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

<<<<<<< HEAD
						{/* Navigation Links for large screens */}
						<div className="hidden md:flex space-x-3 text-lg">
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
							<Link
								to="/contact"
								className={`p-2 text-white rounded-sm transition-transform transform duration-300 bg-indigo-700 hover:bg-indigo-800 ${
									location.pathname === "/contact"
										? "border-b-2 border-indigo-500"
										: ""
								}`}
							>
								Make an Appointment
							</Link>
						</div>
					</div>

					{/* Mobile Navigation Links */}
					<div
						className={`md:hidden w-full bg-indigo-900 rounded-lg mt-2 overflow-hidden transition-all duration-300 ${
							isMobileMenuOpen
								? "max-h-screen opacity-100"
								: "max-h-0 opacity-0 hidden"
						}`}
						style={{ transitionProperty: "max-height, opacity" }}
					>
						<Link
							to="/"
							onClick={toggleMobileMenu}
							className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-1 transition-transform transform hover:scale-105 duration-300 ${
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
							className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-1 transition-transform transform hover:scale-105 duration-300 ${
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
							className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-1 transition-transform transform hover:scale-105 duration-300 ${
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
							className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-1 transition-transform transform hover:scale-105 duration-300 ${
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
							className={`block text-gray-100 hover:text-indigo-400 bg-indigo-700 hover:bg-indigo-800 mb-2 px-4 py-1 transition-transform transform hover:scale-105 duration-300 ${
								location.pathname === "/contact"
									? "border-b-2 text-indigo-400 border-indigo-400"
									: ""
							}`}
						>
							Make an Appointment
						</Link>
					</div>
				</nav>
			</header>
		</main>
	);
=======
            {/* Navigation Links for large screens */}
            <div className="hidden md:flex space-x-3 text-lg">
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
              <Link
                to="/contact"
                className={`px-4 py-1 text-white rounded-sm transition-transform transform duration-300 bg-indigo-700 hover:bg-indigo-800 ${
                  location.pathname === "/contact"
                    ? "border-b-2 border-indigo-500"
                    : ""
                }`}
              >
                Make an Appointment
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div
            className={`md:hidden w-full bg-indigo-900 rounded-lg mt-2 overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 hidden"
            }`}
            style={{ transitionProperty: "max-height, opacity" }}
          >
            <Link
              to="/"
              onClick={toggleMobileMenu}
              className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-1 transition-transform transform hover:scale-105 duration-300 ${
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
              className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-1 transition-transform transform hover:scale-105 duration-300 ${
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
              className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-1 transition-transform transform hover:scale-105 duration-300 ${
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
              className={`block text-gray-100 hover:text-indigo-400 mb-2 px-4 py-1 transition-transform transform hover:scale-105 duration-300 ${
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
              className={`block text-gray-100 hover:text-indigo-400 bg-indigo-700 hover:bg-indigo-800 mb-2 px-4 py-1 transition-transform transform hover:scale-105 duration-300 ${
                location.pathname === "/contact"
                  ? "border-b-2 text-indigo-400 border-indigo-400"
                  : ""
              }`}
            >
              Make an Appointment
            </Link>
          </div>
        </nav>
      </header>
    </main>
  );
>>>>>>> 92eaf2eba461458e0ec0a002ac18a43cabaac078
};

export default Header;
