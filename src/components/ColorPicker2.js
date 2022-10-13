import { useState } from "react";

const ColorPicker2 = () => {
  const [color, setColor] = useState("#265525");
  const [text, setText] = useState("");
  const submit = (e) => {
    e.preventDefault();
    alert(`you favorite color  ${text} is ${color} in hex number`);
    setText("");
    setColor("#265525");
  };
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={text}
        placeholder="your color ..."
        onChange={(e) => setText(e.target.value)}
      ></input>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      ></input>
      <button className="btn" type="submit" onClick={submit}>
        Submit it
      </button>
    </form>
  );
};
export default ColorPicker2;
