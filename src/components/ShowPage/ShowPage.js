import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./ShowPage.module.css";
import propTypes from "prop-types";
import { fetchShow } from "../../actions";
import { getShowsData, getShowsError, getShowsLoaded, getShowsLoading } from "../../selectors";
import Person from "../Person";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader/Loader";

class ShowPage extends Component {
  static get propTypes() {
    return {
      loading: propTypes.bool,
      loaded: propTypes.bool,
      error: propTypes.object,
      showData: propTypes.object,
      fetchShow: propTypes.func.isRequired
    };
  }

  componentDidMount() {
    const { match, fetchShow } = this.props;
    fetchShow(match.params.id);
  }

  renderCast = () => {
    const { showData: { _embedded } } = this.props;
    return _embedded.cast.map(item =>
      <Person
        key={item.person.id}
        name={item.person.name}
        image={item.person.image}
      />
    );
  };

  renderPage = () => {
    const { showData } = this.props;
    const { summary, image, name } = showData;
    return (
      <div>
        <p>{name}</p>
        <img src={image && image.medium} alt={name}/>
        <div dangerouslySetInnerHTML={{ __html: summary }}/>
        <div className={classes.cast}>
          {showData._embedded && this.renderCast()}
        </div>
      </div>
    );
  };

  render() {
    const { showData, loading, loaded, error } = this.props;
    if (error) {
      return <ErrorMessage/>;
    }
    if (!showData) return null;
    return (
      <div>
        {loading
          ? <Loader/>
          : loaded && this.renderPage()
        }
      </div>
    );
  }
}

const mapStateFromProps = state => {
  return {
    loading: getShowsLoading(state),
    loaded: getShowsLoaded(state),
    error: getShowsError(state),
    showData: getShowsData(state)
  };
};

const mapDispatchFromProps = { fetchShow };

export default connect(mapStateFromProps, mapDispatchFromProps)(ShowPage);