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

			<section className="relative container mx-auto px-4 text-center">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
					Terms And Conditions
				</h2>
				<p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
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
