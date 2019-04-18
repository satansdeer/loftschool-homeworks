import React, { PureComponent } from 'react';
import './Show.css';
import { getShowInfo } from '../../api';

class Show extends PureComponent {
  state = {
    showId: '',
    data: ''
  };

  componentDidUpdate(prevProps) {
    const { showId } = this.state;
    if (showId !== '') {
      getShowInfo(showId).then(obj => this.setState({ data: obj }));
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { showId } = nextProps;
    if (showId === prevState.showId) {
      return null;
    } else {
      return { showId: showId, data: null };
    }
  }

  render() {
    const { showId, data } = this.state;
    if (showId === '' || data === null) {
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    } else if (showId !== '' && data !== null) {
      const { genres, image, name, summary } = data;
      const genresString = genres.join(', ');
      const { original } = image;
      return (
        <div className="Show">
          <img className="show-image" src={original} alt={name} />
          <h2 className="show-label t-show-name">{name}</h2>
          <p className="show-text t-show-genre">
            <b>Жанр: </b>
            {genresString}
          </p>
          <p
            className="show-text t-show-summary"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
      );
    }
  }
}

export default Show;
