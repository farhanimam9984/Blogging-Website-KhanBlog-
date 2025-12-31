import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Trending() {
  const { blogs } = useAuth();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            🔥 Trending Reads
          </h1>
          <span className="text-sm text-gray-500">
            Most loved by readers
          </span>
        </div>

        <Carousel responsive={responsive} itemClass="px-3">
          {blogs && blogs.length > 0 ? (
            blogs.slice(0, 6).map((element) => (
              <Link
                to={`/blog/${element._id}`}
                key={element._id}
                className="block group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={element.blogImage.url}
                      alt="blog"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Category */}
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {element.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 h-40 flex flex-col justify-between">
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition line-clamp-2">
                      {element.title}
                    </h2>

                    {/* Author */}
                    <div className="flex items-center mt-4">
                      <img
                        src={element.adminPhoto}
                        alt="author"
                        className="w-9 h-9 rounded-full object-cover border"
                      />
                      <p className="ml-3 text-sm font-medium text-gray-700">
                        {element.adminName}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex h-60 items-center justify-center text-gray-500">
              Loading trending blogs...
            </div>
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default Trending;
