import React from "react";

import SEO from "../components/seo";
import FindMatch from "../components/FindMatch";

import Layout from "../components/layout";

function IndexPage(props) {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <FindMatch />
    </Layout>
  );
}

export default IndexPage;
