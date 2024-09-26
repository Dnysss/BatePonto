import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Add() {
  return (
    <View style={style.container}>
      <Text>Details</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
