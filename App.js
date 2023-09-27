import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingWrapper from "./Component/Screens/welcomeScreen/OnboardingWrapper";
import OnboardingScreen1 from "./Component/Screens/welcomeScreen/OnboardingScreen1";
import OnboardingScreen2 from "./Component/Screens/welcomeScreen/OnboardingScreen2";
import OnboardingScreen3 from "./Component/Screens/welcomeScreen/OnboardingScreen3";
import HomeScreen from "./Component/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true); // Set to true during development

  useEffect(() => {
    // Check if this is the first launch of the app
    async function checkFirstLaunch() {
      try {
        if (!isFirstLaunch) {
          // This is the first launch of the app
          await AsyncStorage.setItem("@app:isFirstLaunch", "true");
        }
      } catch (error) {
        console.error("Error checking first launch:", error);
      }
    }

    checkFirstLaunch();
  }, [isFirstLaunch]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isFirstLaunch ? "OnboardingWrapper" : "Home"}
      >
        <Stack.Screen
          name="OnboardingWrapper"
          component={OnboardingWrapper}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardingScreen1"
          component={OnboardingScreen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardingScreen2"
          component={OnboardingScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardingScreen3"
          component={OnboardingScreen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
