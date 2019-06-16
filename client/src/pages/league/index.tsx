import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../components/layout";

function renderRoom(data) {
  return (
    <Link to={"/room/detail"} state={data} className="w-full" key={data._id}>
      <div className="mb-2 flex justify-center items-center w-full mb-4">
        <div className="w-full flex flex-col justify-start items-start shadow-lg bg-white rounded-large border">
          <div className="flex justify-center items-center pt-2 px-2 mb-4">
            <img src={data.img} className="m-2 w-8" />
            <div className="flex flex-col">
              <div className="font-semibold text-base">
                Hosted by {data.host}
              </div>
              <div className="text-xs text-gray-600">League ID: {data._id}</div>
            </div>
          </div>
          <div className="px-2 pb-2">
            <div className="ml-2 text-2xl font-bold">{data.name}</div>
            <div className="ml-2 text-sm font-hairline">{data.desc}</div>
          </div>
          <div className="border border-l-0 border-r-0 border-b-0 w-full">
            <div className="flex w-full">
              <div className="flex flex-1 border border-l-0 border-b-0 px-2 text-xs">
                <div className="pl-2 pt-1 pb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="flex pl-2 pt-1 pb-2">{data.location}</div>
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
    const roomsData = [
      {
        _id: 1,
        name: "Liga Tarkam",
        img: "https://image.flaticon.com/icons/svg/1825/1825339.svg",
        host: "Gojek",
        time: "3 months",
        desc: "We are looking for the best team in Kuningan",
        location: "Stadion Gelora Bung Karno"
      },
      {
        _id: 2,
        name: "Liga TNI",
        img: "https://image.flaticon.com/icons/svg/1825/1825342.svg",
        host: "TNI",
        time: "1 week",
        desc: "For fun only",
        location: "Stadion Pearl Harbour"
      }
    ];

    const rooms = roomsData.map(room => renderRoom(room));

    setRooms(rooms);
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <Layout>
      <div className="flex flex-1 flex-col items-center bg-main min-h-full">
        <div className="text-center text-4xl text-primary font-medium self-start">
          League
        </div>
        <div className="text-center text-lg mb-2 font-medium self-start">
          Choose Your League
        </div>
        <div className="mb-4 flex justify-center items-center w-full">
          <input
            placeholder="Type League ID or League Name"
            className="self-start pl-2 my-1 border border-8 rounded-large h-8 w-full shadow-lg"
          ></input>
        </div>
        {rooms}
      </div>
    </Layout>
  );
}

export default RoomPage;
