import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

const BottomBarItem = props => {
  const { label, icon, path, selected = false } = props;

  return (
    <Link to={path}>
      <div className="flex flex-col justify-center items-center">
        <FontAwesomeIcon
          icon={icon}
          size="lg"
          className={cx([
            "cursor-pointer",
            { "text-orange-600": selected, "text-gray-600": !selected }
          ])}
        />
        <div
          className={cx([
            "text-xs",
            { "text-orange-600": selected, "text-gray-600": !selected }
          ])}
        >
          {label}
        </div>
      </div>
    </Link>
  );
};

export default BottomBarItem;
