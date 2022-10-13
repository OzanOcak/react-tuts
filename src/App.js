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
    <div
      className="flex flex-col  justify-center items-center bg-gradient-to-tr
     from-gray-500 to-gray-10  w-full relative"
    >
      <Greetings />
      {/*<UserList />*/}
      <IncByReducer />
      <HelpDesk />
      <ColorPicker />
      <ColorPicker2 />
      <ColorPicker3 />
      <IncByReducer />
      <HelpDesk />
      <ColorPicker />
      <ColorPicker2 />
      <ColorPicker3 />
      <IncByReducer />
      <HelpDesk />
      <ColorPicker />
      <ColorPicker2 />
      <ColorPicker3 />
      <IncByReducer />
      <HelpDesk />
      <ColorPicker />
      <ColorPicker2 />
      <ColorPicker3 />
      {/*<GithubProfile login="OzanOcak" />
      <GithubProfile login="npentrel" />
      <GithubProfile login="wycats" />*/}
    </div>
  );
}

export default App;
