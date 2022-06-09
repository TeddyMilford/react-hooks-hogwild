import React from "react";
import piggy from "../assets/porco.png";

function Nav({ handleFilter, handleSort }) {
  return (
    <div className="navWrapper">
      <span className="headerText">HogWild</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <select onChange={handleFilter}>
        <option value="all">All</option>
        <option value="greased">Greased</option>
        <option value="ungreased">Ungreased</option>
      </select>
      <select onChange={handleSort}>
        <option value="all">All</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default Nav;
