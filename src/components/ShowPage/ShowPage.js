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

  casts = cast => {
    return cast === undefined
      ? null
      : cast.map(({ person }) => (
          <div className="t-person" key={person.id}>
            <p>{person.name}</p>
            {person.image ? (
              <img src={person.image.medium} alt={person.name} />
            ) : null}
          </div>
        ));
  };

  render() {
    const { result, isFetching, error } = this.props;

    if (isFetching) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;

    return result.name !== undefined ? (
      <div>
        <p>{result.name}</p>
        {result.image !== undefined && (
          <img src={result.image.medium} alt={result.name} />
        )}
        <div>
          <p dangerouslySetInnerHTML={{ __html: result.summary }} />
        </div>
        <div className={styles.cast}>{this.casts(result._embedded.cast)}</div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  const { result, isFetching, error } = state.shows;
  return {
    result,
    isFetching,
    error
  };
};
const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
