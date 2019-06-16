import React from "react";

import Layout from "../components/layout";
import BookingButton from "../components/BookingButton";
import MyMatch from "../components/MyMatch";
import Banner from "../components/Banner";
import Leaderboard from "../components/Leaderboard";

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <MyMatch />
      <Leaderboard />
      <BookingButton />
    </Layout>
  );
};

export default IndexPage;
