import React from "react";
// import PropTypes from "prop-types";
// import Helmet from "react-helmet";
// import { StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarWeek,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

function renderRoom(data) {
  return(
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
  );
}

function renderRooms() {
  const data = [
    {
      id: 123,
      team: "Petir Kuningan",
      name: "Sepak Tarkam bersama tim Petir",
      time: "19.00 - 21.00",
      location: "GOR Karet, Jakarta",
      date: "17 Juni 2019",
      day: "Rabu",
      img: "https://image.flaticon.com/icons/svg/252/252590.svg",
    },
    {
      id: 223,
      team: "Rambo Karet",
      name: "Futsal Se-Kuningan Raya",
      time: "12.00 - 14.00",
      location: "Lotex Fortus, Jakarta",
      date: "19 Juni 2019",
      day: "Jumat",
      img: "https://image.flaticon.com/icons/svg/138/138299.svg",
    },
    {
      id: 323,
      team: "Petir Kuningan",
      name: "Sparring tim Petir",
      time: "21.00 - 23.00",
      location: "Petir Stadium, Jakarta",
      date: "27 Juli 2019",
      day: "Senin",
      img: "https://image.flaticon.com/icons/svg/252/252590.svg",
    },
    {
      id: 423,
      team: "Api Kuningan",
      name: "Api membara-bara",
      time: "14.00 - 18.00",
      location: "Api Arena, Jakarta",
      date: "13 April 2020",
      day: "Selasa",
      img: "https://image.flaticon.com/icons/svg/426/426833.svg",
    },
    {
      id: 523,
      team: "Warriors",
      name: "Menggila bersama Warriors",
      time: "11.00 - 16.00",
      location: "Oracle Arena, Jakarta",
      date: "3 Juli 2019",
      day: "Sabtu",
      img: "https://image.flaticon.com/icons/svg/1825/1825326.svg",
    },
  ];
  const rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(renderRoom(data[i]));
  }
  return rows;
};

function RoomPage() {
  return (
    <div className="flex flex-col items-center bg-main min-h-screen">
      <div className="text-center text-4xl text-primary font-medium self-start">Room List</div>
      <div className="text-center text-lg mb-2 font-medium self-start">Choose Your Room</div>
      <div className="mb-2 flex justify-center items-center w-full">
        <input placeholder="Type Room ID or Room Name" className="self-start pl-2 my-1 border border-8 rounded-large h-8 w-full shadow-lg"></input>
      </div>
      {renderRooms()}
    </div>
  );
}

export default RoomPage;
