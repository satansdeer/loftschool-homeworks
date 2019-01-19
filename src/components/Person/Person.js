import React from "react";
import propTypes from "prop-types";

const Person = props => {
  const { name, image } = props;
  return (
    <div className="t-person">
      <p>{name}</p>
      {image && <img src={image.medium} alt={name}/>}
    </div>
  );
};

Person.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.object
};

export default Person;