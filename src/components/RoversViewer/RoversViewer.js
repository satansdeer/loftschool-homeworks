import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../Login';
import SelectSol from '../SelectSol';
import styles from './RoversViewer.module.css';
import { getIsAuthorized } from '../../modules/Auth';
import {
  fetchPhotosRequest,
  getSol,
  getRoverPhotos,
  changeSol
} from '../../modules/RoverPhotos';
import Grid from '@material-ui/core/Grid';
import RoverPhotos from '../RoverPhotos';
import roversConfig from '../../rovers.json';

class RoversViewer extends Component {
  componentDidMount() {
    const {
      photosRequest,
      appKey,
      solValue: { current: currentSol }
    } = this.props;

    roversConfig.items.forEach(item => photosRequest(appKey, currentSol, item));
  }

  componentDidUpdate(prevProps) {
    const {
      appKey,
      photosRequest,
      photosPackage,
      solValue: { current: currentSol }
    } = this.props;

    const {
      solValue: { current: prevSol }
    } = prevProps;

    if (
      currentSol !== prevSol &&
      !photosPackage[roversConfig.items[0]][currentSol]
    ) {
      roversConfig.items.forEach(item =>
        photosRequest(appKey, currentSol, item)
      );
    }
  }

  changeSolValue = value => {
    const {
      changeSol,
      solValue: { current: currentSol }
    } = this.props;

    value !== currentSol && changeSol(value);
  };

  render() {
    const { appKey, solValue } = this.props;
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
    return <Login />;
  }

  setPhotos = photosArray => (photosArray ? photosArray : []);

  renderRoversViewer() {
    const {
      photosPackage,
      solValue: { current: currentSol }
    } = this.props;

    return roversConfig.items.map(
      (item, index) =>
        photosPackage[item][currentSol] &&
        photosPackage[item][currentSol].photos.length && (
          <RoverPhotos
            name={item}
            photos={this.setPhotos(photosPackage[item][currentSol].photos)}
            key={item.id}
          />
        )
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoversViewer);
