type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event", event.target.value);
  };
  return <input type="text" value={props.value} onChange={handleInputChange} />;
}
