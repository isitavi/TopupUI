import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Balance extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.testStyle}> Balance </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  testStyle: {
    fontSize: 20,
    backgroundColor: "#3c404f",
    padding: 15,
    color: "white"
  }
});
