import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch
  // Redirect
} from 'react-router-dom';

import { getUser } from './redux/Auth/user.actions';

import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import Error404Page from './pages/Error404Page';
import AppMainRoute from './pages/app/App';
import setAuthToken from './util/setAuthToken';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './pages/LandingPage';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = props => {
  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <PrivateRoute path="/app" component={AppMainRoute} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route component={Error404Page} />
    </Switch>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = { getUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);