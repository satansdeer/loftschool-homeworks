// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ShowPreview.module.css';
import classNames from 'classnames';

const ShowPreview = ({ id, name, summary, image }) => {
  return (
    <div className={classNames(styles.container, 't-preview')}>
      <div>
        <Link to={`/shows/${id}`} className="t-link" key={id}>
          {name}
        </Link>
        {image === null ? '' : <img src={image.medium} alt={name} />}
      </div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    </div>
  );
};

export default ShowPreview;
