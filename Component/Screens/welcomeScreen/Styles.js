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

  button: {
    // marginTop: 40,
    width: 250,
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.15,
  },

  // Define hover styles
  buttonHovered: {
    backgroundColor: 'white',
    borderColor: 'black',
  },

  buttonTextHovered: {
    color: 'black',
  },


});
