// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styles from './ShowPage.module.css';

import { showRequest } from '../../actions';

class ShowPage extends PureComponent {
  componentDidMount = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const { showRequest } = this.props;
    showRequest(id);
  };

  render() {
    const { casts, isFetching, error } = this.props;

    if (isFetching) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;
    if (casts.name === undefined) return <div />;
    return (
      <div>
        <p>{casts.name}</p>
        {casts.image === undefined ? (
          ''
        ) : (
          <img src={casts.image.medium} alt={casts.name} />
        )}
        <div dangerouslySetInnerHTML={{ __html: casts.summary }} />
        <div className={styles.cast}>
          {casts._embedded.cast === undefined
            ? ''
            : casts._embedded.cast.map(({ person }) => (
                <div className="t-person" key={person.id}>
                  <p>{person.name}</p>
                  {person.image === null ? (
                    ''
                  ) : (
                    <img src={person.image.medium} alt={person.name} />
                  )}
                </div>
              ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  casts: state.shows.casts,
  isFetching: state.shows.isFetching,
  error: state.shows.error
});
const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
