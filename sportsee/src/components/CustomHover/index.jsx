import PropTypes from "prop-types";
import React from "react";

export const CustomHover = ({ points }) => {
  return (
    <rect
      x={points[0].x}
      y={0}
      height="100%"
      width="100%"
      fill="rgba(0, 0, 0, 0.1)"
    />
  );
};

CustomHover.propTypes = {
  points: PropTypes.any,
};
