import { Route } from "react-router-dom";
import "./App.scss";
import SinglePost from "./Components/SinglePost/SinglePost";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Route path="/" component={SinglePost} />
    </div>
  );
}

export default App;
