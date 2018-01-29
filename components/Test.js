import React from 'react';
import { Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class TestPure extends React.Component {

  render () {
    if (this.props.data.error) {
      console.log(this.props.data.error);
      return (<Text style={{marginTop: 64}}>An unexpected error occurred</Text>)
    }

    if (this.props.data.loading || !this.props.data.user) {
      return (<Text style={{marginTop: 64}}>Loading...</Text>)
    }

    return (
      <View>
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

export const Test = graphql(
  TestQuery,
)(TestPure);