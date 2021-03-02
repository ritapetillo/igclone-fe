import { Route } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/Login";
import SocketTest from "./Pages/SocketTest";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/socket" component={SocketTest} />
    </div>
  );
}

export default App;
