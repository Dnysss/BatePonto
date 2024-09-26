import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Details() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      headerTitle: "Batidas do Mês"
    })
  })

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
