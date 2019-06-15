import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav
      className="
        flex justify-center items-center
        text-orange-600 text-xl font-bold
        p-4 bg-white fixed left-0 top-0 w-screen shadow-md
      "
    >
      <FontAwesomeIcon
        icon={faBars}
        style={{ left: "16px" }}
        className="absolute cursor-pointer"
      />
      Boozle
    </nav>
  );
};

export default Navbar;
