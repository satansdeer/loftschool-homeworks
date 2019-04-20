import React, { PureComponent } from 'react';
import './Show.css';

const apiData = {
  url: 'http://api.tvmaze.com/shows/',
  house: '118',
  santaBarbara: '5909',
  bigBang: '66'
};

class Show extends PureComponent {
  state = { showId: '', data: '' };

  async componentDidUpdate(prevProps) {
    const { showId } = this.props;

    if (showId !== prevProps.showId) {
      this.setState({ showId: showId, data: '' });

      const response = await fetch(`${apiData.url + apiData[showId]}`);
      const data = await response.json();

      this.setState({ showId: showId, data: data });
    }
  }

  getGenres = genres => {
    return genres.join(', ');
  };

  render() {
    const {
      showId,
      data,
      data: { name, summary, genres, image }
    } = this.state;

    function createMarkup() {
      return { __html: summary };
    }

    if (data) {
      return (
        <div className="show">
          <img className="show-image" src={image.original} alt={name} />
          <h2 className="show-label t-show-name">{name}</h2>
          <p className="show-text t-show-genre">
            <b>Жанр: </b>
            {this.getGenres(genres)}
          </p>
          <p
            className="show-text t-show-summary"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      );
    } else if (showId) {
      return (
        <p className="show-inforation t-show-info">
          Загрузка шоу с id {showId}
        </p>
      );
    } else {
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    }
  }
}

export default Show;
