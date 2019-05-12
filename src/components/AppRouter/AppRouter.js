// // Реализуйте роутер
// // Вам нужно определить корневой роут, который будет вести на страницу поиска.
// // Роут шоу должен принимать id в параметрах.
// import React, { Fragment, PureComponent } from "react";
// import Search from "../Search/Search";
// import { Switch, Route} from "react-router-dom";
// import ShowPage from "../ShowPage/ShowPage";


// export default class AppRouter extends PureComponent {
//   render() {
//     return (
//       <Fragment>
//         <Search/>
//         <Switch>
//           <Route path="/shows/:id" component={ShowPage}/>
//         </Switch>
//       </Fragment>

//     );
//   }
// }

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Search from 'components/Search';
import ShowPage from 'components/ShowPage';
import './AppRouter.css';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/shows/:id" component={ShowPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
