import React from "react";

const UpcomingMatch = () => {
  return (
    <div className="mb-4 p-2 bg-red-500 text-white">
      <p className="mb-4 text-center text-2xl font-semibold">Upcoming Match:</p>
      <div className="flex justify-center items-center">
        <div className="mr-4">
          <p>Time</p>
          <p>Date</p>
          <p>Place</p>
        </div>
        <div className="">
          <p>: 09.00 AM</p>
          <p>: May 26 2019</p>
          <p>: Anatolia Stadium</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMatch;
