import React, { Fragment } from 'react';
import { getShowInfo } from '../../api';
import './Show.css';

export default class Show extends React.Component {
  state = {
    showId: '',
    data: ''
  };

  componentDidMount() {
    const { showId } = this.props;
    showId &&
      getShowInfo(showId).then(data => {
        this.setState({
          showId,
          data
        });
      });
  }

  render() {
    const { data } = this.state;
    const { image: { medium } = '', genres, summary, name } = data;
    return (
      <Fragment>
        {data ? (
          <div className="show">
            <img className="show-image" src={`${medium}`} alt={name} />
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
        ) : (
          <p className="show-inforation t-show-info">Шоу не выбрано</p>
        )}
      </Fragment>
    );
  }
}
