import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actions';
import styles from './ShowPage.module.css';
import { getIsFetching, getEntities, getError } from '../../reducers/shows';

// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
const ShowPage = props => {
  const { cast } = styles;
  const {
    showRequest,
    isFetching,
    error,
    entities: { name, image, summary, embedded },
    match: {
      params: { id }
    }
  } = props;

  const innerHTML = html => {
    return { __html: html };
  };

  useEffect(() => {
    showRequest(id);
  }, [id, showRequest]);

  if (isFetching) return <p>Загрузка</p>;
  if (error) return <p>Это шоу не найдено :-(</p>;

  return (
    <div>
      <p>{name}</p>
      {image !== undefined && image !== null ? (
        <img src={image.medium} alt={name} />
      ) : (
        ''
      )}
      <div dangerouslySetInnerHTML={innerHTML(summary)} />
      <div key={id} className={cast}>
        {embedded !== undefined
          ? embedded.cast.map(({ person: { id, name, image } }) => (
              <div key={id} className="t-person">
                <p>{name}</p>
                {image !== null ? <img src={image.medium} alt={name} /> : ''}
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  error: getError(state),
  entities: getEntities(state)
});

const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
