import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreenContainer from '@container/SplashScreenContainer';
import BookingContainer from '@container/BookingContainer';
import AddGuestContainer from '@container/AddGuestContainer';
import {Provider} from 'react-redux';
import store from './store';

const Core = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreenContainer}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Booking" component={BookingContainer} />
          <Stack.Screen name="AddGuest" component={AddGuestContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Core;
