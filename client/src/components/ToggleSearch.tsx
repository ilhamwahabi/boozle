import React from "react";
import cx from "classnames";

const ToggleSearch = props => {
  const { view = "map", toggleView } = props;

  return (
    <div
      className="fixed bg-white py-4 px-4 z-20 flex"
      style={{ top: 72, alignSelf: "center", borderRadius: 24 }}
    >
      <button
        style={{ outline: "none" }}
        className={cx([
          "mr-4",
          "font-medium",
          { "text-orange-600": view === "map", "text-gray-600": view !== "map" }
        ])}
        onClick={() => toggleView("map")}
      >
        Map View
      </button>
      <div className="bg-gray-600" style={{ width: 1 }}></div>
      <button
        style={{ outline: "none" }}
        className={cx([
          "ml-4",
          "font-medium",
          { "text-orange-600": view !== "map", "text-gray-600": view === "map" }
        ])}
        onClick={() => toggleView("list")}
      >
        List View
      </button>
    </div>
  );
};

export default ToggleSearch;
