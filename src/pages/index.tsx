import React from "react";
import { observer } from "mobx-react-lite";

import SEO from "../components/seo";

import state from "../state";

function IndexPage() {
  return (
    <div>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      Test {state.example}
    </div>
  );
}

export default observer(IndexPage);
