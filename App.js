import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Test } from './components/Test';

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://192.168.1.52:8080/graphql?'}),
  cache: new InMemoryCache()
});

class AppComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Test />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

export default App;
