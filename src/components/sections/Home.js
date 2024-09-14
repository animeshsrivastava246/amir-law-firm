import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Clients from "./Clients";
import Testimony from "./Testimony";
import CarouselData from "../../data/carousel.json";

const Home = () => {
	const [carousels, setCarousels] = useState([]);

	useEffect(() => {
		setCarousels(CarouselData);
	}, []);

	return (
		<main>
			{/* Hero Section with Swiper Carousel */}
			<section className="relative pb-20 bg-gray-100 overflow-hidden">
				<Swiper
					modules={[Autoplay, Navigation]}
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 2000 }} // Adjusted delay for better user experience
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					className="w-full h-[450px] relative"
				>
					{carousels.map((carousel, index) => (
						<SwiperSlide key={index}>
							<img
								src={require(`../../assets/banners/${carousel.banner}`)}
								alt={`${carousel.description}`}
								className="w-full h-full object-fill"
							/>
							<div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded">
								<p className="text-xl font-semibold">{`${carousel.description}`}</p>
							</div>
						</SwiperSlide>
					))}
					{/* Navigation Buttons */}
					<div className="swiper-button-prev !text-white !bg-gray-800 !bg-opacity-50 p-10 rounded-full" />
					<div className="swiper-button-next !text-white !bg-gray-800 !bg-opacity-50 p-10 rounded-full" />
				</Swiper>
			</section>

			{/* Mission Section */}
			<section
				className="relative py-20 bg-gray-50 bg-fixed bg-cover bg-center"
				style={{
					backgroundImage: `url(${require("../../assets/banners/tls.png")})`,
				}}
			>
				{/* Adding a dark overlay for better text readability */}
				<div className="absolute inset-0 bg-black bg-opacity-50"></div>
				<div className="relative container mx-auto text-center">
					<h2 className="text-4xl font-semibold text-white mb-4">
						Our Mission
					</h2>
					<p className="text-lg text-gray-100 max-w-2xl mx-auto">
						We are unwavering in our commitment to delivering exceptional legal
						services, with a primary focus on client satisfaction. Our approach
						blends deep legal expertise with a personalized touch, ensuring that
						each client receives tailored, strategic solutions that meet their
						unique needs. We pride ourselves on providing expert guidance across
						a wide range of legal matters, with a steadfast dedication to
						achieving the most favorable outcomes for our clients.
					</p>
				</div>
			</section>

			{/* Adding margin between sections for a subtle break */}
			<section className="my-16">
				{/* Clients Section */}
				<Clients />
			</section>

			<section className="my-16">
				{/* Testimony Section */}
				<Testimony />
			</section>

			{/* Google Map Embed */}
			<section className="my-12">
				<div className="relative w-full h-[450px]">
					<iframe
						title="Office Location"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14236.060212578626!2d81.00129866504774!3d26.87126282674772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2dd108aa913%3A0xb35ae5f92f7d1a2e!2sHigh%20Court%20Lucknow!5e0!3m2!1sen!2sin!4v1726222221107!5m2!1sen!2sin"
						className="w-full h-full border-0"
						allowFullScreen=""
						loading="lazy"
					></iframe>
				</div>
			</section>
		</main>
	);
};

export default Home;
