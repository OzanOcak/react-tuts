import "./App.css";
import ColorPicker from "./components/ColorPicker";
import ColorPicker2 from "./components/ColorPicker2";
import ColorPicker3 from "./components/ColorPicker3";
import Greetings from "./components/Greetings";
import HelpDesk from "./components/HelpDesk";
import IncByReducer from "./components/IncByReducer";
import GithubProfile from "./components/GithubProfile";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <UserList />
      <IncByReducer />
      <HelpDesk />
      <ColorPicker />
      <ColorPicker2 />
      <ColorPicker3 />
      <Greetings />
      <GithubProfile login="OzanOcak" />
      <GithubProfile login="npentrel" />
      <GithubProfile login="wycats" />
    </div>
  );
}

export default App;
