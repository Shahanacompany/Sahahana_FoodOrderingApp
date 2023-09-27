import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PaginationIndicator from './PaginationIndicator'; // Import the PaginationIndicator component
import { styles } from './Styles'; // Import your common styles

const OnboardingScreen2 = ({ navigation }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonPress = () => {
    // Add your navigation logic here when the button is pressed
    navigation.navigate('OnboardingScreen3');
  };

  const buttonStyles = [
    styles.button,
    isHovered && styles.buttonHovered, // Apply hover styles when isHovered is true
  ];

  const buttonTextStyles = [
    styles.buttonText,
    isHovered && styles.buttonTextHovered, // Apply hover styles to text
  ];

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require('./Img/Logo.png')} style={styles.logo} />

        <Text style={styles.heading}>Affordable</Text>
        <Text style={styles.text}>Eat the food you dream about at affordable prices.</Text>

        {/* Use TouchableOpacity for the button to handle the press event */}
        <TouchableOpacity
          style={buttonStyles}
          onPress={handleButtonPress}
          onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
        >
          <Text style={buttonTextStyles}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* PaginationIndicator component */}
      <PaginationIndicator currentPage={2} totalScreens={3} style={styles.pagination} />
    </View>
  );
};

export default OnboardingScreen2;
