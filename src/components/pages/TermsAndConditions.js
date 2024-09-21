import React from "react";

const TermsAndConditions = () => {
	return (
		<main
			className="relative p-8 bg-fixed bg-cover bg-center min-h-[75vh] bg-gray-900"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/terms.png")})`,
			}}
		>
			<section className="relative container mx-auto p-4 text-center max-w-screen-xl flex flex-col items-center gap-6 bg-black bg-opacity-80">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
					Terms And Conditions
				</h2>
				<p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-justify  font-light opacity-80">
					Welcome to the Amir Law Firm website. By accessing and using our site,
					you agree to comply with and be bound by the following terms and
					conditions. Please read them carefully.
				</p>
				<div className="flex flex-col gap-4 w-max">
					<div className="flex flex-col gap-2 items-start">
						<h3 className="text-2xl text-left text-white">
							1. Acceptance of Terms{" "}
						</h3>
						<p className="w-fit text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed text-justify  font-light opacity-80">
							By accessing and using our website, you acknowledge that you have
							read, understood, and agree to be bound by these Terms and
							Conditions. If you do not agree with any part of these terms,
							please refrain from using our site.
						</p>
					</div>
					<div className="flex flex-col gap-2 items-start">
						<h3 className="text-2xl text-left text-white">
							2. Use of Website{" "}
						</h3>
						<p className="w-fit text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed text-justify  font-light opacity-80">
							The content provided on this website is for informational purposes
							only and does not constitute legal advice. While we strive to
							provide accurate and up-to-date information, Amir Law Firm makes
							no warranties or representations regarding the accuracy,
							completeness, or reliability of the content.
						</p>
					</div>
					<div className="flex flex-col gap-2 items-start">
						<h3 className="text-2xl text-left text-white">
							3. No Attorney-Client Relationship
						</h3>
						<p className="w-fit text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed text-justify  font-light opacity-80">
							Your use of this website does not create an attorney-client
							relationship between you and Amir Law Firm. Any communication
							through this website or via email does not establish such a
							relationship. For legal advice, please contact us directly to
							schedule a consultation.
						</p>
					</div>
					<div className="flex flex-col gap-2 items-start">
						<h3 className="text-2xl text-left text-white">
							4. Intellectual Property
						</h3>
						<p className="w-fit text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed text-justify  font-light opacity-80">
							All content on this website, including text, graphics, logos, and
							images, is the property of Amir Law Firm or its content suppliers
							and is protected by intellectual property laws. Unauthorized use
							or reproduction of this content is prohibited.
						</p>
					</div>
					<div className="flex flex-col gap-2 items-start">
						<h3 className="text-2xl text-left text-white">
							5. Limitation of Liability
						</h3>
						<p className="w-fit text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed text-justify  font-light opacity-80">
							Amir Law Firm shall not be liable for any direct, indirect,
							incidental, or consequential damages arising from your use of or
							inability to use this website. We are not responsible for any
							errors or omissions in the content or for any loss or damage of
							any kind incurred as a result of the use of any content posted,
							emailed, or otherwise made available via the site.
						</p>
					</div>
					<div className="flex flex-col gap-2 items-start">
						<h3 className="text-2xl text-left text-white">6. External Links</h3>
						<p className="w-fit text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed text-justify  font-light opacity-80">
							Our website may contain links to third-party sites. These links
							are provided for your convenience and do not imply endorsement or
							responsibility for the content of such external sites. We are not
							responsible for the privacy practices or the content of
							third-party websites.
						</p>
					</div>
					<div className="flex flex-col gap-2 items-start">
						<h3 className="text-2xl text-left text-white">
							7. Changes to Terms
						</h3>
						<p className="w-fit text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed text-justify  font-light opacity-80">
							Amir Law Firm reserves the right to modify these Terms and
							Conditions at any time. Any changes will be posted on this page,
							and your continued use of the website constitutes acceptance of
							those changes.
						</p>
					</div>
					<div className="flex flex-col gap-2 items-start">
						<h3 className="text-2xl text-left text-white">8. Governing Law </h3>
						<p className="w-fit text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed text-justify  font-light opacity-80">
							These Terms and Conditions are governed by and construed in
							accordance with the laws of the jurisdiction in which Amir Law
							Firm operates.
							<br />
							For any questions regarding these Terms and Conditions, please
							contact us directly.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default TermsAndConditions;
