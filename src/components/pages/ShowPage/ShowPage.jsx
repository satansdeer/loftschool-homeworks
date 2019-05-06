import React from 'react';
import ActorBox from '../../ActorBox';
import styles from './ShowPage.module.css';

const ShowPage = props => {
  const {
    showData: { name, summary, cast }
  } = props;
  console.log('ShowPage props', props);
  return (
    <>
      <p>{name}</p>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <div className={styles.cast}>
        {cast &&
          cast.map(({ name, image }, index) => {
            return <ActorBox name={name} imageSrc={image} key={index} />;
          })}
      </div>
    </>
  );
};

export default ShowPage;
