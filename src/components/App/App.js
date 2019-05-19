import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Login from '../Login';
import NasaCard from '../NasaCard';
import RoversViewer from '../RoversViewer';
import styles from './App.module.css';
import { connect } from 'react-redux';
import { getIsAuthorized, addKey } from '../../modules/Auth';

class App extends PureComponent {
  handleEnterApiKey = apiKey => {
    const { addNewKey } = this.props;

    addNewKey(apiKey);
  };

  render() {
    const { isAuthorized } = this.props;
    return isAuthorized ? this.renderApp() : this.renderLogin();
  }

  renderApp() {
    return <RoversViewer />;
  }

  renderLogin() {
    return (
      <Grid
        alignItems="center"
        className={styles.root}
        direction="column"
        justify="space-between"
        container
      >
        <NasaCard />
        <Login onEnter={this.handleEnterApiKey} />
      </Grid>
    );
  }
}

const mapStateToProps = store => {
  return {
    isAuthorized: getIsAuthorized(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewKey(key) {
      dispatch(addKey(key));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
