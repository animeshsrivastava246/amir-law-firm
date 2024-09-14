import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
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
			<section className="relative bg-gray-100 overflow-hidden">
				<Swiper
					modules={[Autoplay]}
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 5000 }}
					className="w-full h-[450px] relative"
				>
					{carousels.map((carousel, index) => (
						<SwiperSlide key={index}>
							<img
								src={require(`../../assets/banners/${carousel.banner}`)}
								alt={`${carousel.description}`}
								className="w-full h-full object-cover"
							/>
							<div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded">
								<p className="text-xl font-semibold">{`${carousel.description}`}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			{/* Mission Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-semibold text-gray-800 mb-4">
						Our Mission
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

			{/* Clients Section */}
			<Clients />

			{/* Testimony Section */}
			<Testimony />

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
