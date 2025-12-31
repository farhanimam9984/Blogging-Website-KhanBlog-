import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Blogs() {
  const { blogs } = useAuth();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Our Blogs</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Insights, tutorials, and real-world experiences covering modern web
            development, technology, and programming best practices.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <Link
                to={`/blog/${blog.id}`}
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={blog?.blogImage?.url}
                    alt={blog?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Category */}
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {blog?.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition line-clamp-2">
                    {blog?.title}
                  </h2>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No blogs available yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
