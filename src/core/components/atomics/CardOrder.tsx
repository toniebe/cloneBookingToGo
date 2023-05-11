import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {darkBlue, lightGrey, mediumGrey} from '@sharedConstants/colors';
import {scale, verticalScale} from '@sharedHelper/scaling';

export interface cardOrderProps {
  titleName: string;
  name: string;
  email: string;
  phoneNumber: string;
  actionChangeOrder: () => any;
}

const CardOrder = ({
  titleName = 'Tn',
  name = 'Andreas',
  email = 'andreas@mailinator.com',
  phoneNumber = '082320000004',
  actionChangeOrder,
}: cardOrderProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textTitle}>
          {titleName}.{name}
        </Text>
        <Text style={styles.textDescription}>{email}</Text>
        <Text style={styles.textDescription}>{phoneNumber}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={actionChangeOrder}>
        <Text style={styles.textButton}>Ubah</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: lightGrey,
    padding: scale(10),
    flexDirection: 'row',
    borderRadius: scale(8),
    marginVertical: scale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTitle: {
    color: '#000',
    fontSize: scale(20),
    fontWeight: '700',
  },
  textDescription: {
    color: mediumGrey,
    fontSize: scale(18),
    fontWeight: '500',
  },
  buttonContainer: {
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(10),
  },
  textButton: {
    color: darkBlue,
    textDecorationLine: 'underline',
    lineHeight: 20,
  },
});
