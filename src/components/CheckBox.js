import { useReducer } from "react";

const CheckBox = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <div className="flex space-x-2 m-2 p-1 border rounded-[.8rem] w-[9rem] hover:bg-[lightgray]">
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "is checked" : "is not checked"}</p>
    </div>
  );
};
export default CheckBox;
