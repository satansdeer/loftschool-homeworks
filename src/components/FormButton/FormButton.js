import React, { Component } from 'react';

class FormButton extends Component {
  handleButton = event => {
    event.preventDefault();
    const { checkData } = this.props;

    checkData();
  };

  render() {
    return (
      <div className="form__buttons">
        <input
          type="submit"
          className="button t-submit"
          value="Проверить"
          onClick={this.handleButton}
        />
      </div>
    );
  }
}

export default FormButton;
