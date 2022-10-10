import "./App.css";
import CheckBox from "./components/CheckBox";
import ColorPicker from "./components/ColorPicker";
import ColorPicker2 from "./components/ColorPicker2";
import HelpDesk from "./components/HelpDesk";
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
      <HelpDesk />
      <ColorPicker />
      <ColorPicker2 />
    </>
  );
}

export default App;
