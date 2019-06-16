import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav
      className="
        flex justify-between items-center
        text-orange-600 text-xl font-bold
        p-4 bg-white fixed left-0 top-0 w-screen shadow-md z-10
      "
    >
      <Link to="/">
        <div className="flex items-center">
          <img
            src="https://image.flaticon.com/icons/svg/861/861512.svg"
            alt="Logo"
            className="w-6 h-6 mr-2"
          />
          <p className="text-2xl">Boozle</p>
        </div>
      </Link>
      <FontAwesomeIcon icon={faSignOutAlt} />
    </nav>
  );
};

export default Navbar;
