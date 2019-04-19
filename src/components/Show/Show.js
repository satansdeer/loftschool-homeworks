import React, { Component, Fragment } from 'react';
import { getShowInfo } from '../../api';
import './Show.css';

export default class Show extends Component {
  state = {
    showId: '',
    data: ''
  };

  componentDidMount(prevProps) {
    const { showId } = this.props;
    if (!showId) {
      return;
    }
    getShowInfo(showId).then(show => {
      this.setState({
        showId,
        data: show
      });
    });
  }

  render() {
    const { data } = this.state;
    const { image: { medium } = {}, name, genres, summary } = data;

    return (
      <Fragment>
        {data ? (
          <div className="show">
            <img className="show-image" src={medium} alt={name} />
            <h2 className="show-label t-show-name">{name}</h2>
            <p className="show-text t-show-genre">
              <b>Жанр: </b>
              {genres.join(', ')}
            </p>
            <p
              className="show-text t-show-summary"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          </div>
        ) : (
          <p className="show-inforation t-show-info">Шоу не выбрано</p>
        )}
      </Fragment>
    );
  }
}
