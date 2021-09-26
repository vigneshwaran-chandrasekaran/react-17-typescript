import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

/**
 * use type for applications,
 * use interface for library
 */

function App() {
  const personName = {
    first: "super",
    last: "start",
  };
  const nameList = [
    {
      first: "one",
      last: "two",
    },
    {
      first: "three",
      last: "four",
    },
    {
      first: "five",
      last: "six",
    },
    {
      first: "seven",
      last: "eight",
    },
  ];

  return (
    <div className="App">
      <Greet name="Vigneshwaran" messageCount={23} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
