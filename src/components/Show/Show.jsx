import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getShowInfo } from '../../api';

export default class Show extends PureComponent {
  static propTypes = {
    showId: PropTypes.string
  };

  state = {
    showId: null,
    data: null,
  };

  fetchShow = () => {
    const {showId} = this.props;

    if(!showId) return;

    getShowInfo(showId).then((data) => {
        this.setState({
            data: data
        });
    });    
  }

  componentDidMount() {
      this.fetchShow();
  }

  renderStub = () => {
    return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
  };

  renderShowCard = () => {
    const {data} = this.state;

    const {
        image, 
        name,
        genres,
        summary
    } = data;

    return (
      <div className="show">
        <img
          className="show-image"
          src={image.medium}
          alt={name}
        />

        <h2 className="show-label t-show-name">{name}</h2>

        <p className="show-text t-show-genre">
          <b>Жанр: </b>{genres.join(', ')}
        </p>

        <p className="show-text t-show-summary" dangerouslySetInnerHTML={{__html: summary}} />
      </div>
    );
  };

  render() {
    const { data } = this.state;

    return (<div>
        {!data && this.renderStub()}
        {data && this.renderShowCard()}
    </div>);
  }
}
