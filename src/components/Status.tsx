import React from "react";

/**
 * use type for applications,
 * use interface for library
 */

type StatusProps = {
  status: "loading" | "success" | "error";
};

export default function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "success") {
    message = "success";
  } else if (props.status === "error") {
    message = "error";
  }
  console.log("Status props", props);
  return (
    <div>
      <h2>Loading...</h2>
      <h2>Data fetched successfully</h2>
      <h2>Error fetching data</h2>
      <h2>Status = {message}</h2>
    </div>
  );
}
