import React, { PureComponent } from 'react';
import { getShowInfo } from './api';
import './Show.css';

class Show extends PureComponent {
  state = {
    showId: '',
    data: null
  };

  innerHtml = html => {
    return { __html: html };
  };

  static getDerivedStateFromProps = (props, state) => {
    if (props.showId !== state.showId) {
      return {
        showId: props.showId,
        data: null
      };
    }

    return null;
  };

  componentDidUpdate = async () => {
    const { showId, data } = this.state;

    if (showId && !data) {
      let data = await getShowInfo(showId);
      this.setState({ data: data });
    }
  };

  render() {
    const { showId, data } = this.state;
    let html;

    if (showId && data) {
      const { name, image, genres, summary } = data;
      html = (
        <>
          <img className="show-image" src={image.medium} alt={name} />
          <h2 className="show-label t-show-name">{name}</h2>
          <p className="show-text t-show-genre">
            <b>Жанр: </b>
            {genres.join(', ')}
          </p>
          <p
            className="show-text t-show-summary"
            dangerouslySetInnerHTML={this.innerHtml(summary)}
          />
        </>
      );
    } else {
      html = <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    }

    return <div className="show">{html}</div>;
  }
}

export default Show;
