import React, { Component } from "react";
import { load, save } from "../../localstorage";

const withLocalStorage = (key, arr) => WrapComponent => class extends Component {
  state = {
    isComplete: false
  };
  static displayName = "withLocalStorageHoc";

  changeState = () => this.setState({ isComplete: !this.state.isComplete });

  savedData = () => load(key);

  saveData = data => save(key, data);

  render() {
    return <WrapComponent
      savedData={this.savedData}
      saveData={this.saveData}
      isComplete={this.state.isComplete}
      changeState={this.changeState}
    />;
  }
};

export default withLocalStorage;