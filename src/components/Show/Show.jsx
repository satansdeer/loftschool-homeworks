import React, { Component } from 'react';

const URL = 'http://api.tvmaze.com/shows';

const fetchMap = {
  house: '118',
  santaBarbara: '5909',
  bigBang: '66'
};

const getUrl = key => `${URL}/${fetchMap[key]}`;

export default class Show extends Component {
  state = {
    data: null,
    showId: ''
  };

  componentDidUpdate(prevProps, prevState) {
    const {showId: showIdPrev} = prevProps
    const {showId: showIdNext} = this.props;

    if(showIdNext !== showIdPrev && showIdNext) {
      console.log('check')
      fetch(getUrl(showIdNext))
        .then(data => data.json())
        .then(data => this.setData(data))
    }
  }

  setData = (data) => this.setState({...this.state, data:data})

  getText = data => data.split('"').join('')

  render() {
    const { data } = this.state;
    if(data) {
      const { image:{medium: mediumImage}, name, genres, summary } = data;
      const stringGenres = genres.toString();

      return (
        this.props.showId && (
          <div className="show">
            <img className="show-image" src={mediumImage} />
            <h2 className="show-label t-show-name">{name}</h2>
            <p className="show-text t-show-genre">
              <b>Жанр: </b>
              {stringGenres}
            </p>
            <p className="show-text t-show-summary" dangerouslySetInnerHTML={{ __html: this.getText(summary) }}></p>
          </div>
        )
      )
    }

    return null
  }
}
