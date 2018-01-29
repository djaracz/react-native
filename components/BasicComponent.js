import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { GRAPH_QL_KEY } from './Routing';

export class BasicComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>any text</Text>
        <Text onPress={() => Actions[GRAPH_QL_KEY]()}>got to graph-ql component</Text>
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
