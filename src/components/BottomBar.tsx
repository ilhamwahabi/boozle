import React from "react";
import {
  faHome,
  faUser,
  faFutbol,
  faHistory,
  faChartBar
} from "@fortawesome/free-solid-svg-icons";

import BottomBarItem from "./BottomBarItem";

const BottomBar = () => {
  return (
    <div
      className="
        flex justify-around items-center
        fixed bottom-0 p-4 bg-white w-screen
      "
    >
      <BottomBarItem icon={faHome} label="Home" selected />
      <BottomBarItem icon={faHistory} label="History" />
      <BottomBarItem icon={faChartBar} label="Statistic" />
      <BottomBarItem icon={faFutbol} label="Match" />
      <BottomBarItem icon={faUser} label="Profile" />
    </div>
  );
};

export default BottomBar;
