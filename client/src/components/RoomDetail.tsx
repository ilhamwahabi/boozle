import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarWeek,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function RoomDetail(props) {
  const { data } = props;

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

  const renderButton = () => {
    if (bothAccepted) {
      return (
        <div className="flex justify-center space-between">
          <button
            className="h-16 w-full bg-gray-700 my-2 text-white rounded-large"
            disabled={true}
          >
            {"Two days to go..."}
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center space-between">
          {renderAcceptButton()}
          {renderOpponentButton()}
        </div>
      );
    }
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
    <div className="flex flex-col items-center bg-main min-h-full flex-1">
      <div className="text-center text-4xl text-primary font-medium self-start">
        Detail Room
      </div>
      <div className="flex flex-col flex-1 justify-between py-2 w-full">
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
        <div className="flex flex-col justify-center items-center w-full flex-grow">
          <div className="w-full flex flex-1 flex-col justify-between items-start shadow-lg bg-white rounded-large">
            <div className="w-full border border-r-0 border-l-0 border-t-0">
              <div className="pl-4 py-2 text-lg font-bold">Chat</div>
            </div>
            <div className="w-full overflow-scroll flex-grow flex flex-col justify-end">
              <div className="m-1 px-3 flex flex-col justify-center items-start h-larger">
                {chats}
              </div>
            </div>
            <div className="w-full border border-l-0 border-r-0 border-b-0">
              <div className="p-2 w-full">
                <input
                  placeholder="Type to chat..."
                  className="self-start pl-2 border border-8 rounded-large h-8 w-full"
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  value={message}
                ></input>
              </div>
            </div>
          </div>
        </div>
        {renderButton()}
      </div>
    </div>
  );
}

export default RoomDetail;
