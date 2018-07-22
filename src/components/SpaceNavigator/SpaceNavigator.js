import React from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";
import * as FontAwesome from "react-icons/lib/fa";

const cx = classNames.bind(styles);

const SpaceNavigator = ({ prevButton, nextButton }) => {
  return (
    <div className={cx("space-navigator")}>
      <div className={cx("left", "end")} onClick={() => prevButton()}>
        <FontAwesome.FaChevronLeft />
      </div>
      <div className={cx("right", "end")} onClick={() => nextButton()}>
        <FontAwesome.FaChevronRight />
      </div>
    </div>
  );
};

export default SpaceNavigator;
