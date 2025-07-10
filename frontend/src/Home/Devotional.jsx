import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Devotional() {
  const { blogs } = useAuth();
  const devotionalBlogs = blogs?.filter((blog) => blog.category === "Devotion");
  console.log(devotionalBlogs);
  return (
    <div>
      <div className="container mx-auto my-12 p-4">
        <h1 className="text-2xl font-bold mb-6 px-10 text-green-500">Devotional</h1>
        <p className="text-center mb-8">
         In every breath of creation, the presence of God echoes with grace, strength, and compassion. Whether in moments of joy or trials, the divine guides, heals, and nurtures the soul. God’s love transcends boundaries — offering peace to the restless and hope to the weary. Through faith, we find not just purpose, but a deeper connection to the universe and to ourselves.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {devotionalBlogs && devotionalBlogs.length > 0 ? (
            devotionalBlogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}
                key={index}
                className="relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-48  object-fill "
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-black">
                  <h2 className="text-lg  font-semibold">{blog?.title}</h2>
                  <p className="text-sm">{blog?.category}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className=" flex h-screen items-center justify-center">
              Loading....
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Devotional;