import React from "react";

const TermsAndConditions = () => {
	return (
		<main
			className="relative py-16 bg-gray-50 bg-fixed bg-cover bg-center min-h-[75vh]"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/terms.png")})`,
			}}
		>
			{/* Overlay for better text readability */}
			<div className="absolute inset-0 bg-black bg-opacity-60" />

			<section className="relative container mx-auto px-4 text-center max-w-screen-xl ">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
					Terms And Conditions
				</h2>
				<p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-justify">
					<h3>
						Welcome to the Amir Law Firm website. By accessing and using our
						site, you agree to comply with and be bound by the following terms
						and conditions. Please read them carefully.
					</h3>
					<br /> <h5>1. Acceptance of Terms </h5> By accessing and using our
					website, you acknowledge that you have read, understood, and agree to
					be bound by these Terms and Conditions. If you do not agree with any
					part of these terms, please refrain from using our site. <br />
					<h5>2. Use of Website </h5> The content provided on this website is
					for informational purposes only and does not constitute legal advice.
					While we strive to provide accurate and up-to-date information, Amir
					Law Firm makes no warranties or representations regarding the
					accuracy, completeness, or reliability of the content. <br />
					<h5>3. No Attorney-Client Relationship</h5> Your use of this website
					does not create an attorney-client relationship between you and Amir
					Law Firm. Any communication through this website or via email does not
					establish such a relationship. For legal advice, please contact us
					directly to schedule a consultation. <br />
					<h5>4. Intellectual Property</h5> All content on this website,
					including text, graphics, logos, and images, is the property of Amir
					Law Firm or its content suppliers and is protected by intellectual
					property laws. Unauthorized use or reproduction of this content is
					prohibited. <br />
					<h5>5. Limitation of Liability</h5> Amir Law Firm shall not be liable
					for any direct, indirect, incidental, or consequential damages arising
					from your use of or inability to use this website. We are not
					responsible for any errors or omissions in the content or for any loss
					or damage of any kind incurred as a result of the use of any content
					posted, emailed, or otherwise made available via the site. <br />
					<h5>6. External Links</h5> Our website may contain links to
					third-party sites. These links are provided for your convenience and
					do not imply endorsement or responsibility for the content of such
					external sites. We are not responsible for the privacy practices or
					the content of third-party websites. <br />
					<h5>7. Changes to Terms</h5> Amir Law Firm reserves the right to
					modify these Terms and Conditions at any time. Any changes will be
					posted on this page, and your continued use of the website constitutes
					acceptance of those changes. <br /> <h5>8. Governing Law </h5> These
					Terms and Conditions are governed by and construed in accordance with
					the laws of the jurisdiction in which Amir Law Firm operates. <br />
					For any questions regarding these Terms and Conditions, please contact
					us directly.
				</p>
			</section>
		</main>
	);
};

export default TermsAndConditions;
