import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import PrivateRoute from "./components/routes/PrivateRoute";
import LoginRoute from "./components/routes/LoginRoute";
import Landing from "./pages/Landing";

function App() {
  const [auth, setAuth] = useState();
  const history = useHistory();
  useEffect(() => {
    setAuth(window.localStorage.getItem("spotifyAuthToken"));
  }, [window.localStorage.getItem("spotifyAuthToken")]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {auth ? (
              <li>
                <Link
                  onClick={() => {
                    window.localStorage.removeItem("spotifyAuthToken");
                    window.location.reload();
                  }}
                >
                  Sign out
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <LoginRoute auth={auth} path="/login" render={() => <Login />} />
          <PrivateRoute auth={auth} path="/" render={() => <Landing />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
