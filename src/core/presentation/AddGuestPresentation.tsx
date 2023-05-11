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
import {darkBlue, darkOrange} from '@sharedConstants/colors';
import Button from '@sharedComponents/atoms/Button';

interface AddGuestProps {
  listGuest: ListGuest[];
  handleAddGuest: () => void;
  handleValueNameChange: (value: string, index: number) => void;
  handleTitleNameChange: (value: string, index: number) => void;
  setValue: any;
  actionDelete: (guest: ListGuest) => void;
  actionBack: () => void;
}

const AddGuestPresentation = ({
  listGuest,
  handleAddGuest,
  handleValueNameChange,
  handleTitleNameChange,
  setValue,
  actionDelete,
  actionBack,
}: AddGuestProps) => {
  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{flexGrow: 1}}
      nestedScrollEnabled>
      <View style={styles.contentContainer}>
        {listGuest.map((guest, index) => (
          <View
            key={index}
            style={{
              marginVertical: scale(10),
              zIndex: listGuest.length - index,
            }}>
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
          <Text style={styles.textAddNew}>+ Tambah Data Tamu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Kembali"
          size="long"
          isRound={false}
          type="primary"
          onPress={actionBack}
        />
      </View>
    </ScrollView>
  );
};

export default AddGuestPresentation;

const styles = StyleSheet.create({
  addContainer: {
    padding: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  textAddNew: {
    color: darkOrange,
    fontWeight: 'bold',
    fontSize: scale(17),
  },
  textWarning: {
    color: darkBlue,
    fontSize: scale(18),
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  contentContainer: {
    flex: 2,
    paddingHorizontal: scale(20),
  },
});
