import React from "react";

import FutsalIcon from "../images/futsal-icon.png";

const MyMatch = () => {
  return (
    <div className="mb-4">
      <h1 className="text-lg text-primary"> Upcoming Match </h1>
      <div className="rounded-lg shadow-lg bg-white py-2 px-4 my-2 flex flex-row">
        <img src={FutsalIcon} className="w-20 h-20 self-center rounded-lg" />
        <div className="pl-4">
          <p className="text-xl text-strong-secondary">Lapangan Lotus</p>
          <p className="text-sm">Sun, 16 Jun 2019</p>
          <p className="text-sm">18:00 - 19: 00</p>
          <p className="mt-4 text-xs text-secondary">
            Jln. Abadi No 249C, Setiabudi
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyMatch;
