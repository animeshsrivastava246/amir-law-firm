import React, { useEffect, useState } from "react";
import blogsData from "../../data/blogs.json";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlog, setExpandedBlog] = useState(null);

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  const handleToggleExpand = (title) => {
    setExpandedBlog(expandedBlog === title ? null : title);
  };

  return (
    <main className="relative p-8 bg-fixed bg-cover bg-center bg-gray-900" style={{
      backgroundImage: `url(${require("../../assets/backdrops/blogs.png")})`,
    }}>
      <section className="container mx-auto max-w-screen-xl">
        <h2 className="text-5xl font-semibold text-center text-gray-100 mb-12 bg-black opacity-80 p-4 rounded-full">
          Our Blogs
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="relative bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:scale-95"
            >
              <img
                src={require(`../../assets/blogs/${
                  blog.image ? blog.image : "default.png"
                }`)}
                alt={blog.name}
                className="w-full h-64 object-contain rounded-t-md bg-indigo-950"
              />

              <div className="relative p-6">
                <h3 className="text-3xl font-bold text-gray-700 mb-4">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-justify">
                  {expandedBlog === blog.title ? blog.content : blog.excerpt}
                </p>
                <button
                  className="text-indigo-600 mt-4 block"
                  onClick={() => handleToggleExpand(blog.title)}
                >
                  {expandedBlog === blog.title ? "Read Less" : "Read More"}
                </button>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Blogs;
