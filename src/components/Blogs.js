import React, { useEffect, useState } from "react";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch("/data/blogs.json")
			.then((response) => response.json())
			.then((data) => setBlogs(data.posts));
	}, []);

	return (
		<main>
			<section className="blogs">
				<h2>Blogs</h2>
				<ul>
					{blogs.map((blog) => (
						<li key={blog.title}>
							<h3>{blog.title}</h3>
							<p>{blog.excerpt}</p>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
};

export default Blogs;
