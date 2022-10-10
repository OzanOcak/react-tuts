import { useReducer } from "react";

const CheckBox = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "is checked" : "is not checked"}</p>
    </>
  );
};
export default CheckBox;
