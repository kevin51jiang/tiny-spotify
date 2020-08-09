import React from "react";

import SpotifyPlayer from "react-spotify-web-playback";

const Player = (props) => {
  return (
    <SpotifyPlayer
      token={props.token}
      name="Tiny Spotify"
      callback={props.callback}
      play={props.isPlaying}
      showSaveIcon={true}
      uris={props.toPlay}
      styles={{
        bgColor: "#333",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        savedColor: "#fff",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
      }}
    />
  );
};

Player.defaultProps = {
  callback: () => {},
  isPlaying: false,
  toPlay: "",
};

export default Player;
