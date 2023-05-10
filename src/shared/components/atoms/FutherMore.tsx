import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '@sharedHelper/scaling';
import {darkBrown} from '@sharedConstants/colors';

interface FutherMoreProps {
  title: string;
  nextTitle: string;
  actionNextTitle: any;
}

const FutherMore = ({
  title = 'Title',
  nextTitle = 'View All',
  actionNextTitle,
}: FutherMoreProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <TouchableOpacity onPress={actionNextTitle} style={styles.nextContainer}>
        <Text style={styles.textNextTitle}>{nextTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FutherMore;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(10),
  },
  textTitle: {
    fontSize: scale(18),
    fontWeight: '700',
    color: '#000',
  },
  nextContainer: {
    padding: scale(10),
  },
  textNextTitle: {
    fontSize: scale(17),
    color: darkBrown,
    fontWeight: '400',
  },
});
