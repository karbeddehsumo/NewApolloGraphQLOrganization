import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient';
import { Posts } from './modules';
import { Organizations } from './modules';
import { Users } from './modules';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Organizations />
      </ApolloProvider>
    )
  }
}

export default App;
