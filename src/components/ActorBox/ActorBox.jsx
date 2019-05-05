import React from 'react';
import styles from './ShowPage.module.css';

const ActorBox = ({ name, imageSrc }) => (
  <>
    <p>{name}</p>
    <image src={imageSrc} />
  </>
);

export default ActorBox;
