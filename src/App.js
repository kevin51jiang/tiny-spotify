import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./pages/Login";
import "./App.scss";
import PrivateRoute from "./components/routes/PrivateRoute";
import LoginRoute from "./components/routes/LoginRoute";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Player from "./components/player";
import SplitPane from "react-split-pane";
import Pane from "react-split-pane/lib/Pane";

function App() {
  const [auth, setAuth] = useState();

  useEffect(() => {
    setAuth(window.localStorage.getItem("spotifyAuthToken"));
    function checkUserAuth() {
      const item = localStorage.getItem("spotifyAuthToken");

      if (item) {
        setAuth(item);
      }
    }

    window.addEventListener("spotifyAuthToken", checkUserAuth);

    return () => {
      window.removeEventListener("spotifyAuthToken", checkUserAuth);
    };
  }, []);

  return (
    <Router>
      <div className="wrapper">
        <SplitPane split="vertical">
          <Pane initialSize="200px" minSize="150px" maxSize="20%">
            <Navbar auth={auth} />
          </Pane>
          <Pane>
            <span>Main content here</span>
            <Switch>
              {/* Main app stuff */}
              <LoginRoute auth={auth} path="/login" render={() => <Login />} />
              <PrivateRoute
                auth={auth}
                path="/"
                render={(props) => <Home auth={auth} />}
              />
            </Switch>
          </Pane>
          <Pane initialSize="200px" minSize="150px" maxSize="21%">
            Right sidebar
          </Pane>
        </SplitPane>
        <div className="footer">
          <Player
            token={auth}
            callback={(e) => console.log("player", e)}
            play={false}
            toPlay={["spotify:playlist:3O2s7Gp4kb6onJcObBD3QN"]}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
