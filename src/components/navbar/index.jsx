import React from "react";

import { Link } from "react-router-dom";
import { AiOutlineEllipsis } from "react-icons/ai";

import "./index.scss";
import NavSection from "./navSection";
import NewPlaylist from "./NewPlaylist";
import { NavLibEntry, NavPlaylistEntry } from "./NavLibEntry";

import { UserPlaylists } from "react-spotify-api";

import LoginBoundary from "../LoginBoundary";
import HomeBrowseRadioMenu from "./HomeBrowseRadioMenu";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="nav-opts">
        <AiOutlineEllipsis />
      </div>

      <HomeBrowseRadioMenu />

      <div className="section-spacer" />

      <div className="section-lib-panel spotify-scroll">
        <NavSection title="your library">
          <NavLibEntry to="/made-for-you" text="Made for You" />
          <NavLibEntry to="/recently-played" text="Recently Played" />
          <NavLibEntry to="/liked-songs" text="Liked Songs" />
          <NavLibEntry to="/albums" text="Albums" />
          <NavLibEntry to="/artists" text="Artists" />
          <NavLibEntry to="/podcasts" text="Podcasts" />
        </NavSection>

        <NavSection title="playlists">
          <LoginBoundary>
            <UserPlaylists>
              {({ data }) =>
                data ? (
                  data.items.map((playlist) => (
                    <>
                      {console.log("playlist", playlist)}
                      <NavPlaylistEntry
                        to={"/playlist/" + playlist.id}
                        text={playlist.name}
                      />
                    </>
                  ))
                ) : (
                  <>
                    {console.log("playlists", data)}
                    <span>Loading playlists...</span>
                  </>
                )
              }
            </UserPlaylists>
          </LoginBoundary>
        </NavSection>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {props.auth ? (
            <li>
              <Link
                onClick={() => {
                  window.localStorage.removeItem("spotifyAuthToken");
                  window.location.reload();
                }}
                to="/"
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
      </div>

      <NewPlaylist />
    </div>
  );
};

export default Navbar;
