import React, { useEffect, useState } from "react";
import blogsData from "../../data/blogs.json";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		setBlogs(blogsData);
	}, []);

	return (
		<main className="py-16 bg-gray-50">
			<section className="container mx-auto">
				<h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
					Blogs
				</h2>
				<ul className="space-y-8 max-w-4xl mx-auto">
					{blogs.map((blog) => (
						<li key={blog.title} className="p-6 bg-white shadow-md rounded-lg">
							<h3 className="text-2xl font-bold text-gray-700 mb-4">
								{blog.title}
							</h3>
							<p className="text-gray-600">{blog.excerpt}</p>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
};

export default Blogs;
