import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
      <Greet name="India" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Render this header content</Heading>
      <Oscar>
        <Heading>Render this header content</Heading>
      </Oscar>
    </div>
  );
}

export default App;
