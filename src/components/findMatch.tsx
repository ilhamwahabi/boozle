import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

class FindMatch extends React.Component {
  state = {
    members: {},
  }

  render(){
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="text-center">Team Name</div>
        <input className="border border-gray-400" placeholder="Your Location">
          {/* <option value="">Test</option>
          <option value="">Test</option> */}
        </input>
        <input className="border border-gray-400" placeholder="Match Time">
          {/* <option value="">Test</option>
          <option value="">Test</option> */}
        </input>
        <button className="w-40 bg-orange-600 text-white">Find Match</button>
      </div>
    );
  }
}

export default FindMatch;
