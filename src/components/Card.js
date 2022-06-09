import React, { useState } from "react";

function Card({ hog }) {
  const [show, setShow] = useState(false);
  function localHandler() {
    setShow(!show);
  }

  return (
    <div className="ui eight wide column" onClick={localHandler}>
      <img width="60%" alt="A pig" src={hog.image}></img>
      <h1>{hog.name}</h1>
      <div style={{ display: show ? "block" : "none" }}>
        <h4>specialty: {hog.specialty}</h4>
        <h4>weight: {hog.weight}</h4>
        <h4>greased: {hog.greased ? "Yes" : "No"}</h4>
        <h4>{hog["highest medal achieved"]}</h4>
      </div>
    </div>
  );
}

export default Card;
