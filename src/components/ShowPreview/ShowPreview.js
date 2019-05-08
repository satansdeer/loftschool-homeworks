// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowPreview.module.css';

class ShowPreview extends Component {
  render() {
    const innerHTML = html => {
      return { __html: html };
    };
    const { id, name, image, summary } = this.props;
    return (
      <div className={`${styles.container} t-preview`}>
        <div>
          <Link to={`/show/${id}`} className="t-link">
            {name}
          </Link>
          {image !== null && <img src={image.medium} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={innerHTML(summary)} />
      </div>
    );
  }
}

export default ShowPreview;
