import React, { Component } from 'react';
import { AppRegistry, TextInput, Flatlist, View, Text, StyleSheet } from 'react-native';


export default class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Ask for Help.",
      text: 'Type to chat with women around you!'
    };
  }
  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
        <TextInput
          style={{height: 40, width: 400,  borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});