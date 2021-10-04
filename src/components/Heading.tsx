/**
 * use type for applications,
 * use interface for library
 */

type HeadingProps = {
  children: string;
};

export default function Heading(props: HeadingProps) {
  return (
    <div
      style={{
        border: '1px solid red',
        padding: '10px',
      }}
    >
      <p>Heading Data... </p>
      <h2>{props.children}</h2>
    </div>
  );
}
