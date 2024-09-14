import React from "react";

const TermsAndConditions = () => {
	return (
		<main
			className="relative py-16 bg-gray-50 bg-fixed bg-cover bg-center"
			style={{
				backgroundImage: `url(${require("../../assets/logos/clients-logo.png")})`,
			}}
		>
			<section className="container mx-auto text-center">
				<h2 className="text-4xl font-semibold text-gray-800 mb-6">
					Terms And Conditions
				</h2>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum
					dolore iusto hic eaque fuga nulla quasi minima saepe perspiciatis,
					blanditiis excepturi maiores. Magni recusandae dolore quam sint eum!
					Tempore inventore id voluptatum ratione. Iste corporis qui
					reprehenderit facere. Eligendi quaerat consequuntur vitae dolore
					voluptates iusto molestias, doloribus minima architecto quidem,
					reiciendis voluptatum odio. Quasi aliquam id neque similique explicabo
					adipisci, suscipit officiis molestias non nesciunt incidunt laudantium
					veniam debitis earum nisi temporibus. Iusto consequuntur libero amet
					tempore nobis, illum recusandae quos architecto obcaecati voluptatum
					reiciendis assumenda nisi? Suscipit sapiente commodi quos aliquam
					totam molestiae quae tempore ab aliquid quaerat!
				</p>
			</section>
		</main>
	);
};

export default TermsAndConditions;
