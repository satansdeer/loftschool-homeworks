import React, { Component } from 'react';
import './Show.css';
import { getShowInfo } from '../../api.js';

export default class extends Component {
    state = {
        showId: null,
        data: null
    }

    /**
     * После обновления компонента проверяем айдишник из пропса. Если он отличается от предыдущего, то грузим данные
     */
    componentDidUpdate = (prevProps) => {
        let { showId } = this.props;

        if (showId !== prevProps.showId) {
            getShowInfo(showId).then(response => {
                this.setState({ data: response })
            })
        }
    }

    render() {
        let { data } = this.state;

        return data ? (
            <div className="show">
                <img className="show-image"
                    src={data.image.medium}
                    alt={data.name} />
                <div>
                    <h2 className="show-label t-show-name">{data.name}</h2>
                    <p className="show-text t-show-genre"><b>Жанр: </b>{data.genres.join(', ')}</p>
                    <p className="show-text t-show-summary" dangerouslySetInnerHTML={{ __html: data.summary }}></p>
                </div>
            </div>
        )
            :
            <p className='show-inforation t-show-info'>Шоу не выбрано</p>
    }
}