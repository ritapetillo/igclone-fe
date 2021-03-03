import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
// import Spinner from "./Components/Spinner/Spinner";
import Login from "./Pages/Login";
import SocketTest from "./Pages/SocketTest";
import Feed from "./Pages/Feed/Feeds";
import SinglePost from "./Components/SinglePost/SinglePost";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <div>
          <Navbar />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/socket" component={SocketTest} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
