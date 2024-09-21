import React from "react";
import { Link } from "react-router-dom";

const AboutUsHome = () => {
  return (
    <main className="relative p-8 bg-gray-800 min-h-[25vh]">
      <section className="relative container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-16 px-10">
          {/* Left Side - Image of a Lawyer */}
          <div className="text-center md:text-left md:pl-8">
            <img
              src={require("../../assets/about/about_us.png")}
              alt="Lawyer"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

<<<<<<< HEAD
			<section className="relative container mx-auto max-w-screen-xl">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
					{/* Left Side - Image of a Lawyer */}
					<div className="text-center md:text-left">
						<img
							src={require("../../assets/about/about_us.png")}
							alt="Lawyer"
							className="w-full h-auto object-cover rounded-lg shadow-md"
						/>
					</div>

					{/* Right Side - Text Content */}
					<div className="text-white text-justify p-3 bg-black bg-opacity-60">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
						<p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
							We are a distinguished law firm, renowned for our expertise across
							a diverse array of practice areas. Our mission is to deliver
							exemplary legal services, characterized by an unwavering
							commitment to personalized client care. By integrating a bespoke
							approach with our extensive legal acumen, we strive to address
							each client's unique needs with the utmost diligence and
							precision, ensuring the highest standard of legal representation.
						</p>
						<Link
							to="/about"
							className="inline-block bg-indigo-600 text-white mt-2 px-6 py-2 rounded-full hover:bg-indigo-700 transition"
						>
							Learn More
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
=======
          {/* Right Side - Text Content */}
          <div className="text-white text-justify col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4 md:w-11/12 opacity-85">
              We are a distinguished law firm, renowned for our expertise across
              a diverse array of practice areas. Our mission is to deliver
              exemplary legal services, characterized by an unwavering
              commitment to personalized client care. By integrating a bespoke
              approach with our extensive legal acumen, we strive to address
              each client's unique needs with the utmost diligence and
              precision, ensuring the highest standard of legal representation.
            </p>
            <Link
              to="/about"
              className="inline-block bg-indigo-600 text-white mt-2 px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
>>>>>>> 92eaf2eba461458e0ec0a002ac18a43cabaac078
};

export default AboutUsHome;
