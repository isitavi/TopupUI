import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default class MobileNo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> Mobile No </Text>
        <TextInput style={styles.textInputStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 310
  },
  textStyle: {
    fontSize: 15,
    paddingLeft: 25,
    color: "#129dcc"
  },
  textInputStyle: {
    justifyContent: "space-around",
    borderBottomColor: "#129dcc",
    borderBottomWidth: 2,
    paddingTop: 10,
    paddingLeft: 20
  }
});
