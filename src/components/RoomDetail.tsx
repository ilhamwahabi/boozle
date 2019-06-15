import React, { useState } from "react";
// import PropTypes from "prop-types";
// import Helmet from "react-helmet";
// import { StaticQuery, graphql } from "gatsby";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch
// } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarWeek,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

function RoomDetail(props) {
  const { data } = props;
  const [status, setStatus] = useState("Accept Match");
  const [buttonColor, setColor] = useState("bg-primary");
  const setStatusMatch = () => {
    if (status === "Accept Match") {
      setStatus("Cancel Accept");
      setColor("bg-danger");
    } else {
      setStatus("Accept Match");
      setColor("bg-primary");
    }
  }
  const renderAcceptButton = () => {
    return(
      <button onClick={setStatusMatch} className={`h-16 w-40 m-2 text-white rounded-large ${buttonColor}`}>{status}</button>
    );
  };
  console.log(status);
  return (
    <div className="flex flex-col items-center bg-main min-h-full flex-1">
      <div className="text-center text-4xl text-primary font-medium self-start">Detail Room</div>
      <div className="text-center text-lg mb-2 font-medium self-start">Meet your Opponent</div>
      <div className="flex flex-col flex-1 justify-between py-2">
        <div className="mb-2 flex justify-center items-center w-full">
          <div className="w-full flex flex-col justify-start items-start shadow-lg bg-white rounded-large border">
            <div className="flex justify-center items-center pt-2">
              <img src={data.img} className="m-2 w-8"/>
              <div className="flex flex-col">
                <div className="font-semibold text-base">{data.team}</div>
                <div className="text-xs text-gray-600">Room ID: {data.id}</div>
              </div>
            </div>
            <div className="px-2 pb-2">
              <div className="ml-2 text-lg font-bold">{data.name}</div>
              <div className="ml-2">{data.time}</div>
            </div>
            <div className="border border-l-0 border-r-0 border-b-0 w-full">
              <div className="flex w-full">
                <div className="flex flex-1 border border-l-0 border-b-0 px-2 text-xs">
                  <div className="pl-2 pt-1 pb-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="flex pl-2 pt-1 pb-2">
                    {data.location}
                  </div>
                </div>
                <div className="flex-1 flex border border-r-0 border-b-0 px-2">
                  <div className="mr-2 pl-2 pt-1 pb-2">
                    <FontAwesomeIcon icon={faCalendarWeek} />
                  </div>
                  <div className="flex flex-col items-start text-xs pl-2 pt-1 pb-2">
                    <div>{data.date}</div>
                    <div className="font-semibold">{data.day}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full flex-grow">
          <div className="w-full flex flex-1 flex-col justify-between items-start shadow-lg bg-white rounded-large">
            <div className="w-full border border-r-0 border-l-0 border-t-0">
              <div className="pl-4 py-2 text-lg font-bold">Chat</div>
            </div>
            <div className="w-full overflow-scroll flex-grow flex flex-col justify-end">
              <div className="m-1 px-3 flex flex-col justify-center items-start h-larger">
                <div className="bg-gray-600 rounded-large flex flex-col p-4 m-1">
                  <div className="text-blue-200 font-semibold">Opponent</div>
                  <div className="text-white">Hai brooooooooooooo!!</div>
                  <div className="text-gray-400 text-xs self-end">3.49 PM</div>
                </div>
                <div className="bg-blue-600 rounded-large flex flex-col px-4 py-2 m-1 justify-end items-end self-end">
                  <div className="text-white">Halooo!</div>
                  <div className="text-gray-400 text-xs self-end">4.05 PM</div>
                </div>
                <div className="bg-gray-600 rounded-large flex flex-col px-4 py-2 m-1">
                  <div className="text-blue-200 font-semibold">Opponent</div>
                  <div className="text-white">Sampai jumpa di lapangan gan!!</div>
                  <div className="text-gray-400 text-xs self-end">4.29 PM</div>
                </div>
                <div className="bg-blue-600 rounded-large flex flex-col px-4 py-2 m-1 justify-end items-end self-end">
                  <div className="text-white">Ashiappppp!</div>
                  <div className="text-gray-400 text-xs self-end">5.07 PM</div>
                </div>
              </div>
            </div>
            <div className="w-full border border-l-0 border-r-0 border-b-0">
              <div className="p-2 w-full">
                <input placeholder="Type to chat..." className="self-start pl-2 border border-8 rounded-large h-8 w-full"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-between">
          {renderAcceptButton()}
          <button className="h-16 w-40 bg-gray-700 m-2 text-white rounded-large" disabled={true}>Wait For Opponent Accept</button>
        </div>
      </div>
    </div>
  );
}

export default RoomDetail;
