import React, { useState } from "react";
import "./styles.css";

const database = {
  Thailand: [
    { name: "Pattaya", rating: "4/5" },
    { name: "Pai", rating: "3.5/5" }
  ],

  India: [
    { name: "kasol", rating: "4/5" },
    { name: "Mt abu", rating: "3.5/5" }
  ],

  Paris: [
    { name: "Seine River", rating: "4/5" },
    { name: "Effiel Tower", rating: "3.5/5" }
  ]
};

export default function App() {
  var [selectbtn, setbtn] = useState("India");

  function clickHandler(item) {
    setbtn(item);
  }

  return (
    <div className="App">
      <h1>
        <span>🏖️</span>Travel
      </h1>
      <p>checkout some awesome places here!</p>
      <div>
        {Object.keys(database).map((item) => (
          <button onClick={() => clickHandler(item)}>{item}</button>
        ))}
      </div>

      <hr />

      <div>
        <ul>
          {database[selectbtn].map((show) => (
            <li key={show.name}>
              <div>{show.name}</div>
              <div style={{ fontSize: "smaller" }}>{show.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
