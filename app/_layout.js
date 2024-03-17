import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const TabsLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="resetPassword" />
        <Stack.Screen name="tabs" />
      </Stack>
    </>
  );
};

export default TabsLayout;
