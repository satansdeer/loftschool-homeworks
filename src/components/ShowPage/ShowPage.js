// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actions';

import styles from './ShowPage.module.css';

class ShowPage extends Component {
  componentDidMount() {
    const {
      showRequest,
      match: {
        params: { id }
      }
    } = this.props;

    showRequest(id);
  }

  renderCasts = cast => {
    return cast !== undefined
      ? cast.map(({ person }) => (
          <div className="t-person" key={person.id}>
            <p>{person.name}</p>
            {person.image ? (
              <img src={person.image.medium} alt={person.name} />
            ) : null}
          </div>
        ))
      : null;
  };

  render() {
    const { showElements, isLoading, error } = this.props;

    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;
    if (showElements.name === undefined) return <div />;

    return (
      <div>
        <p>{showElements.name}</p>
        {showElements.image === undefined ? (
          ''
        ) : (
          <img src={showElements.image.medium} alt={showElements.name} />
        )}
        <div>
          <p dangerouslySetInnerHTML={{ __html: showElements.summary }} />
        </div>
        <div className={styles.cast}>
          {this.renderCasts(showElements._embedded.cast)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { showElements, isLoading, error } = state.shows;
  return {
    showElements,
    isLoading,
    error
  };
};
const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
