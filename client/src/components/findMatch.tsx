import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import axios from "axios";

import Modal from "react-modal";

const dummyLocations = [
  {
    id: 1,
    name: "Lotus Futsal"
  },
  {
    id: 2,
    name: "Amoeba Sport Centre"
  }
];

const dummyTimes = [
  {
    id: 8,
    name: "08:00"
  },
  {
    id: 9,
    name: "09:00"
  },
  {
    id: 10,
    name: "10:00"
  },
  {
    id: 11,
    name: "11:00"
  },
  {
    id: 12,
    name: "12:00"
  },
  {
    id: 13,
    name: "13:00"
  },
  {
    id: 14,
    name: "14:00"
  },
  {
    id: 15,
    name: "15:00"
  },
  {
    id: 16,
    name: "16:00"
  },
  {
    id: 17,
    name: "17:00"
  },
  {
    id: 18,
    name: "18:00"
  },
  {
    id: 19,
    name: "19:00"
  },
  {
    id: 20,
    name: "20:00"
  },
  {
    id: 21,
    name: "21:00"
  }
];

function FindMatch() {
  const [isModalOpen, toggleModal] = useState(false);
  const [roomName, changeRoomName] = useState("");
  const [location, changeLocation] = useState("");
  const [time, changeTime] = useState(8);
  const [duration, changeDuration] = useState(1);

  const updateRoomName = e => {
    changeRoomName(e.target.value);
  };

  const updateLocation = e => {
    changeLocation(e.target.value);
  };

  const updateTime = e => {
    changeTime(e.target.value);
  };

  const updateDuration = e => {
    if (e.target.value <= 4) changeDuration(e.target.value);
  };

  const renderOptions = (list = []) => {
    const options = [];

    list.map(item => {
      options.push(
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      );
    });

    return options;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    var data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    const res = await axios.post("http://localhost:3000/api/rooms", {
      data
    });
    const room = res.data.room;
    navigate("/roomdetail", {
      state: room
    });
  };

  return (
    <div className="flex flex-col items-center bg-main min-h-screen">
      <div className="text-center ml-4 text-4xl text-primary font-medium self-start">
        Find Match
      </div>
      <div className="text-center ml-4 text-lg text-secondary mb-4 font-medium self-start">
        Choose your types
      </div>
      <div className="flex flex-col w-full">
        <div className="mb-3 mx-4 flex flex-col justify-center bg-white h-32 rounded-large shadow-lg">
          <div className="text-center text-strong-secondary text-2xl pb-2">
            Friendly Match
          </div>
          <div className="flex flex-row justify-center items-center">
            <button
              className="
                mr-2 bg-primary text-lg
                text-white w-24 h-16
                rounded-lg
              "
              onClick={() => toggleModal(!isModalOpen)}
            >
              Create
              <br />
              Room
            </button>
            <div className="mx-1 text-secondary text-2xl">Or</div>
            <Link to="/roomsearch">
              <button className="ml-2 bg-primary text-lg text-white w-24 h-16 rounded-lg">
                Join
                <br />
                Room
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-3 mx-4 flex flex-col justify-center bg-white h-32 rounded-large shadow-lg">
          <div className="text-center text-strong-secondary text-2xl pb-2">
            Official Match
          </div>
          <div className="flex flex-row justify-center items-center">
            <button className="bg-primary text-xl text-white w-56 h-16 rounded-lg">
              Play
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => toggleModal(!isModalOpen)}
        style={{
          overlay: {
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          },
          content: {
            height: "fit-content",
            top: "50%",
            transform: "translateY(-50%)"
          }
        }}
      >
        <h1 className={"text-primary text-2xl text-center pb-4"}>
          Create Room
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Room Name
            </label>
            <input
              className="
                shadow appearance-none border rounded w-full
                py-2 px-3 text-gray-700 leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              type="text"
              placeholder="Room Name"
              value={roomName}
              onChange={updateRoomName}
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Location
            </label>
            <div className="relative">
              <select
                className="
                  block shadow appearance-none w-full
                  border border-gray-200 bg-white
                  text-gray-700 py-3 px-4 pr-8
                  rounded leading-tight
                  focus:outline-none
                  focus:border-gray-500
                "
                value={location}
                onChange={updateLocation}
                name="location"
              >
                <option value="" disabled>
                  Select
                </option>
                {renderOptions(dummyLocations)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date
            </label>
            <div className="relative">
              <input
                className="
                  shadow appearance-none border rounded w-full
                  py-2 px-3 text-gray-700 leading-tight
                  focus:outline-none
                  focus:shadow-outline
                "
                type="date"
                name="date"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Time
            </label>
            <div className="relative">
              <select
                className="
                  block shadow appearance-none w-full
                  border border-gray-200 bg-white
                  text-gray-700 py-3 px-4 pr-8
                  rounded leading-tight
                  focus:outline-none
                  focus:border-gray-500
                "
                value={time}
                onChange={updateTime}
                name="time"
              >
                {renderOptions(dummyTimes)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Duration (in hour)
            </label>
            <input
              className="
                shadow appearance-none border rounded w-full
                py-2 px-3 text-gray-700 leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              type="number"
              placeholder="Room Name"
              value={duration}
              onChange={updateDuration}
              name="duration"
            />
          </div>
          <div className="flex flex-row justify-center items-center">
            <button className="bg-primary text-xl text-white h-10 w-100 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default FindMatch;
