import React, { Component } from 'react';
import Login from '../Login';
import styles from './RoversViewer.module.css';
import isEqual from 'lodash';
import { connect } from 'react-redux';
import { getIsAuthorized, addKey } from '../../redux/modules/Auth';
import {
  fetchPhotosRequest,
  getSol,
  getRoverPhotos
} from '../../redux/modules/RoverPhotos';

class RoversViewer extends Component {
  componentDidMount() {
    console.log('RoversViewer mounted, props', this.props);

    const {
      photosRequest,
      appKey,
      solValue: { current: currentSol }
    } = this.props;

    this.props.photosRequest(appKey, currentSol);
  }

  componentDidUpdate() {
    console.log('RoversViewer updated', this.props);
  }

  render() {
    const { appKey } = this.props;
    return appKey ? this.renderRoversViewer() : this.renderLogin();
  }

  renderLogin() {
    return <Login />;
  }

  renderRoversViewer() {
    return <p>test</p>;
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
    photosRequest(key, sol) {
      dispatch(fetchPhotosRequest(key, sol));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoversViewer);
