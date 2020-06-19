import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ApolloProvider } from '@apollo/react-hooks';
import { Client } from '../../services'

import SearchPage from './search';

function App() {
  return (
    <ApolloProvider client={Client}>
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
