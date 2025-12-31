import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gray-900 text-gray-300 py-14 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
           <div className="font-extrabold text-xl bg-gradient-to-r  from-purple-600 via-rose-400 to-purple-400 bg-clip-text text-transparent  pb-3 ">
              Knowledge<span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text ">Nest</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Knowledge-driven blogs on technology, development, and modern web
              practices. Learn, build, and grow with us.
            </p>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Technologies</h2>
            <ul className="space-y-2 text-sm">
              {["React", "Flutter", "Android", "iOS"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Resources</h2>
            <ul className="space-y-2 text-sm">
              {[
                "Figma Plugin",
                "Templates",
                "Design to Code",
                "UI Inspiration",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              {[
                "About Us",
                "Contact Us",
                "Careers",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800 py-6 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2025 Md Farhan Imam. All rights reserved.
          </p>

          <div className="flex space-x-5">
            <a href="#" className="hover:text-white transition">
              <FaGithub size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <BsYoutube size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
