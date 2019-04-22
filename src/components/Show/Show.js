import React, { PureComponent } from 'react';
import './Show.css';
import { getShowInfo } from '../../api';

export default class Show extends PureComponent {
  state = {
    showId: '',
    data: ''
  };
  //   showId: '';
  //   data: '';

  static getDerivedStateFromProps() {
    if (props.showId !== state.showId) {
      return {
        showId: props.showId,
        data: ''
      };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    const { showId } = this.props;
    if (prevProps.showId !== showId) {
      this.setState({ showId: showId, data: null });
      getShowInfo(showId).then(data => {
        console.log(data);
        this.setState({ data: data });
      });
    }
  }

  render() {
    const { data } = this.state;
    if (!data) {
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    }
    const { image, name, genres, summary } = data;
    return (
      <div className="show">
        <img className="show-image" src={image.medium} alt={name} />
        <h2 className="show-label t-show-name">{name}</h2>
        <p className="show-text t-show-genre">
          <b>Жанр: </b>
          {genres.join(', ')}
        </p>
        <p
          className="show-text t-show-summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </div>
    );
  }
}
