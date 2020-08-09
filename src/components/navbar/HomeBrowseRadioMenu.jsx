import React from "react";

import SectionMenu from "./sectionMenu";

import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { FiRadio } from "react-icons/fi";
import { IoIosRadio } from "react-icons/io";
import { FaRegFolder, FaFolderOpen } from "react-icons/fa";

const HomeBrowseRadioMenu = (props) => {
  return (
    <>
      <SectionMenu
        defaultIcon={AiOutlineHome}
        selectedIcon={AiFillHome}
        to="/"
        text="Home"
      />
      <SectionMenu
        defaultIcon={FaRegFolder}
        selectedIcon={FaFolderOpen}
        to="/browse"
        text="Browse"
      />
      <SectionMenu
        defaultIcon={IoIosRadio}
        selectedIcon={FiRadio}
        to="/radio"
        text="Radio"
      />
    </>
  );
};

export default HomeBrowseRadioMenu;
