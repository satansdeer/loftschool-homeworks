import React, { PureComponent } from 'react';

const URL = 'http://api.tvmaze.com/shows';

const fetchMap = {
  house: '118',
  santaBarbara: '5909',
  bigBang: '66'
};

const getUrl = key => `${URL}/${fetchMap[key]}`;

const parseText = array => {
  const newArray = [...array];
  const length = newArray.length;

  if(length > 1){
    for(let i = 1; i < length; i++) {
        newArray[i] = ' '+newArray[i]
    }
  }

  return newArray.toString()
}
export default class Show extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.showId !== prevState.showId) {
      return { showId: nextProps.showId, data: null };
    }
    return null;
  }

  state = {
    data: null,
    showId: ''
  };

  componentDidUpdate() {
    const { data, showId } = this.state;
    if (data == null && showId !== '') {
      fetch(getUrl(showId))
        .then(data => data.json())
        .then(data => this.setData(data))
    }
  }

  getCard = (data, showId) => {
      const { image:{medium: mediumImage}, name, genres, summary } = data;
      const stringGenres = parseText(genres)

      return (
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
  }

  setData = (data) => this.setState({...this.state, data:data})

  getText = data => data.slice(3,-4)

  render() {
    const { data, showId } = this.state;

    return data && showId ? (this.getCard(data, showId)) : (<p class="show-inforation t-show-info">Шоу не выбрано</p>)
  }
}
