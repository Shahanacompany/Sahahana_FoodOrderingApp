import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomPaginationIndicator from './CustomPaginationIndicator';
import { styles } from './Styles';

const OnboardingScreen1 = () => {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity is 0

  useEffect(() => {
    // Fade in animation when component mounts
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: true, // Add this line for performance
    }).start();
  }, []);

  const handleButtonPress = () => {
    // Fade out animation when navigating to the next screen
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: true, // Add this line for performance
    }).start(() => {
      navigation.navigate('OnboardingScreen2');
    });
  };

  const scale = isHovered ? 1.1 : 1;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.contentContainer}>
        <Image source={require('./Img/Logo1.png')} style={styles.logo} />
        <Text style={styles.heading}>Welcome to Hotel Shahana</Text>
        <Text style={styles.text}>The flavors come from the culture of nature.</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleButtonPress}
          onPressIn={() => setIsHovered(true)}
          onPressOut={() => setIsHovered(false)}
        >
          <Animated.Image
            source={require('./Img/next2.png')}
            style={[styles.buttonImage, { transform: [{ scale }] }]}
          />
        </TouchableOpacity>
      </View>
      <CustomPaginationIndicator
        currentPage={1}
        totalScreens={3}
        style={styles.pagination} // You can customize the style here
      />    </Animated.View>
  );
};

export default OnboardingScreen1;
