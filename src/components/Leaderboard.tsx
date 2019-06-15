import React from "react";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Marcello from "../images/marcello.jpeg";
import Suparjo from "../images/suparjo.jpeg";
import Gian from "../images/gian.jpeg";
import Arthur from '../images/arthur.jpeg';
import Jekyll from '../images/jekyll.jpeg';
import Ronald from '../images/ronald.jpeg';

import "react-tabs/style/react-tabs.css";

const dummyLeaderboard = (
  <div className="table">
    <div className="table-row flex justify-center items-center">
      <div className="table-cell align-middle w-6">1.</div>
      <img src={Marcello} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Marcello Susanto</div>
      <div className="table-cell align-middle pl-3 text-primary">2173</div>
      <img src={"https://image.flaticon.com/icons/svg/30/30090.svg"} className="table-cell w-8 rounded-full mb-2 ml-5 mr-4 border-gray-600"/>
      <div className="table-cell align-middle pl-3 text-gray-600 font-xs">Baby</div>
    </div>
    <div className="table-row flex justify-center items-center">
      <div className="table-cell align-middle w-6">2.</div>
      <img src={Suparjo} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Suparjo Tamin</div>
      <div className="table-cell align-middle pl-3 text-primary">1829</div>
      <img src={"https://image.flaticon.com/icons/svg/30/30090.svg"} className="table-cell w-8 rounded-full mb-2 ml-5 mr-4 border-gray-600"/>
      <div className="table-cell align-middle pl-3 text-gray-600 font-xs">Baby</div>
    </div>
    <div className="table-row flex justify-center items-center">
      <div className="table-cell align-middle w-6">3.</div>
      <img src={Gian} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Gian Gervase</div>
      <div className="table-cell align-middle pl-3 text-primary">165</div>
      <img src={"https://image.flaticon.com/icons/svg/1833/1833916.svg"} className="table-cell w-8 rounded-full mb-2 ml-5 mr-4 border-gray-600"/>
      <div className="table-cell align-middle pl-3 text-gray-600 font-xs">Worm</div>
    </div>
  </div>
);

const dummyOverall = (
  <div className="table">
    <div className="table-row flex justify-center items-center">
      <div className="table-cell align-middle w-6">1.</div>
      <img src={Arthur} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Arthur Bando</div>
      <div className="table-cell align-middle pl-3 text-primary">6283</div>
      <img src={"https://image.flaticon.com/icons/svg/862/862734.svg"} className="table-cell w-8 rounded-full mb-3 ml-5 mr-4 border-gray-600"/>
      <div className="table-cell align-middle pl-3 text-gray-600 font-xs">Prince</div>
    </div>
    <div className="table-row flex justify-center items-center">
      <div className="table-cell align-middle w-6">2.</div>
      <img src={Jekyll} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Jekyll Hade</div>
      <div className="table-cell align-middle pl-3 text-primary">6280</div>
      <img src={"https://image.flaticon.com/icons/svg/862/862734.svg"} className="table-cell w-8 rounded-full mb-3 ml-5 mr-4 border-gray-600"/>
      <div className="table-cell align-middle pl-3 text-gray-600 font-xs">Prince</div>
    </div>
    <div className="table-row flex justify-center items-center">
      <div className="table-cell align-middle w-6">3.</div>
      <img src={Ronald} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Ronaldino</div>
      <div className="table-cell align-middle pl-3 text-primary">6274</div>
      <img src={"https://image.flaticon.com/icons/svg/862/862734.svg"} className="table-cell w-8 rounded-full mb-3 ml-5 mr-4 border-gray-600"/>
      <div className="table-cell align-middle pl-3 text-gray-600 font-xs">Prince</div>
    </div>
  </div>
);

const dummyTeams = (
  <div className="table">
    <div className="table-row flex justify-center items-center">
      <div className="table-cell align-middle w-6">1.</div>
      <img src={"https://image.flaticon.com/icons/svg/1825/1825252.svg"} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Kincir Angin</div>
      <div className="table-cell align-middle pl-3 text-primary">10230</div>
      <img src={"https://image.flaticon.com/icons/svg/1836/1836945.svg"} className="table-cell w-8 rounded-full mb-3 ml-5 mr-4 border-gray-600"/>
      <div className="table-cell align-middle pl-3 text-gray-600 font-xs">Legend</div>
    </div>
    <div className="table-row">
      <div className="table-cell align-middle w-6">2.</div>
      <img src={"https://image.flaticon.com/icons/svg/252/252590.svg"} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Petir Kuningan</div>
      <div className="table-cell align-middle pl-3 text-primary">10115</div>
      <img src={"https://image.flaticon.com/icons/svg/1836/1836945.svg"} className="table-cell w-8 rounded-full mb-3 ml-5 mr-4 border-gray-600"/>
      <div className="table-cell align-middle pl-3 text-gray-600 font-xs">Legend</div>  
    </div>
    <div className="table-row">
      <div className="table-cell align-middle w-6">3.</div>
      <img src={"https://image.flaticon.com/icons/svg/426/426833.svg"} className="table-cell w-12 rounded-full mb-2 mr-4 border-gray-600"/>
      <div className="table-cell align-middle">Api Kuningan</div>
      <div className="table-cell align-middle pl-3 text-primary">9997</div>
      <img src={"https://image.flaticon.com/icons/svg/1836/1836945.svg"} className="table-cell w-8 rounded-full mb-3 ml-5 mr-4 border-gray-600"/>
      <div className="table-cell align-middle pl-3 text-gray-600 font-xs">Legend</div>
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
          <Tab>Teams</Tab>
        </TabList>

        <TabPanel>
          {dummyLeaderboard}
        </TabPanel>
        <TabPanel>
          {dummyOverall}
        </TabPanel>
        <TabPanel>
          {dummyTeams}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Leaderboard;
