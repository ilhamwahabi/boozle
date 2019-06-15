import React from "react";
import { Link } from "gatsby";

const BookingButton = () => {
  return (
    <button className="bg-primary px-8 py-2 text-xl text-white rounded-sm">
      <Link to="/search">Reserve Venues</Link>
    </button>
  );
};

export default BookingButton;
