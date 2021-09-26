import React from "react";

/**
 * use type for applications,
 * use interface for library
 */

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export default function Person(props: PersonProps) {
  return (
    <div>
      <p>
        My name is ---s {props.name.first} {props.name.last}
      </p>
    </div>
  );
}
