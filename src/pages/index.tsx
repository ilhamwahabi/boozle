import React from "react";

import SEO from "../components/seo";

import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";

function IndexPage() {
  return (
    <div className="bg-gray-100 h-screen">
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Navbar />
      <BottomBar />
    </div>
  );
}

export default IndexPage;
