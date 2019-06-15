import React from "react";

import Layout from "../components/layout";
import BookingButton from "../components/BookingButton";
import UpcomingMatch from "../components/UpcomingMatch";

const IndexPage = () => {
  return (
    <Layout>
      <UpcomingMatch></UpcomingMatch>
      <BookingButton></BookingButton>
    </Layout>
  );
};

export default IndexPage;
