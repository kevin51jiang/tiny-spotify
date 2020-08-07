import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

import styles from "./NewPlaylist.module.scss";

const NewPlaylist = (props) => {
  return (
    <button className={styles.newBtn}>
      <div className={styles.content}>
        <IoIosAddCircleOutline /> <span>New Playlist</span>
      </div>
    </button>
  );
};

export default NewPlaylist;
