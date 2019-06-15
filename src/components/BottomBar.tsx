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
        fixed left-0 bottom-0 p-4 bg-white w-screen
      "
    >
      <BottomBarItem
        icon={faHome}
        label="Home"
        path="/"
        selected={pathname === "/"}
      />
      <BottomBarItem
        icon={faHistory}
        label="History"
        path="/history"
        selected={pathname === "/history"}
      />
      <BottomBarItem
        icon={faChartBar}
        label="Statistic"
        to="/statistic"
        selected={pathname === "/statistic"}
      />
      <BottomBarItem
        icon={faFutbol}
        label="Match"
        to="/match"
        selected={pathname === "/match"}
      />
      <BottomBarItem
        icon={faUser}
        label="Profile"
        to="/profile"
        selected={pathname === "/profile"}
      />
    </div>
  );
};

export default BottomBar;
