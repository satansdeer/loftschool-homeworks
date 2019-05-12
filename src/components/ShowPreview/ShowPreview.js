// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowPreview.module.css';
import cx from 'classnames';

class ShowPreview extends Component {
  render() {
    const { image, name, id, summary } = this.props;
    return (
      <div className="container t-preview">
        <div className={styles.containerTop}>
          <Link className="t-link" to={`/shows/${id}`}>
            {name}
          </Link>
          {image != null && <img src={image.medium} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
