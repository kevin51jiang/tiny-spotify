import React from "react";

import SpotifyPlayer from "react-spotify-web-playback";

const Player = (props) => {
  return (
    <SpotifyPlayer
      token={props.token}
      // name="Tiny Spotify"
      // callback={props.callback}
      // play={props.isPlaying}
      // showSaveIcon={true}
      uris={props.toPlay}
    />
  );
};

Player.defaultProps = {
  callback: () => {},
  isPlaying: false,
  toPlay: "",
};

export default Player;
