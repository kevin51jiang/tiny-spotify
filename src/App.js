import React, { Component } from 'react';
import logo from './logo.svg';
import SpotifyPlayer from './player/SpotifyPlayer';
import { SpotifyApiContext, Artist, Playlist, Track, SpotifyApiAxiosContext } from 'react-spotify-api';
import axios from "axios";


import { authEndpoint, clientId, redirectUri, scopes } from './config';
import hash from './hash';

import './App.css';
import Sidebar from './sidebar/Sidebar';


window.location.hash = "";

class App extends Component {

  constructor() {
    super();

    this.state = {
      token: null,
      playlistId: '6BM5sR956uYWlnQSnnAnlk'
    };
  }

  componentDidMount() {
    let _token = hash.access_token;
    if (_token) {
      this.setState({
        token: _token
      });
    }
  }


  render() {

    return (
      <div className="App">

        {!this.state.token && (
          <>
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
                            </a>

            <span>You may or may not regret it</span>
          </>
        )}
        {this.state.token && (
          <SpotifyApiAxiosContext.Provider value={axios}>
            <SpotifyApiContext.Provider value={this.state.token}>


              <Mainpage />

              {/* <Sidebar className="boxed" />
                <SpotifyPlayer
                className="Main-window"
                token={this.state.token}
              /> */}

            </SpotifyApiContext.Provider>
          </SpotifyApiAxiosContext.Provider>
        )}

      </div>

    )
  }
}

export default App;
