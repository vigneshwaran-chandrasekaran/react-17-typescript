type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  handleOver: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <div>
      <button
        onMouseEnter={props.handleOver}
        onClick={(event) => props.handleClick(event, Math.random())}
      >
        Click here
      </button>
      <button
        onMouseEnter={props.handleOver}
        onClick={(event) => props.handleClick(event, Math.random())}
      >
        Click here
      </button>
      <button
        onMouseEnter={props.handleOver}
        onClick={(event) => props.handleClick(event, Math.random())}
      >
        Click here
      </button>
    </div>
  );
}
