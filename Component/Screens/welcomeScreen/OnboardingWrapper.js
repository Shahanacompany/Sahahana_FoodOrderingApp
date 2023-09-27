// // OnboardingWrapper.js
// import React, { useEffect, useState } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import OnboardingScreen1 from './OnboardingScreen1'; // Import your Onboarding screens
// import HomeScreen from '../../HomeScreen'; // Import your main content screen

// const OnboardingWrapper = () => {
//   const [isFirstLaunch, setIsFirstLaunch] = useState(null);

//   useEffect(() => {
//     // Check if this is the first launch of the app
//     async function checkFirstLaunch() {
//       try {
//         const value = await AsyncStorage.getItem('@app:isFirstLaunch');
//         if (value === null) {
//           // This is the first launch of the app
//           setIsFirstLaunch(true);
//           // Store a flag to indicate that the app has been opened before
//           await AsyncStorage.setItem('@app:isFirstLaunch', 'true');
//         } else {
//           // The app has been opened before
//           setIsFirstLaunch(false);
//         }
//       } catch (error) {
//         console.error('Error checking first launch:', error);
//       }
//     }

//     checkFirstLaunch();
//   }, []);

//   if (isFirstLaunch === null) {
//     // Show loading indicator while checking first launch status
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   // Render either the onboarding screens or the main content based on isFirstLaunch
//   return isFirstLaunch ? <OnboardingScreen1 /> : <HomeScreen />;
// };

// export default OnboardingWrapper;


// OnboardingWrapper.js
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen1 from './OnboardingScreen1'; // Import your Onboarding screens
import HomeScreen from '../../HomeScreen'; // Import your main content screen

// Set this to true during development to always show onboarding screens
const isDevelopment = true;

const OnboardingWrapper = ({ navigation }) => {
  useEffect(() => {
    // Check if this is the first launch of the app (only for production)
    async function checkFirstLaunch() {
      if (!isDevelopment) {
        try {
          const isFirstLaunch = await AsyncStorage.getItem('@app:isFirstLaunch');
          if (isFirstLaunch === null) {
            // This is the first launch of the app (for production)
            await AsyncStorage.setItem('@app:isFirstLaunch', 'false');
          }
        } catch (error) {
          console.error('Error checking first launch:', error);
        }
      }
      
      // Always navigate to the onboarding screen in development
      navigation.replace('OnboardingScreen1');
    }

    checkFirstLaunch();
  }, [navigation]);

  return (
    <ActivityIndicator size="large" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
  );
};

export default OnboardingWrapper;
