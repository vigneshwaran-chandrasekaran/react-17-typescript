import React from "react";

/**
 * use type for applications,
 * use interface for library
 */

type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export default function PersonList(props: PersonListProps) {
  console.log("PersonList props", props);
  console.log("PersonList props", props.names);
  return (
    <div>
      <p>names list </p>
      {props.names.map((name, i) => (
        <p key={name.first + i}>
          My name is {name.first} {name.last}
        </p>
      ))}
    </div>
  );
}
