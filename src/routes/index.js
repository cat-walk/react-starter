import React from 'react';
import { Route } from 'react-router-dom';
import Home from '@pages/Home/';

export default (
  <Route path="/" component={Home}>
    {/* <Route path='contact-us' component={ContactUs} />
      <Route path='*' component={NoMatch} /> */}
  </Route>
);
