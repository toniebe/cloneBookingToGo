import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreenContainer from '@container/SplashScreenContainer';
import BookingContainer from '@container/BookingContainer';
import AddGuestContainer from '@container/AddGuestContainer';
import {Provider} from 'react-redux';
import store from './store';
import {darkBlue} from '@sharedConstants/colors';
import ChnageOrderContainer from '@container/ChnageOrderContainer';

const Core = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerStyle: {
              backgroundColor: darkBlue,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '700',
            },
          }}>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreenContainer}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Booking" component={BookingContainer} />
          <Stack.Screen
            name="ChangeGuest"
            component={AddGuestContainer}
            options={{
              title: 'tambah tamu',
            }}
          />
          <Stack.Screen
            name="ChangeOrder"
            component={ChnageOrderContainer}
            options={{
              title: 'Ubah Data Pemesan',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Core;
