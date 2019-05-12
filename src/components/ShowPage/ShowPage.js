// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import styles from './ShowPage.module.css';
import { showRequest } from '../../actions';

import { getIsFetching, getResult, getError } from '../../reducers/shows';

class ShowPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.showRequest(id);
  }

  renderCast(items) {
    return items.map(row => {
      return (
        <div className="t-person" key={row.person.id}>
          <p>{row.person.name}</p>
          <img src={row.person.image.medium} alt={row.person.name} />
        </div>
      );
    });
  }

  render() {
    const { isFetching, error, result } = this.props;

    if (isFetching) {
      return <p>Грузим...</p>;
    }

    if (error) {
      return <p>Ошибка загрузки</p>;
    }

    return (
      <Fragment>
        <p>{result.name}</p>
        {result.image && <img src={result.image.medium} alt={result.name} />}

        <div>
          {result.summary && (
            <div dangerouslySetInnerHTML={{ __html: result.summary }} />
          )}
        </div>

        <div className={styles.cast}>
          {result._embedded && this.renderCast(result._embedded.cast)}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  error: getError(state),
  result: getResult(state)
});

const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
