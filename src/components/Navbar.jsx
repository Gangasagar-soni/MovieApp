import React from "react";
import logo from "./images/image.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-2">
      <img className="w-[30px] " src={logo}></img>
      <Link to="/" className="text-red-600 text-0. font-bold">
        Movies
      </Link>
      <Link to="Watchlist" className="text-red-600 text-0.1xl font-bold">
        Watchlist
      </Link>
    </div>
  );
};
export default Navbar;
