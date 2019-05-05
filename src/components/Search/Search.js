// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import React, { Component, Fragment } from "react";
import st from "./Search.module.css";
import { searchRequest } from "../../middlewares/actions";
import { connect } from "react-redux";
import {Route, Link, withRouter  } from "react-router-dom";
import ShowPage from '../ShowPage/ShowPage'

export class Search extends Component {

  state = {};

  search = () => {
    const { searchRequest, series } = this.props;
    const { filmName } = this.state;
    searchRequest(filmName);
  };

  setFilm = (event) => {
    this.setState({ filmName: event.target.value });
  };

  render() {
    const { series } = this.props;
    return (
      <Fragment>
        <div className={st.searchPanel}>
          <input className="input t-input" type="text" placeholder="Serial" onChange={this.setFilm}/>
          <div className={st.buttonWrapper}>
            <button className="button t-search-button" onClick={this.search}> Поиск</button>
          </div>
        </div>
        <div className={st.series__wrapper}>
          {series.payload.search.map(ep => (
            <div key={ep.id} className={st.episode__wrapper}>
              <img src={ep.image.original} alt={ep.name} className={st.episode__img}/>
              <p>{ep.name}</p>
              <Link to={`/shows/${ep.id}`}>{ep.name}</Link>
              {/*<button onClick={()=> this.props.history.push(`/shows/${ep.id}`)}>{ep.name}</button>*/}
              <p>{ep.summary}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  series: searchRequest(state)
});
const mapDispatchToProps = { searchRequest };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);