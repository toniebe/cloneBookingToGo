import {StyleSheet, View} from 'react-native';
import React from 'react';
import {scale} from '@sharedHelper/scaling';
import {lightGrey} from '@sharedConstants/colors';

const Divider = () => {
  return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 2,
    marginHorizontal: scale(5),
    borderBottomColor: lightGrey,
    justifyContent: 'center',
  },
});
