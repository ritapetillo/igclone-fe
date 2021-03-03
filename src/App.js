import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import SinglePost from "./Components/SinglePost/SinglePost";
// import Spinner from "./Components/Spinner/Spinner";
import Login from "./Pages/Login";
import SocketTest from "./Pages/SocketTest";

import Feed from "./Pages/Feed";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Route path="/" component={SinglePost} />

      <Route path="/feed" component={Feed} />
      <Route path="/" component={Navbar} />
      <Route path="/" component={SinglePost}/>
      <Route path="/login" component={Login} />
      <Route path="/socket" component={SocketTest} />
    </div>
  );
}

export default App;
