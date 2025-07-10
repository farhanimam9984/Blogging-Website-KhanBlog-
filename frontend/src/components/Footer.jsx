import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="border py-10 px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  Flutter
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  React
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  iOS
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Design to code</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  Figma plugin
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Comparison</h2>
            <ul className="space-y-2">
              
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  DhiWise vs Appsmith
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  DhiWise vs FlutterFlow
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  DhiWise vs Monday Hero
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  DhiWise vs Retool
                </a>
              </li>

              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  DhiWise vs Bubble
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  DhiWise vs Figma Dev Mode
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  DhiWise vs Anima
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4  ">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-black-500 hover:text-blue-700">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className=" container mx-auto  flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl text-green-500 font-semibold hidden md:flex">
          Khan<span className="text-blue-500 font-bold">Blog</span>
        </div>
        <div className="text-gray-400 text-sm hidden md:flex">
          <p>&copy; 2025 Md Farhan Imam. All rights reserved</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#">
            <FaGithub className="h-6" />
          </a>
          <a href="#">
            <BsYoutube className="h-6" />
          </a>

          <a href="#">
            <FaLinkedin className="h-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;