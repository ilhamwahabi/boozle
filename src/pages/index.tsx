import React from "react";

import SEO from "../components/seo";

import Navbar from "../components/Navbar";

function IndexPage() {
  return (
    <div className="bg-gray-100 h-screen">
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Navbar />
    </div>
  );
}

export default IndexPage;
