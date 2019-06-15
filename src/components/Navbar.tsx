import React from "react";

import HamburgerMenu from "./../svg/menu.svg";

const Navbar = () => {
  return (
    <nav
      className="
        flex justify-center items-center
        text-orange-600 text-xl font-bold
        p-4 bg-white
      "
    >
      <HamburgerMenu
        className="w-5 h-5 absolute cursor-pointer"
        style={{ left: "16px" }}
      />
      Boozle
    </nav>
  );
};

export default Navbar;
