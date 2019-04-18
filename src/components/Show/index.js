import React, { Component } from 'react';
import getShowInfo from '../../api';
import './Show.css';

class Show extends Component {
  state = { showId: ``, data: `` };

  async componentDidUpdate() {
    const selectedShow = this.props.showId;
    if (selectedShow !== this.state.showId) {
      const data = await getShowInfo(selectedShow);
      this.setState({
        data: data,
        showId: selectedShow
      });
    }
  }

  render() {
    const data = this.state.data;
    const showId = this.props.showId;
    if (!data && !showId)
      return <div className="t-show-info">Шоу не выбрано</div>;
    if (!data)
      return <div className="t-show-info">Загрузка шоу с id {showId}</div>;
    return (
      <section className="t-show-info">
        <img alt={data.name} src={data.image.medium} className="show-image" />
        <h2 className="t-show-name">{data.name}</h2>
        <p className="t-show-genre">
          <b>Жанр: </b>
          {data.genres.join(', ')}
        </p>
        <div
          className="t-show-summary"
          dangerouslySetInnerHTML={{ __html: data.summary }}
        />
      </section>
    );
  }
}

export default Show;
