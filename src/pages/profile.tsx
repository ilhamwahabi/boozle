import React from "react";

import Layout from "../components/layout";
import ProfileDetail from "../components/ProfileDetail";
import HistoryList from "../components/HistoryList";

const Profile = props => {
  return (
    <Layout>
      <div className="py-4 px-8">
        <p className="text-4xl mb-4 text-primary">Profile</p>
        <ProfileDetail/>
        <p className="pt-6 text-center text-2xl text-primary mb-4">History</p>
        <div>
          <HistoryList/>
        </div>
      </div>
    </Layout>
  )
}

export default Profile;