import { PersonProps } from "./Person.types";

/**
 * use type for applications,
 * use interface for library
 */

export default function Person(props: PersonProps) {
  return (
    <div>
      <p>
        My name is ---s {props.name.first} {props.name.last}
      </p>
    </div>
  );
}
