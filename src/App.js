import "./App.css";
import CheckBox from "./components/CheckBox";
import ColorPicker from "./components/ColorPicker";
import ColorPicker2 from "./components/ColorPicker2";
import ColorPicker3 from "./components/ColorPicker3";
import Greetings from "./components/Greetings";
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
      <ColorPicker3 />
      <Greetings />
    </>
  );
}

export default App;
