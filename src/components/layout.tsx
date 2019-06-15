import React from "react";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

const Layout = props => {
  const { children } = props;

  return (
    <section
      className="
        py-16 px-4 bg-gray-100 min-h-screen w-screen
        flex flex-col justify-center
      "
    >
      <Navbar></Navbar>
      {children}
      <BottomBar></BottomBar>
    </section>
  );
};

export default Layout;
