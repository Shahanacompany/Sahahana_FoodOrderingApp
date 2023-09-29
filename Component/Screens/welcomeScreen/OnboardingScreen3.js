import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomPaginationIndicator from './CustomPaginationIndicator';
import { styles } from './Styles';

const OnboardingScreen3 = () => {
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
      navigation.navigate('HomeScreen'); // Assuming 'HomeScreen' is your final screen
    });
  };

  const scale = isHovered ? 1.1 : 1;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.contentContainer}>
        <Image source={require('./Img/Logo2.png')} style={styles.logo} />
        <Text style={styles.heading}>Delivery in time...</Text>
        <Text style={styles.text}>Want a delicious meal but no time? We will deliver it hot and yummy.</Text>

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

      {/* PaginationIndicator component */}
      <CustomPaginationIndicator
        currentPage={3}
        totalScreens={3}
        style={styles.pagination} // You can customize the style here
      />     </Animated.View>
  );
};

export default OnboardingScreen3;
