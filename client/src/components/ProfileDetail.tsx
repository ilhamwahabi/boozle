import React from "react";

import profilePicture from "../images/dp1.jpg";
import rating from "../images/Grandmaster.png";

const ProfileDetail = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/3 self-center">
        <img src={profilePicture} className="w-auto rounded-full" />
      </div>
      <div className="w-2/3 pl-4 flex flex-col justify-end pb-2">
        <div className="flex flex-row">
          <img src={rating} className="w-1/4 h-full" />
          <div className="flex flex-col">
            <p className="self-center text-lg">Grandmaster</p>
            <p className="text-sm">5234</p>
          </div>
        </div>
        <span className="text-primary text-2xl">Grace Magbanua</span>
        <span>Team Magbanua</span>
      </div>
    </div>
  );
};

export default ProfileDetail;
