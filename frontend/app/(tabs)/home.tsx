import { router, useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Button, Icon } from "react-native-paper";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeCard}>
        <Avatar.Text size={64} label="D" style={styles.avatar} />
        <View style={styles.welcomeText}>
          <Text style={styles.nameText}>Olá, Denys!</Text>
          <Text style={styles.roleText}>FUNCIONÁRIO</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/details")}
        >
          <Icon source="calendar" size={100} color="white" />
          <Text style={styles.cardText}>Batidas do Mês</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon source="clock-outline" size={100} color="white" />
          <Text style={styles.cardText}>Bater Ponto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  welcomeCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  avatar: {
    backgroundColor: "#00643E",
  },
  welcomeText: {
    marginLeft: 15,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00643E",
  },
  roleText: {
    fontSize: 14,
    color: "#6e6e6e",
    marginTop: 2,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c8a36",
    marginBottom: 30,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#1AA570",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 165,
    height: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});
