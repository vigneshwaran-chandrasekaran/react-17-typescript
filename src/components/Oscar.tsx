/**
 * use type for applications,
 * use interface for library
 */

type OscarProps = {
  children: React.ReactNode;
  /**
   * if we pass another react element set that as  React.ReactNode;
   */
};

export default function Oscar(props: OscarProps) {
  return (
    <div
      style={{
        border: "1px solid yellow",
        padding: "20px",
        backgroundColor: "pink",
      }}
    >
      <p>Oscar Data... </p>
      <h2>{props.children}</h2>
    </div>
  );
}
