import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogsData from "../../data/blogs.json";

const BlogsHome = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		setBlogs(blogsData);
	}, []);

	return (
		<main
			className="relative py-16 bg-gray-50 bg-fixed bg-cover bg-center min-h-[25vh]"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/blogs.png")})`,
			}}
		>
			{/* Overlay for better text readability */}
			<div className="absolute inset-0 bg-black bg-opacity-60" />

			<section className="relative container mx-auto text-center px-4 max-w-screen-xl">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
					Our Blogs
				</h2>
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{blogs.slice(0, 3).map((blog) => (
						<article
							key={blog.title}
							className="shadow-md rounded-md bg-white py-4 px-6 transition-all duration-300 hover:scale-95 hover:shadow-lg"
						>
							<h3 className="text-2xl font-medium mb-2">{blog.title}</h3>
							<p className="text-gray-700">{blog.excerpt}</p>
						</article>
					))}
				</section>
				<Link
					to="/blogs"
					className="inline-block bg-indigo-600 text-white mt-2 px-6 py-2 rounded-full hover:bg-indigo-700 transition"
				>
					Read More
				</Link>
			</section>
		</main>
	);
};

export default BlogsHome;
