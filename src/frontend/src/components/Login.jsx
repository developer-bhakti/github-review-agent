import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye } from "react-icons/fa";
import { TiVendorApple } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-gray-900 flex flex-col items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        <h1 className="text-lg md:text-xl font-semibold">Welcome Back</h1>
        <p className="text-xs md:text-sm text-gray-500 text-center">
          Don't have an account?<span className="text-white">Sign Up</span>
        </p>
        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 bg-gray-800 rounded-xl px-4 py-2">
        <MdAlternateEmail className="text-gray-400 text-xl" />
            <input
              className="bg-transparent w-full outline-none text-white placeholder:text-gray-500"
              type="email"
              placeholder="Email account"
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-800 rounded-xl px-4 py-2 relative">
            <FaFingerprint className="text-gray-400 text-xl" />
            <input
              className="bg-transparent w-full outline-none text-white placeholder:text-gray-500"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            {showPassword ? (
              <FaRegEye
                className="text-gray-400 cursor-pointer absolute right-4"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>

        <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition-all duration-200">
          Login
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="mx-3 text-gray-500 text-sm">Or continue with</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        <div className="flex justify-center gap-5">
          <button className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition">
            <TiVendorApple className="text-white text-xl" />
          </button>

          <button className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition">
            <FcGoogle className="text-white text-xl"/>
          </button>
          <button className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition">
            <FaXTwitter className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
