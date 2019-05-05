import React from 'react';
import ActorBox from '../../ActorBox';
import styles from './ShowPage.module.css';

export const ShowPage = ({ title, image, description, actors }) => {
  return (
    <>
      <p />
      <img />
      <p />
      {actors.map((name, image) => {
        return <ActorBox name={name} imageSrc={image} />;
      })}
    </>
  );
};
