import React from "react";

import Layout from "../components/layout";
import StatsDetail from "../components/StatsDetail";
import StatsList from "../components/StatsList";

const Stats = props => {
  return (
    <Layout>
      <div className="py-4 px-2">
        <p className="text-4xl mb-4 text-primary">Stats</p>
        <StatsDetail/>
        <p className="pt-6 text-center text-2xl text-primary mb-4">Personal Statistic</p>
        <div>
          <StatsList/>
        </div>
      </div>
    </Layout>
  )
}

export default Stats;
