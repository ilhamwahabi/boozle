import React from "react";

import Layout from "../components/layout";
import RoomDetail from "../components/RoomDetail";

const RoomDetailPage = ({ location }) => {
  return (
    <Layout>
      <RoomDetail data={location.state} />
    </Layout>
  );
};

export default RoomDetailPage;
