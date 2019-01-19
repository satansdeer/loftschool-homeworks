import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import classNames from "classnames";
import classes from "./Search.module.css";
import { fetchSearch } from "../../actions";
import { getSearchData, getSearchError, getSearchLoaded, getSearchLoading } from "../../selectors";
import ShowPreview from "../ShowPreview";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";

class Search extends Component {
  state = {
    value: ""
  };

  static get propTypes() {
    return {
      loading: propTypes.bool,
      loaded: propTypes.bool,
      error: propTypes.string,
      showData: propTypes.object,
      fetchSearch: propTypes.func.isRequired
    };
  }

  changeState = value => this.setState({ value: value });

  handleChange = evt => this.changeState(evt.target.value);

  handleRequest = () => {
    const { fetchSearch } = this.props;
    const { value } = this.state;
    if (!value.length) return;
    fetchSearch(value);
    this.changeState("");
  };

  renderItems = () => {
    const { data } = this.props;
    return data.map(item =>
      <ShowPreview
        key={item.id}
        id={item.id}
        image={item.image && item.image.medium}
        name={item.name}
        summary={item.summary}
      />
    );
  };

  render() {
    const { value } = this.state;
    const { loading, loaded, error } = this.props;
    return (
      <div>
        <div className={classes.previewList}>
          <input
            className={classNames(classes.input, "t-input")}
            name='search'
            placeholder="Название сериала"
            value={value}
            onChange={this.handleChange}
          />
          <div className={classes.buttonWrapper}>
            <button
              className={classNames(classes.button, "t-search-button")}
              onClick={this.handleRequest}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={classNames(classes.searchPanel, "t-search-result")}>
          {error && <ErrorMessage/>}
          {loading
            ? <Loader/>
            : loaded && this.renderItems()
          }
        </div>
      </div>
    );
  }
}

const mapStateFromProps = state => {
  return {
    loading: getSearchLoading(state),
    loaded: getSearchLoaded(state),
    error: getSearchError(state),
    data: getSearchData(state)
  };
};

const mapDispatchFromProps = { fetchSearch };

export default connect(mapStateFromProps, mapDispatchFromProps)(Search);