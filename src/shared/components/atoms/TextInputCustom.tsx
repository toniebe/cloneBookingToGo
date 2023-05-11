import {Image, StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from '@sharedHelper/scaling';
import {darkBlue, lightGrey, mediumGrey} from '@sharedConstants/colors';

export interface textinputCustomProps {
  secureTextEntry?: boolean;
  icon?: any;
}

const TextInputCustom = ({
  secureTextEntry = false,
  icon,
  ...nativeProps
}: textinputCustomProps & TextInputProps) => {
  const [borderColor, setBorderColor] = useState<string>(lightGrey);
  return (
    <View style={[styles.container, {borderColor: borderColor}]}>
      {icon && (
        <Image source={icon} style={[styles.image, {tintColor: borderColor}]} />
      )}
      <TextInput
        style={[styles.textinput]}
        onFocus={() => setBorderColor(darkBlue)}
        onBlur={() => setBorderColor(mediumGrey)}
        secureTextEntry={secureTextEntry}
        {...nativeProps}
      />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: scale(5),
    minHeight: verticalScale(40),
    backgroundColor: 'white',
  },
  textinput: {
    paddingHorizontal: scale(10),
    width: '80%',
  },
  image: {
    width: scale(25),
    height: verticalScale(25),
  },
});
