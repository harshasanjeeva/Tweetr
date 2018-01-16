import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { MainContainer } from '../containers'
import { BrowserRouter, HashRouter} from 'react-router-dom';

const routes = (
  <HashRouter>
    <Route path='/' component={MainContainer} />
  </HashRouter> )

export default routes;