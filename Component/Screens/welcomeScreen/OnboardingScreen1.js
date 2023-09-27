import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import PaginationIndicator from './PaginationIndicator'; // Import the PaginationIndicator component
import { styles } from './Styles'; // Import your common styles

const OnboardingScreen1 = ({ navigation }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonPress = () => {
    // Add your navigation logic here when the button is pressed
    navigation.navigate('OnboardingScreen2');
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
        <Image source={require('./Img/Logo1.png')} style={styles.logo} />

        <Text style={styles.heading}>Welcome to Hotel Shahana</Text>
        <Text style={styles.text}>The flavors come from the culture of nature.</Text>

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
      <PaginationIndicator currentPage={1} totalScreens={3} style={styles.pagination} />
    </View>
  );
};


export default OnboardingScreen1;



