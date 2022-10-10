import { useEffect, useState } from "react";
import "./App.css";
import CheckBox from "./components/CheckBox";
import StarRating from "./components/StarRating";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then((data) => setData(data));
  });
  return (
    <>
      <CheckBox />
      <StarRating totalStars={10} />
      {data && (
        <ul>
          {" "}
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
