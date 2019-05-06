import React from 'react';
import styles from './ShowPreview.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const renderShow = el => {
  return (
    <div key={el.id} className={classNames('t-preview', styles.container)}>
      <div>
        <Link className="t-link" to={`/show/${el.id}`}>
          {el.name}
        </Link>
        {el.image ? <img src={el.image.medium} alt={el.name} /> : null}
      </div>
      {el.summary ? (
        <div dangerouslySetInnerHTML={{ __html: el.summary }} />
      ) : null}
    </div>
  );
};

const ShowPreview = data => {
  const { id, image, name, summary } = data;
  return (
    <div className={classNames('t-preview', styles.container)}>
      <div>
        <Link className="t-link" to={`/show/${id}`}>
          {name}
        </Link>
        {image ? <img src={image.medium} alt={name} /> : null}
      </div>
      {summary ? <div dangerouslySetInnerHTML={{ __html: summary }} /> : null}
    </div>
  );
};

export default ShowPreview;

// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
