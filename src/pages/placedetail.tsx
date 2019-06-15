import React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const PlaceDetail = ({ location }) => {
  console.log(location);
  return (
    <Layout>
      <div className="flex-1 shadow-lg flex flex-col justify-between">
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
          <div className="p-4 pt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            debitis fuga aliquid iure ipsum ex quae eos. Velit, consectetur
            officiis?
          </div>
        </div>
        <button className="bg-orange-600 text-white text-lg font-semibold py-4 px-2 w-full">
          Reserve Now
        </button>
      </div>
    </Layout>
  );
};

export default PlaceDetail;
