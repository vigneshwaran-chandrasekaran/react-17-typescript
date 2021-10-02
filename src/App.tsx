import React from "react";
import "./App.css";
import Private from "./auth/Private";
import Profile from "./auth/Profile";
import Counter from "./class/Counter";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import CustomButton from "./components/html/Button";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import List from "./generics/List";
import DomRef from "./ref/DomRef";
import RandomNumber from "./restriction/RandomNumber";
import LoggeddIn from "./state/LoggeddIn";
import User from "./state/User";
import Toast from "./templateLiterals/Toast";

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
      <CustomButton variant={"primary"}>Click me</CustomButton>
      <CustomButton variant={"primary"} onClick={() => console.log("clicked")}>
        Hello world me
      </CustomButton>
      <Toast position={"center"} />
      <Toast position={"left-center"} />
      <RandomNumber value={3232} isZero />
      <List
        items={["one", "two", "three", "four", "five", "six"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} />
      {/* T extends {} - will solve below List array of objects */}
      {/* <List
        items={[
          { id: 1, name: "hi" },
          { id: 2, name: "two" },
          { id: 3, name: "three" },
          { id: 4, name: "four" },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      <Private isLoggedIn={true} component={Profile} />
      <Private isLoggedIn={false} component={Profile} />
      <Counter message="Vigneshwaran" />
      <DomRef />
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
