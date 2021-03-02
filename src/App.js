import { Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import SinglePost from "./Components/SinglePost/SinglePost";
// import Spinner from "./Components/Spinner/Spinner";
import Login from "./Pages/Login";

import Feed from "./Pages/Feed";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={SinglePost} />

      <Route path="/feed" component={Feed} />
      <Route path="/" component={Navbar} />
      <Route path="/" component={SinglePost}/>
    </div>
  );
}

export default App;
