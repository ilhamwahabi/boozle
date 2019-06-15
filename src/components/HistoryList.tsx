import React from "react";
import { Link } from "gatsby";

import FutsalIcon from "../images/futsal-icon.png";


const HistoryList = props => {
  return (
    <div>
      <Link to="/matchresult">
        <div className="rounded shadow-lg bg-white py-2 px-4 m-2 flex flex-row">
            <img src={FutsalIcon} className="w-20 h-20 self-center rounded-lg"/>
            <div className="pl-4">
              <p className="text-xl text-strong-secondary">Lapangan Lotus</p>
              <p className="text-sm">Wed, 21 Jun 2019</p>
              <p className="text-sm">18:00 - 19: 00</p>
              <p className="mt-4 text-xs text-secondary">26/05/19 15:24:32</p>
            </div>
        </div>
      </Link>
      <div className="rounded shadow-lg bg-white py-2 px-4 m-2 flex flex-row">
          <img src={FutsalIcon} className="w-20 h-20 self-center rounded-lg"/>
          <div className="pl-4">
            <p className="text-xl text-strong-secondary">Lapangan Lotus</p>
            <p className="text-sm">Wed, 21 Jun 2019</p>
            <p className="text-sm">18:00 - 19: 00</p>
            <p className="mt-4 text-xs text-secondary">26/05/19 15:24:32</p>
          </div>
      </div>
      <div className="rounded shadow-lg bg-white py-2 px-4 m-2 flex flex-row">
          <img src={FutsalIcon} className="w-20 h-20 self-center rounded-lg"/>
          <div className="pl-4">
            <p className="text-xl text-strong-secondary">Lapangan Lotus</p>
            <p className="text-sm">Wed, 21 Jun 2019</p>
            <p className="text-sm">18:00 - 19: 00</p>
            <p className="mt-4 text-xs text-secondary">26/05/19 15:24:32</p>
          </div>
      </div>
      <div className="rounded shadow-lg bg-white py-2 px-4 m-2 flex flex-row">
          <img src={FutsalIcon} className="w-20 h-20 self-center rounded-lg"/>
          <div className="pl-4">
            <p className="text-xl text-strong-secondary">Lapangan Lotus</p>
            <p className="text-sm">Wed, 21 Jun 2019</p>
            <p className="text-sm">18:00 - 19: 00</p>
            <p className="mt-4 text-xs text-secondary">26/05/19 15:24:32</p>
          </div>
      </div>
    </div>
  );
};

export default HistoryList;
