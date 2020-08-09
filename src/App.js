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

import axios from "axios";

import { SpotifyApiAxiosContext, SpotifyApiContext } from "react-spotify-api";

function App() {
  const [auth, setAuth] = useState();
  const [isFriendOpen, setIsFriendOpen] = useState(false);

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
    <SpotifyApiAxiosContext.Provider value={axios}>
      <SpotifyApiContext.Provider value={auth}>
        <Router>
          <div className="wrapper">
            <SplitPane split="vertical">
              <Pane initialSize="200px" minSize="150px" maxSize="30%">
                <Navbar auth={auth} />
              </Pane>
              <Pane>
                <main>
                  <span>Main content here</span>
                  <button onClick={() => setIsFriendOpen(() => !isFriendOpen)}>
                    toggle
                  </button>
                  <Switch>
                    {/* Main app stuff */}
                    <LoginRoute
                      auth={auth}
                      path="/login"
                      render={() => <Login />}
                    />
                    <PrivateRoute
                      auth={auth}
                      path="/"
                      render={(props) => <Home auth={auth} />}
                    />
                  </Switch>
                </main>
              </Pane>
              {isFriendOpen && (
                <Pane initialSize="200px" minSize="150px" maxSize="30%">
                  <div className="right-bar">Right sidebar</div>
                </Pane>
              )}
            </SplitPane>
            <div className="footer">
              {auth ? (
                <Player
                  token={auth}
                  // callback={(e) => console.log("player", e)}
                  play={false}
                  toPlay={["spotify:playlist:3O2s7Gp4kb6onJcObBD3QN"]}
                />
              ) : (
                <div className="playbar-replacement">
                  Please sign in with Spotify
                </div>
              )}
            </div>
          </div>
        </Router>
      </SpotifyApiContext.Provider>
    </SpotifyApiAxiosContext.Provider>
  );
}

export default App;
