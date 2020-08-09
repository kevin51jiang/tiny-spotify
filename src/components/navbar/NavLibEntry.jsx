import React, { useState, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import "./NavLibEntry.scss";

const NavEntry = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const history = useHistory();
  const loc = useLocation();

  useEffect(() => {
    if (loc.pathname === props.to) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
    // eslint-disable-next-line
  }, [loc]);

  return (
    <div className="nav-entry">
      <button
        className={props.className + (isSelected ? " section-selected" : "")}
        onClick={() => history.push(props.to)}
      >
        {props.children}
      </button>
    </div>
  );
};

const NavLibEntry = ({ text, to }) => {
  return (
    <NavEntry className="nav-lib-entry" to={to}>
      <span className="nav-lib-text">{text}</span>
    </NavEntry>
  );
};

const NavPlaylistEntry = ({ text, to }) => {
  return (
    <NavEntry className="nav-playlist-entry" to={to}>
      <span className="nav-playlist-text">{text}</span>
    </NavEntry>
  );
};

export { NavLibEntry, NavPlaylistEntry };
