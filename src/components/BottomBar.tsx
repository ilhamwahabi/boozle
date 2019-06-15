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
  let pathname;
  if (typeof window !== `undefined`) pathname = window.location.pathname;

  return (
    <div
      className="
        flex justify-around items-center
        fixed left-0 bottom-0 p-4 bg-white w-screen z-10
      "
      style={{
        boxShadow:
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      }}
    >
      <BottomBarItem
        icon={faHome}
        label="Home"
        path="/"
        selected={pathname === "/"}
      />
      <BottomBarItem
        icon={faFutbol}
        label="Match"
        path="/match"
        selected={(pathname === "/match") || (pathname === "/roomsearch") || (pathname === "/roomdetail")}
      />
      <BottomBarItem
        icon={faChartBar}
        label="Statistic"
        path="/statistic"
        selected={pathname === "/statistic"}
      />
      {/* <BottomBarItem
        icon={faHistory}
        label="History"
        path="/history"
        selected={pathname === "/history"}
      /> */}
      <BottomBarItem
        icon={faUser}
        label="Profile"
        path="/profile"
        selected={(pathname === "/profile") || (pathname === "/matchresult")}
      />
    </div>
  );
};

export default BottomBar;
