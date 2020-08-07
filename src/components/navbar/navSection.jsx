import React from "react";

import styles from "./navSection.module.scss";

const NavSection = (props) => {
  return (
    <div className={styles.navSection}>
      <h3 className={styles.title}>{props.title}</h3>
      <ol className={styles.olDefault}>{props.children}</ol>
    </div>
  );
};

export default NavSection;
