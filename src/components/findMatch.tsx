import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import dp1 from "../images/dp1.jpg";

class FindMatch extends React.Component {
  state = {
    members: [
      {
        img: "123",
      },
      {
        img: "321",
      }
    ],
  };

  renderUser = (member) => {
    return(
      <div id={member.img} className="mr-3 bg-orange-600">
        <img src={dp1} className="w-10 rounded-full "/>
      </div>
    );
  };

  renderTeam = () => {
    const rows = []
    const { members } = this.state;
    for (let i = 0; i < members.length; i++) {
      rows.push(this.renderUser(members[i]));
    };
    if (members.length < 5) {
      rows.push(
        <div className="border rounded-full">+</div>
      )
    }
    return rows;
  };

  render(){
    return (
      <div className="flex flex-col justify-center items-center bg-main">
        <div className="text-center text-4xl">Cebongz</div>
        <div className="w-56 flex">
          {this.renderTeam()}
        </div>
        <input className="my-1 w-56 h-8 border border-gray-400 rounded">
          {/* <option value="">Test</option>
          <option value="">Test</option> */}
        </input>
        <input className="my-1 w-56 h-8 border border-gray-400 rounded" type="datetime-local">
          {/* <option value="">Test</option>
          <option value="">Test</option> */}
        </input>
        <button className="my-3 w-64 h-10 bg-primary text-white text-xl rounded">Find Match</button>
      </div>
    );
  }
}

export default FindMatch;
