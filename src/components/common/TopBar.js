import {
	FaPhone,
	FaWhatsapp,
	FaFacebookF,
	FaEnvelope,
	FaCalendarCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
	return (
		<div className="bg-gray-800 text-gray-300 py-2 px-4">
			<div className="container mx-auto flex justify-around items-center space-x-6">
				{/* Icons for mobile view, text for larger screens */}
				<div className="flex space-x-4">
					{/* Phone */}
					<a
						href="tel:+1234567890"
						className="hidden sm:block bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-full transition duration-300"
					>
						Call Us: +1234567890
					</a>
					<a
						href="tel:+1234567890"
						className="sm:hidden text-xl hover:text-yellow-500"
					>
						<FaPhone />
					</a>

					{/* WhatsApp */}
					<a
						href="https://wa.me/1234567890"
						className="hidden sm:block bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-full transition duration-300"
					>
						WhatsApp
					</a>
					<a
						href="https://wa.me/1234567890"
						className="sm:hidden text-xl hover:text-yellow-500"
					>
						<FaWhatsapp />
					</a>

					{/* Facebook */}
					<a
						href="https://facebook.com"
						className="hidden sm:block bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-full transition duration-300"
					>
						Facebook
					</a>
					<a
						href="https://facebook.com"
						className="sm:hidden text-xl hover:text-yellow-500"
					>
						<FaFacebookF />
					</a>

					{/* Email */}
					<a
						href="mailto:info@amirlawfirm.com"
						className="hidden sm:block bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-full transition duration-300"
					>
						Email Us
					</a>
					<a
						href="mailto:info@amirlawfirm.com"
						className="sm:hidden text-xl hover:text-yellow-500"
					>
						<FaEnvelope />
					</a>

					{/* Make an Appointment */}
					<Link
						to="/appointment"
						className="hidden sm:block bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-full transition duration-300"
					>
						Make an Appointment
					</Link>
					<Link
						to="/appointment"
						className="sm:hidden text-xl hover:text-yellow-500"
					>
						<FaCalendarCheck />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
