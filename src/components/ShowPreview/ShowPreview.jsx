import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ShowPreview.module.css';
import { getUrlForShow } from '../../utils';

const ShowPreview = ({ title, imageSrc, description, id }) => {
  return (
    <div className={styles.showPreviewWrapper}>
      <NavLink exact to={getUrlForShow(id)} className="t-link">
        {title}
      </NavLink>
      {imageSrc && <img src={imageSrc} />}
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default ShowPreview;
