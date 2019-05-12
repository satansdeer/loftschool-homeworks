// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React, {Component} from 'react';
import styles from './ShowPreview.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class ShowPreview extends Component {
  render() {
    const { id, image, name, summary } = this.props;

    return (
      <div className={classNames('t-preview', styles.container)}>
        <div>
          <Link className="t-link" to={`/show/${id}`}>
            {name}
          </Link>
          {image && <img src={image.medium} alt={name} />}
        </div>
        {summary && <div dangerouslySetInnerHTML={{ __html: summary }} />}
      </div>
    );
  }
}

export default ShowPreview;
