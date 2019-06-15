import React from "react";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

const Layout = props => {
  const { children } = props;

  return (
    <section className="pt-16 bg-gray-100 min-h-screen">
      <Navbar></Navbar>
      {children}
      <BottomBar></BottomBar>
    </section>
  );
};

export default Layout;
