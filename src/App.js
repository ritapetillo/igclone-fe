import { Route } from "react-router-dom";
import "./App.scss";
import ProfilePicture from "./Components/ProfilePic";

//*Styles
import "bootstrap/dist/css/bootstrap.min.css";

//*Components
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Route path="/" component={ProfilePicture} />
    </div>
  );
}

export default App;
