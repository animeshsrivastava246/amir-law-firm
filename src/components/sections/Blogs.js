import React, { useEffect, useState } from "react";
import blogsData from "../../data/blogs.json";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	const [expandedBlog, setExpandedBlog] = useState(null); // Initial state as null

	useEffect(() => {
		setBlogs(blogsData);
	}, []);

	const handleToggleExpand = (title) => {
		setExpandedBlog(expandedBlog === title ? null : title);
	};

	return (
		<main
			className="relative py-16 bg-gray-50 bg-fixed bg-cover bg-center"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/blogs.png")})`,
			}}
		>
			<section className="bg-black bg-opacity-50 py-16">
				<div className="container mx-auto max-w-screen-xl ">
					<h2 className="text-5xl font-semibold text-center text-gray-100 mb-12">
						Our Blogs
					</h2>
					<ul className="space-y-8 max-w-4xl mx-auto">
						{blogs.map((blog) => (
							<li
								key={blog.title}
								className={`p-6 bg-white shadow-md rounded-lg transition-all duration-300 
									${
										expandedBlog === blog.title
											? "bg-opacity-100"
											: "bg-opacity-50 hover:bg-opacity-100"
									}`}
							>
								<h3 className="text-3xl font-bold text-gray-700 mb-4">
									{blog.title}
								</h3>
								<p className="text-gray-600 text-justify">
									{expandedBlog === blog.title ? blog.content : blog.excerpt}
								</p>
								<button
									className="text-indigo-700 mt-4 block"
									onClick={() => handleToggleExpand(blog.title)}
								>
									{expandedBlog === blog.title ? "Read Less" : "Read More"}
								</button>
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
};

export default Blogs;
