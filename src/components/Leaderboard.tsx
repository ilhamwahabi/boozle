import React from "react";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Marcello from "../images/marcello.jpeg";
import Suparjo from "../images/suparjo.jpeg";
import Gian from "../images/gian.jpeg";

import "react-tabs/style/react-tabs.css";

const dummyLeaderboard = (
  <div className="table">
    <div className="table-row">
      <div className="table-cell align-middle w-6">1.</div>
      <img src={Marcello} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Marcello Susanto</div>
      <div className="table-cell align-middle pl-3 text-primary">2173</div>
    </div>
    <div className="table-row">
      <div className="table-cell align-middle w-6">2.</div>
      <img src={Suparjo} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Suparjo Tamin</div>
      <div className="table-cell align-middle pl-3 text-primary">1829</div>
    </div>
    <div className="table-row">
      <div className="table-cell align-middle w-6">3.</div>
      <img src={Gian} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Gian Gervase</div>
      <div className="table-cell align-middle pl-3 text-primary">1763</div>
    </div>
  </div>
);

const dummyOverall = (
  <div className="table">
    <div className="table-row">
      <div className="table-cell align-middle w-6">1.</div>
      <img src={Suparjo} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Arthur Bando</div>
      <div className="table-cell align-middle pl-3 text-primary">6283</div>
    </div>
    <div className="table-row">
      <div className="table-cell align-middle w-6">2.</div>
      <img src={Marcello} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Jekyll Hade</div>
      <div className="table-cell align-middle pl-3 text-primary">6280</div>
    </div>
    <div className="table-row">
      <div className="table-cell align-middle w-6">3.</div>
      <img src={Gian} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Ronaldino</div>
      <div className="table-cell align-middle pl-3 text-primary">6274</div>
    </div>
  </div>
);

const Leaderboard = () => {

  return (
    <div className="mb-6">
      <h1 className="text-lg text-primary mb-2">Leaderboard</h1>
      <Tabs>
        <TabList>
          <Tab>Friends</Tab>
          <Tab>Overall</Tab>
        </TabList>

        <TabPanel>
          {dummyLeaderboard}
        </TabPanel>
        <TabPanel>
          {dummyOverall}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Leaderboard;
