import Topbar from "./components/topbar/topbar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Settings from "./pages/settings/settings";
import Single from "./pages/single/single";
import Write from "./pages/write/write";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Singlepost from "./components/singlePost/singlepost";
import { useContext } from "react";
import { Context } from "./context/context";

function App() {

  const user = useContext(Context);


  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">

          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Singlepost />
        </Route>
      </Switch>

    </Router>



  );
}

export default App;
