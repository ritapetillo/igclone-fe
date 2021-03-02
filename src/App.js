import { Route } from "react-router-dom";
import "./App.scss";
import Spinner from "./Components/Spinner/Spinner"
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Spinner} />
    </div>
  );
}

export default App;
