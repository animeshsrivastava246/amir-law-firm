import React, { useEffect, useState } from "react";
import teamData from "../../data/team.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Teams = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setTeam(teamData);
  }, []);

<<<<<<< HEAD
	return (
		<section
			className="relative p-8 bg-gray-50 bg-fixed bg-cover bg-center min-h-[25vh]"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/teams.png")})`,
			}}
		>
			{/* Overlay for better text readability */}
			<div className="absolute inset-0 bg-black bg-opacity-60" />

			<div className="relative container mx-auto text-center px-4 max-w-screen-xl">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 p-3 bg-black bg-opacity-60">
					Meet Our Team
				</h2>
				<Swiper
					modules={[Autoplay, Navigation]}
					spaceBetween={30}
					slidesPerView={1}
					loop={true}
					autoplay={{
						delay: 0, // Set to 0 for continuous scrolling
						pauseOnMouseEnter: true, // Pause when hovering
					}}
					speed={1500} // Increase speed for continuous movement
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
				>
					{team.map((member, index) => (
						<SwiperSlide key={index} className="flex items-stretch">
							<article className="flex flex-col justify-between h-full shadow-md rounded-md bg-white transition-all duration-300 hover:scale-95 hover:shadow-lg">
								<img
									src={require(`../../assets/teams/${
										member.image ? member.image : "default_member.png"
									}`)}
									alt={member.name}
									className="w-full h-auto object-cover rounded-t-md"
								/>
								<div className="p-6 flex flex-col justify-between flex-grow">
									<div>
										<h3 className="text-2xl font-medium mb-2">{member.name}</h3>
										<p className="text-sm text-gray-500">{member.position}</p>
									</div>
									<p className="mt-4 text-gray-700 text-justify">
										{member.description}
									</p>
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
=======
  return (
    <section className="relative p-8 bg-fixed bg-cover bg-center min-h-[25vh] bg-gray-800">
      <div className="relative container mx-auto text-center px-4 max-w-screen-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Meet Our Team
        </h2>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          navigation={{
            // Ensure correct navigation setup
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="swiper-container"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }} // Add pagination dots
        >
          {team.map((member, index) => (
            <SwiperSlide key={index} className="flex items-stretch">
              <article className="flex flex-col justify-between h-full shadow-md rounded-md bg-white transition-all duration-300 hover:scale-95 hover:shadow-lg">
                <img
                  src={require(`../../assets/teams/${
                    member.image ? member.image : "default_member.png"
                  }`)}
                  alt={member.name}
                  className="w-full h-auto object-cover rounded-t-md"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-medium mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.position}</p>
                  </div>
                  <p className="mt-4 text-gray-700 text-justify">
                    {member.description}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
          {/* Navigation Buttons */}
          <div className="swiper-button-prev !text-white !bg-gray-950 !bg-opacity-60 rounded-sm px-6 py-8 hover:!bg-opacity-95 transition-all" />
          <div className="swiper-button-next !text-white !bg-gray-950 !bg-opacity-60 rounded-sm px-6 py-8 hover:!bg-opacity-95 transition-all" />
        </Swiper>
      </div>
    </section>
  );
>>>>>>> 92eaf2eba461458e0ec0a002ac18a43cabaac078
};

export default Teams;
