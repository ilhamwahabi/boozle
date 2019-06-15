import React from "react";

import Layout from "../components/layout";
import BookingButton from "../components/BookingButton";
import UpcomingMatch from "../components/UpcomingMatch";
import Banner from "../components/Banner";

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <UpcomingMatch />
      <BookingButton />
    </Layout>
  );
};

export default IndexPage;
