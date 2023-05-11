import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {lightGrey} from '@sharedConstants/colors';
import TextInputCustom from '@sharedComponents/atoms/TextInputCustom';
import DropDownPicker from 'react-native-dropdown-picker';
import {verticalScale} from '@sharedHelper/scaling';

export interface CardEditGuestProps {
  valueDropdown: string;
  setValue: any;
  valueName: string;
  onChangeValueName: any;
  onSelectItem: (item: any) => void;
  actionDelete: () => void;
}
const CardEditGuest = ({
  valueDropdown,
  setValue,
  valueName,
  onChangeValueName,
  onSelectItem,
  actionDelete,
}: CardEditGuestProps) => {
  const [items] = useState([
    {label: 'MR', value: 'MR'},
    {label: 'MRS', value: 'MRS'},
  ]);

  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownContainer}>
        <DropDownPicker
          open={open}
          value={valueDropdown}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          containerStyle={styles.dropdown}
          style={styles.dropdownStyle}
          dropDownContainerStyle={styles.dropdownDrop}
          placeholder="Pilih Gender"
          onSelectItem={onSelectItem}
        />
      </TouchableOpacity>

      <TextInputCustom
        style={{height: 40, width: '50%'}}
        value={valueName}
        onChangeText={onChangeValueName}
      />

      <TouchableOpacity onPress={actionDelete}>
        <Image
          source={require('@sharedAssets/icon/delete.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CardEditGuest;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'khaki',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  textinputContainer: {
    width: '85%',
  },
  dropdownContainer: {
    width: '25%',
    padding: 0,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: lightGrey,
    borderRadius: 5,
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
  icon: {
    width: 30,
    height: 30,
  },
});
