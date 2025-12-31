import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Devotional() {
  const { blogs } = useAuth();
  const devotionalBlogs = blogs?.filter(
    (blog) => blog.category === "Devotion"
  );

  return (
    <div className="bg-emerald-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Devotional Blogs</h1>
          <p className="text-emerald-100 leading-relaxed">
            In every breath of creation, the presence of God echoes with grace,
            strength, and compassion. Through devotion, we find peace, purpose,
            and a deeper connection with the divine.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {devotionalBlogs && devotionalBlogs.length > 0 ? (
            devotionalBlogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog?.blogImage?.url}
                    alt={blog?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Devotional
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-600 transition line-clamp-2">
                    {blog?.title}
                  </h2>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center py-20 text-gray-600">
              Loading devotional blogs...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Devotional;
