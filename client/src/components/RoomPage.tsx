import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarWeek,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

function renderRoom(data) {
  return (
    <Link to={"/room/detail"} state={data} className="w-full" key={data._id}>
      <div className="mb-2 flex justify-center items-center w-full">
        <div className="w-full flex flex-col justify-start items-start shadow-lg bg-white rounded-large border">
          <div className="flex justify-center items-center pt-2">
            <img src={data.img} className="m-2 w-8" />
            <div className="flex flex-col">
              <div className="font-semibold text-base">{data.team}</div>
              <div className="text-xs text-gray-600">Room ID: {data._id}</div>
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
                <div className="flex pl-2 pt-1 pb-2">{data.location}</div>
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
    </Link>
  );
}

function RoomPage() {
  const [rooms, setRooms] = useState([]);

  const getRooms = async () => {
    const res = await axios.get("http://localhost:3000/api/rooms");
    const rooms = res.data.rooms.map(room => renderRoom(room));

    setRooms(rooms);
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center bg-main min-h-full">
      <div className="text-center text-4xl text-primary font-medium self-start">
        Room List
      </div>
      <div className="text-center text-lg mb-2 font-medium self-start">
        Choose Your Room
      </div>
      <div className="mb-2 flex justify-center items-center w-full">
        <input
          placeholder="Type Room ID or Room Name"
          className="self-start pl-2 my-1 border border-8 rounded-large h-8 w-full shadow-lg"
        ></input>
      </div>
      {rooms}
    </div>
  );
}

export default RoomPage;
