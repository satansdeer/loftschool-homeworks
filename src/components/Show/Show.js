import React, { PureComponent } from 'react';
import './Show.css';

class Show extends PureComponent {
  state = {
    showId: '',
    data: {
      showId: 0,
      showImageUrl: '',
      showName: '',
      showGenre: [],
      showDesc: ''
    }
  };
  currentShowId = '';

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.showId !== prevState.showId) {
      return { showId: nextProps.showId, data: null };
    }
    return null;
  }

  componentDidUpdate() {
    const { data, showId } = this.state;

    if (data == null && showId !== '') {
      this.getShowData(showId).then(data => {
        this.setState({ data });
      });
    }
  }

  getShowData(showId) {
    const whatShow = {
      bigBang: 66,
      santaBarbara: 5909,
      house: 118
    };

    return fetch(`http://api.tvmaze.com/shows/${whatShow[showId]}`).then(data =>
      data.json()
    );
  }

  render() {
    const { showId, data } = this.state;

    return showId ? this.renderShow(showId, data) : this.renderDefault();
  }

  renderShow(showId, data) {
    return data ? (
      <div className="show">
        <img className="show-image" src={data.image.medium} alt={showId} />
        <h2 className="show-label t-show-name">{data.name}</h2>
        <p className="show-text t-show-genre">
          <b>Жанр: </b>
          {data.genres.join(', ')}
        </p>
        <p
          className="show-text t-show-summary"
          dangerouslySetInnerHTML={{ __html: data.summary }}
        />
      </div>
    ) : null;
  }

  renderDefault() {
    return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
  }
}

export default Show;
