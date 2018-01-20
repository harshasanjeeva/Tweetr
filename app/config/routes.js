import React from 'react'
import { Route, hashHistory, IndexRoute} from 'react-router-dom'
import MainContainer from 'containers' 
import HomeContainer  from 'containers'
import  {BrowserRouter as Router} from 'react-router-dom'
import HashRouter from 'react-router-dom'

const routes = (
  <HashRouter>
    <Route path='/' component={MainContainer} >
        <IndexRoute component={HomeContainer} />
    </Route>
  </HashRouter> 
//   <Router history={hashHistory}>
//   <Route path='/' component={MainContainer}>
//     <IndexRoute component={HomeContainer} />
//   </Route>
// </Router>
)

export default routes;