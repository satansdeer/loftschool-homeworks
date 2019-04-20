import React, { PureComponent } from 'react';
import './Show.css';

class Show extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
        showId: undefined,
        data: undefined
    };
  }

  componentDidUpdate() {
    const { showId } = this.props;
    const url = 'http://api.tvmaze.com/shows/' + this.getId(showId);

    fetch(url).then(response => {
      response.json().then(data => {
        this.setState({ showId, data });
      });
    });
  }

  getId(showId) {
    const data = { house: 118, santaBarbara: 5909, bigBang: 66 };
    return data[showId];
  }

  render() {
    const { data, showId } = this.state;

    if (!showId) {
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    }

    const {image, name, genres, summary} = data;

    return (
      <div className="show">
        <img className="show-image" src={image.medium} alt={name} />
        <h2 className="show-label t-show-name">{name}</h2>

        <p className="show-text t-show-genre">
          <b>Жанр: </b> {genres.join(', ')}
        </p>

        <p className="show-text t-show-summary" dangerouslySetInnerHTML={{ __html: summary }}></p>
      </div>
    );
  }
}

export default Show;
