import React from "react";

import SEO from "../components/seo";
import FindMatch from "../components/findMatch";

function IndexPage() {
  return (
    <div>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <FindMatch />
    </div>
  );
}

export default IndexPage;
