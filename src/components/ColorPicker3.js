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
    <div className="border-solid border-gray-200 border-2 p-3">
      <form onSubmit={submit}>
        <input
          className="h-[1.6rem] border-2 border-solid rounded border-gray-500 px-1"
          type="text"
          {...textProps}
          placeholder="favorite color.."
        />
        <input
          className="h-[1.6rem] border-2 border-solid rounded border-gray-500 "
          type="color"
          {...colorProps}
        />
        <button className="btn" type="submit" onClick={submit}>
          do it
        </button>
      </form>
    </div>
  );
};
export default ColorPicker3;
