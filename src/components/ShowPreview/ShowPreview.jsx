import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ShowPreview.module.css';
import { getUrlForShow } from '../../utils';

const ShowPreview = ({ name, image, summary, id }) => {
  return (
    <div className={`t-preview ${styles.ShowPreview_container}`}>
      <NavLink exact to={getUrlForShow(id)} className="t-link">
        {name}
      </NavLink>
      {image && <img src={image} alt={`${name}`} />}
      <p dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default ShowPreview;
