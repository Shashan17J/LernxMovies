import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = formData;

    const res = await fetch(
      "https://lirnxmovies-default-rtdb.firebaseio.com/LearxMovies.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        }),
      }
    );
    if (res) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert("Successfully Signedup, Now Login");
    }
  };

  return (
    <>
      <div className="ecomm-popup w-screen h-full bg-black top-0 z-20 flex justify-center items-center">
        <div className="w-full max-w-md md:max-w-lg h-auto mb-10 bg-black duration-300 ease-in relative flex flex-col p-5">
          <div className="w-full h-16">
            <h1 className="text-3xl font-bold text-White ml-18 mt-6">
              Sign up for an Account
            </h1>
          </div>
          <form
            className="flex flex-col gap-5 justify-center mt-5"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="firstName" className="text-white">
                First Name
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                required
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2 text-black"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="lastName" className="text-white">
                Last Name
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                required
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2 text-black"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="email" className="text-white">
                Email Address
              </label>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                required
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2 text-black"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                value={formData.password}
                required
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2 text-black"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="text-White">
                Confirm Password
              </label>
              <input
                type="password"
                onChange={handleChange}
                name="confirmPassword"
                value={formData.confirmPassword}
                required
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2 text-black"
              />
            </div>
            <div className="pl-5 pr-40">
              {/* <Link to="/otp"> */}
              <button
                type="submit"
                className="text-center w-[100px] p-2 bg-yellow-500 mt-3 text-white font-Poppins ml-20 rounded-full"
              >
                Sign Up
              </button>
              {/* </Link> */}
            </div>
            <div className="w-full flex items-center gap-5 justify-center text-black">
              <div className="mr-auto pl-20 text-white -ml-14">
                Already a member?
                <Link to="/login">
                  <span className=" text-yellow-500 font-bold"> Login</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
