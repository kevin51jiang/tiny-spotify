import React from "react";

import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css";

const Login = (props) => {
  return (
    <div className="login">
      <h1>Please login with Spotify to continue</h1>
      <SpotifyAuth
        redirectUri="http://localhost:3000/login"
        clientID="a58b0a0aca54463d90d760e4ed2d2e7b"
        // request all the perms
        scopes={[
          Scopes.ugcImageUpload,
          Scopes.userModifyPlaybackState,
          Scopes.userReadCurrentlyPlaying,
          Scopes.streaming,
          Scopes.appRemoteControl,
          Scopes.userReadPrivate,
          Scopes.userReadEmail,
          Scopes.playlistReadCollaborative,
          Scopes.playlistModifyPublic,
          Scopes.playlistModifyPrivate,
          Scopes.playlistReadPrivate,
          Scopes.userLibraryModify,
          Scopes.userLibraryRead,
          Scopes.userTopRead,
          Scopes.userReadPlaybackPosition,
          Scopes.userReadRecentlyPlayed,
          "user-follow-read",
          "user-follow-modify",
          "user-read-playback-state",
        ]}
        noCookie
        localStorage
      />
    </div>
  );
};

export default Login;
