// PaginationIndicator.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaginationIndicator = ({ currentPage, totalScreens }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalScreens }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            index === currentPage - 1 ? styles.activeIndicator : styles.inactiveIndicator,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: 'blue', // Customize the active indicator color
  },
  inactiveIndicator: {
    backgroundColor: 'lightgray', // Customize the inactive indicator color
  },
});

export default PaginationIndicator;
