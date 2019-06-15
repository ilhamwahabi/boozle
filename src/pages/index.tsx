import React from "react";

import SEO from "../components/seo";
import FindMatch from "../components/findMatch";

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
      <FindMatch />
      <BottomBar />
    </div>
  );
}

export default IndexPage;
