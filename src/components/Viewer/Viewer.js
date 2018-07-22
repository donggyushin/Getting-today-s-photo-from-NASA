import React from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";
import { ChasingDots } from "better-react-spinkit";

const cx = classNames.bind(styles);

const Viewer = ({ url, title, mediaType, loading }) => {
  if (loading) {
    console.log("loading...");
    return (
      <div className={cx("viewer")}>
        <ChasingDots />loading
      </div>
    );
  }

  if (!url) {
    return null;
  }
  return (
    <div className={cx("viewer")}>
      {mediaType === "image" ? (
        <img
          src={url}
          onClick={() => {
            window.open(url);
          }}
          alt={title}
        />
      ) : (
        <iframe
          src={"https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"}
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          frameBorder="0"
        />
      )}
      <span>{title}</span>
    </div>
  );
};

export default Viewer;
