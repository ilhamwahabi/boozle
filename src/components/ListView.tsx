import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const ListViewItem = props => {
  const { place } = props;

  return (
    <Link to="/placedetail" state={place}>
      <div className="flex mb-8 p-2 shadow-md rounded-lg">
        <img
          src="https://image.flaticon.com/icons/svg/1286/1286241.svg"
          alt="Soccer Field"
          className="w-16"
        />
        <div className="pl-8">
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
