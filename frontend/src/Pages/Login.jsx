import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const {  setIsAuthenticated, setProfile } = useAuth();

  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4001/api/users/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      // Store the token in localStorage
      localStorage.setItem("jwt", data.token); // storing token in localStorage so that if user refreshed the page it will not redirect again in login
      toast.success(data.message || "User Logined successfully", {
        duration: 3000,
      });
      setProfile(data);
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
      setRole("");
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message || "Please fill the required fields",
        {
          duration: 3000,
        }
      );
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="w-full max-w-md bg-gray-700 shadow-md rounded-2xl p-8">
          <form onSubmit={handleLogin}>
            <div className="font-extrabold text-4xl bg-gradient-to-r  from-purple-600 via-rose-400 to-purple-400 bg-clip-text text-transparent  items-center text-center ">
              Knowledge<span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text ">Nest</span>
            </div>
            <h1 className="text-2xl font-extrabold mb-6 flex justify-center text-center  mt-4 bg-gradient-to-r from-blue-500 via-emerald-400  to-purple-600 rounded-2xl bg-clip-text text-transparent">Please Login Here!!</h1>
            {/* Select option bar */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className=" w-full rounded-lg  py-2 focus:outline-none bg-gray-400  text-black mb-4  border-gray-500 border-2 px-4 bg-gary-50"
            >
              <option selected  value="" disabled>Select Role</option>
              <option className="text-lg" value="user">USER</option>
              <option  className="text-lg" value="admin">ADMIN</option>
            </select>
{/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-3 border-gray-500 border-2 rounded-xl text-white focus:outline-none"
              />
            </div>
            {/* Password Input */}

            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-500 text-white rounded-xl focus:outline-none"
              />
            </div>

            <p className="text-center mb-4 text-white">
              New User?{" "}
              <Link to={"/register"} className="text-purple-500 text-lg">
                Register Here
              </Link>
            </p>
            <button
              type="submit"
              className="w-full p-2 bg-gradient-to-r from-purple-500 via-pink-400 to-rose-400  rounded-2xl text-black text-xl font-serif "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;