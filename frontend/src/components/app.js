import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import CreatePostForm from './post/create_post_form_container';

import PostShow from './post/post_show_container';

import CreateSubDredditForm from './subdreddit/create_subdreddit_form_container';
import SubdredditShow from './subdreddit/subdreddit_show_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <ProtectedRoute exact path="/submit" component={CreatePostForm}/>
      <Route path="/posts/:postId" component={PostShow}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/subDreddit" component={CreateSubDredditForm} />
    </Switch>
  </div>
);

export default App;