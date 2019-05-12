import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchShowsRequest } from '../../actions';
import { showSelector, getError, getIsLoading } from '../../selectors/shows';
import { ErrorStub, LoadingStub } from '../AjaxStubs';
import styles from './ShowPage.module.css';

// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

class ShowPage extends PureComponent {
  componentDidMount() {
    const { showId, fetchShowsRequest } = this.props;

    if (this.getCurrentShow()) {
      return;
    }

    fetchShowsRequest(showId);
  }

  getCurrentShow() {
    const { showId, showSelector } = this.props;
    return showSelector(showId);
  }

  renderCastItem = castItem => {
    const {
      person: {
        id,
        name,
        image
      }
    } = castItem;
    return (
      <div className="t-person" key={id}>
        <p>{name}</p>
        {image && (<img src={image.medium} alt={name} />)}
      </div>
    );
  };

  renderShowInfo = () => {
    const show = this.getCurrentShow();
    const {
      name,
      image,
      summary,
      _embedded: { cast }
    } = show;

    return (
      <Fragment>
        <p>{name}</p>
        {image && (<img src={image.medium} alt={name} />) }
        <div>
          <p dangerouslySetInnerHTML={{ __html: summary }} />
          <div className={'ShowPage ' + styles.cast}>
            {cast && cast.map(castItem => this.renderCastItem(castItem))}
          </div>
        </div>
      </Fragment>
    );
  };

  render() {
    const { isLoading, error } = this.props;

    if (isLoading) return <LoadingStub />;

    if (error) return <ErrorStub error={error} />;

    return <div>{this.getCurrentShow() && this.renderShowInfo()}</div>;
  }
}

const mapStateToProps = (state, props) => ({
  showId: props.match.params.id,
  showSelector: showSelector(state),
  error: getError(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = { fetchShowsRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
