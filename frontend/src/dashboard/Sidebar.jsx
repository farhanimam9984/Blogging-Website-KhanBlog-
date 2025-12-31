import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import toast from "react-hot-toast";

function Sidebar({ setComponent }) {
  const { profile, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();
  const [show, setShow] = useState(false);

  const handleComponents = (value) => {
    setComponent(value);
    setShow(false);
  };

  const gotoHome = () => {
    navigateTo("/");
    setShow(false);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/users/logout",
        { withCredentials: true }
      );
      toast.success(data.message);
      localStorage.removeItem("jwt");
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div
        className="sm:hidden fixed top-4 left-4 z-50 bg-white shadow-md p-2 rounded-full"
        onClick={() => setShow(true)}
      >
        <CiMenuBurger className="text-2xl text-gray-700" />
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-xl z-40 transform transition-transform duration-300
        ${show ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        {/* Close Button (Mobile) */}
        <div
          className="sm:hidden absolute top-4 right-4 cursor-pointer"
          onClick={() => setShow(false)}
        >
          <BiSolidLeftArrowAlt className="text-2xl text-gray-600" />
        </div>

        {/* Profile Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
          <img
            src={profile?.user?.photo?.url}
            alt="profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md"
          />
          <h2 className="mt-3 text-lg font-semibold text-white">
            {profile?.user?.name}
          </h2>
          <p className="text-sm text-blue-100">
            {profile?.user?.role}
          </p>
        </div>

        {/* Navigation */}
        <ul className="mt-8 space-y-3 px-4">
          <SidebarButton
            label="My Blogs"
            onClick={() => handleComponents("My Blogs")}
          />
          <SidebarButton
            label="Create Blog"
            onClick={() => handleComponents("Create Blog")}
          />
          <SidebarButton
            label="My Profile"
            onClick={() => handleComponents("My Profile")}
          />
          <SidebarButton
            label="Home"
            color="red"
            onClick={gotoHome}
          />
          <SidebarButton
            label="Logout"
            color="yellow"
            onClick={handleLogout}
          />
        </ul>
      </aside>
    </>
  );
}

/* Reusable Button Component */
const SidebarButton = ({ label, onClick, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    red: "bg-red-100 text-red-700 hover:bg-red-200",
    yellow: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
  };

  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${colors[color]}`}
      >
        {label}
      </button>
    </li>
  );
};

export default Sidebar;
