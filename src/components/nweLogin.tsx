import React, { useState, useRef, ChangeEvent } from "react";
import bg from "@/assets/bg.png";

const LoginPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: any = {};

    // Basic Validation Rules
    if (!formData.email) newErrors.email = "البريد الإلكتروني مطلوب";
    if (!formData.password) newErrors.password = "كلمة السر مطلوبة";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // If no errors, submit the form data
      console.log("Login successful", formData);
    }
  }

  return (
    <div className="flex mt-8  border border-3 border-mainColor rounded-3xl">

<div className="relative rounded-l-3xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>

        <div className="absolute inset-0 bg-white opacity-40"></div>

        <h1 className="relative z-10 text-4xl font-bold text-mainColor px-8 py-4 rounded-md">
          مرحباً بك في E-STAD
        </h1>
      </div>
      
      <div className="bg-white flex flex-col justify-center items-center p-12 rounded-r-3xl">
        <h1 className="text-3xl font-bold mb-6 text-mainColor">تسجيل الدخول</h1>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-4"
        >
          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="البريد الإلكتروني"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="كلمة السر"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              id="rememberMe"
              className="h-4 w-4"
            />
            <label htmlFor="rememberMe" className="text-gray-600">
              تذكرني
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-mainColor text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            تسجيل الدخول
          </button>
        </form>

        {/* Forgot Password Link */}
        <p className="mt-4 text-mainColor">
          <a href="/forgot-password" className="hover:underline">
            هل نسيت كلمة السر؟
          </a>
        </p>

        {/* Sign Up Link */}
        <p className="mt-6 text-gray-600">
          ليس لديك حساب؟{" "}
          <a href="/signup" className="text-mainColor hover:underline">
            أنشئ حسابك
          </a>
        </p>
      </div>

     
    </div>
  );
};

export default LoginPage;
