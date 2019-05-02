import React, { Component } from "react";
import withData from "../../context/Data/Data"
import InboxMail from "../InboxMail/InboxMail";

// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.


export default class InboxList extends Component {
  render() {
    const TempComponent = withData(InboxMail)
    return <TempComponent/>
  }
}
