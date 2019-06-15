import React from "react";
// import PropTypes from "prop-types";
// import Helmet from "react-helmet";
// import { StaticQuery, graphql } from "gatsby";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch
// } from "@fortawesome/free-solid-svg-icons";

function MatchDetail() {
  return (
    <div className="flex flex-col items-center bg-main min-h-screen">
      <div className="text-center ml-4 text-4xl text-primary font-medium self-start">Match Detail</div>
      <div className="text-center ml-4 text-lg mb-4 font-medium self-start">Liga Karet Kuningan</div>
      <div className="flex justify-center items-center w-full">
        <div className="mx-4 w-full flex flex-col justify-center items-center shadow-lg bg-white rounded-large">
          <div className="mt-4 flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <img src={require("../images/flash.png")} className="w-20"/>
              <div>Petir Kuningan</div>
            </div>
            <div className="mx-4 text-xl font-bold">
              5 - 0
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={require("../images/flame.png")} className="w-20"/>
              <div>Api Kuningan</div>
            </div>
          </div>
          <div className="mt-2 mx-4 w-full flex flex-col justify-center items-center">
            <div className="my-3 font-semibold">TEAM MEMBERS</div>
            <div className="px-6 flex w-full flex-row justify-between items-center">
              <table className="w-full mb-3">
                <tr>
                  <td className="text-left">Agus T.</td>
                  <td>0</td>
                  <td className="text-center">Goals</td>
                  <td>0</td>
                  <td className="text-right">Steven S.</td>
                </tr>
                <tr>
                  <td className="text-left">Budi T.</td>
                  <td>0</td>
                  <td className="text-center">Goals</td>
                  <td>0</td>
                  <td className="text-right">Iwan K.</td>
                </tr>
                <tr>
                  <td className="text-left">Dhani T.</td>
                  <td>3</td>
                  <td className="text-center">Goals</td>
                  <td>0</td>
                  <td className="text-right">Mike S.</td>
                </tr>
                <tr>
                  <td className="text-left">Gian T.</td>
                  <td>2</td>
                  <td className="text-center">Goals</td>
                  <td>0</td>
                  <td className="text-right">Chris Z.</td>
                </tr>
                <tr>
                  <td className="text-left">Wei T.</td>
                  <td>0</td>
                  <td className="text-center">Goals</td>
                  <td>0</td>
                  <td className="text-right">Jeremy P.</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-center items-center w-full">
        <div className="mx-4 w-full flex flex-col justify-center items-center shadow-lg bg-white rounded-large">
          <div className="mt-2 mx-4 w-full flex flex-col justify-center items-center">
            <div className="my-3 font-semibold">LEAGUE STANDING</div>
            <div className="px-6 flex w-full flex-row justify-between items-center">
              <table className="w-full mb-3 border border-t-0 border-l-0 border-r-0 border-gray-600">
                <tr className="text-left border border-t-0 border-l-0 border-r-0 border-gray-600">
                  <th>No</th>
                  <th>Name</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>GD</th>
                  <th>P</th>
                </tr>
                <tr className="border border-t-0 border-l-0 border-r-0 border-gray-600">
                  <td>1</td>
                  <td>Petir Kuningan</td>
                  <td className="text-center">2</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">6</td>
                  <td className="text-center">0</td>
                  <td className="text-center">6</td>
                  <td className="text-center">6</td>
                </tr>
                <tr className="border border-t-0 border-l-0 border-r-0 border-gray-600">
                  <td>2</td>
                  <td>Kilat</td>
                  <td className="text-center">1</td>
                  <td className="text-center">0</td>
                  <td className="text-center">1</td>
                  <td className="text-center">2</td>
                  <td className="text-center">1</td>
                  <td className="text-center">1</td>
                  <td className="text-center">3</td>
                </tr>
                <tr className="border border-t-0 border-l-0 border-r-0 border-gray-600">
                  <td>3</td>
                  <td>Kreji</td>
                  <td className="text-center">1</td>
                  <td className="text-center">0</td>
                  <td className="text-center">1</td>
                  <td className="text-center">1</td>
                  <td className="text-center">2</td>
                  <td className="text-center">-1</td>
                  <td className="text-center">3</td>
                </tr>
                <tr className="border border-t-0 border-l-0 border-r-0 border-gray-600">
                  <td>4</td>
                  <td>Api Kuningan</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">2</td>
                  <td className="text-center">0</td>
                  <td className="text-center">6</td>
                  <td className="text-center">-6</td>
                  <td className="text-center">0</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchDetail;
