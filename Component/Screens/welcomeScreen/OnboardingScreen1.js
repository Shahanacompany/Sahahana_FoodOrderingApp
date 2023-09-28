import React from 'react';
import { View, Text, Button } from 'react-native';
import PaginationIndicator from './PaginationIndicator'; // Import the PaginationIndicator component
import { styles } from './styles'; // Import your common styles

const OnboardingScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Onboarding</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      
      {/* Button to navigate to the next onboarding screen */}
      <Button
        title="Continue"
        onPress={() => navigation.navigate('Onboarding2')}
        style={styles.button}
      />
      
      {/* PaginationIndicator component */}
      <PaginationIndicator currentPage={1} totalScreens={3} />
    </View>
  );
};

export default OnboardingScreen1;
