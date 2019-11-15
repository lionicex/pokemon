import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import PokemonPage from './pages/PokemonPage';
import DetailPage from './pages/DetailPage';
import { BrowserRouter as Router, Route, Switch, history } from "react-router-dom";

const App = () => (

  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact strict path="/pokemon" component={PokemonPage} />
        <Route exact strict path="/pokemon/:name" component={DetailPage} />
      </Switch>
    </Router>
  </Provider>

);

export default App;
