import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogsData from "../../data/blogs.json";

const BlogsHome = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		setBlogs(blogsData);
	}, []);

	return (
		<main className="relative p-8 bg-gray-800 bg-fixed bg-cover bg-center min-h-[25vh]">
			<section className="relative container mx-auto text-center px-4 max-w-screen-xl ">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 p-3 bg-black bg-opacity-60">
					Our Blogs
				</h2>
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{blogs.slice(0, 3).map((blog) => (
						<article
							key={blog.title}
							className="relative shadow-md rounded-md bg-white transition-all duration-300 hover:scale-95 hover:shadow-lg overflow-hidden"
						>
							{/* Blog Image */}
							<div className="relative">
								<img
									src={require(`../../assets/blogs/${
										blog.image ? blog.image : "default.png"
									}`)}
									alt={blog.title}
									className="w-full h-48 object-cover rounded-md mb-4"
								/>
							</div>

							<div className="relative z-10 p-2">
								{/* Blog Title */}
								<h3 className="text-2xl font-semibold text-gray-900 mb-2">
									{blog.title}
								</h3>
								{/* Blog Date */}
								<p className="text-sm text-gray-500 mb-4">{blog.date}</p>
								{/* Blog Excerpt */}
								<p className="text-gray-700">{blog.excerpt}</p>
							</div>
						</article>
					))}
				</section>
				{/* Read More Button */}
				<Link
					to="/blogs"
					className="inline-block bg-indigo-600 text-white mt-6 px-6 py-2 rounded-full hover:bg-indigo-700 transition"
				>
					Read More
				</Link>
			</section>
		</main>
	);
=======
              <div className="relative z-10 px-2 pb-6 pt-2">
                {/* Blog Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                {/* Blog Date */}
                <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
                {/* Blog Excerpt */}
                <p className="text-gray-700">{blog.excerpt}</p>
              </div>
            </article>
          ))}
        </section>
        {/* Read More Button */}
        <Link
          to="/blogs"
          className="inline-block bg-indigo-600 text-white mt-6 px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Read More
        </Link>
      </section>
    </main>
  );
>>>>>>> 92eaf2eba461458e0ec0a002ac18a43cabaac078
};

export default BlogsHome;
