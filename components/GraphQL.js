import React from 'react';
import { Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import { BASIC_KEY } from './Routing';
import { Actions } from 'react-native-router-flux';
import gql from 'graphql-tag';

class GraphQLPure extends React.Component {

  render () {
    if (this.props.data.error) {
      return (<Text style={{marginTop: 64}}>An unexpected error occurred</Text>)
    }

    if (this.props.data.loading || !this.props.data.user) {
      return (<Text style={{marginTop: 64}}>Loading...</Text>)
    }

    console.log(this.props.data.user);
    return (
      <View>
        <Text onPress={() => Actions[BASIC_KEY]()}>got to basic component</Text>
        <Text>LOADED YOHOOO!</Text>
        <Text>{this.props.data.user.firstName}</Text>
      </View>
    );
  }
}

const TestQuery = gql`
  query train {
    user(id: "23") {
      id,
      firstName,
      age,
    }
  }
`;

export const GraphQL = graphql(
  TestQuery,
)(GraphQLPure);