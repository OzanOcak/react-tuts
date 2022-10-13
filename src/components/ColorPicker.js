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
    <form
      className="my-6 p-2 border-2  border-solid justify-content items-baseline space-x-2"
      onSubmit={submit}
    >
      <input
        className="palceholder-gray-500 border rounded-md p-2 my-1"
        type="text"
        ref={text}
        placeholder="enter your color"
      />
      <input
        className="border-blue-500 border-2 h-10 rounded-md  border-solid "
        type="color"
        ref={color}
      />
      <button
        className="border-blue-500 border-2 h-10 rounded-md p-1 border-solid hover:text-white
         hover:bg-blue-500"
        type="submit"
        onClick={submit}
      >
        submit
      </button>
    </form>
  );
};
export default ColorPicker;
