// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React, { PureComponent } from 'react';
import cn from 'classnames';
import styles from './ShowPreview.module.css';
import { Link } from 'react-router-dom';

class ShowPreview extends PureComponent {
  render() {
    const { summary, name, id, image } = this.props;
    return (
      <div className={cn('t-preview', styles.container)}>
        <div>
          <Link className="t-link" key={id} to={`/shows/${id}`}>
            {name}
          </Link>
          {image === null ? '' : <img src={image.medium} alt={name} />}
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: summary }}> 
        </div>
      </div>
    );
  }
}

export default ShowPreview;
