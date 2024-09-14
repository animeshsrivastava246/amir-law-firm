import React from "react";

const PrivacyPolicy = () => {
	return (
		<main
			className="relative py-16 bg-gray-50 bg-fixed bg-cover bg-center"
			style={{
				backgroundImage: `url(${require("../../assets/logos/clients-logo.png")})`,
			}}
		>
			<section className="container mx-auto text-center">
				<h2 className="text-4xl font-semibold text-gray-800 mb-6">
					Privacy Policy
				</h2>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
					At Amir Law Firm, we are committed to safeguarding your personal
					information. This Privacy Policy outlines how we collect, use, and
					protect your data when you engage with our services. We collect
					personal information, such as contact details and case-related data,
					to provide effective legal representation and communication. Your
					information is used exclusively for the purposes of delivering our
					services and will not be shared with third parties without your
					consent, except as required by law. We implement stringent security
					measures to protect your data from unauthorized access or disclosure.
					Our commitment to confidentiality is paramount, and we ensure that all
					personnel adhere to the highest standards of privacy. By using our
					services, you consent to our data practices as outlined in this
					policy. For any questions or concerns regarding your personal
					information, please contact us at [contact information].
				</p>
			</section>
		</main>
	);
};

export default PrivacyPolicy;
