import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CardEditGuest from '../components/atomics/CardEditGuest';
import {ListGuest} from '../store/reducer/guestReducer';
import {scale, verticalScale} from '@sharedHelper/scaling';

interface AddGuestProps {
  listGuest: ListGuest[];
  handleAddGuest: () => void;
  handleValueNameChange: (value: string, index: number) => void;
  handleTitleNameChange: (value: string, index: number) => void;
  setValue: any;
  actionDelete: (guest: ListGuest) => void;
}

const AddGuestPresentation = ({
  listGuest,
  handleAddGuest,
  handleValueNameChange,
  handleTitleNameChange,
  setValue,
  actionDelete,
}: AddGuestProps) => {
  return (
    <ScrollView nestedScrollEnabled>
      {listGuest.map((guest, index) => (
        <View
          key={index}
          style={{marginVertical: scale(10), zIndex: listGuest.length - index}}>
          <CardEditGuest
            key={index}
            setValue={setValue}
            valueDropdown={guest.titleName}
            onSelectItem={item => handleTitleNameChange(item.value, index)}
            valueName={guest.name}
            onChangeValueName={(value: any) => {
              handleValueNameChange(value, index);
            }}
            actionDelete={() => actionDelete(guest)}
          />
        </View>
      ))}
      <TouchableOpacity style={styles.addContainer} onPress={handleAddGuest}>
        <Text>+ Tambah Data Tamu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddGuestPresentation;

const styles = StyleSheet.create({
  addContainer: {
    padding: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(100),
  },
});
