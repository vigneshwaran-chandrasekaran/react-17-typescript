import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

/**
 * Other than our given variant prop, accept default button props using & React.ComponentProps<"button">
 */

export default function CustomButton({
  variant,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
}
