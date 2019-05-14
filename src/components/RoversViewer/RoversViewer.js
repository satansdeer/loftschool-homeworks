import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from '../Login';
import SelectSol from '../SelectSol';
import styles from './RoversViewer.module.css';
import {getIsAuthorized} from '../../modules/Auth';
import {
  fetchPhotosRequest,
  getSol,
  getRoverPhotos,
  changeSol
} from '../../modules/RoverPhotos';
import Grid from '@material-ui/core/Grid';
import RoverPhotos from '../RoverPhotos';

const columns = ["curiosity", "opportunity", "spirit"];

class RoversViewer extends Component {
  componentDidMount() {
    const {
      photosRequest,
      appKey,
      solValue: {current: currentSol}
    } = this.props;

    console.log("CurrentProps", this.props);

    columns.forEach(item => photosRequest(appKey, currentSol, item));
  }

  componentDidUpdate() {
    const {
      appKey,
      photosRequest,
      solValue: {current: currentSol}
    } = this.props;

    console.log("CurrentProps", this.props);

    columns.forEach(item =>
      photosRequest(appKey, currentSol, item)
    );
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
          {this.renderRoversPhoto()}
        </Grid>
      </div>
    ) : (
      this.login()
    );
  }

  login() {
    return <Login/>;
  }

  setPhotos = photosArray => (photosArray ? photosArray : []);

  renderRoversPhoto() {
    const {
      roverPhotos,
      solValue: {current: currentSol}
    } = this.props;


    console.log('Props', roverPhotos);
    console.log('OriginalProps', this.props);

    // return columns.map(
    //   (item, index) =>
    //     <RoverPhotos
    //       name={item}
    //       // photos={this.setPhotos(roverPhotos[index][currentSol].photos)}
    //       key={item.id}
    //     />
    // );
  }
}

const mapStateToProps = store => {
  return {
    appKey: getIsAuthorized(store),
    solValue: getSol(store),
    roverPhotos: getRoverPhotos(store)
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
