import React, { PureComponent } from 'react';
import './Show.css';
import { getShowInfo } from '../../api';

class Show extends PureComponent {
  state = { showId: '', data: '' };

  static getDerivedStateFromProps(props, state) {
    if (props.showId !== state.showId) {
      return {
        showId: props.showId,
        data: ''
      };
    }
    return null;
  }

  async componentDidUpdate(prevState) {
    const { showId } = this.state;
    if (showId !== prevState.showId) {
      const data = await getShowInfo(showId);
      this.setState({ data: data });
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
