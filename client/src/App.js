import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient';
import { Posts } from './modules';
import { Organizations } from './modules';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Posts />
        <Organizations />
      </ApolloProvider>
    )
  }
}

export default App;
