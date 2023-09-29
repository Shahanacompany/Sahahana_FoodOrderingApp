import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const CustomPaginationIndicator = ({ currentPage, totalScreens, style }) => {
  const renderIndicators = () => {
    const indicators = [];
    for (let i = 0; i < totalScreens; i++) {
      indicators.push(
        <View
          key={i}
          style={[
            styles.indicator,
            {
              backgroundColor: currentPage === i + 1 ? 'blue' : 'gray',
            },
          ]}
        />,
      );
    }
    return indicators;
  };

  return (
    <View style={[styles.container, style]}>
      {renderIndicators()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});

export default CustomPaginationIndicator;
