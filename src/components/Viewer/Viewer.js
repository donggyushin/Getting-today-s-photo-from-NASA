import React from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Viewer = () => {
  return <div className={cx("viewer")}>Viewer</div>;
};

export default Viewer;
