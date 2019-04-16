import React from 'react';

class FormButtons extends React.Component {
  ClickButton = e => {
    e.nativeEvent.preventDefault();
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
          onClick={this.ClickButton}
        />
      </div>
    );
  }
}

export default FormButtons;
