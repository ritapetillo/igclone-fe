import { Route } from "react-router-dom";
import "./App.scss";
import ProfilePicture from "./Components/ProfilePic";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Route path="/" component={ProfilePicture} />
    </div>
  );
}

export default App;
