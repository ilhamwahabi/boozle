import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { observer } from "mobx-react-lite";

import state from "../state";

const ListViewItem = props => {
  const { place } = props;
  const { name, img, location, rating, price } = place;

  return (
    <Link to="/place/detail">
      <div className="flex items-center mb-8 p-2 shadow-md rounded-lg bg-white">
        <div style={{ flex: 2 }}>
          <img src={img} alt="Soccer Field" />
        </div>
        <div className="pl-8" style={{ flex: 3 }}>
          <div className="font-semibold">{name}</div>
          <div className="font-hairline text-xs">{location}</div>
          <div className="my-1">
            {Array.from({ length: rating }).map((star, index) => (
              <FontAwesomeIcon icon={faStar} color={"orange"} key={index} />
            ))}
          </div>
          <div className="font-semibold text-sm text-orange-600">
            Rp. {price}
          </div>
        </div>
      </div>
    </Link>
  );
};

const ListView = () => {
  return (
    <div className="flex-1" style={{ paddingTop: 64 }}>
      {state.places.map((place, index) => (
        <ListViewItem place={place} key={index} />
      ))}
    </div>
  );
};

export default observer(ListView);
