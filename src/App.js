import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/Login";
import SocketTest from "./Pages/SocketTest";

<<<<<<< Updated upstream
=======
import Feed from "./Pages/feed";

import "bootstrap/dist/css/bootstrap.min.css";

>>>>>>> Stashed changes
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
<<<<<<< Updated upstream
      <Route path="/login" component={Login} />
      <Route path="/socket" component={SocketTest} />
=======
      <Route exact path="/feed" component={Feed} />
      <Route path="/" component={Navbar} />
      <Route path="/" component={SinglePost} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/socket" component={SocketTest} />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
