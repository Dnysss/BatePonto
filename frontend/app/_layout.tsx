import { Stack } from "expo-router";
import { Appbar } from "react-native-paper";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Empresa Demostração",
        headerStyle: {
          backgroundColor: "#00643E",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName="index"
    >
      <Stack.Screen name="Home" />
      <Stack.Screen name="Profile" />
      <Stack.Screen name="Details" />
    </Stack>
  );
}
