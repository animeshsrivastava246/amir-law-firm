import React, { useState, useEffect } from "react";
import testimoniesData from "../../data/testimonies.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Testimony = () => {
	const [testimonies, setTestimonies] = useState([]);

	useEffect(() => {
		setTestimonies(testimoniesData);
	}, []);

	return (
		<section
			className="relative p-8 bg-gray-50 bg-fixed bg-cover bg-center"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/testimony.png")})`,
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-40" />

			{/* Content */}
			<div className="relative container mx-auto px-4 max-w-screen-xl">
				<h2 className="text-5xl font-semibold text-center text-white my-8  p-3 bg-black bg-opacity-60">
					Testimonies
				</h2>
				<Swiper
					modules={[Autoplay, Navigation]}
					spaceBetween={30}
					slidesPerView={1}
					loop={true}
					autoplay={{
						reverseDirection: true,
						delay: 0, // Set to 0 for continuous scrolling
						pauseOnMouseEnter: true, // Pause when hovering
					}}
					speed={2000} // Increase speed for continuous movement
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					className="swiper-container"
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					pagination={{ clickable: true }}
				>
					{testimonies.map((testimony, index) => (
						<SwiperSlide key={index} className="flex justify-center">
							<article className="shadow-md rounded-lg bg-white m-2 p-6 flex flex-col items-center transition-all duration-300 hover:scale-95">
								<p className="text-lg text-gray-600 text-center mb-4">
									{testimony.text}
								</p>
								<div className="flex items-center justify-center">
									<p className="font-semibold text-gray-800 mr-2">
										— {testimony.name}
									</p>
									<img
										className="w-12 h-12 rounded-full object-cover"
										src={require(`../../assets/avatars/${
											testimony.avatar ? testimony.avatar : "default_avatar.png"
										}`)}
										alt={`${testimony.name}'s Avatar`}
									/>
								</div>
							</article>
						</SwiperSlide>
					))}
					{/* Navigation Buttons */}
					<div className="swiper-button-prev !text-white !bg-gray-800 !bg-opacity-40 p-4 rounded-full" />
					<div className="swiper-button-next !text-white !bg-gray-800 !bg-opacity-40 p-4 rounded-full" />
				</Swiper>
			</div>
		</section>
	);
};

export default Testimony;
