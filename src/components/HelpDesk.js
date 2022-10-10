import { useReducer } from "react";

const initialState = {
  message: "Help Desk !!",
};

function reducer(state, action) {
  switch (action.type) {
    case "french":
      return { message: "bonjour, comment je peux t'aider ?" };
    case "english":
      return { message: "hello, How can I help you ?" };
  }
}

const HelpDesk = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>{state.message}</div>
      <button onClick={() => dispatch({ type: "english" })}>english</button>
      <button onClick={() => dispatch({ type: "french" })}>french</button>
    </>
  );
};
export default HelpDesk;
