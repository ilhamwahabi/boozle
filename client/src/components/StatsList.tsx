import React from "react";
import { Link } from "gatsby";

import rating from "../images/Grandmaster.png";

const HistoryList = props => {
  return (
    <div>
      <Link to="/match/result">
        <div className="rounded shadow-lg bg-white py-2 px-4 m-2 mb-6 flex flex-row">
          <img src={rating} className="w-20 h-20 self-center rounded-lg" />
          <div className="pl-4">
            <p className="text-xl text-strong-secondary">Highest Solo Rank</p>
            <p className="text-lg">Grandmaster</p>
            <p className="text-sm">Achieved at:</p>
            <p className="text-sm">Sun, 17 Jun 2019</p>
          </div>
        </div>
      </Link>
      <div className="rounded shadow-lg bg-white py-2 px-4 m-2 mb-6 flex flex-row">
        <img
          src={"https://image.flaticon.com/icons/svg/1836/1836945.svg"}
          className="w-20 h-20 self-center rounded-lg"
        />
        <div className="pl-4">
          <p className="text-xl text-strong-secondary">Highest Team Rank</p>
          <p className="text-lg">Legend</p>
          <p className="text-sm">Team: Petir Kuningan</p>
          <p className="text-sm">At: Tue, 11 Jun 2019</p>
        </div>
      </div>
      <div className="rounded shadow-lg bg-white py-2 px-4 m-2 mb-6 flex flex-row">
        <img
          src={"https://image.flaticon.com/icons/svg/118/118377.svg"}
          className="w-20 h-20 self-center rounded-lg"
        />
        <div className="pl-4">
          <p className="text-xl text-strong-secondary">Total Goals</p>
          <p className="text-lg">712 Goals</p>
          <p className="text-sm">Updated at:</p>
          <p className="text-sm">Sat, 15 Jun 2019</p>
        </div>
      </div>
      <div className="rounded shadow-lg bg-white py-2 px-4 m-2 mb-6 flex flex-row">
        <img
          src={"https://image.flaticon.com/icons/svg/1864/1864285.svg"}
          className="w-20 h-20 self-center rounded-lg"
        />
        <div className="pl-4">
          <p className="text-xl text-strong-secondary">Ranked Match</p>
          <p className="text-sm">Total: 923 Match</p>
          <p className="text-sm">691 W - 10 D - 22 L</p>
          <p className="text-sm">At: Sun, 16 Jun 2019</p>
        </div>
      </div>
      <div className="rounded shadow-lg bg-white py-2 px-4 m-2 mb-6 flex flex-row">
        <img
          src={"https://image.flaticon.com/icons/svg/321/321828.svg"}
          className="w-20 h-20 self-center rounded-lg"
        />
        <div className="pl-4">
          <p className="text-xl text-strong-secondary">Unranked Match</p>
          <p className="text-sm">Total: 223 Match</p>
          <p className="text-sm">191 W - 16 D - 16 L</p>
          <p className="text-sm">At: Sun, 16 Jun 2019</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryList;
