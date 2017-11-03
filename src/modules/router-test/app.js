import {Router, Route, Link, IndexRedirect, hashHistory} from 'react-router';
import AppBase from 'components/scripts/index';

console.log('link:', Link);

import Container from './container';
import Test1 from './page/test1';
import Test2 from './page/test2';
import Test3 from './page/test3';

const routes = (
  <Route path="/" component={Container}>
    <IndexRedirect to="/test1"/>
    <Route path="/test1" component={Test1}/>
    <Route path="/test2" component={Test2}/>
    <Route path="/test3" component={Test3}/>
  </Route>
);


export default class extends AppBase {
  static initialState() {
    return {
      memory: {
        rows: [],
        total: 0
      }
    }
  }

  render() {
    return (
        <Router history={hashHistory}>
          {routes}
        </Router>
    )
  }
}
