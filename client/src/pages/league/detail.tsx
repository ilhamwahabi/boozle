import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarWeek,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Layout from "../../components/layout";

function RoomDetail() {
  const data = {
    _id: 1,
    name: "Liga Tarkam",
    img: "https://image.flaticon.com/icons/svg/1825/1825339.svg",
    host: "Gojek",
    time: "3 months",
    desc: "We are looking for the best team in Kuningan",
    location: "Stadion Gelora Bung Karno",
    chat: []
  };

  const renderChat = chat => {
    if (chat.type === "you") {
      return (
        <div className="bg-blue-600 rounded-large flex flex-col px-4 py-2 m-1 justify-end items-end self-end">
          <div className="text-white">{chat.message}</div>
          <div className="text-gray-400 text-xs self-end">{chat.time}</div>
        </div>
      );
    } else {
      return (
        <div className="bg-gray-600 rounded-large flex flex-col p-4 m-1">
          <div className="text-blue-200 font-semibold">Opponent</div>
          <div className="text-white">{chat.message}</div>
          <div className="text-gray-400 text-xs self-end">{chat.time}</div>
        </div>
      );
    }
  };

  const [bothAccepted, setBothStatus] = useState(false);
  const [status, setStatus] = useState("Accept Match");
  const [buttonColor, setColor] = useState("bg-primary");
  const [chats, setChats] = useState(
    data === undefined ? [] : data.chat.map(chat => renderChat(chat))
  );
  const [message, setMessage] = useState("");

  const setStatusMatch = () => {
    if (status === "Accept Match" && data.oppApproval) {
      setBothStatus(true);
    } else if (status === "Accept Match") {
      setStatus("Cancel Accept");
      setColor("bg-danger");
    } else {
      setStatus("Accept Match");
      setColor("bg-primary");
    }
  };

  const renderAcceptButton = () => {
    return (
      <button
        onClick={setStatusMatch}
        className={`h-16 w-40 m-2 text-white rounded-large ${buttonColor}`}
      >
        {status}
      </button>
    );
  };

  const renderOpponentButton = () => {
    return (
      <button
        className="h-16 w-40 bg-gray-700 m-2 text-white rounded-large"
        disabled={true}
      >
        {data.oppApproval ? "Opponent Ready" : "Wait For Opponent Accept"}
      </button>
    );
  };

  const handleKeyDown = async event => {
    if (event.key === "Enter") {
      const val = event.target.value;
      const id = data._id;
      const res = await axios.post("http://localhost:3000/api/room-chats", {
        id,
        val
      });
      setChats(res.data.room.chat.map(chat => renderChat(chat)));
      setMessage("");
    }
  };
  const handleChange = event => {
    setMessage(event.target.value);
  };
  return (
    <Layout>
      <div className="flex flex-col items-center bg-main min-h-full flex-1">
        <div className="text-center text-4xl text-primary font-medium self-start">
          Detail League
        </div>
        <div className="flex flex-col flex-1 py-2 w-full">
          <div className="mb-2 flex justify-center items-center w-full mb-4">
            <div className="w-full flex flex-col justify-start items-start shadow-lg bg-white rounded-large border">
              <div className="flex justify-center items-center pt-2 px-2 mb-4">
                <img src={data.img} className="m-2 w-8" />
                <div className="flex flex-col">
                  <div className="font-semibold text-base">
                    Hosted by {data.host}
                  </div>
                  <div className="text-xs text-gray-600">
                    League ID: {data._id}
                  </div>
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
          <div className="mt-3 flex justify-center items-center w-full">
            <div className="w-full flex flex-col justify-center items-center shadow-lg bg-white rounded-large">
              <div className="mt-2 w-full flex flex-col justify-center items-center">
                <div className="my-3 font-semibold text-primary">
                  LEAGUE STANDING
                </div>
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
                      <td className="text-center">1</td>
                      <td className="text-center">5</td>
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
                      <td className="text-center">1</td>
                      <td className="text-center">6</td>
                      <td className="text-center">-5</td>
                      <td className="text-center">0</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <button className="p-4 bg-gray-600 mt-8 text-white">
            You Already Joined
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default RoomDetail;
