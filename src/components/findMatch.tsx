import React from "react";
// import PropTypes from "prop-types";
// import Helmet from "react-helmet";
// import { StaticQuery, graphql } from "gatsby";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch
// } from "@fortawesome/free-solid-svg-icons";

function FindMatch() {
  return (
    <div className="flex flex-col items-center bg-main min-h-screen">
      <div className="text-center ml-4 text-4xl text-primary font-medium self-start">Find Match</div>
      <div className="text-center ml-4 text-lg mb-4 font-medium self-start">Choose your types</div>
      <div className="flex flex-col w-full">
        <div className="mb-3 mx-4 flex flex-col justify-center bg-white h-32 rounded-large shadow-lg">
          <div className="text-center text-2xl">Friendly Match</div>
          <div className="flex flex-row justify-center items-center">
            <button className="mr-2 bg-primary text-lg text-white w-24 h-16 rounded-lg">Create<br/>Room</button>
            <div className="mx-1 text-2xl">Or</div>
            <button className="ml-2 bg-primary text-lg text-white w-24 h-16 rounded-lg">Join<br/>Room</button>
          </div>
        </div>
        <div className="mt-3 mx-4 flex flex-col justify-center bg-white h-32 rounded-large shadow-lg">
          <div className="text-center text-2xl">Official Match</div>
          <div className="flex flex-row justify-center items-center">
            <button className="bg-primary text-xl text-white w-56 h-16 rounded-lg">Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindMatch;
