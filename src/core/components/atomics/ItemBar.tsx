import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {darkBlue} from '@sharedConstants/colors';
import {scale, verticalScale} from '@sharedHelper/scaling';

export interface itemBarProps {
  description: string;
  number: number;
  status: boolean;
}

const ItemBar = ({description, number, status}: itemBarProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.itemProgress, {opacity: status ? 1 : 0.5}]}>
        <View style={[styles.textCircle]}>
          <Text style={styles.textItem}>{number}</Text>
        </View>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default ItemBar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    marginRight: scale(5),
  },
  itemProgress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCircle: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    backgroundColor: darkBlue,
    borderRadius: scale(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(10),
  },
  textItem: {
    color: '#fff',
    fontWeight: '600',
  },
});
