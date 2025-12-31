import axios from "axios";
import React, { useEffect, useState } from "react";

function Creators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4001/api/users/admins",
          {
            withCredentials: true,
          }
        );
        setCreators(data.admins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreators();
  }, []);

  return (
    <div className="bg-gray-50 py-20">
      {/* Section Heading */}
      <div className="text-center mb-14 px-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Meet Our Creators
        </h1>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          The minds behind KhanBlog — passionate creators sharing knowledge,
          experience, and insights with the community.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {creators.map((creator) => (
          <div
            key={creator._id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 w-80 overflow-hidden"
          >
            {/* Top Banner */}
            <div className="h-28 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
              <img
                src={creator.photo.url}
                alt="avatar"
                className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 -bottom-10 transform -translate-x-1/2 object-cover"
              />
            </div>

            {/* Content */}
            <div className="pt-14 pb-8 px-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {creator.name}
              </h2>

              <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                {creator.role}
              </span>

              <div className="mt-4 text-sm text-gray-600 space-y-1">
                <p>{creator.email}</p>
                <p>{creator.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Creators;
