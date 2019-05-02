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
    if (!nextProps.showId) return null;

    const whatShow = {
      bigBang: 66,
      santaBarbara: 5909,
      house: 118
    };

    if (nextProps.showId !== prevState.showId) {
      return {
        showId: nextProps.showId,
        data: {
          showId: whatShow[nextProps.showId],
          showImageUrl: prevState.showImageUrl || '',
          showName: prevState.showName || '',
          showGenre: prevState.showGenre || [],
          showDesc: prevState.showDesc || ''
        }
      };
    }
  }

  componentDidUpdate() {
    const { showId, data } = this.state;

    if (this.currentShowId !== showId) {
      let newState;

      fetch(`http://api.tvmaze.com/shows/${data.showId}`)
        .then(data => data.json())
        .then(show => {
          newState = {
            showId: showId,
            data: {
              showId: data.showId,
              showImageUrl: show.image.medium,
              showName: show.name,
              showGenre: show.genres,
              showDesc: show.summary
            }
          };
        })
        .then(() => this.setState(newState));
    }

    this.currentShowId = showId;
  }

  render() {
    const { showId, data } = this.state;

    return showId ? this.renderShow(showId, data) : this.renderDefault();
  }

  renderShow(showId, data) {
    return (
      <div className="show">
        <img className="show-image" src={data.showImageUrl} alt={showId} />
        <h2 className="show-label t-show-name">{data.showName}</h2>
        <p className="show-text t-show-genre">
          <b>Жанр: </b>
          {data.showGenre.join(', ')}
        </p>
        <p
          className="show-text t-show-summary"
          dangerouslySetInnerHTML={{ __html: data.showDesc }}
        />
      </div>
    );
  }

  renderDefault() {
    return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
  }
}

export default Show;
