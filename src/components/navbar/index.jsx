import React from "react";

import { Link } from "react-router-dom";
import SectionMenu from "./sectionMenu";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FiHome, FiRadio } from "react-icons/fi";
import { BsFolder } from "react-icons/bs";

import "./index.scss";
import NavSection from "./navSection";
import NewPlaylist from "./NewPlaylist";
const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="nav-opts">
        <AiOutlineEllipsis />
      </div>

      <SectionMenu icon={FiHome} to="/home" text="Home" />
      <SectionMenu icon={BsFolder} to="/browse" text="Browse" />
      <SectionMenu icon={FiRadio} to="/radio" text="Radio" />

      <div className="section-lib-panel">
        <NavSection title="your library">
          <li>uwu</li>
          <li>uwu</li>
          <li>uwu</li>
        </NavSection>

        <NavSection title="playlists">
          {Array(100)
            .fill()
            .map((_, num) => {
              return <li>{num}</li>;
            })}
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
