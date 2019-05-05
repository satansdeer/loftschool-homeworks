// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
import React, { Component } from "react";
import { searchRequest, showRequest } from "../../middlewares/actions";
import { connect } from "react-redux";

export class ShowPage extends Component {
  componentDidMount() {
    const { match, showRequest } = this.props;
    const filmId = match.params.id;
    showRequest(filmId);
  }

  render() {
    // console.log(this.props)
    const { film } = this.props;
    const show = film.payload.shows;
    console.log(show);
    return (
      <div>
        <h1>{show.name}</h1>
        <img src={show.image.medium} alt="test"/>
        <div dangerouslySetInnerHTML>{show.summary}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  film: showRequest(state)
});
const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);