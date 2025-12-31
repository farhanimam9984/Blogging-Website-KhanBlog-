import axios from "axios";
import React, { useEffect, useState } from "react";

function Creator() {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const fetchAdmins = async () => {
      const { data } = await axios.get(
        "http://localhost:4001/api/users/admins",
        {
          withCredentials: true,
        }
      );
      setAdmin(data.admins);
    };
    fetchAdmins();
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Popular Creators
        </h1>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
          {admin && admin.length > 0 ? (
            admin.slice(0, 6).map((element) => (
              <div
                key={element._id}
                className="flex flex-col items-center group"
              >
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={element.photo.url}
                    alt="creator"
                    className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-blue-500 transition"></div>
                </div>

                {/* Info */}
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold text-gray-800">
                    {element.name}
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    {element.role}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              Loading creators...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Creator;
