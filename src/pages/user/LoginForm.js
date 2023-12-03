import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://lirnxmovies-default-rtdb.firebaseio.com/LearxMovies.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    if (res) {
      setFormData({
        email: "",
        password: "",
      });
      alert("LogedIn Successfully! Now You can Watch Your Favroite Movie");
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="ecomm-popup bg-black pt-10 h-[80%] z-20 w-screen flex md:justify-center md:items-center">
        <div className="md:w-[500px] w-full md:h-[500px] h-[600px] bg-black duration-300 ease-in relative flex flex-col p-5 md:ml-48 ml-20">
          {/* <CloseIcon className="absolute top-5 right-5 cursor-pointer" /> */}
          <div className="w-full h-[50px] text-center md:pr-20 pr-0 -ml-16">
            <h1 className="text-2xl font-bold text-white">Login</h1>
          </div>
          <div className="w-full text-center text-white mb-2 text-sm tracking-tight md:pr-20 pr-0 md:-ml-18 -ml-16">
            <p className="md:mr-10 m-2 w-full">
              Enter your email and password to log in.
            </p>
          </div>
          <form
            onSubmit={handleOnSubmit}
            className="flex w-full flex-col gap-y-4 -ml-16 -mt-6"
            method="POST"
          >
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
                Email Address <sup className="text-black">*</sup>
              </p>
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email address"
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-full font-Urbanist px-3 p-2 text-black rounded-md"
              />
            </label>
            <label className="relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
                Password
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-full font-Urbanist px-3 p-2 text-black"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible
                    fontSize={24}
                    fill="#AFB2BF"
                    className="-mt-1 bg-slate-600 rounded-full"
                  />
                ) : (
                  <AiOutlineEye
                    fontSize={24}
                    fill="#AFB2BF"
                    className=" -mt-1 bg-slate-600 rounded-full"
                  />
                )}
              </span>
            </label>
            <button
              type="submit"
              className="mt-6 rounded-md py-2 px-4 font-medium bg-yellow-500 text-white"
              // onClick={() => navigate("/")}
            >
              Sign In
            </button>
          </form>
          <p className="text-sm mt-2 w-full md:text-center text-white md:pr-20 pr-0 md:mr-2 md:-ml-0 ml-40">
            Don't have an account?{" "}
            <Link to="/signup" className="text-yellow-500 cursor-pointer">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
