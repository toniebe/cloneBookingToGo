import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '@sharedComponents/atoms/Button';
import {BASE_URL} from '@env';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>{BASE_URL}</Text>
      <Button size="long" type="primary" title="Hello world" isRound={false} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
  },
});
