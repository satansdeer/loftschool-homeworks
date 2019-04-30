import React from "react";
import {Router, Route} from "react-router-dom";
import Home from "../Home/Home"
import InboxList from "../InboxList/InboxList";
import OutboxList from "../OutboxList/OutboxList";

// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
export default () => {
  <Router>
    <Route path="/Home" component={Home}/>
    <Route path="/app/inbox" component={InboxList}/>
    <Route path="/app/outbox" component={OutboxList}/>
    {/* <Route path="/inbox" component=/> */}
  </Router>
}
