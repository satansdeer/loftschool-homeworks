import React from "react";
import propTypes from "prop-types";
import classes from "./Mail.module.css";
import { withData } from "../../context/Data";

const Mail = (props) => {
  const { match: { params: { path, id } }, data } = props;
  if (!data) return null;
  const element = data[path].find(item => item.id === id);
  if (!element) return null;
  const isInbox = path !== "inbox";
  return (
    <div className={classes.container}>
      <p className={`t-mail-${isInbox ? "to" : "from"}`}> {isInbox ? "To: " : "From: "}
        <b>{isInbox ? element.to : element.from}</b></p>
      <p className="t-mail-body">{element.body}</p>
    </div>
  );
};

Mail.propTypes = {
  data: propTypes.object.isRequired,
  match: propTypes.object
};

export default withData(Mail);