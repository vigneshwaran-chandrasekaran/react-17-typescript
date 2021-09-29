import React from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import LoggeddIn from "./state/LoggeddIn";
import User from "./state/User";

/**
 * use type for applications,
 * use interface for library
 */

/**
 * If you write object-oriented code — use interfaces, if you write functional code — use type aliases.
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
      <LoggeddIn />
      <User />
      <Input
        value="vigneshwaran"
        handleChange={(event) => {
          console.log("InputInput change", event.target.value);
        }}
      />
      <Container
        styles={{
          color: "green",
          backgroundColor: "red",
          padding: "1rem",
        }}
      />
      <Greet name="Vigneshwaran" messageCount={23} isLoggedIn={true} />
      <Greet name="India" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Render this header content</Heading>
      <Oscar>
        <Heading>Render this header content</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("button clicked", id, event);
        }}
        handleOver={() => {
          console.log("button hover");
        }}
      />
    </div>
  );
}

export default App;
