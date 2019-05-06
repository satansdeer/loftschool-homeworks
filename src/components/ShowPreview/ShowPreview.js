// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowPreview.module.css';

const ShowPreview = ({ id, name, image, summary }) => {
  const { container } = styles;

  return (
    <div className={`${container} t-preview`}>
      <div>
        <Link to={`/show/${id}`} className="t-link">
          {name}
        </Link>
        {image !== null && <img src={image.medium} alt={name} />}
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default ShowPreview;
