import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const GreetingContext = createContext();

const greetings = [
  { id: "1", greet: "hello" },
  { id: "2", greet: "bonjour" },
  { id: "3", greet: "hola" },
  { id: "4", greet: "hallo" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GreetingContext.Provider value={{ greetings }}>
    <App />
  </GreetingContext.Provider>
);
