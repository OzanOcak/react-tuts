import { useState } from "react";

const CheckBox = () => {
  const [checked, setChecked] = useState();
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      <p>{checked ? "is checked" : "is not checked"}</p>
    </>
  );
};
export default CheckBox;
