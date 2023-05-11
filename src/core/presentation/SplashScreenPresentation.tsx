import {StyleSheet, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import LayoutPlatform from '@sharedComponents/organisms/LayoutPlatform';
import {darkBlue} from '@sharedConstants/colors';

const SplashScreenPresentation = () => {
  return (
    <LayoutPlatform style={{flex: 1}} saveArea={false}>
      <View style={styles.container}>
        <Lottie
          source={require('@sharedAssets/lottie/lottie_btg.json')}
          autoPlay
          loop
        />
      </View>
    </LayoutPlatform>
  );
};

export default SplashScreenPresentation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkBlue,
  },
});
