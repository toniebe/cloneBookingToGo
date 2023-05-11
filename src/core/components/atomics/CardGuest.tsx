import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '@sharedHelper/scaling';
import {lightGrey} from '@sharedConstants/colors';

export interface cardGuestProps {
  titleGuestName: string;
  guestName: string;
}

const CardGuest = ({titleGuestName, guestName}: cardGuestProps) => {
  let parseTitle: string = titleGuestName.toUpperCase() === 'MR' ? 'Tn' : 'Ny';
  return (
    <View style={styles.container}>
      <Image
        source={require('@sharedAssets/icon/user.png')}
        style={styles.icon}
      />
      <View>
        <Text>
          {parseTitle}.{guestName}
        </Text>
      </View>
    </View>
  );
};

export default CardGuest;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: lightGrey,
    padding: scale(10),
    flexDirection: 'row',
    borderRadius: scale(8),
    marginVertical: scale(10),
    alignItems: 'center',
  },
  icon: {
    width: scale(30),
    height: scale(30),
    marginRight: scale(20),
  },
});
