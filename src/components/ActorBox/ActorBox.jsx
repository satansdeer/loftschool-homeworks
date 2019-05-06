import React from 'react';

const ActorBox = ({ name, imageSrc }) => (
  <div className="t-person">
    <p>{name}</p>
    {imageSrc && <img src={imageSrc} alt={`${name}`} />}
  </div>
);

export default ActorBox;
