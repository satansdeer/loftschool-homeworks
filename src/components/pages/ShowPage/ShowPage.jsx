import React from 'react';
import ActorBox from '../../ActorBox';
import styles from './ShowPage.module.css';

const ShowPage = props => {
  const { title, image, description, actors } = props;
  console.log('ShowPage props', props);
  return (
    <>
      <p>test</p>
      <img />
      <p />
      {/* {actors.map((name, image) => {
        return <ActorBox name={name} imageSrc={image} />;
      })} */}
    </>
  );
};

export default ShowPage;
