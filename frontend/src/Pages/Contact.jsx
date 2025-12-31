import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      access_key: "3fa2a087-d44f-422e-ae7f-28203d7e3b07",
      name: data.username,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://api.web3forms.com/submit", userInfo);
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error ("An error occurred");
    }
  };
return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 py-12">
    <div className="max-w-5xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <p className="text-gray-300 mt-2">
          We'd love to hear from you
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold text-white mb-6">
            Send us a message
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className="text-sm text-red-400">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-400">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-sm text-red-400">
                  This field is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 text-white">
          <h3 className="text-xl font-semibold mb-6">
            Contact Information
          </h3>

          <ul className="space-y-6">
            <li className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg">
              <FaPhone className="text-pink-500 text-xl" />
              <span>+91 8253470039</span>
            </li>

            <li className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg">
              <FaEnvelope className="text-purple-500 text-xl" />
              <span>mdfarhanimam0786@gmail.com</span>
            </li>

            <li className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg">
              <FaMapMarkerAlt className="text-green-500 text-xl" />
              <span>Dhanbad, Jharkhand, India</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
);
}
export default Contact;