import React from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";
import Viewer from "../Viewer";
import SpaceNavigator from "../SpaceNavigator";

const cx = classNames.bind(styles);

const ViewerTemplate = () => {
  return (
    <div className={cx("viewer-template")}>
      <header>Astronomy Picture of the Day</header>
      <div className={cx("viewer-wrapper")}>
        <Viewer />

        <div className={cx("space-navigator-wrapper")}>
          <SpaceNavigator />
        </div>
      </div>
    </div>
  );
};

export default ViewerTemplate;
