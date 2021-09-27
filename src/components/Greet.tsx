import React from "react";

/**
 * use type for applications,
 * use interface for library
 */

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      <p>
        My name is {props.name} messages {messageCount}
      </p>
      <p> is logged in {props.isLoggedIn ? "Yes" : "No"}</p>
    </div>
  );
}
