import React from "react";
import { MdAddCircleOutline } from "react-icons/md";

import styles from "./NewPlaylist.module.scss";

const NewPlaylist = (props) => {
  return (
    <div
      className={styles.newBtn}
      onClick={() => console.log("click on new playlist")}
    >
      <div className={styles.content}>
        <div className={styles.sectionText}>
          <MdAddCircleOutline />
          New Playlist
        </div>
      </div>
    </div>
  );
};

export default NewPlaylist;
