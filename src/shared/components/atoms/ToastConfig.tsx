import {darkBlue, white} from '@constants/colors';
import {scale} from '@helper/scaling';
import {BaseToast, ErrorToast} from 'react-native-toast-message';

export const toastConfig = {
  success: (props: any) => {
    return (
      <BaseToast
        {...props}
        text1NumberOfLines={2}
        contentContainerStyle={{
          backgroundColor: '#57C5B6',
        }}
        text1Style={[
          {
            fontSize: scale(10),
            fontWeight: '400',
            color: white,
          },
        ]}
      />
    );
  },

  error: (props: any) => {
    return (
      <ErrorToast
        {...props}
        text2NumberOfLines={2}
        text2Style={[
          {
            color: '#ea3d38',
            fontSize: scale(10),
            textAlign: 'center',
          },
        ]}
        contentContainerStyle={{
          backgroundColor: '#e18685',
        }}
      />
    );
  },

  primary: (props: any) => (
    <BaseToast
      {...props}
      text1NumberOfLines={2}
      text1Style={[
        {
          fontSize: scale(10),
          fontWeight: '400',
          color: white,
        },
      ]}
      contentContainerStyle={{
        backgroundColor: darkBlue,
      }}
    />
  ),
};
