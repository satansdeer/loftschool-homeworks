import React, { PureComponent } from 'react';
import Login from '../Login';
import styles from './RoversViewer.module.css';
import isEqual from 'lodash';
import { connect } from 'react-redux';
import { getIsAuthorized, addKey } from '../../redux/modules/Auth';
import { fetchPhotosRequest } from '../../redux/modules/RoverPhotos';

class RoversViewer extends PureComponent {
  componentDidMount() {
    console.log('RoversViewer, props', this.props);
  }

  handleEnterApiKey = apiKey => {
    const { addNewKey } = this.props;

    addNewKey(apiKey);
    // this.props.photosRequest('nYaPlqtaCAn5ZiwWR9XHKFeJQDPeGSjx3ZMDfgWG');
  };

  render() {
    const { isAuthorized } = this.props;
    return isAuthorized ? this.renderRoversViewer() : this.renderLogin();
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
    isAuthorized: getIsAuthorized(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    photosRequest(key) {
      dispatch(fetchPhotosRequest(key));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoversViewer);
