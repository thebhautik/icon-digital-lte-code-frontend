"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { toast } from "react-toastify";

export const ResentPassword = () => {
  const handleResetPassword = (e) => {
    e.preventDefault();
    try {
      const data = apiManager.post("customer/auth/reset-password", {
        email,
        password,
        otp,
      });
      if (data) {
        toast.success("Password Reset Successfully!");
        window.location.href = "/login";
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="w-full max-w-[1300px] sm:pb-9 pb-7 mx-auto sm:px-0 px-4 pt-14">
        <Image
          src="/assets/images/logo.png"
          alt="logo image"
          height={70}
          width={150}
          className="cursor-pointer sm:h-[50px] h-9 w-auto"
        />
        <div className="h-auto flex  justify-center sm:mt-7 mt-20">
          <div className="bg-white shadow-[0px_4px_10px_0px_#2323231A] border border-[#E9E9E9] rounded-2xl sm:px-12 px-3 w-full max-w-[590px] p-8">
            <h1 className="sm:text-3xl text-2xl SF_Pro font-bold mb-1 text-gray-800">
              Reset Password
            </h1>
            <p className="text-[#2B2A29] text-sm mb-6">
              Enter new password to update your password
            </p>
            <form className="space-y-4" onSubmit={handleResetPassword}>
              <div>
                <label className="block text-sm font-medium text-[#2B2A29]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2B2A29]">
                  Enter your password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <span>
                        <PiEyeSlash size={20} />
                      </span>
                    ) : (
                      <span>
                        <PiEye size={20} />
                      </span>
                    )}
                  </button>
                </div>
              </div>

              <div className="sm:pt-5 pt-2.5">
                <button
                  type="submit"
                  className="w-full bg-[#00A0E3] text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
