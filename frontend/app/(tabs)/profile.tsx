import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={style.container}>
      <Text>Profile</Text>
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
