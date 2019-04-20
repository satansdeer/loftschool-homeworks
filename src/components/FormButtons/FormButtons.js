import React, { Component } from 'react';

class FormButtons extends Component {
  handlerButton = event => {
    event.preventDefault();
    // validate();
  };

  render() {
    return (
      <div className="form__buttons">
        <input
          type="submit"
          className="button t-submit"
          value="Проверить"
          onClick={this.handlerButton}
        />
      </div>
    );
  }
}

export default FormButtons;
