import { Route } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/Login";

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
=======
import SocketTest from "./Pages/SocketTest";
import Feed from "./Pages/Feed/Feeds";
import Profile from "./Pages/Profile/Profile";

import SinglePost from "./Components/SinglePost/SinglePost";
import SignIn from "./Components/AuthComponents/SignIn";
import SignUp from "./Components/AuthComponents/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import Inbox from "./Pages/Inbox/Inbox";
import AddPost from "./Pages/Add_Post/AddPost";
import PrivateRoute from "./Context/PrivateRoutes";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useEffect } from "react";
import { getCurrentChat } from "./Actions/chatActions";
import { loginAction } from "./Actions/userActions";
import { AuthContext } from "./Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="/login" component={SignIn} /> */}
        <AuthContext>
          <div>
            <Navbar />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/add_post" component={AddPost} />
            <Route exact path="/inbox/:roomId" component={Inbox} />
            <Route exact path="/inbox" component={Inbox} />

            <Route exact path="/login2" component={Login} />
            <Route exact path="/" component={Feed} />
          </div>
        </AuthContext>
      </Switch>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
