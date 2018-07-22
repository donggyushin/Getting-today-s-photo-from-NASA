import React from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ViewerTemplate = () => {
  return <div className={cx("viewer-template")}>ViewerTemplate</div>;
};

export default ViewerTemplate;
