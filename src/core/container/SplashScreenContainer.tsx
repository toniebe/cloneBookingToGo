/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import SplashScreenPresentation from '@presentation/SplashScreenPresentation';
import {navigationProps} from 'src/shared/types/navigationType';
import {callApi} from '@sharedHelper/callAPI';
import {payloadBookingHotel} from 'src/shared/types/payloadType';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useDispatch} from 'react-redux';

const SplashScreenContainer = ({navigation}: navigationProps) => {
  const dispatch = useDispatch();
  const getApiHotel = async () => {
    let response = await callApi<payloadBookingHotel>(
      '/classes/hotel/bVonXoSUHK',
      'GET',
    );
    if (response.chosen_hotel.header.error_code) {
      Toast.show({
        type: 'error',
        text2: 'We have problem, please wait and recheck your connection',
      });
    } else {
      dispatch({
        type: 'GET_API_HOTEL_SUCCESS',
        payload: response.chosen_hotel.data,
      });
      navigation.navigate('Booking');
    }
  };
  useEffect(() => {
    getApiHotel();
  }, []);
  return <SplashScreenPresentation />;
};

export default SplashScreenContainer;
