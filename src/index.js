import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import App from './App';
import Home from './home';
// import Book from './book';
// import Rooms from './rooms';
import Gallery from './gallery';
// import Garden from './garden';
// import Loft from './rooms/loft';
import Contact from './contact';
// import Services from './services';
// import Standard from './rooms/standard';
// import Superior from './rooms/superior';
// import JuniorSuite from './rooms/junior-suite';
// import StandardGarden from './rooms/standard-garden';
// import TripleSuperior from './rooms/triple-superior';
// import SuperiorFamiliar from './rooms/superior-familiar';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/gallery">
        <IndexRoute component={Gallery} />
      </Route>
    </Route>
    <Route path="*" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
);
