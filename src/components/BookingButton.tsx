import React from "react";
import { Link } from "gatsby";

const BookingButton = () => {
  return (
    <button className="bg-orange-400 px-8 py-4 text-xl text-white rounded">
      <Link to="/search">Book Place!</Link>
    </button>
  );
};

export default BookingButton;
