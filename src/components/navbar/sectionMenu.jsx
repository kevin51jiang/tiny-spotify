import React from "react";



const SectionMenu = (props) => {
  const Icon = props.icon;

  return (
    <div className="section-menu">
      <Icon />
      {props.text}
    </div>
  );
};

export default SectionMenu;
