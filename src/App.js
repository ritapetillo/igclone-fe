import { Route } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
