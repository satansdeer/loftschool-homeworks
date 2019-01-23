import React from "react";
import propTypes from "prop-types";

const Paragraph = props => {
  const { message, className } = props;
  return (
    <p className={className}>{message}</p>
  );
};

Paragraph.defaultProps = {
  message: "Нет информации"
};

Paragraph.propTypes = {
  message: propTypes.string,
  className: propTypes.string
};

export default Paragraph;