import React from "react";

const Careers = () => {
	return (
		<main
			className="relative py-16 bg-gray-50 bg-fixed bg-cover bg-center"
			style={{
				backgroundImage: `url(${require("../../assets/logos/clients-logo.png")})`,
			}}
		>
			<section className="container mx-auto text-center">
				<h2 className="text-4xl font-semibold text-gray-800 mb-6">
					Careers - Join Our Esteemed Legal Team
				</h2>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
					At Amir Law Firm, we pride ourselves on being at the forefront of
					legal excellence, offering unparalleled services across a wide range
					of practice areas. Our success is driven by the dedication and talent
					of our exceptional team members, who are pivotal in shaping our firm's
					future. We are seeking dynamic, ambitious, and skilled legal
					professionals to join our ranks. Whether you are a seasoned attorney
					with a track record of success or an aspiring legal talent eager to
					make your mark, we offer a stimulating environment where your skills
					and aspirations can thrive. Our firm fosters a culture of
					collaboration, integrity, and innovation, providing ample
					opportunities for professional growth and development. As a member of
					our team, you will have access to cutting-edge resources, engage in
					meaningful and challenging work, and contribute to impactful cases
					that shape the legal landscape. We value diverse perspectives and are
					committed to creating an inclusive workplace where every individual's
					voice is heard and valued. Explore a rewarding career with us, where
					your expertise will be honed, your contributions recognized, and your
					professional journey enriched. Join Amir Law Firm today and be a part
					of a legacy of legal excellence.
				</p>
			</section>
		</main>
	);
};

export default Careers;
