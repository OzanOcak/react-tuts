import { useInput } from "../hooks/useInput";

const ColorPicker3 = () => {
  const [textProps, resetText] = useInput("");
  const [colorProps, resetColor] = useInput("#444444");
  const submit = (e) => {
    e.preventDefault();
    alert(`${textProps.value} is ${colorProps.value} in hex`);
    resetText();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input type="text" {...textProps} placeholder="favorite color.." />
      <input type="color" {...colorProps} />
      <button type="submit" onClick={submit}>
        do it
      </button>
    </form>
  );
};
export default ColorPicker3;
