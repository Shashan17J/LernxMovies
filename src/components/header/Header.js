import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://lernx.io/images/ffff.png"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>

      <div className="">
        <FaRegUserCircle size={25} onClick={() => navigate(`/signup`)} />
      </div>
    </div>
  );
};

export default Header;
