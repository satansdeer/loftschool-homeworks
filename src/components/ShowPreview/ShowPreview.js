// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React from 'react';
import styles from './ShowPreview.module.css';

const ShowPreview = ({ id, name, image, summary }) => {
  const { container, link } = styles;

  return (
    <div className={`t-preview ${container}`}>
      <a className={`t-link ${link}`} href={`/shows/${id}`}>
        {name}
      </a>
      {image === null ? (
        ''
      ) : (
        <img
          className="t-preview-img"
          src={image.medium}
          alt={name}
          title={name}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default ShowPreview;
