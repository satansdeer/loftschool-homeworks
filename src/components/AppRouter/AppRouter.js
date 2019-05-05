// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
import React, { Fragment, PureComponent } from "react";
import Search from "../Search/Search";
import { Switch, Route} from "react-router-dom";
import ShowPage from "../ShowPage/ShowPage";


export default class AppRouter extends PureComponent {
  render() {
    return (
      <Fragment>
        <Search/>
        <Switch>
          <Route path="/shows/:id" component={ShowPage}/>
        </Switch>
      </Fragment>

    );
  }
}