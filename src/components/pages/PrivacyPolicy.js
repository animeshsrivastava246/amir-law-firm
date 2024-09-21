import React from "react";

const PrivacyPolicy = () => {
	return (
		<main
			className="relative p-8 bg-fixed bg-cover bg-center min-h-[75vh] bg-gray-900"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/privacy.png")})`,
			}}
		>
			<section className="relative container mx-auto text-center p-4 max-w-screen-xl bg-black opacity-80 rounded-lg">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
					Privacy Policy
				</h2>
				<p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-justify font-light opacity-80">
					At Amir Law Firm, we are unwaveringly committed to protecting your
					personal information. This Privacy Policy elucidates how we collect,
					use, and safeguard your data when you interact with our services. We
					prioritize your privacy and aim to be transparent about our data
					practices. <br />
					We collect personal information such as your contact details,
					case-related data, and any other information pertinent to providing
					you with effective legal representation. This data is essential for us
					to deliver high-quality legal services and facilitate seamless
					communication with you. <br />
					The personal information we collect is used exclusively for the
					purpose of rendering our services. This includes managing your case,
					communicating important information, and ensuring that our services
					are tailored to your specific needs. We do not use your information
					for any purposes other than those explicitly stated in this policy.{" "}
					<br />
					We implement robust security measures to protect your data from
					unauthorized access, alteration, or disclosure. Our security protocols
					are designed to ensure the confidentiality and integrity of your
					information. We use industry-standard technologies and practices to
					safeguard your data. <br />
					Your personal information will not be shared with third parties
					without your explicit consent, except where required by law. In
					situations where legal obligations necessitate disclosure, we ensure
					that such information is handled with the utmost care and in
					compliance with applicable legal requirements. <br />
					Maintaining the confidentiality of your information is paramount. All
					personnel at Amir Law Firm adhere to stringent privacy standards to
					ensure that your data remains secure. We are committed to preserving
					your trust by safeguarding your personal information. <br /> We
					reserve the right to modify this Privacy Policy at any time. Any
					changes will be communicated through our website, and your continued
					use of our services will signify acceptance of the updated policy.{" "}
					<br />
					If you have any questions or concerns regarding your personal
					information or our data practices, please do not hesitate to contact
					us. We are here to address any inquiries and ensure your privacy is
					maintained.
					<br />
					By engaging with our services, you consent to the data practices
					outlined in this Privacy Policy.
				</p>
			</section>
		</main>
	);
};

export default PrivacyPolicy;
