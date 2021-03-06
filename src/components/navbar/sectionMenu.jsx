import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./sectionMenu.scss";

const SectionMenu = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const DefaultIcon = props.defaultIcon;
  const SelectedIcon = props.selectedIcon;
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
    <button
      className={"section-menu" + (isSelected ? " section-selected" : "")}
      onClick={() => history.push(props.to)}
    >
      <span className="section-icon">
        {isSelected ? <SelectedIcon /> : <DefaultIcon />}
      </span>
      <span className="section-text">{props.text}</span>
    </button>
  );
};

export default SectionMenu;
