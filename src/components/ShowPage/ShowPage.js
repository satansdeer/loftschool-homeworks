import React, { Component } from 'react';
import styles from './ShowPage.module.css';
import { showRequest } from '../../actions';
import { connect } from 'react-redux';

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
    const { isFetching, show, error } = this.props;
    if (isFetching) {
      return <p>Данные загружаются...</p>;
    }
    if (error) {
      return <p>Произошла ошибка при загрузке данных</p>;
    }
    return (
      <>
        <p>{show.name}</p>
        {show.image ? <img src={show.image.medium} alt={show.name} /> : null}
        <div>
          {show.summary ? (
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
          ) : null}
        </div>
        <div className={styles.cast}>
          {show._embedded ? this.renderCast(show._embedded.cast) : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => state.shows;

const mapDispatchToProps = dispatch => {
  return {
    showRequest: id => {
      dispatch(showRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);

// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
