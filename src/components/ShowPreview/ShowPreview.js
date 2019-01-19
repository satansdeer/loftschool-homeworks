import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import classes from "./ShowPreview.module.css";
import propTypes from "prop-types";


class ShowPreview extends PureComponent {
  static get propTypes() {
    return {
      id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
      name: propTypes.string.isRequired,
      image: propTypes.string,
      summary: propTypes.node
    };
  }

  render() {
    const { id, name, image, summary } = this.props;
    return (
      <div className={classNames(classes.container, "t-preview")}>
        <div>
          <Link className="t-link" to={`/shows/${id}`}>{name}</Link>
          {image && <img src={image} alt={name}/>}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }}/>
      </div>
    );
  }
}

export default ShowPreview;