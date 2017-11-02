import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import AppBase from 'components/scripts/index';


import Container from './container';
import NotFound from './not-found';
import Guide from './guide';
import Helper from './helper';
import QrCode from './qr-code'

const routes = (
  <Route path="/" component={Container}>
    <IndexRedirect to="/not-found"/>
    <Route path="/not-found" component={NotFound}/>
    <Route path="/guide" component={Guide}/>
    <Route path="/helper" component={Helper}/>
    <Route path="/qr-code" component={QrCode}/>
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
