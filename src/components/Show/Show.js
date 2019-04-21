import React from 'react';
import './Show.css';
import { getShowInfo } from '../../api';

export default class Show extends React.Component {
  state = {
    showId: undefined,
    data: undefined
  };
  componentDidUpdate(prevProps) {
    if (prevProps.showId === showId) {
      return;
    }
    this.setState({ showId, data: null });

    getShowInfo(showId).then(data => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    if (!data) {
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    }
  }
}
