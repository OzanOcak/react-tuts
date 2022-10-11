import { useRef } from "react";

//function submit() {}

const ColorPicker = () => {
  const text = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const textValue = text.current.value;
    const colorValue = color.current.value;
    alert(`your ${textValue} is ${colorValue} in hex `);
    text.current.value = "";
    color.current.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input type="text" ref={text} placeholder="enter your color" />
      <input type="color" ref={color} />
      <button type="submit" onClick={submit}>
        submit
      </button>
    </form>
  );
};
export default ColorPicker;
