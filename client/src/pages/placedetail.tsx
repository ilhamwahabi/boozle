import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faClock,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker
} from "@material-ui/pickers";
import DayUtils from "@date-io/dayjs";

import Layout from "../components/layout";

const PlaceDetail = () => {
  const [selectedDate, handleDateChange] = useState<any>(new Date());
  const [selectedStartTime, handleStartTimeChange] = useState<any>(new Date());
  const [selectedEndTime, handleEndTimeChange] = useState<any>(new Date());

  return (
    <Layout>
      <MuiPickersUtilsProvider utils={DayUtils}>
        <div className="flex-1 shadow-lg bg-white flex flex-col justify-between">
          <div>
            <img src="https://cataas.com/cat/says/ocean" alt="Place Detail" />
            <div className="flex p-4">
              <div className="flex-1">
                <div className="font-semibold text-lg">Lotus Futsal</div>
                <div className="font-hairline text-xs mb-2">
                  Karet Kuningan, Setiabudi
                </div>
                <div className="font-semibold text-sm text-orange-600">
                  Rp. 80.000 <span className="text-gray-500"> / jam</span>
                </div>
              </div>
              <div className="flex justify-end flex-1">
                <FontAwesomeIcon icon={faStar} color={"orange"} />
                <FontAwesomeIcon icon={faStar} color={"orange"} />
                <FontAwesomeIcon icon={faStar} color={"orange"} />
                <FontAwesomeIcon icon={faStar} color={"orange"} />
                <FontAwesomeIcon icon={faStarHalfAlt} color={"orange"} />
              </div>
            </div>
            <div className="p-4 pt-1 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur debitis fuga aliquid iure ipsum ex quae eos. Velit,
              consectetur officiis?
            </div>
          </div>
          <div>
            <div className="p-4 mb-1 flex items-end">
              <FontAwesomeIcon
                className="mb-2"
                icon={faCalendarAlt}
                size="lg"
                color="orange"
              />
              <div className="ml-4 w-full">
                <div className="text-sm font-hairline">Date</div>
                <DatePicker
                  className="w-full"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
            </div>
            <div className="p-4 mb-1 flex items-end">
              <FontAwesomeIcon
                className="mb-2"
                icon={faClock}
                size="lg"
                color="orange"
              />
              <div className="ml-4 w-full">
                <div className="text-sm font-hairline">Start Time</div>
                <TimePicker
                  className="w-full"
                  value={selectedStartTime}
                  onChange={handleStartTimeChange}
                />
              </div>
            </div>
            <div className="p-4 mb-1 flex items-end">
              <FontAwesomeIcon
                className="mb-2"
                icon={faClock}
                size="lg"
                color="orange"
              />
              <div className="ml-4 w-full">
                <div className="text-sm font-hairline">End Time</div>
                <TimePicker
                  className="w-full"
                  value={selectedEndTime}
                  onChange={handleEndTimeChange}
                />
              </div>
            </div>
            <button className="bg-orange-600 text-white text-lg font-semibold mt-2 py-4 px-2 w-full">
              Reserve Now
            </button>
          </div>
        </div>
      </MuiPickersUtilsProvider>
    </Layout>
  );
};

export default PlaceDetail;
