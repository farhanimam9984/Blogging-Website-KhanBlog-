import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Hero() {
  const { blogs } = useAuth();

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Featured Blogs
          </h1>
          <p className="text-gray-600 mt-3">
            Hand-picked articles from our top creators
          </p>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs && blogs.length > 0 ? (
            blogs.slice(0, 4).map((element) => (
              <Link
                to={`/blog/${element._id}`}
                key={element._id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={element.blogImage.url}
                    alt="blog"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Title */}
                  <h2 className="absolute bottom-4 left-4 right-4 text-white text-lg font-semibold line-clamp-2">
                    {element.title}
                  </h2>
                </div>

                {/* Author */}
                <div className="p-4 flex items-center">
                  <img
                    src={element.adminPhoto}
                    alt="author"
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-800">
                      {element.adminName}
                    </p>
                    <p className="text-xs text-gray-500">
                      Featured Author
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full flex h-60 items-center justify-center text-gray-500">
              Loading featured blogs...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
