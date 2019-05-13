// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
import React, { Component } from 'react';
import styles from './ShowPage.module.css';
import { showRequest } from '../../middlewares/actions';
import { connect } from 'react-redux';
import { getIsFetching, getResult, getError } from '../../reducers/shows';

class ShowPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.showRequest(id);
  }

  renderCast(arr) {
    return arr.map(el => {
      return (
        <div className="t-person" key={el.person.id}>
          <p>{el.person.name}</p>
          <img src={el.person.image.medium} alt={el.person.name} />
        </div>
      );
    });
  }

  render() {
    const { isFetching, result, error } = this.props;
    if (isFetching) {
      return <p>Данные загружаются...</p>;
    }
    if (error) {
      return <p>Произошла ошибка при загрузке данных</p>;
    }
    return (
      <>
        <p>{result.name}</p>
        {result.image ? (
          <img src={result.image.medium} alt={result.name} />
        ) : null}
        <div>
          {result.summary && (
            <div dangerouslySetInnerHTML={{ __html: result.summary }} />
          )}
        </div>
        <div className={styles.cast}>
          {result._embedded ? this.renderCast(result._embedded.cast) : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  result: getResult(state),
  error: getError(state)
});

const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
