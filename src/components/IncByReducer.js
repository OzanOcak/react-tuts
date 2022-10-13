import { useReducer } from "react";

const IncByReducer = () => {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  return (
    <div className="mt-20">
      <h1
        onClick={() => {
          setNumber(1);
        }}
      >
        {number}
      </h1>
    </div>
  );
};
export default IncByReducer;
