import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextInputCustom from '@sharedComponents/atoms/TextInputCustom';

const ChangeOrderPresentation = () => {
  return (
    <View>
      <TextInputCustom placeholder="Nama" />
      <TextInputCustom placeholder="Nama" />
    </View>
  );
};

export default ChangeOrderPresentation;

const styles = StyleSheet.create({});
