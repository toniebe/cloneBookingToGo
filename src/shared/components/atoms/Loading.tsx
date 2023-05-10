import {StyleSheet, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Lottie
        source={require('../../assets/lottie/lottie_btg.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
