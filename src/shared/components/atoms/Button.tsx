import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '@sharedHelper/scaling';
import {darkBlue, white} from '@sharedConstants/colors';

interface ButtonProps {
  type: 'primary' | 'secondary';
  size: 'long' | 'short';
  isRound: boolean;
  title: string;
  icon?: any;
}

const Button = ({
  type,
  size,
  isRound,
  title,
  icon,
  ...nativeProps
}: ButtonProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        type === 'primary'
          ? styles.primaryContainer
          : styles.secondaryContainer,
        {
          width: size === 'long' ? '100%' : '50%',
          borderRadius: isRound ? 50 : 4,
        },
      ]}
      {...nativeProps}>
      <Text
        style={[
          styles.text,
          type === 'primary' ? styles.textPrimary : styles.textSecondary,
        ]}>
        {title}
      </Text>
      {icon && (
        <Image
          source={icon}
          style={{
            width: scale(25),
            height: scale(25),
            tintColor: type === 'primary' ? 'white' : darkBlue,
            marginLeft: scale(20),
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: verticalScale(50),
    flexDirection: 'row',
  },
  primaryContainer: {
    backgroundColor: darkBlue,
  },
  text: {
    fontSize: scale(15),
  },
  textPrimary: {
    color: white,
  },
  secondaryContainer: {
    borderWidth: 1,
    borderColor: darkBlue,
  },
  textSecondary: {
    color: darkBlue,
  },
});
