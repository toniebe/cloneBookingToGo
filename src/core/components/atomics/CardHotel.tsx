import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '@sharedHelper/scaling';
import {darkBlue, lightGrey, mediumGrey} from '@sharedConstants/colors';

export interface cardHotelProps {
  image_url: string;
  title: string;
  roomName: string;
  totalRoom: string;
  totalGuest: string;
  totalBook: string;
}

const CardHotel = ({
  image_url,
  roomName,
  title,
  totalGuest,
  totalRoom,
  totalBook,
}: cardHotelProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image_url,
        }}
        style={styles.image}
      />
      <View style={styles.informationContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDescription}>{roomName}</Text>
        <Text style={styles.textDescription}>
          {totalRoom} kamar &#x2022; Quardruple &#x2022; {totalGuest} Tamu
          &#x2022; {totalBook} Malam
        </Text>
      </View>
    </View>
  );
};

export default CardHotel;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: lightGrey,
    padding: scale(10),
    flexDirection: 'row',
    borderRadius: scale(8),
    marginVertical: scale(10),
  },
  image: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(10),
  },
  informationContainer: {
    marginLeft: scale(5),
    paddingHorizontal: scale(5),
    width: '80%',
  },
  textTitle: {
    color: darkBlue,
    fontWeight: 'bold',
    fontSize: scale(20),
  },
  textDescription: {
    color: mediumGrey,
    fontWeight: '600',
  },
});
