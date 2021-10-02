import React from "react";

type InputProps = React.ComponentProps<"input">;

/**
 * Other than our given variant prop, accept default input props using & React.ComponentProps<"input">
 */

export default function CustomInput(props: InputProps) {
  return <input {...props} />;
}
