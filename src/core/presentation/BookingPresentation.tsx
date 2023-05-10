import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LayoutPlatform from '@sharedComponents/organisms/LayoutPlatform';

const BookingPresentation = () => {
  return (
    <LayoutPlatform saveArea={false} style={{flex: 1}}>
      <View style={styles.container}>
        <Text>BookingPresentation</Text>
      </View>
    </LayoutPlatform>
  );
};

export default BookingPresentation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
