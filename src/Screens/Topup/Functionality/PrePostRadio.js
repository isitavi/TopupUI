import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import RadioGroup from "react-native-radio-buttons-group";

export default class App extends Component {
  state = {
    data: [
      {
        label: "Prepaid",
        value: "Prepaid",
        color: "#129dcc"
      },
      {
        label: "Postpaid",
        value: "Postpaid",
        color: "#129dcc"
      }
    ]
  };

  // update state
  onPress = data => this.setState({ data });

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton
      ? selectedButton.value
      : this.state.data[0].label;
    return (
      <View style={styles.container}>
        {/* <Text style={styles.valueText}>Value = {selectedButton}</Text> */}

        <RadioGroup
          radioButtons={this.state.data}
          onPress={this.onPress}
          flexDirection="row"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
    color: "green"
  },
  valueText: {}
});
