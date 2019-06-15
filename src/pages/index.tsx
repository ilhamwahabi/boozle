import React from "react";

import SEO from "../components/seo";

import Layout from "../components/layout";

function IndexPage(props) {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
    </Layout>
  );
}

export default IndexPage;
