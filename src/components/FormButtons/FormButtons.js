import React, { Component } from 'react';

class FormButtons extends Component {
  buttonClick = event => {
    event.nativeEvent.preventDefault();
  };

  render() {
    return (
      <div className="form__buttons">
        <input
          type="submit"
          className="button t-submit"
          value="Проверить"
          onClick={this.buttonClick}
        />
      </div>
    );
  }
}

export default FormButtons;
