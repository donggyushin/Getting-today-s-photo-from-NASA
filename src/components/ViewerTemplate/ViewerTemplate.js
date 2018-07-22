import React from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";
import Viewer from "../Viewer";
import SpaceNavigator from "../SpaceNavigator";

const cx = classNames.bind(styles);

const ViewerTemplate = ({
  url,
  title,
  mediaType,
  nextButton,
  prevButton,
  loading
}) => {
  return (
    <div className={cx("viewer-template")}>
      <header>Astronomy Picture of the Day</header>
      <div className={cx("viewer-wrapper")}>
        <Viewer
          url={url}
          title={title}
          mediaType={mediaType}
          loading={loading}
        />

        <div className={cx("space-navigator-wrapper")}>
          <SpaceNavigator nextButton={nextButton} prevButton={prevButton} />
        </div>
      </div>
    </div>
  );
};

export default ViewerTemplate;
