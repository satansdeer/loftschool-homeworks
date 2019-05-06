import React from 'react';
import styles from './ActorBox.module.css';

const ActorBox = ({ name, imageSrc }) =>
  console.log('props in ActorBox', name, imageSrc) || (
    <div className="t-person">
      <p>{name}</p>
      {imageSrc && <img src={imageSrc} />}
    </div>
  );

export default ActorBox;
