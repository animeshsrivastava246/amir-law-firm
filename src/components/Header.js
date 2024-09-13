import { Link } from "react-router-dom";
import { ReactComponent as LawLogo } from "../assets/law-logo.svg";
import TopBar from "./TopBar";

const Header = () => {
	return (
		<header className="relative w-full">
			{/* Fixed TopBar */}
			<TopBar />
			{/* Main Navigation */}
			<nav className="bg-gray-900 p-6 shadow-md">
				<div className="container mx-auto flex justify-between items-center">
					<Link
						to="/"
						className="text-white text-3xl font-bold flex items-center"
					>
						{/* Logo */}
						<LawLogo
							style={{ fill: "white", height: "50px", width: "50px" }}
							className="mr-2"
						/>
						<span>Amir Law Firm</span>
					</Link>
					{/* Navigation Links */}
					<div className="flex space-x-6">
						<Link to="/" className="text-gray-300 hover:text-yellow-500">
							Home
						</Link>
						<Link to="/about" className="text-gray-300 hover:text-yellow-500">
							About Us
						</Link>
						<Link
							to="/practice-areas"
							className="text-gray-300 hover:text-yellow-500"
						>
							Practice Areas
						</Link>
						<Link to="/blogs" className="text-gray-300 hover:text-yellow-500">
							Blogs
						</Link>
						<Link to="/contact" className="text-gray-300 hover:text-yellow-500">
							Contact Us
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
