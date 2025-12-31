import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Register() {
  const {  setIsAuthenticated, setProfile } = useAuth();

  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");

  const changePhotoHandler = (e) => {
    console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhotoPreview(reader.result);
      setPhoto(file);
    };
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("education", education);
    formData.append("photo", photo);
    try {
      const { data } = await axios.post(
        "http://localhost:4001/api/users/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      localStorage.setItem("jwt", data.token); // storing token in localStorage so that if user refreshed the page it will not redirect again in login
      toast.success(data.message || "User registered successfully");
      setProfile(data);
      setIsAuthenticated(true);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
      setEducation("");
      setPhoto("");
      setPhotoPreview("");
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message || "Please fill the required fields"
      );
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="w-full max-w-md bg-gray-700 shadow-md rounded-lg p-8 m-10">
          <form onSubmit={handleRegister}>
             <div className="font-extrabold text-4xl bg-gradient-to-r  from-purple-600 via-rose-400 to-purple-400 bg-clip-text text-transparent  items-center text-center ">
              Knowledge<span className=" font-extrabold  text-4xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text ">Nest</span>
            </div>
            <h1 className="text-2xl font-extrabold mb-6 flex justify-center text-center  mt-4 bg-gradient-to-r from-blue-500 via-emerald-400  to-purple-600 rounded-2xl bg-clip-text text-transparent">Please Register Here!!</h1>
{/* Select option role */}
           <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className=" w-full rounded-lg  py-2 focus:outline-none bg-gray-400  text-black mb-4  border-gray-500 border-2 px-4 bg-gary-50"
            >
              <option selected className="text-black font-semibold" value="" disabled>Select Role</option>
              <option className="text-lg" value="user">USER</option>
              <option  className="text-lg" value="admin">ADMIN</option>
            </select>

            {/* Name Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
               className="w-full px-6 py-3 border-2 border-gray-500 text-white rounded-xl focus:outline-none"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               className="w-full px-6 py-3 border-2 border-gray-500 text-white rounded-xl focus:outline-none"
              />

              
            </div>
          {/* Phone number input */}
            <div className="mb-4">
              <input
                type="number"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
               className="w-full px-6 py-3 border-2 border-gray-500 text-white rounded-xl focus:outline-none"
              />

              
            </div>
            {/* Password input */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-500 text-white rounded-xl focus:outline-none"
              />
            </div>

            {/* Seelct Education input */}
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className=" w-full rounded-lg  py-2 focus:outline-none bg-gray-400  text-black mb-4  border-gray-500 border-2 px-4 bg-gary-50"
            >
              <option value="" disabled className="text-black">Select Your Education</option>
              <option value="BCA ">BCA</option>
              <option value="MCA ">MCA</option>
              <option value="MBA ">MBA</option>
              <option value="BBA ">BBA</option>
              <option value="BBA ">B.Tech</option>
              <option value="BBA ">BSC</option>
              <option value="BBA ">Other</option>
            </select>
            <div className="flex items-center mb-4">
              <div className="photo w-20 h-20 mr-4">
                <img
                  src={photoPreview ? `${photoPreview}` : "photo"}
                  alt="photo"
                />
              </div>
              <input
                type="file"
                onChange={changePhotoHandler}
                // placeholder="Upload Image"
                className="w-full p-2  border rounded-xl"
              />
            </div>
            <p className="text-center mb-4 text-white">
              Already registered?{" "}
              <Link to={"/login"} className="text-purple-500 text-lg">
                Login Now
              </Link>
            </p>
            <button
              type="submit"
              className="w-full p-2 bg-gradient-to-r from-purple-500 via-pink-400 to-rose-400  rounded-2xl text-black text-xl font-serif "
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;