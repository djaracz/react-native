import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Routing } from './components/Routing';

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://192.168.1.52:8080/graphql?'}),
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <Routing />
  </ApolloProvider>
);

export default App;
