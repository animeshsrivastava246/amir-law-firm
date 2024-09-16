import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Clients from "./Clients";
import Testimony from "./Testimony";
import CarouselData from "../../data/carousel.json";
import AboutUsHome from "./AboutUsHome";
import BlogsHome from "./BlogsHome";
import PracticeAreasHome from "./PracticeAreasHome";

const Home = () => {
	const [carousels, setCarousels] = useState([]);

	useEffect(() => {
		setCarousels(CarouselData);
	}, []);

	return (
		<main>
			{/* Hero Section with Swiper Carousel */}
			<section className="relative bg-gray-800 overflow-hidden">
				<Swiper
					modules={[Autoplay, Navigation]}
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 2000 }}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] relative max-w-screen-xl"
				>
					{carousels.map((carousel, index) => (
						<SwiperSlide key={index}>
							<img
								src={require(`../../assets/banners/${carousel.banner}`)}
								alt={`${carousel.description}`}
								className="w-full h-full object-fill"
							/>
							<div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-2 rounded">
								<p className="text-2xl font-semibold">{`${carousel.description}`}</p>
							</div>
						</SwiperSlide>
					))}
					{/* Navigation Buttons */}
					<div className="swiper-button-prev !text-white !bg-gray-800 !bg-opacity-40 p-4 rounded-full" />
					<div className="swiper-button-next !text-white !bg-gray-800 !bg-opacity-40 p-4 rounded-full" />
				</Swiper>
			</section>

			{/* About Us Section */}
			<section className="my-12">
				<AboutUsHome />
			</section>

			{/* Practice Areas Section */}
			<section className="my-12">
				<PracticeAreasHome />
			</section>

			{/* Blogs Section */}
			<section className="my-12">
				<BlogsHome />
			</section>

			{/* Clients Section */}
			<section className="my-12">
				<Clients />
			</section>

			<section className="my-12">
				{/* Testimony Section */}
				<Testimony />
			</section>

			{/* Google Map Embed */}
			<section className="my-12">
				<div className="relative w-full h-[35vh]">
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
