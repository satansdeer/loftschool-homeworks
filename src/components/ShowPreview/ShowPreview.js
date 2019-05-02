import React from 'react';
import styles from './ShowPreview.module.css';

// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
const ShowPreview = ({ id, name, image, summary }) => {
  const { container } = styles;

  const innerHTML = html => {
    return { __html: html };
  };

  return (
    <div className={`t-preview ${container}`}>
      <div>
        <a className="t-link" href={`/shows/${id}`}>
          {name}
        </a>
        {image === null ? '' : <img src={image.medium} alt={name} />}
      </div>
      <div dangerouslySetInnerHTML={innerHTML(summary)} />
    </div>
  );
};

export default ShowPreview;
