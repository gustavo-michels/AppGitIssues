import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = {
    title: 'Issues',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Issues</Text>
      </View>
    );
  }
}
