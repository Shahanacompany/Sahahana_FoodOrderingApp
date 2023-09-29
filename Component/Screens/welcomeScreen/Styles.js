// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#FFC836", // Background color
  },
  heading: {
    fontSize: 75, // Larger font size
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:"center",
    color: 'black', // Text color
  },
  text: {
    fontSize: 30, // Larger font size
    textAlign: 'center',
    marginBottom: 30,
    color: 'black', // Text color
  },
 
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  pagination: {
    alignItems: 'center',
    marginBottom: 20, // Add margin to push it to the bottom
  },


  // ... Other styles

  buttonImage: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },

});
