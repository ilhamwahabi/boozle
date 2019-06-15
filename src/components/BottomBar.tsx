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
  const { pathname } = window.location;

  return (
    <div
      className="
        flex justify-around items-center
        fixed bottom-0 p-4 bg-white w-screen
      "
    >
      <BottomBarItem icon={faHome} label="Home" selected={pathname === "/"} />
      <BottomBarItem
        icon={faHistory}
        label="History"
        selected={pathname === "/history"}
      />
      <BottomBarItem
        icon={faChartBar}
        label="Statistic"
        selected={pathname === "/statistic"}
      />
      <BottomBarItem
        icon={faFutbol}
        label="Match"
        selected={pathname === "/match"}
      />
      <BottomBarItem
        icon={faUser}
        label="Profile"
        selected={pathname === "/profile"}
      />
    </div>
  );
};

export default BottomBar;
