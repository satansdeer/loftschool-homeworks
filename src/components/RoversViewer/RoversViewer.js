// Здесь вам нужно реализовать вью

// Подключите его к редакс роутеру
// Вам потребуются селекторы для получения выбранного сола
// и списка фотографий

// Так же вы будете диспатчить экшены CHANGE_SOL и FETCH_PHOTOS_REQUEST
// Эти экшены находятся в модуле ROVER PHOTOS


import React, {Component} from 'react';
import {connect} from 'react-redux';
import RoverPhotos from '../RoverPhotos';
import SelectSol from '../SelectSol';
import Login from '../Login';
import Grid from '@material-ui/core/Grid';
import styles from './RoversViewer.module.css';
import {getIsAuthorized} from '../../modules/Auth/reducer';
import {
  fetchPhotosRequest,
  getSol,
  getRoverPhotos,
  changeSol
} from '../../modules/RoverPhotos';

const roversConfig = ["curiosity", "opportunity", "spirit"];

export class RoversViewer extends Component {

  componentDidMount() {
    const {
      photosRequest,
      appKey,
      solValue: {current: currentSol}
    } = this.props;

    roversConfig.forEach(item => photosRequest(appKey, currentSol, item));
  }

  componentDidUpdate(prevProps) {
    const {
      appKey,
      photosRequest,
      photosPackage,
      solValue: {current: currentSol}
    } = this.props;

    const {
      solValue: {current: prevSol}
    } = prevProps;

    if (
      currentSol !== prevSol &&
      !photosPackage[roversConfig[0]][currentSol]
    ) {
      roversConfig.forEach(item =>
        photosRequest(appKey, currentSol, item)
      );
    }
  }

  changeSolValue = value => {
    const {
      changeSol,
      solValue: {current: currentSol}
    } = this.props;

    value !== currentSol && changeSol(value);
  };

  render() {
    const {appKey, solValue} = this.props;
    return appKey ? (
      <div className={styles.root}>
        <SelectSol
          minSol={solValue.min}
          maxSol={solValue.max}
          selectedSol={solValue.current}
          changeSol={this.changeSolValue}
        />
        <Grid container alignItems="flex-start" justify="space-between">
          {this.renderRoversViewer()}
        </Grid>
      </div>
    ) : (
      this.renderLogin()
    );
  }

  renderLogin() {
    return <Login/>;
  }

  setPhotos = photosArray => (photosArray ? photosArray : []);

  renderRoversViewer() {
    const {
      photosPackage,
      solValue: {current: currentSol}
    } = this.props;

    return roversConfig.map(
      (item, index) => {
        console.log(item);
      }
      // photosPackage[item][currentSol] &&
      // photosPackage[item][currentSol].photos.length && (
      //   <RoverPhotos
      //     name={item}
      //     photos={this.setPhotos(photosPackage[item][currentSol].photos)}
      //     key={item + index}
      //   />
      // )
    );
  }
}

const mapStateToProps = store => {
  return {
    appKey: getIsAuthorized(store),
    solValue: getSol(store),
    photosPackage: getRoverPhotos(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    photosRequest(key, sol, name) {
      dispatch(fetchPhotosRequest(name, sol, key));
    },
    changeSol(newSol) {
      dispatch(changeSol(newSol));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoversViewer);
