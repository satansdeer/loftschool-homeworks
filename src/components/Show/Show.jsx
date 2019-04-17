import React, { Component } from 'react';

const URL = 'http://api.tvmaze.com/shows';

const fetchMap = {
  house: '118',
  santaBarbara: '5909',
  bigBang: '66'
};

const getUrl = key => `${URL}/${fetchMap[key]}`;

export default class Show extends Component {
  static getDerivedStateFromProps(nextProps) {
    const { showId } = nextProps;

    if (showId) {
      const newState = {};
      fetch(getUrl(showId))
        .then(data => data.json())
        .then(({ name, genres, summary, image: { medium: mediumImage } }) => {
          newState['name'] = name;
          newState['genres'] = genres.toString();
          newState['text'] = summary;
          newState['image'] = mediumImage;
          return { ...newState };
        });

      console.log(newState);
    }

    return null;
  }

  state = {
    image: '',
    name: '',
    genres: '',
    text: ''
  };

  render() {
    const { image, name, genres, text } = this;

    return (
      this.props.showId && (
        <div className="show">
          <img className="show-image" src={image} />
          <h2 className="show-label t-show-name">{name}</h2>
          <p className="show-text t-show-genre">
            <b>Жанр: </b>
            {genres}
          </p>
          <p className="show-text t-show-summary">{text}</p>
        </div>
      )
    );
  }
}
