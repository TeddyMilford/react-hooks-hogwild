import React, { useState } from "react";
import Nav from "./Nav";
import CardDeck from "./CardDeck";

import hogs from "../porkers_data";

function App() {
  const [hogsWanted, setHogsWanted] = useState(hogs);

  function handleFilter(selected) {
    if (selected.target.value === "greased") {
      let greased = hogsWanted.filter((hog) => hog.greased !== true);
      setHogsWanted(greased);
    }
    if (selected.target.value === "ungreased") {
      let ungreased = hogsWanted.filter((hog) => hog.greased !== false);
      setHogsWanted(ungreased);
    }
    if (selected.target.value === "all") {
      setHogsWanted(hogs);
    }
  }

  function handleSort(selected) {
    if (selected.target.value === "all") {
      setHogsWanted(hogsWanted);
    }
    if (selected.target.value === "name") {
      let noMutants = [...hogsWanted];
      noMutants.sort(function (a, b) {
        let textA = a.name.toUpperCase();
        let textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      setHogsWanted(noMutants);
    }
    if (selected.target.value === "weight") {
      let noMutants = [...hogsWanted];
      noMutants.sort(function (a, b) {
        let weightA = a.weight;
        let weightB = b.weight;
        return weightA > weightB ? -1 : weightA < weightB ? 1 : 0;
      });
      setHogsWanted(noMutants);
    }
  }

  return (
    <div className="App">
      <Nav handleFilter={handleFilter} handleSort={handleSort} />
      <CardDeck hogs={hogsWanted} />
    </div>
  );
}

export default App;
