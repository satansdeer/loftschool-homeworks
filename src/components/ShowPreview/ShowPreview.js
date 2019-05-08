// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ShowPreview.module.css';
import { Link } from 'react-router-dom';

const ShowPreview = ({name, summary, image, id}) => (
    <div className={classnames('t-preview', 'ShowPreview', styles.container)}>
        <div>
            <Link to={`/shows/${id}`} className={'t-link'}>{name}</Link>
            {image && (<img src={image} alt={name} />)}
        </div>
        <div>
            {summary && (<p dangerouslySetInnerHTML={{__html: summary}} />)}
        </div>
    </div>
)

ShowPreview.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string,
    image: PropTypes.string,
}

export default ShowPreview;