import { Route } from "react-router-dom";
import "./App.scss";

import Spinner from "./Components/Spinner/Spinner"

import Login from "./Pages/Login";

import Feed from "./Pages/Feed";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">

    
      <Route path="/feed" component={Feed} />

      <Route path="/" component={Spinner} />

    </div>
  );
}

export default App;
