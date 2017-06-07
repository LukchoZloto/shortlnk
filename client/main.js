import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Router,Route,browserHistory} from 'react-router';
import {Tracker} from 'meteor/tracker';

import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';

const unauthenticatedPages = ['/','/signup'];
const authencticatedPages = ['/links'];
const routes = (
  <Router history={browserHistory}>
    <div>
      <Route path="/signup" component={Signup}/>
      <Route path="/links" component={Link}/>
      <Route path="/" component = {Login}/>
      <Route path="*" component = {NotFound}/>
    </div>
  </Router>
);



Tracker.autorun(()=>{
  const isAuthenticated = !!Meteor.userId(); //Convert string to boolean
  const pathName = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
  const isAuthenticatedPage = authencticatedPages.includes(pathName);

  // Redirect to the links page 
  if(isAuthenticated && isUnauthenticatedPage){
    browserHistory.push('/links');
    console.log('pushvame pathName-a');
  }else if(!isAuthenticated && isAuthenticatedPage){
    browserHistory.push('/');
  }
  console.log('isAuthenticated', isAuthenticated);


});
Meteor.startup(()=>{
  ReactDOM.render(routes,document.getElementById('app'));
});
