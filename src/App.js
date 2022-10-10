import "./App.css";
import CheckBox from "./components/CheckBox";
import IncByReducer from "./components/IncByReducer";
import StarRating from "./components/StarRating";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <CheckBox />
      <StarRating totalStars={10} />
      <UserList />
      <IncByReducer />
    </>
  );
}

export default App;
