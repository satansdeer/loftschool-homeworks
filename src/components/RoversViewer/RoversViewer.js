import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import styles from './RoversViewer.module.css';
import {
  SOL_MAX,
  SOL_MIN,
  ROVERS,
  getSol,
  getPhotos,
  changeSol,
  fetchPhotosRequest,
  getError
} from '../../modules/RoverPhotos';

// Здесь вам нужно реализовать вью

// Подключите его к редакс роутеру
// Вам потребуются селекторы для получения выбранного сола
// и списка фотографий

// Так же вы будете диспатчить экшены CHANGE_SOL и FETCH_PHOTOS_REQUEST
// Эти экшены находятся в модуле ROVER PHOTOS

class RoversViewer extends Component {
  componentDidMount() {
    this.fetchPhotos();
  }

  handleChangeSol = value => {
    const { changeSol } = this.props;
    changeSol(value);
    this.fetchPhotos();
  };

  fetchPhotos = () => {
    const { fetchPhotosRequest, sol } = this.props;

    ROVERS.forEach(name => {
      fetchPhotosRequest({
        name,
        sol
      });
    });
  };

  renderPhotos() {
    const { sol, getPhotos, getError } = this.props;

    return ROVERS.map(roverName => {
      const roverPhotos = getPhotos(roverName, sol);
      const error = getError(roverName);

      if (!roverPhotos) return null;
      
      const { photos } = roverPhotos;
      
      return (
        <RoverPhotos
          name={roverName}
          photos={photos}
          key={roverName}
          error={error}
        />
      );
    });
  }

  render() {
    const { sol } = this.props;

    return (
      <div className={styles.root}>
        <SelectSol
          selectedSol={sol}
          changeSol={this.handleChangeSol}
          max={SOL_MAX}
          min={SOL_MIN}
        />
        {this.renderPhotos()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sol: getSol(state),
  getPhotos: getPhotos(state),
  getError: getError(state),
});

const mapDispatchToProps = {
  changeSol,
  fetchPhotosRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoversViewer);
