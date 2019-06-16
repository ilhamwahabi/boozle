import React from "react";

import Boozle from "../images/Boozle.png";

const Banner = () => {
  return (
    <div className="mb-4">
      <section className="flex overflow-x-auto">
        <div className="min-w-3/4 mr-4">
          <img src={Boozle} className="rounded-lg" alt="banner1" />
        </div>
        <div className="min-w-3/4">
          <img src={Boozle} className="rounded-lg" alt="banner1" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
