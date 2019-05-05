import React from 'react';
import styles from './ActorBox.module.css';

const ActorBox = ({ name, imageSrc }) =>
  console.log('props in ActorBox', name, imageSrc) || (
    <>
      <p>{name}</p>
      <image src={imageSrc} />
    </>
  );

export default ActorBox;
