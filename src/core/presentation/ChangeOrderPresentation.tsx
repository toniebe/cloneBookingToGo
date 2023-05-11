import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextInputCustom from '@sharedComponents/atoms/TextInputCustom';
import DropDownPicker from 'react-native-dropdown-picker';
import {lightGrey} from '@sharedConstants/colors';
import Button from '@sharedComponents/atoms/Button';
import {scale, verticalScale} from '@sharedHelper/scaling';

interface changeOrderProps {
  setValue: any;
  setOpen: any;
  valueDropdown: string;
  open: boolean;
  onChangeEmail: (value: any) => void;
  onChangeName: (value: any) => void;
  onChangePhone: (value: any) => void;
  valueEmail: string;
  valueName: string;
  valuePhone: string;
  actionSave: () => void;
}
const ChangeOrderPresentation = ({
  open,
  valueDropdown,
  setOpen,
  setValue,
  onChangeEmail,
  onChangeName,
  onChangePhone,
  valueEmail,
  valueName,
  valuePhone,
  actionSave,
}: changeOrderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={{zIndex: 10}}>
          <DropDownPicker
            key={1}
            open={open}
            value={valueDropdown}
            items={[
              {label: 'MR', value: 'MR'},
              {label: 'MRS', value: 'MRS'},
            ]}
            setOpen={setOpen}
            setValue={setValue}
            containerStyle={styles.dropdown}
            style={styles.dropdownStyle}
            dropDownContainerStyle={styles.dropdownDrop}
            placeholder="Pilih Gender"
            zIndex={10}
          />
        </View>
        <TextInputCustom
          style={styles.textinput}
          value={valueName}
          onChangeText={onChangeName}
          placeholder="Nama"
        />
        <TextInputCustom
          style={styles.textinput}
          value={valueEmail}
          onChangeText={onChangeEmail}
          placeholder="Email"
        />
        <TextInputCustom
          style={styles.textinput}
          value={valuePhone}
          onChangeText={onChangePhone}
          placeholder="Nomer Hp"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Simpan"
          isRound={false}
          size="long"
          type="primary"
          onPress={actionSave}
        />
      </View>
    </View>
  );
};

export default ChangeOrderPresentation;

const styles = StyleSheet.create({
  dropdownContainer: {
    width: '25%',
    padding: 0,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: lightGrey,
    borderRadius: 5,
    marginVertical: verticalScale(10),
  },
  dropdownStyle: {
    backgroundColor: '#fff',
  },
  dropdownDrop: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: lightGrey,
    borderRadius: 5,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  textinput: {
    marginVertical: verticalScale(10),
  },
});
