type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  handleOver: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      onMouseEnter={props.handleOver}
      onClick={(event) => props.handleClick(event, Math.random())}
    >
      Click here
    </button>
  );
}
