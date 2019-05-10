// Здесь вам нужно реализовать вью

// Подключите его к редакс роутеру
// Вам потребуются селекторы для получения выбранного сола
// и списка фотографий

// Так же вы будете диспатчить экшены CHANGE_SOL и FETCH_PHOTOS_REQUEST
// Эти экшены находятся в модуле ROVER PHOTOS

import React, { PureComponent } from 'react';
import styles from './RoversViewer.module.css';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import { connect } from 'react-redux';
import { fetchPhotosRequest, changeSol } from '../../modules/RoverPhotos';
import { getApiKey } from '../../modules/Auth';

class RoverViewer extends PureComponent {
  state = {
    selectedSol: 1
  };

  changeSol = value => {
    const { changeSol, fetchPhotosRequest, apiKey, photos } = this.props;
    this.setState({ selectedSol: value });
    changeSol(value);
    if (!photos['curiosity'][value]) fetchPhotosRequest({ name: 'curiosity', sol: value, key: apiKey });
    if (!photos['opportunity'][value]) fetchPhotosRequest({ name: 'opportunity', sol: value, key: apiKey });
    if (!photos['spirit'][value]) fetchPhotosRequest({ name: 'spirit', sol: value, key: apiKey });   
  };

  constructor(props) {
    super(props);
    const { fetchPhotosRequest, apiKey } = this.props;
    const { selectedSol } = this.state;
    fetchPhotosRequest({ name: 'curiosity', sol: selectedSol, key: apiKey });
    fetchPhotosRequest({ name: 'opportunity', sol: selectedSol, key: apiKey });
    fetchPhotosRequest({ name: 'spirit', sol: selectedSol, key: apiKey });
  }

  render() {
    const { photos, min, max } = this.props;

    const { selectedSol } = this.state;
    return (
      <div className={styles.root}>
        <SelectSol
          selectedSol={selectedSol}
          minSol={min}
          maxSol={max}
          changeSol={this.changeSol}
        />
        <div className={styles.сontainer}>
          {photos['curiosity'][selectedSol] ? (
            <RoverPhotos
              name={'curiosity'}
              key={'curiosity'}
              photos={photos['curiosity'][selectedSol].photos}
            />
          ) : (
            ''
          )}
          {photos['opportunity'][selectedSol] ? (
            <RoverPhotos
              name={'opportunity'}
              key={'opportunity'}
              photos={photos['opportunity'][selectedSol].photos}
            />
          ) : (
            ''
          )}
          {photos['spirit'][selectedSol] ? (
            <RoverPhotos
              name={'spirit'}
              key={'spirit'}
              photos={photos['spirit'][selectedSol].photos}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    photos: state.roverPhotos.photos,
    min: state.roverPhotos.sol.min,
    max: state.roverPhotos.sol.max,
    apiKey: getApiKey(state)
  }),
  { fetchPhotosRequest, changeSol }
)(RoverViewer);
