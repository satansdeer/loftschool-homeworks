import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {
  changeSol,
  getSelectedSol,
  getMinSol,
  getMaxSol,
  getRovers,
  getRoverPhotosBySol
} from '../../modules/RoverPhotos';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import styles from './RoversViewer.module.css';

// Здесь вам нужно реализовать вью
const RoversViewer = props => {
  const { root } = styles;
  const { selectedSol, minSol, maxSol, changeSol, rovers, roverPhotos } = props;

  const handleChangeSol = solNum => {
    changeSol(solNum);
  };

  return (
    <div className={root}>
      <SelectSol
        {...{ selectedSol, minSol, maxSol, changeSol: handleChangeSol }}
      />
      <Grid container alignItems="flex-start" justify="space-between">
        {rovers.map(name => (
          <RoverPhotos
            key={name}
            name={name}
            photos={roverPhotos(name, selectedSol)}
          />
        ))}
      </Grid>
    </div>
  );
};
// Подключите его к редакс роутеру
// Вам потребуются селекторы для получения выбранного сола
// и списка фотографий

// Так же вы будете диспатчить экшены CHANGE_SOL и FETCH_PHOTOS_REQUEST
// Эти экшены находятся в модуле ROVER PHOTOS
export default connect(
  state => ({
    selectedSol: getSelectedSol(state),
    minSol: getMinSol(state),
    maxSol: getMaxSol(state),
    rovers: getRovers(),
    roverPhotos: (rover, sol) => getRoverPhotosBySol(state, rover, sol)
  }),
  { changeSol }
)(RoversViewer);
