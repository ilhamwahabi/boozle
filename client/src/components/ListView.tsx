import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const ListViewItem = props => {
  const { place } = props;

  return (
    <Link to="/placedetail" state={place}>
      <div className="flex items-center mb-8 p-2 shadow-md rounded-lg bg-white">
        <div style={{ flex: 2 }}>
          <img
            src="https://images.pexels.com/photos/1383775/pexels-photo-1383775.jpeg"
            alt="Soccer Field"
          />
        </div>
        <div className="pl-8" style={{ flex: 3 }}>
          <div className="font-semibold">Lotus Futsal</div>
          <div className="font-hairline text-xs">Karet Kuningan, Setiabudi</div>
          <div className="my-1">
            <FontAwesomeIcon icon={faStar} color={"orange"} />
            <FontAwesomeIcon icon={faStar} color={"orange"} />
            <FontAwesomeIcon icon={faStar} color={"orange"} />
            <FontAwesomeIcon icon={faStar} color={"orange"} />
            <FontAwesomeIcon icon={faStarHalfAlt} color={"orange"} />
          </div>
          <div className="font-semibold text-sm text-orange-600">
            Rp. 80.000
          </div>
        </div>
      </div>
    </Link>
  );
};

const ListView = () => {
  return (
    <div className="flex-1" style={{ paddingTop: 64 }}>
      <ListViewItem />
      <ListViewItem />
    </div>
  );
};

export default ListView;
