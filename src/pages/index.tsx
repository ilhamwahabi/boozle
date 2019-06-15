import React from "react";
import { observer } from "mobx-react-lite";

import SEO from "../components/seo";
import FindMatch from "../components/findMatch";

import state from "../state";

function IndexPage() {
  return (
    <div>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <FindMatch />
      Test {state.example}
    </div>
  );
}

export default observer(IndexPage);
