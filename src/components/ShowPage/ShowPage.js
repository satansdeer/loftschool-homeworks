import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShowById, getIsFetching } from '../../reducers/shows';
import { showRequest } from '../../actions/show';
import styles from './ShowPage.module.css';

class ShowPage extends Component {
  componentDidMount() {
    const { showRequest, showById, isFetching } = this.props;
    const showId = this.getshowId();
    const show = showById(showId);

    if (show == null && !isFetching) {
      showRequest(showId);
    }
  }

  getshowId() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return parseInt(id, 10);
  }
  render() {
    const { isFetching, showById } = this.props;
    if (isFetching) {
      return <p>Загрузка</p>;
    }

    const show = showById(this.getshowId());

    if (!show) {
      return <p className="error">Это шоу не найдено :-(</p>;
    }

    return (
      <div>
        <p>{show.name}</p>
        {show.image && <img src={show.image.medium} alt={show.name} />}
        <div dangerouslySetInnerHTML={{ __html: show.summary }} />
        <div className={styles.cast}>
          {show._embedded.cast.map(({ person, character }) => (
            <div className="t-person" key={`${person.id}+${character.id}`}>
              <p>{person.name}</p>
              {person.image && (
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
  showById: id => getShowById(state, id),
  isFetching: getIsFetching(state)
});
const mapDispatchToProps = {
  showRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
