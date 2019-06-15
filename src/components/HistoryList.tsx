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
              <p className="text-sm">Fri, 21 Jun 2019</p>
              <p className="text-sm">19:00 - 21:00</p>
              <p className="mt-4 text-xs text-secondary">20/06/19 18:24:32</p>
            </div>
        </div>
      </Link>
      <div className="rounded shadow-lg bg-white py-2 px-4 m-2 flex flex-row">
          <img src={FutsalIcon} className="w-20 h-20 self-center rounded-lg"/>
          <div className="pl-4">
            <p className="text-xl text-strong-secondary">Vico Futsal</p>
            <p className="text-sm">Mon, 9 Jun 2019</p>
            <p className="text-sm">19:00 - 21:00</p>
            <p className="mt-4 text-xs text-secondary">07/06/19 09:21:23</p>
          </div>
      </div>
      <div className="rounded shadow-lg bg-white py-2 px-4 m-2 flex flex-row">
          <img src={FutsalIcon} className="w-20 h-20 self-center rounded-lg"/>
          <div className="pl-4">
            <p className="text-xl text-strong-secondary">HDT Centre</p>
            <p className="text-sm">Friday, 14 Mei 2019</p>
            <p className="text-sm">19:00 - 21: 00</p>
            <p className="mt-4 text-xs text-secondary">13/05/19 10:44:39</p>
          </div>
      </div>
      <div className="rounded shadow-lg bg-white py-2 px-4 m-2 flex flex-row">
          <img src={FutsalIcon} className="w-20 h-20 self-center rounded-lg"/>
          <div className="pl-4">
            <p className="text-xl text-strong-secondary">Lapangan Lotus</p>
            <p className="text-sm">Saturday, 12 Mei 2019</p>
            <p className="text-sm">13:00 - 15: 00</p>
            <p className="mt-4 text-xs text-secondary">11/05/19 15:24:32</p>
          </div>
      </div>
    </div>
  );
};

export default HistoryList;
